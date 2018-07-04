import { Injectable } from '@angular/core';
import { ILocal } from './ilocal';
import { Local } from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  locais: ILocal[]=[];
  
  constructor() { }

  addLocal(local: ILocal) {
    this.locais.push(local);
  }
  getLocais(): ILocal[] {
    return null;
  }
  getLocal(idLocal: number): ILocal {
    for(var i=0; i<this.locais.length; i++){
      if (this.locais[i].id == idLocal){
        return this.locais[i];
      }
    }
  }
  editarLocal(local: ILocal): boolean {
    for (var i = 0; i < this.locais.length; i++) {
      if (this.locais[i].id == local.id) {
        this.locais[i] == local;
        return true;
      }
    }
    return false;
  }
  removerLocal(idLocal: number): boolean {
    for(var i=0; i<this.locais.length; i++){
      if (this.locais[i].id == idLocal){
        this.locais.splice(i, 1);
        return true;
      }
    }
  return false;
  }

}
