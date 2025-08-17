// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import init from "./pkg/wasm_example.js";

const runWasm = async () => {
  const rustWasm = await init("./pkg/wasm_example_bg.wasm");

  // Run the exported function
  rustWasm.console_log_from_wasm(); // Should log "This console.log is from wasm!"
};
runWasm();
