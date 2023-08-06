# azure-translator-demo

A (very minimal) demo of the capabilities of Azure's Translator AI and API.

## Setup

[Create a translator resource](https://portal.azure.com/#create/hub) using Azure.

Copy your API key and your resource's location, and setup the `AZURE_API_KEY` and `AZURE_RESOURCE_LOCATION` variables in a file called `.env`.

![Your API key and resource location](https://learn.microsoft.com/en-us/azure/ai-services/translator/media/quickstarts/keys-and-endpoint-portal.png) 

## Usage

Once you've done the [setup](#setup), you can run `node index.mjs` to see the translator in action.
