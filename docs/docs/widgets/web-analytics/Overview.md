---
sidebar_position: 1
description: Learn what events we track and how to use them in your web analytics tools.
---

Widget analytics capabilites let you track how your visitors interact with the chat widget

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
