---
sidebar_position: 4
---

# Intents

An **intent** represents a high-level goal that a user has in mind when interacting with a conversational AI system. Intents represent the underlying intention behind a user's input. Or in other words, you can think of them as collections of similar phrases that represent the same goal

Intent can be an inquiry about store hours, product availability, as well as frequently asked questions, guidelines, procedures, and actions.

## Create an intent

To create an intent, navigate to a chatbot, and then click on the intents, the click on the ‘Create Intent’ button and then just put a name.

![Untitled](./images/Untitled%200.png)

If you have completed your onboarding, you will see that you already have two intents generated:

1. `What is {company_name}`
2. `How can I contact {company_name}`

## Edit an intent

![Untitled](./images/Untitled%201.png)

An intent has 4 main fields

| Field Name                               | Description                                                                                                      | Example             | Mandatory |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------- | --------- |
| Intent                                   | This is the name of the intent                                                                                   | ‘Pricing’           | Yes       |
| Question                                 | This is a visitor-friendly way for the intent. This is very useful if we want to display this intent in a button | ‘What is the price’ | Yes       |
| Alternative phrases                      | - These are in fact training data that help the bot map similar questions to the same intent.                    |
| - Each entry is independent of the other | - ‘how expensive is the bot’                                                                                     |

- ‘is algomo expensive’,
- ‘do you cost a lot’ | No |
  | Responses | Each response is a separate chat ‘bubble’ so everything you type in the responses section will be displayed sequentially. You can format the responses in markdown, and they will be rendered respectively. | Algomo is free for the first 20 monthly active users per month, and the first 2000 recorded sessions.
  ——
  That should be enough for most early-stage startups and small teams. If you need more, it will be $0.25 per monthly active user and 0.005 per recording.
  ——
  You can read more on our pricing page:
  https://www.algomo.com/pricing
  —— | Yes |

When you ‘save’ the changes of the intent, these are stored in the database. However, if you want these changes to be live, you need to enable the ‘live’ button

## Translating an intent to multiple languages

In order to provide a response in more than one language, you need to firstly have enabled all these additional languages in the organisation settings page **here.**

To translate an intent you have to click on the translate button

![Untitled](./images/Untitled%202.png)

From there you can pick the language of interest and then click on ‘translate all’.

Algomo will then translate each field on the left-hand side to the corresponding field on the right-hand side. You can obviously edit or delete anything you want on the right-hand side; in the screenshot below we have deleted the ‘Do you cost a lot’ French version.

![Untitled](./images/Untitled%203.png)

This way you can easily create, edit and manage responses across multiple languages, by fully including a human-in-the-loop workflow
