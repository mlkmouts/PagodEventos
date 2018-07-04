import { Injectable } from '@angular/core';
import { IBanda } from './ibanda';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BandaService {

  private bandas: IBanda[] = [
    {
      id: 0,
      nome: 'Thiaguinho',
      integrantes: ['Thiaguinho'],
      contato: 47999238765
    }];

  constructor() { }

  addBanda(banda: IBanda) {
    this.bandas.push(banda);
  }

  getBandas(): IBanda[] {
    return this.bandas;
  }

  getBanda(idBanda: number): IBanda {
    for(var i=0; i<this.bandas.length; i++){
      if (this.bandas[i].id == idBanda){
        return this.bandas[i];
      }
    }
  }

  editarBanda(banda: IBanda): boolean {
    for (var i = 0; i < this.bandas.length; i++) {
      if (this.bandas[i].id == banda.id) {
        this.bandas[i] == banda;
        return true;
      }
    }
    return false;
  }

  removerBanda(idBanda: number): boolean {
    for(var i=0; i<this.bandas.length; i++){
      if (this.bandas[i].id == idBanda){
        this.bandas.splice(i, 1);
        return true;
      }
    }
  return false;
  }

}
