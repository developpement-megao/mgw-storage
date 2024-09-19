import { AppStorageReader, getItemObject, getLocalItem } from './app-storage-reader';

export class MgwStorageLocalReader extends AppStorageReader {
  static getItem(storageName: string): string | null {
    return getLocalItem(storageName)
  }

  static getItemObject<T>(storageName: string): T | null {
    return getItemObject<T>(getLocalItem(storageName));
  }

  constructor(storageName: string) {
    super(storageName, 'L');
  }
}
