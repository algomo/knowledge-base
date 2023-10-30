---
sidebar_position: 2
---

## Create an app

1. In you Shopify admin panel, navigate to ["Apps" → "Apps and sales channels" → "Develop apps"](https://admin.shopify.com/settings/apps/development).
2. Create an app by clicking "Create an app" in the top right corner.

If you haven't created development apps before, you will need to first allow development apps in your store.

## Configure the app

In the app settings navigate to the "Configuration" tab.

### Admin API configuration

1. Under "Admin API integration" section click "Configure".
2. Select `read_orders` scope.
3. Click "Save".

### Storefront API configuration

1. Under "Storefront API integration" section click "Configure".
2. Selected all scopes under "Products" section:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_read_product_pickup_locations`
   - `unauthenticated_read_product_tags`
3. Click "Save".

## Install the app

1. In the app settings navigate to the "Overview" tab.
2. Click "Install app" and confirm the installation.
3. This action will generate an Admin API access token. Click "Reveal token once" and copy it.

**Warning:** The token will be shown only once. Make sure to copy it and store it in a safe place, as it can be used for multiple Shopify tools. To obtain a new key, you will have to reinstall the app.
