
import { NativeModules, Platform } from 'react-native';

let { ReactNativeHaptic } = NativeModules;

ReactNativeHaptic = Platform.OS === 'android' ? {generate: null}:ReactNativeHaptic
export default ReactNativeHaptic;
