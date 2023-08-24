import { WebPlugin } from '@capacitor/core';

import type { ScreenRecorderPlugin } from './definitions';

export class ScreenRecorderWeb
  extends WebPlugin
  implements ScreenRecorderPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async start(options: any): Promise<any> {
    console.log('startFunctionCalled', options);
    throw new Error("Method not implemented.");
  }

  async stop(options: any): Promise<any> {
    console.log('stopFunctionCalled', options);
    throw new Error("Method not implemented.");
  }

  async recorder_status(options: any): Promise<any> {
    console.log('recorderStatusFunctionCalled', options);
    throw new Error("Method not implemented.");
  }
}
