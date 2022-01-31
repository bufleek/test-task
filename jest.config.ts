import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transformIgnorePatterns: ["node_modules/(?!(@mui/material|@mui/lab)/)"],
};
export default config;
