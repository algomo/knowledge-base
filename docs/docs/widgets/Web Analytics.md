Trackin enables you something.

## Events

We track the following chat widget events:

| Event name                                | Event specific parameters                        | Description                                                                                                                                                                           |
| ----------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message sent (Algomo Widget)              | `messageId`, `messageLanguage`, `conversationId` | When a user sends a message in the Algomo widget.                                                                                                                                     |
| Conversation started (Algomo Widget)      | `conversationId`, `conversationLanguage`         | When a user starts a conversation in the Algomo widget.                                                                                                                               |
| Contact details submitted (Algomo Widget) | -                                                | When a user submits their contact details in the Algomo widget. Keep in mind that this event might get triggered multiple times by a single user, i.e. when they update their details |
| Link clicked (Algomo Widget)              | `href`, `label`                                  | When a user clicks a link in the Algomo widget, either in a message or message sources.                                                                                               |

All events also have the following parameters: `widgetId`, `userName`, `userEmail`, `userPhone`, `userCompanyName`, `userBrowser`, `userMainLanguage`, `userLanguages`, `userPlatform`, `userTimeZone`. Some of them might be empty.

### Custom events

Currently, there's no way to track custom events. If you need to track custom events, please contact us. You can use our widget in the bottom right corner.

## Google Tag Manager

### Installation

In order to use Google Tag Manager tracking, **you need to fist have Google Tag Manager installed on your website.**

If you don't have Google Tag Manager installed, you can refer to [this guide](https://support.google.com/tagmanager/answer/6103696?hl=en) to get started.

To enable Google Tag Manager tracking:

1. Navigate to the [Widgets page](https://app.algomo.com/widgets).
2. Pick a widget you want to add Google Tag Manager tracking to.
3. Click on the "Web Analytics" tab.
4. Enable the Google Tag Manager tracking option.
5. Save the widget.

### Usage

#### Triggers

You can use our events as triggers in Google Tag Manager:

1. Create a new trigger.
2. Select "Custom Event" as the trigger type.
3. Enter the event name, i.e. "Message sent (Algomo Widget)".
4. Save the trigger.

See the [Variables](#variables) section below to learn how to use event parameters in your triggers.

#### Variables

You can use event parameters as variables in Google Tag Manager:

1. Create a new variable.
2. Select "Data Layer Variable" as the variable type.
3. Enter the parameter name under "Data Layer Variable Name", i.e. "widgetId".
4. Save the variable.

You can now use the variable in your tags (i.e. to send the widget ID to Google Analytics) and triggers (i.e. to trigger a tag when a specific widget is used).

### Testing

In order to test Google Tag Manager tracking, you first need to install the widget on your website. Refer to [this guide](./Install%20a%20widget%20to%20your%20website.md) to learn how to do it.

1. Make sure to enabled the Google Tag Manager tracking option in the widget settings.
2. Enter [Preview mode](https://support.google.com/tagmanager/answer/6103696?hl=en) in Google Tag Manager and put a link to a page with your widget installed.
3. Once the page and widget have loaded, trigger an event, i.e. by sending a message. Refer to the table in the [Events](#events) section to see how to trigger each event.
4. In Google Tag Manager, you should see a new event ending with "(Algomo Widget)" in the "Summary" tab.

### Troubleshooting

#### I don't see any events in Google Tag Manager

Make sure you've enabled the Google Tag Manager tracking option in the widget settings.

## Google Analytics

### Installation

In order to use Google Analytics tracking, **you need to first have Google Analytics installed on your website.**

If you don't have Google Analytics installed, you can refer to [this guide](https://support.google.com/analytics/answer/9304153?hl=en) to get started.

To enable Google Analytics tracking:

1. Navigate to the [Widgets page](https://app.algomo.com/widgets).
2. Pick a widget you want to add Google Analytics tracking to.
3. Click on the "Web Analytics" tab.
4. Enable the Google Analytics tracking option.
5. Save the widget.

### Usage

Once you've enabled Google Analytics tracking, you will start receiving events in your Google Analytics account.

### Testing

In order to test Google Analytics tracking, you first need to install the widget on your website. Refer to [this guide](./Install%20a%20widget%20to%20your%20website.md) to learn how to do it.

1. Make sure to enabled the Google Analytics tracking option in the widget settings.
2. Enter [Realtime mode](https://support.google.com/analytics/answer/1638635?hl=en) in Google Analytics.
3. Open your website with your widget installed and trigger an event, i.e. by sending a message. Refer to the table in the [Events](#events) section to see how to trigger each event.
4. In Google Analytics tab, you should see a new event ending with "(Algomo Widget)".

Keep in mind that it can take up to 24 hours for events to appear in Google Analytics.

An alternative way to test Google Analytics tracking is to use the [Debug view](https://support.google.com/analytics/answer/7201382?hl=en).

### Troubleshoting

#### I don't see any events in Google Analytics

Make sure you've enabled the Google Analytics tracking option in the widget settings.

Keep in mind that it can take up to 24 hours for events to appear in Google Analytics.
