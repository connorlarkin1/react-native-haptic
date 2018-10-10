
import { NativeModules, Platform } from 'react-native';

const { ReactNativeHaptic } = NativeModules;

ReactNativeHaptic = Platform.OS === 'android' ? {generate: null}:ReactNativeHaptic
export default ReactNativeHaptic;
