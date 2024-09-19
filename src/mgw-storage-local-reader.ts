import { AppStorageReader, getItemObject, getLocalItem } from './app-storage-reader';

/**
 * Gestion du stockage local (uniquement en lecture)
 */
export class MgwStorageLocalReader extends AppStorageReader {
  /**
   * Récupère la valeur actuelle de l'entrée du stockage local associée à la clé passée en paramètre ou null si la clé n'existe pas dans le stockage local.
   * @param storageName Nom (clé) de l'élément dans le stockage local
   * @returns string | null : Renvoi la valeur actuelle de l'élément dans le stockage local ou null si la clé n'existe pas dans le stockage local
   */
  static getItem(storageName: string): string | null {
    return getLocalItem(storageName)
  }

  /**
   * Récupère la valeur objet de l'entrée du stockage local associée à la clé passée en paramètre ou null si la clé n'existe pas dans le stockage local ou en cas d'ereur.
   * @param storageName Nom (clé) de l'élément dans le stockage local
   * @returns T | null : Renvoi la valeur actuelle de l'élément dans le stockage local ou null si la clé n'existe pas dans le stockage local
   */
  static getItemObject<T>(storageName: string): T | null {
    return getItemObject<T>(getLocalItem(storageName));
  }

  /**
   * Objet pour gérer la lecture du stockage local.
   * @param storageName Nom (clé) de l'élément dans le stockage local
   */
  constructor(storageName: string) {
    super(storageName, 'L');
  }
}
