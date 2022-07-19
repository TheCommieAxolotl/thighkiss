import { terser } from "rollup-plugin-terser";

export default [
    {
        input: "./src/index.mjs",
        output: [
            {
                file: "./dist/cjs/index.cjs",
                format: "cjs",
                compact: true,
                plugins: [terser()],
            },
            {
                file: "./dist/mjs/index.mjs",
                format: "esm",
                compact: true,
                plugins: [terser()],
            },
        ],
    },
];
