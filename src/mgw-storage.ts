import { AppStorage } from './app-storage';
import { StorageType } from './app-storage-reader';

export class MgwStorage extends AppStorage {
  constructor(storageType: StorageType, storageName: string, removeOnInstanciate: boolean = false) {
    super(removeOnInstanciate, storageName, storageType);
  }

  set storageType(pStorageType: StorageType) {
    this.lStorageType = pStorageType;
  }

  setStorageTypeToLocal(): void {
    this.lStorageType = 'L';
  }

  setStorageTypeToSession(): void {
    this.lStorageType = 'S';
  }
}
