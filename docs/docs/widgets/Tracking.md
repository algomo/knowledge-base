Trackin enables you something.

## Events

We track the following events:

| Event                                     | Parameters | Description                                                                             |
| ----------------------------------------- | ---------- | --------------------------------------------------------------------------------------- |
| Message sent (Algomo Widget)              | widgetId   | When a user sends a message in the Algomo widget.                                       |
| Conversation started (Algomo Widget)      | widgetId   | When a user starts a conversation in the Algomo widget.                                 |
| Contact details submitted (Algomo Widget) | widgetId   | When a user submits their contact details in the Algomo widget.                         |
| Link clicked (Algomo Widget)              | widgetId   | When a user clicks a link in the Algomo widget, either in a message or message sources. |

Currently, there's no way to track custom events. If you need to track custom events, please contact us. You can use our widget in the bottom right corner.

## Google Tag Manager

### Installation

To enable Google Tag Manager tracking, navigate to the [Widgets page](https://app.algomo.com/widgets), pick a widget you want to edit, click on the "Web Analytics" tab, and enable the Google Tag Manager tracking option.

There's no additional configuration required, **but you need to have Google Tag Manager installed on your website.**

If you don't have Google Tag Manager installed, you can refer to [this guide](https://support.google.com/tagmanager/answer/6103696?hl=en) to get started.

### Testing

- Install widget on your site. Refer to docs...
- Make sure to enabled the Google Tag Manager tracking option in the widget settings.
- Enter [preview mode](https://support.google.com/tagmanager/answer/6103696?hl=en) in Google Tag Manager and put a link to a page with your widget installed.
- Once the page and widget have loaded, trigger an event, i.e. by sending a message. Refer to the table in Events to see how to trigger each event.
- In Google Tag Manager, you should see a new event ending with "(Algomo Widget)" in the "Summary" tab.

### Usage

## Triggers

You can use our events as triggers in Google Tag Manager:

1. Create a new trigger.
2. Select "Custom Event" as the trigger type.
3. Enter the event name, i.e. "Message sent (Algomo Widget)".
4. Save the trigger.

See the "Variables" section below to learn how to use event parameters in your triggers.

## Variables

You can use event parameters as variables in Google Tag Manager:

1. Create a new variable.
2. Select "Data Layer Variable" as the variable type.
3. Enter the parameter name under "Data Layer Variable Name", i.e. "widgetId".
4. Save the variable.

You can now use the variable in your tags (i.e. to send the widgetId to Google Analytics) and triggers (i.e. to trigger a tag when a specific widget is used).
