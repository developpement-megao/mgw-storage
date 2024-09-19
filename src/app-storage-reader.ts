import { AppFunctions } from './app-functions';

export type StorageType = 'L' | 'S';

export function getLocalItem(storageName: string): string | null {
  return localStorage.getItem(storageName);
}

export function getSessionItem(storageName: string): string | null {
  return sessionStorage.getItem(storageName);
}

export function getItemObject<T>(itemValue: string | null): T | null {
  try {
    if (AppFunctions.valueIsNonNullable(itemValue)) {
      if (itemValue !== '') {
        return JSON.parse(itemValue) as T;
      }
    }
    return null;
  } catch {
    return null;
  }
}

export abstract class AppStorageReader {
  constructor(
    protected lStorageName: string,
    protected lStorageType: StorageType
  ) {}

  get storageType(): StorageType {
    return this.lStorageType;
  }

  get storageName(): string {
    return this.lStorageName;
  }

  set storageName(pStorageName: string) {
    this.lStorageName = pStorageName;
  }

  getStorageTypeLib(): string {
    return this.lStorageType === 'L' ? 'localStorage' : 'sessionStorage';
  }

  getItem(): string | null {
    if (this.lStorageType === 'L') {
      // local storage
      return getLocalItem(this.lStorageName);
    }
    // session storage
    return getSessionItem(this.lStorageName);
  }

  getItemObject<T>(): T | null {
    return getItemObject<T>(this.getItem());
  }
}
