import { PluginListenerHandle } from '@capacitor/core';
export interface ScreenRecorderPlugin {

  start(options:any):Promise<any>;

  stop(options:any):Promise<any>;

  recorder_status(options:any):Promise<any>;

  addListener(
    eventName: 'onRecordingStarted',
    listenerFunc: (data: any) => {
      status : true,
      message : "Recording Started"
    },
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  addListener(
    eventName: 'onRecordingComplete',
    listenerFunc: (data: any) => {
      status : true,
      message : "Recording Stopped",
      file_name : "2023-08-25-10-10-10.mp4",
      file_path : "/storage/emulated/0/Movies/ScreenRecordings/2023-08-25-10-10-10.mp4"
    },
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  addListener(
    eventName: 'onRecordingError',
    listenerFunc: (data: any) => {
      status : false,
      message : "Error Message"
    },
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
}
