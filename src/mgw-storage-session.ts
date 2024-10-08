import { AppStorage } from './app-storage';

/**
 * Gestion du stockage de session (lecture / écriture)
 */
export class MgwStorageSession<T> extends AppStorage<T> {
  /**
   * Objet pour gérer le stockage de session.
   * @param storageName Nom (clé) de l'élément dans le stockage de session
   * @param removeOnInstanciate default false : Indique si on veut supprimer l'entrée du stockage de session lors de la création de l'objet (par défaut non)
   */
  constructor(storageName: string, removeOnInstanciate: boolean = false, value?: T) {
    super(removeOnInstanciate, storageName, 'S', value);
  }
}
