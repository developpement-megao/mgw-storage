import { AppStorageReader, getItemObject, getSessionItem } from './app-storage-reader';

export class MgwStorageSessionReader extends AppStorageReader {
  static getItem(storageName: string): string | null {
    return getSessionItem(storageName)
  }

  static getItemObject<T>(storageName: string): T | null {
    return getItemObject<T>(getSessionItem(storageName));
  }

  constructor(storageName: string) {
    super(storageName, 'S');
  }
}
