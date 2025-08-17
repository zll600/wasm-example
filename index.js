// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import init from "./pkg/wasm_example.js";

const runWasm = async () => {
  // Instantiate our wasm module
  const helloWorld = await init("./pkg/wasm_example_bg.wasm");

  // Call the Add function export from wasm, save the result
  const result = helloWorld.call_me_from_javascript(24, 24);

  console.log(result); // Should output '72'
  console.log(helloWorld.ADD_CONSTANT); // Should output 'undefined'
  console.log(helloWorld.add_integer_with_constant); // Should output 'undefined'
};
runWasm();