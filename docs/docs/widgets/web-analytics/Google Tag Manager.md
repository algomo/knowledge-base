---
sidebar_position: 2
slug: google-tag-manager
---

## Prerequisites

In order to use Google Tag Manager tracking, **you need to fist have Google Tag Manager installed on your website.** If you don't have Google Tag Manager installed, you can refer to [this guide](https://support.google.com/tagmanager/answer/6103696?hl=en) to get started.

Make sure to also install the Algomo widget on your website. Refer to [this guide](../Install%20a%20widget%20to%20your%20website.md) to learn how to do it.

## Installation

To enable Google Tag Manager tracking:

1. Navigate to the [Widgets page](https://app.algomo.com/widgets).
2. Pick a widget you want to add Google Tag Manager tracking to.
3. Click on the "Web Analytics" tab.
4. Enable the Google Tag Manager tracking option.
5. Save the widget.

## Usage

### Triggers

You can use [our events](./Overview) as triggers in Google Tag Manager:

1. Create a new trigger.
2. Select "Custom Event" as the trigger type.
3. Enter the event name, e.g. "Message sent (Algomo Widget)".
4. Save the trigger.

See the [Variables](#variables) section below to learn how to use event parameters in your triggers.

### Variables

You can use [event parameters](./Overview) as variables in Google Tag Manager:

1. Create a new variable.
2. Select "Data Layer Variable" as the variable type.
3. Enter the parameter name under "Data Layer Variable Name", e.g. "widgetId".
4. Save the variable.

You can now use the variable in your tags (e.g. to send the widget ID to Google Analytics) and triggers (e.g. to trigger a tag when a specific widget is used).

## Testing

In order to test Google Tag Manager tracking, you first need to install the widget on your website. Refer to [this guide](../Install%20a%20widget%20to%20your%20website.md) to learn how to do it.

1. Enable the Google Tag Manager tracking option in the widget settings.
2. Enter [Preview mode](https://support.google.com/tagmanager/answer/6103696?hl=en) in Google Tag Manager and put a link to a page with your widget installed.
3. Once the page and widget have loaded, trigger an event from the widget, e.g. by sending a message. Refer to the events table in the [Overview](./Overview.md) page to see how to trigger each event.
4. In Google Tag Manager, you should see a new event ending with "(Algomo Widget)" in the "Summary" tab.

## Troubleshooting

### I don't see any events in Google Tag Manager

Make sure you've enabled the Google Tag Manager tracking option in the widget settings and the Algomo widget installed on your website.
