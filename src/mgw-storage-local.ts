import { AppStorage } from './app-storage';

/**
 * Gestion du stockage local (lecture / écriture)
 */
export class MgwStorageLocal extends AppStorage {
  /**
   * Objet pour gérer le stockage local.
   * @param storageName Nom (clé) de l'élément dans le stockage local
   * @param removeOnInstanciate default false : Indique si on veut supprimer l'entrée du stockage local lors de la création de l'objet (par défaut non)
   */
  constructor(storageName: string, removeOnInstanciate: boolean = false) {
    super(removeOnInstanciate, storageName, 'L');
  }
}
