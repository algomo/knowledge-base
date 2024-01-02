---
sidebar_position: 5
---

# TODO
1. example with multiple intents
2. add indication that this is feature flagged
3. write proper summary
4. limitations section?

Tags are an enhancement designed to provide context-aware responses by associating specific intents with particular tag values, within a variable called a tag name. This feature ensures that responses are tailored to the unique characteristics of the user's query, allowing for a more personalized and accurate interaction.

### Terminology
**Tag Name**: Represents the overarching variable, category or characteristic that influences the chatbot's response.For example, tag names could be "Website Platform", "Mobile OS", "Origin Country", etc.  
**Tag Value**: Denotes a specific value associated with a tag name. For instance, in the context of the examples above, tag values could be "WordPress," "Joomla," "Android" "iOS," "France," "Spain," etc.

### How it Works
1. **Intent Tagging:**
    Each intent in the chatbot's knowledge base is tagged with one or more tag names and their corresponding tag values. These tags indicate the specific context in which the intent should be triggered.
    ```
    Intent: How do I install WordPress?
    Tags: Website Platform - WordPress
    Response: To install WordPress, follow these steps...
    ```
2. **User Query Analysis:**
    When a user submits a query, the chatbot analyzes the input to identify relevant tag values based on the user's characteristics or preferences. If the chatbot is unsure of the specific tag value that applies for the query, the chatbot will ask the user clarifying questions.
    ```
    User: How do I install a CMS?
    Tags identified: Website Platform - (Multiple values)
    Response: Do you use Wordpress or Joomla?
    ```

3. **Context-Dependent Responses:**
    The chatbot selects the appropriate intent based on the identified tags, ensuring that the response is contextually relevant to the user's specific needs.
    ```
    Selected Intent: How do I install WordPress?
    Response: To install WordPress, follow these steps...
    ```


### Examples

Here are a few examples of when tagged intents would help.

#### Freelance Platform
Upwork is a leading online freelancing platform connecting clients with freelancers across various fields. Clients post projects, and freelancers bid on them, creating a dynamic marketplace. 

Since Upwork has both clients and freelancers using their platform, they frequently have questions from both types of users. This means there are some questions that both freelancers and clients might ask, where the answer for freelancers would not be the same as the answer for clients.

**Example Intents**  
```
Intent: How do I leave feedback for a freelancer?
Tags: Role - Client
Response: To leave feedback for a freelancer on Upwork as a client, follow these steps:
1. Go to Jobs > All contracts.
...
```

```
Intent: How do I leave feedback for a client?
Tags: Role - Freelancer
Response: To leave feedback for a client on Upwork, go to My Jobs. Go to the Ended Contracts section and find the contract you wish to leave feedback on...
```

Both trigger on similar questions, and both answers are a valid response to the question 'How do I leave feedback'.

**Example Conversations**  
This is what a conversation with the chatbot might look like if the intents are not tagged.
```
User: How do I leave feedback?
Chatbot: To leave feedback for a freelancer, ... To leave feedback for a client, ...
```
Since it is ambiguous whether the user wants to leave feedback for a freelancer or a client, the chatbot might attempt to provide the answer for both. This results in a very lengthy response, where half of the answer is useless to the user.

With tags, the conversation might go more like this.
```
User: How do I leave feedback?
Chatbot: In order to provide an accurate answer, could you tell me if you are a freelancer, or a client?
User: I am a client.
Chatbot: To leave feedback for a freelancer, ...
```
By asking the user for clarifying information, the chatbot narrows down the potential answer to just a single intent. This is a much more streamlined way to provide information to your users. On top of that, the conversation feels much more natural too!


#### Travel Agency
Another example where tags might be useful is when you have content segregated by countries. In this example, we have a tour agency which operates in 5 countries in South East Asia: Thailand, Vietnam, Cambodia, Laos and Indonesia. Here are a few questions where the answer would be different depending on the country the user wishes to visit.
1. What are some tips for interacting with locals?
2. What are some popular activities to do?
3. What are the costs I should expect?
4. Do I need a visa to visit?
5. What tours do you have?

#### Kiehl's
Kiehl's is an American cosmetics brand that specializes in skin, hair, and body care products. A common question that customers of Kiehl's might ask is 'What kind of face products should I use?'. When asking a real Kiehl's store assistant, they always respond by asking 'What skin type do you have?'. This is because the answer to this question highly depends on the customer's skin type, since different ingredients in facial products work best with different skin type. 

Here is an image that illustrates the branching structure for ideal answers towards the question 'What toner should I use?'. 

![Kiehls-tagged-intent-branches](../images/Kiehls-tagged-intents-branches.png)

By representing the answers as intents, and tagging them with the appropriate tags (eg. 'skin_type:oily'), the chatbot can traverse the branches during the conversation and pick out the right answer to provide. This represents a much nicer experience for the user. Instead of reading a huge block of text to get their information, users can interact with the chatbot conversationally, and recieve only useful information.


#### Other Brief Examples
1. Software - operating_system: Windows / MacOS / Linux
2. Pet Adoption Agency - user_role: Adopter / Rehomer
3. Education Platform - role: student / parent / teacher

#### Summary
Tags would be useful in any scenario where the answer to a question can be modelled in a branch structure, similar to the Kiehl's example above.

