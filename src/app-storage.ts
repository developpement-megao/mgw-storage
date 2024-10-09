import { AppFunctions } from './app-functions';

import { AppStorageReader, StorageType } from './app-storage-reader';

function removeLocalItem(storageName: string): void {
  localStorage.removeItem(storageName);
}

function removeSessionItem(storageName: string): void {
  sessionStorage.removeItem(storageName);
}

export abstract class AppStorage extends AppStorageReader {
  constructor(removeOnInstanciate: boolean, storageName: string, storageType: StorageType, value: unknown | undefined) {
    super(storageName, storageType);
    if (!this.updateItem(value, false, false) && removeOnInstanciate) {
      this.removeItem();
    }
  }

  /**
   * Suppression de l'entrée dans le stockage.
   */
  removeItem(): void {
    if (this.lStorageType === 'L') {
      // local storage
      removeLocalItem(this.lStorageName);
    } else {
      // session storage
      removeSessionItem(this.lStorageName);
    }
  }

  /**
   * Mise à jour (modification ou ajout) de l'entrée dans le stockage.
   * @param value Valeur de l'élément dans le stockage
   * @param removeIfEmpty default true : Indique si on veut supprimer l'entrée du stockage si la valeur est null, undefined ou chaine vide (par défaut oui)
   * @param removeIfError default true : Indique si on veut supprimer l'entrée du stockage si on a une erreur lors de la mise à jour de la valeur (par défaut oui)
   * @returns boolean : Résultat de la mise à jour. En cas d'erreur lors de la conversion de la valeur en chaine (lors du passage du JSON.stringify) on renvoit false
   */
  updateItem<T>(value: T, removeIfEmpty: boolean = true, removeIfError: boolean = true): boolean {
    try {
      if (removeIfEmpty && AppFunctions.valueIsEmpty(value)) {
        this.removeItem();
        return false;
      }
      // pas vide ou pas demandé à vider
      if (AppFunctions.valueIsNonNullable(value)) {
        const itemValue: string = typeof value === 'string' ? value : JSON.stringify(value);
        if (this.lStorageType === 'L') {
          // local storage
          localStorage.setItem(this.storageName, itemValue);
        } else {
          // session storage
          sessionStorage.setItem(this.storageName, itemValue);
        }
        return true;
      }
      return false;
    } catch {
      if (removeIfError) {
        this.removeItem();
      }
      return false;
    }
  }
}
