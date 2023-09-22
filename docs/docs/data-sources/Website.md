---
sidebar_position: 3
---

Website data sources enrich your chatbot's responses by connecting to available online information. If your website contains relevant content, you can utilise it to enhance your chatbot's answers. We have the capability to gather data from websites that can be searched using Bing or scrape this data. This collected information can be used to address inquiries and provide direct links to it.

Algomo has the capacity to extract data from thousands of pages on a website, ensuring your visitors have access to the information they require.
This data source allows you to re-scrape the website whenever necessary to keep your data up to date.

There are two modes to website data sources:

- **Scrape** - This option allows you to save the information on your website pages within Algomo.
  - Requires manual updating by clicking **Refresh** on the data source.
  - Limited to 200 pages (optional upgrade available)
- **Search** - This option allows you to search the website and return results.
  - Instant setup
  - Updates automatically
  - No limits on the number of pages

### Prerequisites

- The website must be publicly accessible (i.e. not behind a login page).
- The website must be searchable. (For search - your site must be indexed by Bing)

### Adding Website Data Sources

1. Navigate to [**Algomo**](https://app.algomo.com/) > [**Data Sources**](https:app.algomo.com/data-sources) > [**Website**](https://app.algomo.com/data-sources/create/website).
2. Enter the URL of the website you want to scrape or search.
3. Edit the **Name** field to your liking.
4. Select the **Scrape** or **Search** option.
5. Edit the **Exclude a webpage** field to exclude specific webpages from being scraped or searched (optional).
6. Press the **Create** button to create your website data source.

### Caveats

- If you are protected by CloudFlare, we may not be able to scrape your website information. In this case, downloading your website content and uploading as a file may work better.
- Scrape only downloads textual information, Algomo currently does not save images. However, links to images embedded within chunks of text will be saved.

---

Your data source is now ready to be used by your chatbot. See [Usage](./Overview#usage.md) for more information on how to use your data sources.
