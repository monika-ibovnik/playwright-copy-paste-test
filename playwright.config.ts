import { PlaywrightTestConfig } from "@playwright/test";

const baseURL = "https://4qpn52.csb.app/";
const config: PlaywrightTestConfig = {
  testDir: "./tests",
  timeout: 36000,
  use: {
    baseURL,
    headless: true,
    browserName: "chromium",
    screenshot: "only-on-failure",
    contextOptions: {
      permissions: ["clipboard-read", "clipboard-write"],
    },
  },
};

export default config;
