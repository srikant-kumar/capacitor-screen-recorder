import { PluginListenerHandle } from '@capacitor/core';
export interface ScreenRecorderPlugin {

  start(options:any):Promise<any>;

  stop(options:any):Promise<any>;

  recorder_status(options:any):Promise<any>;

  addListener(
    eventName: 'onRecordingStarted',
    listenerFunc: (data: any) => Record<string, unknown>,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  addListener(
    eventName: 'onRecordingComplete',
    listenerFunc: (data: any) => Record<string, unknown>,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  addListener(
    eventName: 'onRecordingError',
    listenerFunc: (data: any) => Record<string, unknown>,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
}
