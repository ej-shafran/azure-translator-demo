# azure-translator-demo

A (very minimal) demo of the capabilities of Azure's Translator AI and API.

## Setup

[Create a translator resource](https://portal.azure.com/#create/hub) using Azure.

Copy your API key and your resource's location, and setup the `AZURE_API_KEY` and `AZURE_RESOURCE_LOCATION` variables in a file called `.env`.

![Your API key and resource location](https://learn.microsoft.com/en-us/azure/ai-services/translator/media/quickstarts/keys-and-endpoint-portal.png) 

Finally, install the dependencies with `npm install`.

## Usage

Once you've done the [setup](#setup), you can run `npm start` to see the translator in action.

You can go into `index.ts` to edit the call to `translate` or just take a look at the code.

## Troubleshooting

If the URL is not found or something of the sort, you can edit the `endpoint` constant within the `translate` function to be what is mentioned in your resource page (see the photo above). It should be correct no matter the resource but you never know...

## Notes

The `.env` file is in `.gitignore` so you don't push your resource's key to GitHub.
The `index.js` file is in `.gitignore` so you don't push the (possibly outdated) compiled output of your code to GitHub.
