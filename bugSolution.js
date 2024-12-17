// bug.js
import * as Constants from 'expo-constants';

console.log('Device Name:', Constants.deviceName);
console.log('Device Id:', Constants.deviceId);
console.log('Platform:', Constants.platform);

// bugSolution.js
import * as Constants from 'expo-constants';
import { Platform } from 'react-native';

const getDeviceName = () => {
  if (Platform.OS === 'web') {
    return 'Web';
  } else if (Constants.deviceName) {
    return Constants.deviceName;
  } else {
    return 'Unknown';
  }
};

const getDeviceId = () => {
  if (Constants.deviceId) {
    return Constants.deviceId;
  } else {
    return 'Unknown';
  }
};

console.log('Device Name:', getDeviceName());
console.log('Device Id:', getDeviceId());
console.log('Platform:', Constants.platform); 