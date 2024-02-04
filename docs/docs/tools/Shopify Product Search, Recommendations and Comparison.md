---
sidebar_position: 2
---

This tool combines search engine, recommendations engine and comparison engine into a cohesive experience of a smart shopping assistant.

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

[Video of search in action, showing finding 20+ products, filtering by price and facets, in order to find the right product]

#### Filters and sorting

Users can leverage filters in order to discover what types of products are available, narrow down the search and find exactly what they are looking for.

By default, two properties are available as filters: price range and availability. You can also add custom filters (see [Customisation](#customisation) section).

Additionally, users can sort the results by price.

### Comparison

You can enquire about product details included in descriptions and metadata, including custom metafields. This provides unique value to your customers, as they can arrive at a decision faster.

For 1-3 products, the chatbot can provide a side-by-side comparison of the main characteristics of the items using all the product data available, including description and metafields.

For a large number of products, the chatbot can provide a summary of the main characteristics of all the returned items.

[Video of comparison in action, showing detailed and broad comparison]

## Setup

### Install Algomo app in your Shopify Store

In order to use this tool, you first need to install Algomo app in your Shopify store. If you already have it installed, you can skip this part.

1. Navigate to [Algomo app in Shopify App Store](https://apps.shopify.com/algomo) and click "Install".

![Algomo app in Shopify App Store](./images/install-algomo-app-1.png)

2. You will be redirected to the Shopify admin panel. Click "Install".

![Install Algomo app in Shopify](./images/install-algomo-app-2.png)

3. Once installed, you will be redirected to the [Shopify integration settings in Algomo](https://app.algomo.com/integrations/shopify).

### Create a tool

1. Navigate to [Tools in Algomo](https://app.algomo.com/tools).
2. Click "New Tool" and select "Shopify Product Search".

![Create a new tool](./images/create-product-tool.png)

3. Select your Shopify store from the dropdown and click "Create".

### Activate the tool

In order to use the tool, you first need to create a chatbot and assign it to a widget. If you already have a chatbot and a widget, you can skip to step 4.

1. Navigate to [Chatbots in Algomo](https://app.algomo.com/chatbots), click "+ New Chatbot", pick a name and a company name the chatbot will respresent, and click "Create Chatbot".
2. Navigate to [Widgets in Algomo](https://app.algomo.com/widgets), click "+ New Widget", pick a name, and click "Create Widget".
3. In the widget settings, navigate to the "General" tab, select the chatbot you created in step 1, and click "Save".
4. Navigate to [Tools in Algomo](https://app.algomo.com/tools), click on the tool you created earlier, click "+ Assign to a chatbot", and select the chatbot you created in step 1.

### Test the tool

You can test the tool by talking to your chatbot.

1. Navigate to [Widgets in Algomo](https://app.algomo.com/widgets) and open the widget assigned to the chatbot which has the tool assigned.
2. Enter the test mode by clicking the "Test" button in the top right corner.

![Algomo widget settings](./images/widget-settings.png)

Refer to the [Functionality](#functionality) section to see how to use the tool.

## Customisation

### Custom filters

Chatbots using this tool have access to filters set up in your Shopify store. By default, they include price range and availability.

To provide better search experience, you can add custom filters through the official [Shopify Search & Discovery app](https://apps.shopify.com/search-and-discovery).

#### Adding filters

1. If not already done, install the [Search & Discovery app](https://apps.shopify.com/search-and-discovery). Follow the same steps as for the Algomo app (see [Install Algomo app in your Shopify Store](#install-algomo-app-in-your-shopify-store)).
2. Navigate to your [Shopify admin panel](https://admin.shopify.com/), click "Apps" in the left sidebar, and select "Search & Discovery" from the dropdown.

![Shopify apps](./images/shopify-apps.png)

3. Once in the app, navigate to "Filters" in the left sidebar.

![Search & Discovery app](./images/search-and-discovery.png)

4. Click "Add filter", select filter source and set a label. You can select which filter values will be available, as well as combine them into groups.

![Search & Discovery filters](./images/search-and-discovery-filters.png)

![Search & Discovery add filter](./images/search-and-discovery-add-filter.png)

5. Click "Save".

Now, your chatbot will be able to use these filters and will display them in the search results:

![Widget with custom filters](./images/widget-brand-filter.jpg)

#### Custom filters

You might want to expose custom filters to your customers, for example dimensions or color. You can do this by creating metafields and enabling them as filters via Search & Discovery app. See [Custom metadata](#custom-metadata) section below for more information.

### Custom metadata

Chatbots using this tool have access to [product metafields](https://help.shopify.com/en/manual/custom-data/metafields) and can use them to provide detailed information about products and compare products side by side.

Providing custom metadata for the chatbot to use is as simple as adding metafields to your products in Shopify. For example, you can add a "back in stock date" metafield to your products, which will enable your chatbot to provide this information to your customers.

Refer to this guide on how to add metafields to your products: [Shopify Help Center: Metafields tutorial](https://help.shopify.com/en/manual/custom-data/metafields/using-metafields).

## Troubleshooting

### I’m asking for a product that exist but the chatbot can’t find it

We use Shopify Search API to find products in your store. If the product exists, but the chatbot can’t find it, it’s likely that the search settings in your store are not set up correctly.

Try going to your store website and searching for the same product. If it also doesn't provide satisfactory results, you should consider adding synonyms to the product title, via the [Search & Discovery app](https://apps.shopify.com/search-and-discovery).

![Shopify Search & Discovery search settings](./images/search-and-discovery-search.png)

Refer to this guide on how to add synonyms to your products: [Shopify Help Center: Modifying search](https://help.shopify.com/en/manual/online-store/search-and-discovery/search).

If the search settings are set up correctly, but the chatbot still can’t find the product, please contact us.

### Links in product cards are not working

In order for the links to work, your store must **not** be a password-protected or a development store. If it is, the chatbot will not be able to access product URLs.

## Frequently Asked Questions

### Does the tool use live data, or do I need to update it manually?

There is no need to update the data manually. The tool uses live data from your Shopify store. While some changes might take a few minutes to propagate, the chatbot will always provide the most up-to-date information.

### How can I provide back in stock date information to my customers?

You can add a custom metafield to your products in Shopify. The chatbot will be able to access that data automatically and provide it to your customers. See [Custom metadata](#custom-metadata) section for more information.
