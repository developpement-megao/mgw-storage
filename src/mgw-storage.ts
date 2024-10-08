import { AppStorage } from './app-storage';
import { StorageType } from './app-storage-reader';

/**
 * Gestion du stockage local ou de session
 */
export class MgwStorage<T> extends AppStorage<T> {
  /**
   * Objet pour gérer le stockage local ou de session.
   * @param storageType Type de stockage (L = local ; S = session)
   * @param storageName Nom (clé) de l'élément de stockage
   * @param removeOnInstanciate Indique si on veut supprimer l'entrée du stockage lors de la création de l'objet (par défaut non)
   */
  constructor(storageType: StorageType, storageName: string, removeOnInstanciate: boolean = false, value?: T) {
    super(removeOnInstanciate, storageName, storageType, value);
  }

  set storageType(pStorageType: StorageType) {
    this.lStorageType = pStorageType;
  }

  /**
   * Modification du type de stockage en stockage local.
   */
  setStorageTypeToLocal(): void {
    this.lStorageType = 'L';
  }

  /**
   * Modification du type de stockage en stockage de session.
   */
  setStorageTypeToSession(): void {
    this.lStorageType = 'S';
  }
}
