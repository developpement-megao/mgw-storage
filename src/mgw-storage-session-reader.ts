import { AppStorageReader, getItemObject, getSessionItem } from './app-storage-reader';

/**
 * Gestion du stockage de session (uniquement en lecture)
 */
export class MgwStorageSessionReader extends AppStorageReader {
  /**
   * Récupère la valeur actuelle de l'entrée du stockage de session associée à la clé passée en paramètre ou null si la clé n'existe pas dans le stockage de session.
   * @param storageName Nom (clé) de l'élément dans le stockage de session
   * @returns string | null : Renvoi la valeur actuelle de l'élément dans le stockage de session ou null si la clé n'existe pas dans le stockage de session
   */
  static getItem(storageName: string): string | null {
    return getSessionItem(storageName)
  }

  /**
   * Récupère la valeur objet de l'entrée du stockage de session associée à la clé passée en paramètre ou null si la clé n'existe pas dans le stockage de session.
   * @param storageName Nom (clé) de l'élément dans le stockage de session
   * @returns T | null : Renvoi la valeur actuelle de l'élément dans le stockage de session ou null si la clé n'existe pas dans le stockage de session
   */
  static getItemObject<T>(storageName: string): T | null {
    return getItemObject<T>(getSessionItem(storageName));
  }

/**
   * Objet pour gérer la lecture du stockage de session.
   * @param storageName Nom (clé) de l'élément dans le stockage de session
   */
  constructor(storageName: string) {
    super(storageName, 'S');
  }
}
