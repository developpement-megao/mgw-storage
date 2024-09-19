import { AppFunctions } from './app-functions';

/**
 * Type de stockage (en session ou local) :
 * * L = localStorage
 * * S = sessionStorage
 */
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

  /**
   * Type de stockage (local ou de session) : L pour local et S pour session.
   */
  get storageType(): StorageType {
    return this.lStorageType;
  }

  /**
   * Nom (clé) de l'élément de stockage.
   */
  get storageName(): string {
    return this.lStorageName;
  }

  set storageName(pStorageName: string) {
    this.lStorageName = pStorageName;
  }

  /**
   * Libellé du type de stockage (localStorage ou sessionStorage).
   * @returns string : localStorage si type stockage local (L) ou sessionStorage si type stockage de session (S)
   */
  getStorageTypeLib(): string {
    return this.lStorageType === 'L' ? 'localStorage' : 'sessionStorage';
  }

  /**
   * Récupère la valeur actuelle de l'entrée du stockage ou null si la clé n'existe pas dans le stockage.
   * @returns string | null : Renvoi la valeur actuelle de l'élément dans le stockage ou null si la clé n'existe pas dans le stockage
   */
  getItem(): string | null {
    if (this.lStorageType === 'L') {
      // local storage
      return getLocalItem(this.lStorageName);
    }
    // session storage
    return getSessionItem(this.lStorageName);
  }

  /**
   * Récupère la valeur objet de l'entrée du stockage ou null si la clé n'existe pas dans le stockage ou si on a eu une ereur lors de la récupération de la valeur.
   * @returns T | null : Renvoi la valeur actuelle de l'élément dans le stockage ou null en cas d'erreur ou si la clé n'existe pas dans le stockage
   */
  getItemObject<T>(): T | null {
    return getItemObject<T>(this.getItem());
  }
}
