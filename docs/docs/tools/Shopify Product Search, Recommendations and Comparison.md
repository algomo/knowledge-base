---
sidebar_position: 2
---

This tool combines a search engine, a recommendations engine and a comparison engine into a cohesive experience of a smart shopping assistant.

It can help your customers make informed decisions faster by:

- providing product recommednations based on their needs,
- helping them discover what products are available,
- provididing detailed information about products,
- and comparing products side by side.

## Functionality

### Recommendations

Sometimes you're not sure which product you need. Our chatbot can recommend products based on user needs, using data available in your store.

[Video of recommendations in action, showing looking for a gift for a friend]

### Search

Once you know what kind of product you’re after, you can search for products from your store. Simply ask the chatbot about it. It will help you find the right product and provide you with detailed information about it.

- Use case: back in stock date. Per-variant back in stock is coming soon.

[Video of search in action, showing finding 20+ products, filtering by price and facets, in order to find the right product]

Users can leverage filters in order to discover what types of products are available, narrow down the search and find exactly what they are looking for.

#### Narrowing down the search

- Default filters available: price range, availability (if not changed in Search & Discovery)
- Dynamic filters: based on your store’s data, see [Customisation](#customisation) section
- Sorting: by relevance (auto), by price

### Comparison

You can enquire about product details included in descriptions and metadata, including custom metafields. This provides unique value to your customers, as they can arrive at a decision faster. (rephrase that one)

You can compare 1-3 products in detail and find out what are the main characteristics of larger number of items.

## Setup

### Install Algomo app in your Shopify Store

In order to use this tool, you first need to install Algomo app in your Shopify store. If you already have it installed, you can skip this part.

1. Navigate to [Algomo app in Shopify App Store](https://apps.shopify.com/algomo).
2. Click "Install" and follow the instructions.
3. Once installed, you will be redirected to the [Shopify integration settings in Algomo](https://app.algomo.com/integrations/shopify).

### Create a tool

1. Navigate to [Tools in Algomo](https://app.algomo.com/tools).
2. Click "+ New Tool" and select "Shopify Product Search".
3. Select your Shopify store from the dropdown and click "Create".

### Activate the tool

In order to use the tool, you first need to create a chatbot and assign it to a widget. If you already have a chatbot and a widget, you can skip to step 3.

1. Navigate to [Chatbots in Algomo](https://app.algomo.com/chatbots), click "+ New Chatbot", pick a name and a company name the chatbot will respresent, and click "Create Chatbot".
2. Navigate to [Widgets in Algomo](https://app.algomo.com/widgets), click "+ New Widget", pick a name, and click "Create Widget".
3. In the widget settings, navigate to the "General" tab, select the chatbot you created in step 1, and click "Save".
4. Navigate to [Tools in Algomo](https://app.algomo.com/tools), click on the tool you created earlier, click "+ Assign to a chatbot", and select the chatbot you created in step 1.

### Test the tool

You can test the tool by talking to your chatbot.

1. Navigate to [Widgets in Algomo](https://app.algomo.com/widgets) and open the widget assigned to the chatbot which has the tool assigned.
2. Enter the test mode by clicking the "Test" button in the top right corner.

Refer to the [Functionality](#functionality) section to see how to use the tool.

## Customisation

### Custom filters

Chatbots using this tool have access to filters set up in your Shopify store. By default, they include price range and availability.

You can customise which filters are available through the official Shopify [Search & Discovery app](https://apps.shopify.com/search-and-discovery).

1. Install it
2. Customise filters

All filters set-up in the app, will be immediately available in our product search tool.

Hint: you can use Search & Discovery app to make your search in general.

- Should mention synonyms and how they will affect the search on their website in general.

Coming soon: product recommendations, complementary products

**Custom filters**

You can create custom filters by creating metafields and enabling them as filters via Search & Discovery app.

### Custom metadata

Chatbots using this tool have access to [product metafields](https://help.shopify.com/en/manual/custom-data/metafields) and can use them to provide detailed information about products, and to compare products side by side.

Providing custom metadata for the chatbot to use is as simple as adding metafields to your products in Shopify.

For example, you can add a "back in stock date" metafield to your products, and the chatbot will be able to provide this information to your customers.

Refer to this guide on how to add metafields to your products: [Shopify Help Center: Metafields tutorial](https://help.shopify.com/en/manual/custom-data/metafields/using-metafields).

## FAQ

### Is it using live data, or do I need to keep it updated myself?

We access live data when requested by your users, which means that it is always up to date.

## Troubleshooting

### I’m asking for a product that exist but the chatbot says it didn’t find anything

We use Shopify Search API under the hood. Often, the issue is with the search settings in your store. Try going to your store website and searching for the product. If it doesn’t show up, it’s likely that the search settings are not set up correctly.

If that's the case, consider adding synonyms via the [Search & Discovery app](https://apps.shopify.com/search-and-discovery).

### Links in product cards are not working

You’re on a development store or your store is password protected.
