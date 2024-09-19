import { AppFunctions } from './app-functions';

import { AppStorageReader, StorageType } from './app-storage-reader';

function removeLocalItem(storageName: string): void {
  localStorage.removeItem(storageName);
}

function removeSessionItem(storageName: string): void {
  sessionStorage.removeItem(storageName);
}

export abstract class AppStorage extends AppStorageReader {
  constructor(removeOnInstanciate: boolean, storageName: string, storageType: StorageType) {
    super(storageName, storageType);
    if (removeOnInstanciate) {
      this.removeItem();
    }
  }

  removeItem(): void {
    if (this.lStorageType === 'L') {
      // local storage
      removeLocalItem(this.lStorageName);
    } else {
      // session storage
      removeSessionItem(this.lStorageName);
    }
  }

  updateItem<T>(value: T, removeIfEmpty: boolean = true, removeIfError: boolean = true): boolean {
    try {
      if (removeIfEmpty && AppFunctions.valueIsEmpty(value)) {
        this.removeItem();
      } else {
        const itemValue: string = typeof value === 'string' ? value : JSON.stringify(value);
        if (this.lStorageType === 'L') {
          // local storage
          localStorage.setItem(this.storageName, itemValue);
        } else {
          // session storage
          sessionStorage.setItem(this.storageName, itemValue);
        }
      }
      return true;
    } catch {
      if (removeIfError) {
        this.removeItem();
      }
      return false;
    }
  }
}
