Intents are question and answer pairs that are used to train your chatbot. They are a simple and effective way to teach your chatbot how to answer questions.

### Intent structure

Intents are comprised of two primary components: Questions and Answers
![Intent Structure](./images/intents.png)

**Questions** are the queries that users will ask your chatbot. They can be phrased in a variety of ways, and the system will attempt to match them to the appropriate intent. For example, if you were creating an intent for a chatbot that answers questions about algorithms, you might include questions such as:

- What is an algorithm?
- What is a sorting algorithm?
- What is a binary search algorithm?

**Answers** are the responses that your chatbot will provide when a user asks a question. They can be simple text responses or more complex, such as a link to a website or a PDF document. For example, if you were creating an intent for a chatbot that answers questions about the weather, you might include answers such as:

- An algorithm is a set of instructions for solving a problem or performing a task.
- A sorting algorithm is an algorithm that puts elements of a list in a certain order.
- A binary search algorithm is an algorithm that finds the position of a target value within a sorted array.

Adding these intents to your chatbot will allow it to answer questions about algorithms. You can also add more complex answers, such as links to websites or PDF documents.

### Intent fields

An intent has 4 main fields

| Field Name            | Description                                                                                                      | Example                                                                                                                                                                                       | Mandatory |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Name                  | This is the name of the intent                                                                                   | _Pricing_                                                                                                                                                                                     | Yes       |
| Question              | This is a visitor-friendly way for the intent. This is very useful if we want to display this intent in a button | _What is the price_                                                                                                                                                                           | Yes       |
| Alternative phrase(s) | \- These are in fact training data that help the chatbot map similar questions to the same intent\.              | _Is Algomo expensive?_                                                                                                                                                                        | No        |
| Response(s)           | This is the response that the chatbot will give when the intent is triggered.                                    | _Algomo is FREE forever for up to 20 conversations per month. After that, our plans start from as low as $9 per month. You can read more on our pricing page: https://www.algomo.com/pricing_ | Yes       |

### Intent creation

Intents are created within intent groups. An intent group is a collection of intents that are related to each other. For example, if you were creating an intent group for a chatbot that answers questions about algorithms, you might want all of the intents in that group to be related to algorithms. You can create as many intent groups as you like, and each intent group can contain as many intents as you like.

#### Creating an intent group

1. Navigate to [**Algomo**](https://app.algomo.com/) > [**Data Sources**](https:app.algomo.com/data-sources)
2. Click on the **Create new datasource** button.
3. Navigate to the [**Intents**](httos://app.algomo.com/data-sources/create/intent-group) tab.
4. Enter a name for your intent group.
5. Click on the **Create intent group button** button.

#### Adding intents to an intent group

1. Once you have created your intent group, you can add intents to it.
2. Navigate to [**Algomo**](https://app.algomo.com/) > [**Data Sources**](https:app.algomo.com/data-sources)
3. Select the intent group you want to add intents to.
4. Click on the **Create Intent** button and name your intent.
5. Open your intent
6. In the **Question** field, enter the question you want your chatbot to answer.
7. Optionally add an **Alternative Phrase(s)** to your intent. This will allow your chatbot to answer similar questions.
8. In the **Responses** field, enter the response(s) you want your chatbot to give.
9. On the **Not Live** toggle, turn on the toggle to make your intent live.
10. Save your intent.

---

Your data source is now ready to be used by your chatbot. See [Usage](./Overview#usage.md) for more information on how to use your data sources.
