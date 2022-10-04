// For more info on how to write Detox tests, see the official docs:
// https://github.com/wix/Detox/blob/master/docs/README.md
const { reloadApp } = require("detox-expo-helpers")

describe("Example", () => {
  beforeAll(async () => {
    await reloadApp({
      // Optionally, you can also set some parameters when loading the app
      // see https://github.com/wix/Detox/blob/master/docs/APIRef.DeviceObjectAPI.md
      args: {
        disableTouchIndicators: true,
        delete: true,
        languageAndLocale: {
          language: "en-US",
          locale: "en-US",
        },
        url: "exp://127.0.0.1:19000",
      },
      launchArgs: {
        // see https://github.com/wix/Detox/blob/master/docs/APIRef.LaunchArgs.md
        EXKernelDisableNuxDefaultsKey: true,
      },
    })
    // ⚠️ Important! Wait for first element to ensure that app is booted
    const welcomeHeading = element(by.id("welcome-heading"))
    await waitFor(welcomeHeading).toBeVisible().withTimeout(10000)
  })

  it("should have the welcome screen first", async () => {
    await expect(element(by.id("welcome-heading"))).toBeVisible()
  })
})
