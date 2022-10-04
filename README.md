# Ignite Expo Go + Detox

## Start up Metro before running tests
`yarn expo:start`

## Kick off tests
`yarn expo:test:detox`


```
yarn run v1.22.19
$ ./bin/downloadExpoApp.sh && detox test --configuration ios.sim.expo
16:06:00.152 detox[78484] INFO:  [test.js] DETOX_CONFIGURATION="ios.sim.expo" DETOX_REPORT_SPECS=true DETOX_START_TIMESTAMP=1664913960148 DETOX_USE_CUSTOM_LOGGER=true jest --config ./detox/config.json --testNamePattern '^((?!:android:).)*$' --maxWorkers 1 detox
16:06:03.084 detox[78486] INFO:  Example is assigned to 959C3482-0218-4BF1-9DC0-8813A73E6ED1 (iPhone 14)
16:06:05.356 detox[78486] INFO:  [AppleSimUtils.js] host.exp.Exponent launched. To watch simulator logs, run:
        /usr/bin/xcrun simctl spawn 959C3482-0218-4BF1-9DC0-8813A73E6ED1 log stream --level debug --style compact --predicate 'process == "Expo Go"'
16:06:11.678 detox[78486] INFO:  Example: should have the welcome screen first
16:06:11.711 detox[78486] INFO:  Example: should have the welcome screen first [OK]

 PASS  detox/firstTest.spec.js (11.217 s)
  Example
    ✓ should have the welcome screen first (31 ms)
```
