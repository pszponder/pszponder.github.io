+++
draft = false
title = 'In Context Training'
date = '2025-08-17T17:34:37-06:00'
author = "Piotr Szponder"
tags = ["zero-shot", "one-shot", "multi-shot", "prompting"]
categories = ["prompt-engineering", "ai-engineering", "ai", "ml"]
+++

# In-Context Learning

**In-Context Training** (i.e., _In-Context Learning_) is the process of giving a model instructions, examples, or other guiding information _inside the user prompt_. This additional information becomes part of the model's context window.

- Unlike fine-tuning, which changes the model's parameters, **In-Context Training** doesn't permanently change the model -- it only influences behavior during the active session.
- Think of this as "teaching on the fly" by embedding the training data into the prompt

**In-Context Training** prompting techniques:

- Zero-Shot Prompting: 0 examples -> model relies on pre-trained knowledge
- One-Shot Prompting: 1 example -> model imitates format/style
- Few-Shot Prompting: 2+ examples -> model generalizes a pattern

### Zero-Shot Prompting

**Zero-Shot Prompting** is when instructions are provided to the model via the user prompt without providing any additional examples.

Use **Zero-Shot Prompting** when the task is simple, well-defined, or when the model is likely to already know the task from pre-training.

Example of a **Zero-Shot** Prompt:

```txt
Translate the following sentence into Elvish: *You shall not pass!*
```

### One-Shot Prompting

**One-Shot Prompting** is when the model is provided with _one example_ before asking it to complete a similar task.

Use **One-Shot Prompting** when you want to nudge the model toward a specific format or behavior, but the task isn't too complex.

Examples of a **One-Shot** Prompts:

```txt
Translate the following sentence into Elvish.
Example: English: "Friend" -> Elvish: "Mellon"

Now translate: English: "Star" -> Elvish:
```

```txt
Multiply 6 by 10

Use the following format as an example:
Multiply 4 by 10: 40
```

### Few-Shot Prompting

**Few-Shot Prompting** is when the model is provided with _multiple examples_ before asking it to complete a similar task.

Use **Few-Shot Prompting** when you want the model to complete more complex tasks, or when you want to strongly condition the model on a particular pattern, style, or reasoning approach.

It's recommended to provide the model with _4-8 examples_ for a **Few-Shot** Prompt. (Performance gains plateau after 8 examples)

Example of **Few-Shot Prompting**:

```txt
Translate the following sentences into Elvish.
English: "Friend" → Elvish: "Mellon"
English: "Star" → Elvish: "Elen"
English: "Sun" → Elvish: "Anar"

Now translate: English: "Moon" → Elvish:
```

```txt
Perform sentiment classification of the given text.

<examples>
Text: "I love spending time in Rivendell."
Sentiment: Positive

Text: "The orcs are terrifying and I hate them."
Sentiment: Negative

Text: "The Shire is calm and peaceful."
Sentiment: Positive
</examples>

Now classify:
Text: "The journey through Mordor is dangerous and exhausting."
Sentiment:
```

```txt
You are a movie review classifier.
Read each review and output a star rating from 1 to 5 (where 1 = terrible, 5 = amazing).

<examples>
Review: "The Lord of the Rings: The Fellowship of the Ring was breathtaking. The visuals, the music, the acting -- all perfect!"
Rating: 5

Review: "The Hobbit trilogy dragged on too long. Some parts were fun, but overall it felt bloated."
Rating: 2

Review: "The Two Towers had amazing battle scenes, but the pacing was uneven in the middle."
Rating: 4
</examples>

Now classify this review:

Review: "The Return of the King was epic and emotional, but sometimes overly dramatic."
Rating:
```

## 📚 Resources / References

- [Prompt Engineering Guide - Zero-Shot Prompting](https://www.promptingguide.ai/techniques/zeroshot)
- [Prompt Engineering Guide - Few-Shot Prompting](https://www.promptingguide.ai/techniques/fewshot)
