# ThighKiss
A simple brainfuck interpreter. Because there aren't enough of them.

## Usage
```js
import thighkiss from 'thighkiss'; // commonjs: const thighkiss = require('thighkiss')

console.log(thighkiss("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++."))
// Expected output: 'Hello World!'
```

## Features
- Support for all commonly accepted brainfuck instructions.
- Supports overflow wrapping.
- Supports program inputs.

## So... What the f**k is brainfuck? 
Brainfuck is a turing-complete esoteric programming language designed by Urban Müller. Brainfuck programs use a pointer to infuence an array of 30,000+ values, brainfuck has a total of 8 commands:

| Character | Description                                                                                              |
|:---------:|----------------------------------------------------------------------------------------------------------|
| `+`       | Increment the value at the current cell. *If the value is 255 it becomes the lowest possible value (0)   |
| `-`       | Decrement the value at the current cell. *If the value is 0 it becomes the highest possible value (255)  |
| `>`       | Move the pointer to the right.                                                                           |
| `<`       | Move the pointer to the left.                                                                            |
| `[`       | If the value at the current cell is zero, move the current cell to the matching `]`.                     |
| `]`       | If the value at the current cell is non-zero, move the current cell to the matching `[`.                 |
| `.`       | Print the value at the current cell.                                                                     |
| `,`       | Read a character in the input and store it in the current cell.                                          |

\*Assuming the compiler supports overflow wrapping.