---
sidebar_position: 1
---

Widget analytics capabilites let you track how your visitors interact with the chat widget.

## Events

We track the following chat widget events:

| Event name                                | Event specific parameters                        | Description                                                                                                                                                         |
| ----------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message sent (Algomo Widget)              | `messageId`, `messageLanguage`, `conversationId` | When a user sends a message in the Algomo widget.                                                                                                                   |
| Conversation started (Algomo Widget)      | `conversationId`, `conversationLanguage`         | When a user starts a conversation in the Algomo widget.                                                                                                             |
| Contact details submitted (Algomo Widget) | -                                                | When a user submits their contact details in the Algomo widget. This event might get triggered multiple times by a single user, e.g. when they update their details |
| Link clicked (Algomo Widget)              | `href`, `label`                                  | When a user clicks a link in the Algomo widget, either in a message or message sources.                                                                             |

All events also have the following parameters: `widgetId`, `userName`, `userEmail`, `userPhone`, `userCompanyName`, `userBrowser`, `userMainLanguage`, `userLanguages`, `userPlatform`, `userTimeZone`. Some of them might be empty.

### Custom events

Tracking custom events is not supported currently. If you'd like to track custom events, please get in touch via [email](mailto:support@algomo.com) or chat with us directly through the widget in the bottom corner.
