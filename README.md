# ThighKiss
A simple brainfuck interpreter. Because there aren't enough of them.

## Useage
```js
import thighkiss from 'thighkiss'; // commonjs: const thighkiss = require('thighkiss')

console.log(thighkiss("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++."))
// Expected output: 'Hello World!'
```

## Features
- Support for all commonly accepted brainfuck instructions.
- Supports overflow wrapping.
- Supports program inputs.
