const MEMORY = new Array(30000).fill(0);

let instructionPointer = 0;
let memoryPointer = 0;
let addressStack = [];

let program = "";
let input = "";
let output = "";

const clearState = () => {
    MEMORY.fill(0);

    program = "";
    input = "";
    output = "";

    instructionPointer = 0;
    memoryPointer = 0;
    addressStack = [];
};

const createOutput = (code) => {
    output += String.fromCharCode(code);
};

const getInput = () => {
    let value = 0;

    if (input) {
        value = input.charCodeAt(0);
        input = input.slice(1);
    }

    return value;
};

const interpretProgram = () => {
    let toEnd = false;

    while (!toEnd) {
        switch (program[instructionPointer]) {
            case "[":
                if (MEMORY[memoryPointer]) {
                    addressStack.push(instructionPointer);
                } else {
                    let count = 0;
                    while (true) {
                        instructionPointer++;
                        if (!program[instructionPointer]) break;
                        if (program[instructionPointer] === "[") count++;
                        else if (program[instructionPointer] === "]") {
                            if (count) count--;
                            else break;
                        }
                    }
                }
                break;
            case "]":
                if (addressStack.length) {
                    instructionPointer = addressStack.pop() - 1;
                }
                break;
            case ">":
                if (memoryPointer == MEMORY.length - 1) MEMORY.push(0);
                memoryPointer++;
                break;
            case "<":
                if (memoryPointer > 0) memoryPointer--;
                break;
            case "+":
                if (MEMORY[memoryPointer] == 255) MEMORY[memoryPointer] = 0;
                MEMORY[memoryPointer]++;
                break;
            case "-":
                if (MEMORY[memoryPointer] == 0) MEMORY[memoryPointer] = 255;
                MEMORY[memoryPointer]--;
                break;
            case ".":
                createOutput(MEMORY[memoryPointer]);
                break;
            case ",":
                MEMORY[memoryPointer] = getInput();
                break;
            case undefined:
                toEnd = true;
                break;
            default:
                break;
        }

        instructionPointer++;
    }

    return output;
};

export default (p, i) => {
    clearState();

    program = p;
    input = i;

    return console.log(interpretProgram());
};
