import { AppStorage } from './app-storage';

export class MgwStorageSession extends AppStorage {
  constructor(storageName: string, removeOnInstanciate: boolean = false) {
    super(removeOnInstanciate, storageName, 'S');
  }
}
