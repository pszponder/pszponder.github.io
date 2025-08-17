+++
title = "Obsidian-Style Callouts Now Available!"
date = "2025-08-16T04:18:30Z"
author = "Piotr Szponder"
tags = ["obsidian", "callouts", "admonitions", "markdown", "guide"]
categories = ["Guide"]
draft = false
+++

# Obsidian-Style Callouts Now Available!

Great news! This site now supports **native Obsidian-style callouts** using the excellent [hugo-admonitions](https://github.com/KKKZOZ/hugo-admonitions) module. You can now write callouts exactly as you would in Obsidian!

## Quick Start

Simply use the standard Obsidian syntax:

> [!NOTIFY]
> System notification: Your password will expire in 30 days.

The above callout will render beautifully with proper styling and icons!

## Basic Callout Types

Here are the most common callout types you can use:

### Information & Notes

> [!NOTE]
> This is a note callout - perfect for general information and context.

> [!INFO]
> Use info callouts to provide helpful background information or explanations.

> [!ABSTRACT]
> Abstract callouts are great for summaries and overviews.

### Tips & Guidance

> [!TIP]
> Pro tips and helpful tricks go in tip callouts like this one!

> [!IDEA]
> Got a creative idea? Share it with an idea callout.

> [!GOAL]
> Use goal callouts to highlight objectives and targets.

### Warnings & Alerts

> [!WARNING]
> Warning callouts alert readers about potential issues or important considerations.

> [!CAUTION]
> Use caution callouts when readers need to be extra careful about something.

> [!IMPORTANT]
> Mark critical information that readers absolutely must not miss.

### Status Indicators

> [!SUCCESS]
> Celebrate positive outcomes and completed tasks with success callouts.

> [!ERROR]
> Document errors, failures, and problems that need attention.

> [!DANGER]
> Use danger callouts for critical warnings about irreversible or harmful actions.

## Custom Titles

You can customize the title of any callout:

> [!TIP] Pro Development Tip
> Always version control your configuration files - you'll thank yourself later!

> [!WARNING] Breaking Change Alert
> Version 3.0 introduces breaking changes to the API. Please review the migration guide.

> [!SUCCESS] Deployment Complete
> Your application has been successfully deployed to production!

## Advanced Callout Types

### Technical Callouts

> [!CODE]
> Use code callouts when sharing code snippets or technical examples:
>
> ```python
> def process_data(data):
>     return data.clean().validate().transform()
> ```

> [!EXAMPLE]
> This is perfect for showing practical examples and use cases.

> [!EXPERIMENT]
> Document experiments, tests, and hypothesis-driven development.

### Interactive Elements

> [!QUESTION]
> Got questions? Use question callouts for FAQs and inquiries.

> [!TASK]
> Track action items and tasks that need to be completed.

> [!MEMO]
> Quick memos and reminders can be highlighted this way.

### Content Organization

> [!QUOTE]
> "The best way to predict the future is to create it." - Peter Drucker

> [!CONCLUSION]
> Summarize key findings and final thoughts with conclusion callouts.

## Complete List of Available Types

Here are all the supported callout types:

**Alerts & Emphasis:**

- `[!DANGER]` - Critical warnings
- `[!ERROR]` - Errors and failures
- `[!WARNING]` - Important warnings
- `[!CAUTION]` - Careful attention needed
- `[!IMPORTANT]` - Must-read information
- `[!SUCCESS]` - Positive outcomes

**Information & Elaboration:**

- `[!INFO]` - General information
- `[!NOTE]` - Notes and context
- `[!ABSTRACT]` - Summaries
- `[!CONCLUSION]` - Final thoughts
- `[!EXAMPLE]` - Examples and demos
- `[!QUOTE]` - Quotes and references

**Guidance & Interaction:**

- `[!TIP]` - Helpful tips
- `[!TASK]` - Action items
- `[!GOAL]` - Objectives
- `[!IDEA]` - Creative thoughts
- `[!QUESTION]` - Questions and FAQs
- `[!NOTIFY]` - Notifications
- `[!CODE]` - Code snippets
- `[!EXPERIMENT]` - Tests and trials
- `[!MEMO]` - Quick notes

## Benefits for Technical Writing

These callouts make technical content much more engaging and organized:

> [!TIP] Why Use Callouts?
>
> - **Visual hierarchy** - Guide reader attention
> - **Better organization** - Structure complex information
> - **Improved readability** - Break up large text blocks
> - **Cross-platform compatibility** - Works in Obsidian and Hugo
> - **Professional appearance** - Clean, modern styling

> [!tip] Why Use Callouts?
>
> - **Visual hierarchy** - Guide reader attention
> - **Better organization** - Structure complex information
> - **Improved readability** - Break up large text blocks
> - **Cross-platform compatibility** - Works in Obsidian and Hugo
> - **Professional appearance** - Clean, modern styling

## Compatibility with Obsidian

The best part? These callouts use the **exact same syntax** as Obsidian! This means:

- ✅ Copy and paste between Obsidian and your blog
- ✅ No need to learn Hugo-specific shortcodes
- ✅ Your existing Obsidian notes work immediately
- ✅ Consistent workflow across tools

## Real-World Example

Here's how you might use callouts in a technical blog post:

> [!INFO] Context
> We're building a data pipeline that processes customer events in real-time.

> [!WARNING] Important Consideration
> Make sure your Kafka cluster can handle the expected throughput before deploying.

> [!CODE] Implementation
>
> ```python
> def process_events(events):
>     return events.filter(valid).transform(normalize).save()
> ```

```python
def process_events(events):
    return events.filter(valid).transform(normalize).save()
```

> [!SUCCESS] Result
> The pipeline now processes 10,000 events per second with 99.9% uptime!

## Getting Started

Want to use callouts in your own Hugo site? Check out the [hugo-admonitions](https://github.com/KKKZOZ/hugo-admonitions) module - it's easy to install and works with any Hugo theme.

> [!TIP] Ready to Write?
> Start adding callouts to your technical posts today. Your readers will appreciate the improved organization and visual appeal!

---

_Happy writing! 🎉_
