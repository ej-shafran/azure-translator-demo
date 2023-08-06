import axios from "axios";
import { v4 as uuid } from "uuid";
import dotenv from "dotenv";

dotenv.config();

translate(
  [
    {
      text: "Your use of the word <span translate=\"no\">'because'</span> was not correct within the context of that sentence.",
      to: "he",
    },
  ],
  { textType: "html" }
).then((res) => {
  console.log(JSON.stringify(res.data, null, 2));
});

/**
 * @typedef {{ text: string; to: string; }} Translation
 */

/**
 * @template T
 * @template K
 *
 * @typedef {Partial<Pick<T, K>> & Omit<T, K>} PartialByKeys
 */

/**
 * translate.
 *
 * @param {PartialByKeys<Translation, "to">[]} data
 * @param {{ textType: "html" | "plain"; from?: string; } | undefined} options
 *
 * @returns {Promise<import("axios").AxiosResponse<{ translations: Translation[] }[]>>}
 */
async function translate(data, options) {
  const endpoint = "https://api.cognitive.microsofttranslator.com";

  const key = process.env.AZURE_API_KEY;
  if (!key) {
    throw new Error("`AZURE_API_KEY` env variable not properly configured.");
  }

  const location = process.env.AZURE_RESOURCE_LOCATION;
  if (!location) {
    throw new Error(
      "`AZURE_RESOURCE_LOCATION` env variable not properly configured."
    );
  }

  const to = Array.from(new Set(data.map(({ to }) => to).filter(Boolean)));

  return axios({
    baseURL: endpoint,
    url: "/translate",
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": key,
      "Ocp-Apim-Subscription-Region": location,
      "Content-type": "application/json",
      "X-ClientTraceId": uuid().toString(),
    },
    params: {
      "api-version": "3.0",
      from: options?.from ?? "en",
      to,
      textType: options?.textType,
    },
    data,
    responseType: "json",
  });
}
