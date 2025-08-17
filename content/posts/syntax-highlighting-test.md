+++
title = "Syntax Highlighting in Admonitions Test"
date = "2025-08-17T03:25:00Z"
author = "Piotr Szponder"
tags = ["test", "admonitions", "syntax-highlighting", "code"]
categories = ["Demo"]
draft = false
+++

# Testing Syntax Highlighting in Admonitions

This post tests syntax highlighting within hugo-admonitions callouts.

more text

this is a paragraph

## Regular Code Block (for comparison)

```javascript
function greetUser(name) {
    const message = `Hello, ${name}!`;
    console.log(message);
    return message;
}

// Call the function
greetUser("World");
```

## Code in Different Admonition Types

> [!CODE] JavaScript Example
>
> ```javascript
> function calculateSum(a, b) {
>     const result = a + b;
>     console.log(`${a} + ${b} = ${result}`);
>     return result;
> }
>
> const sum = calculateSum(5, 3);
> ```

> [!NOTE] Python Code
>
> ```python
> def fibonacci(n):
>     if n <= 1:
>         return n
>     return fibonacci(n-1) + fibonacci(n-2)
>
> # Generate first 10 fibonacci numbers
> for i in range(10):
>     print(f"F({i}) = {fibonacci(i)}")
> ```

> [!TIP] Go Example
>
> ```go
> package main
>
> import (
>     "fmt"
>     "strings"
> )
>
> func main() {
>     words := []string{"Hello", "World", "from", "Go"}
>     message := strings.Join(words, " ")
>     fmt.Println(message)
> }
> ```

> [!EXAMPLE] JSON Configuration
>
> ```json
> {
>     "name": "my-app",
>     "version": "1.0.0",
>     "dependencies": {
>         "react": "^18.0.0",
>         "typescript": "^5.0.0"
>     },
>     "scripts": {
>         "start": "npm run dev",
>         "dev": "vite dev"
>     }
> }
> ```

> [!WARNING] Shell Commands
>
> ```bash
> #!/bin/bash
>
> # Set strict mode
> set -euo pipefail
>
> # Variables
> PROJECT_NAME="my-project"
> BUILD_DIR="/tmp/build"
>
> # Create build directory
> mkdir -p "$BUILD_DIR"
>
> # Build the project
> echo "Building $PROJECT_NAME..."
> make build
>
> echo "Build completed successfully!"
> ```

All code blocks above should have proper syntax highlighting with colors appropriate for each language!
