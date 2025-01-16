---
title: Prompt Engineering
subtitle: Generate the best output from generative AI models
date: 2025-01-15
author: '@KareimGazer'
lastUpdated: true
next:
  text: 'Building Great Data Products: Part 1 — The Data'
  link: './Building_Great_Data_Products_Part_1_The_Data'
prev:
  text: 'The Kiss Principle'
  link: './The_KISS_Principle'
---

> **Prompt engineering** is the newly emerging field of methodically crafting the input for a generative AI model to give users an output that best meets their needs. In order to generate the best output from AI, it helps to understand the opportunities and limitations of these models. This knowledge will help you phrase your prompt in the way that best allows the model to meet your needs.

---

As we know ... we will start with

## Things to keep in mind

as you develop your prompts:

### Even very minor changes

in the way a user phrases a prompt can lead to significant changes in the types of output an AI model generates.

### Remember that AI models are only trained to predict the next word or “token.”

Essentially, these models are text completers. The more accurate the input you provide, the more accurate and helpful you can expect the output to be.

### The AI model’s response is stochastic

which means randomly determined. Because the model is pulling from large amounts of data you will get a different output even when you enter the exact same prompt. the more detailed and longer your prompt is the more unique and determined the response might be so for example using the prompt below on both Grok and Chat-GPT resulted in a very similar results:

> **Prompt**: act as a senior software engineer working in the electronic design automation industry. write me a linkedIn message requesting from my past senior manager and director of engineering to subscribe to my youtube channel that will features topics about how can normal people and young aspiring student utilize the full power of the current AI tools in their life especially software engineering.
make it short, casual, friendly, and professional. and use "silly as it might seem ... but"

> **GPT 4o**: Hi [Name], Silly as it might seem, but I’ve started a YouTube channel to share how everyday folks and aspiring students can tap into the full potential of today’s AI tools—especially in software engineering! It would mean the world if you could check it out and maybe subscribe. Your support (and occasional expert feedback) would be hugely motivating. 😊 Here’s the link: [Insert Link] Thanks so much in advance! Best regards [Your Name]

> **Grok2**: Hey [Senior Manager's Name], [Director's Name], Silly as it might seem ... but I've started a YouTube channel focused on how everyday people and young aspiring students can harness the power of AI tools, especially in software engineering. I'd really appreciate it if you could subscribe and maybe share your thoughts on the content. It would mean a lot to have support from industry veterans like yourselves. Here's the link: [Insert YouTube Channel Link] Thanks for considering, and looking forward to your feedback! Best regards,

**Did you notice?** Thet are almost exactly the same although they are trained on huge and largely different data

### Be on the lookout for AI hallucinations

the phenomenon of an AI model generating content that “feels” like a legitimate output, but is based on unreliable data. Again, because the model is pulling from an extremely high volume of data, not all of that data may be factually correct. A well-engineered prompt can decrease the risk of generating an AI hallucination.
hallucinations can happen when the model is not trained on enough data, on noisey or dirty data, not given enought context or constraints. and here comes the value of prompt engineering. Hallucinations make the output text difficult to understand and make the model more likely to generate incorrect or misleading information

### Domain Expertise

Sometimes a high-level of domain expertise may be required in order to develop a well-engineered prompt. Take, for example, the case of a medical doctor using an AI algorithm to suggest treatment options based on a patient’s medical history. The person engineering the prompt would not only need to know the best vocabulary to use to generate the desired output; so the model uses the parts of the data related to medical academia and generate more accurate results instead of relying on data from reddit for example. they would also need to have an understanding of the treatment options to be able to evaluate and validate the output.

## Components of Prompt Engineering

When developing a prompt, you must include either instructions or a question.

you will also likely want to include some aspect of input data and/or examples in your prompt to guide the algorithm toward an output that will be the most useful to you. Users can provide input data to give the model additional information about the type of output they desire.

Users can add anything from simple audience demographic information (age, level of education, physical location) to .csv files with many data points, and anything in between that will help to guide the model toward the desired output.

It can also be helpful to specify the tone that you would like the algorithm to use in its response.
In this case, instead of asking the model to tell us a joke about penguins, we specified the tone—dad joke.

## Techniques to Improve Outputs

### Asking the Model to Play a Role


> **You**: You are a helpful assistant that translates English to Spanish. Translate the following passage: All the world's a stage, and all the men and women merely players.

> **GPT**: Todo el mundo es un escenario y todos los hombres y mujeres son simplemente actores.

### Question and Answer

a series of follow up questions to steer the model toward the desired output.

some transformer models respond well to forceful language, including all capitalization and exclamation points.

> **You**: Write a sentence with 10 words in it

> **GPT**: The quick brown fox jumps over the lazy dog.

> **You**: THAT'S ONLY 9 WORDS!

> **GPT**: Oh, I apologize for that. Here's another sentence with 10 words: She woke up early to watch the sunrise over mountains.

### Templates

Developing templates is one of the most effective strategies available for prompting thorough, accurate responses from a transformer model. Templates can use any combination of the engineering techniques we’ve covered so far, but the benefit is that the same well-engineered prompt can be re-used with different data points, increasing the model’s efficiency.

## Notes and Future Direction

- maybe LLM / Foundation models are limited by input/prompts as text only may not suffice to describe the desired output. for example it's hard to describe a 3D object using text but adding equations and numbers helps. this opens the realm of custom AI for every software. for example AI that helps producing game assests.

Use:
- Let's think in steps
- format the answer as a list

2 principles:

- write clear instructions
- give the model time to think






> **You**:
> **GPT**: 