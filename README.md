# Expo Constants Module: Inconsistent behavior across platforms

This repository demonstrates a bug in the Expo Constants module where accessing certain properties yields inconsistent results across different platforms (simulator, web, physical device).  The issue primarily involves properties that are not consistently available across all environments.

## Bug Description

The `Constants` module, when accessed from a simulator or web environment, may fail to return expected values for certain properties. This can lead to errors or incorrect application behavior.

## Reproduction Steps

1. Clone the repository.
2. Run the project on an iOS/Android simulator, web, and physical device.
3. Observe the output for the `Constants.deviceName`, `Constants.deviceId`, and `Constants.platform` properties.
4. Note the inconsistencies in the returned values.

## Solution

A robust solution involves incorporating appropriate conditional checks to handle scenarios where certain properties are unavailable.  This approach ensures graceful degradation across different platforms.