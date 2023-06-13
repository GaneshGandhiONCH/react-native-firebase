import { ReactNativeFirebase } from '@react-native-firebase/app';
import { FirebaseInstallationsTypes } from '../index';

/**
 * Returns an instance of Installations associated with the given FirebaseApp instance.
 */
export declare function getInstallations(
  app?: ReactNativeFirebase.FirebaseApp,
): FirebaseInstallationsTypes.Module;

/**
 * Deletes the Firebase Installation and all associated data.
 */
export declare function deleteInstallations(
  installations?: FirebaseInstallationsTypes.Module,
): Promise<void>;

/**
 * Creates a Firebase Installation if there isn't one for the app and returns the Installation ID.
 */
export declare function getId(installations: FirebaseInstallationsTypes.Module): Promise<string>;

/**
 * Returns a Firebase Installations auth token, identifying the current Firebase Installation.
 */
export declare function getToken(
  installations: FirebaseInstallationsTypes.Module,
  forceRefresh?: boolean,
): Promise<string>;

declare type IdChangeCallbackFn = (installationId: string) => void;
declare type IdChangeUnsubscribeFn = () => void;

/**
 * Throw an error since react-native-firebase does not support this method.
 *
 * Sets a new callback that will get called when Installation ID changes. Returns an unsubscribe function that will remove the callback when called.
 */
export declare function onIdChange(
  installations: FirebaseInstallationsTypes.Module,
  callback: IdChangeCallbackFn,
): IdChangeUnsubscribeFn;
