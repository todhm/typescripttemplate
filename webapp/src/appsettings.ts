import {testConfig} from './db/config';
import config from './db/config';
import { ConnectionOptions } from 'typeorm';

export type SettingTypes = {
  dbConfig: ConnectionOptions;
  
};
export const settings: SettingTypes = {
  dbConfig: config,
}

export const testSettings: SettingTypes = {
  dbConfig: testConfig,
}