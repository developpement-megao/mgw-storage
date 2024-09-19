import { AppStorage } from './app-storage';

export class MgwStorageLocal extends AppStorage {
  constructor(storageName: string, removeOnInstanciate: boolean = false) {
    super(removeOnInstanciate, storageName, 'L');
  }
}
