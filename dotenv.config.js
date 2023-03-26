import * as dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
const envConfig = dotenv.config();
dotenvExpand.expand(envConfig);