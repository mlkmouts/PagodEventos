import { Injectable } from '@angular/core';
import { IEvento } from './ievento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  eventos:IEvento[] = [{
    id: 0,
    banda: {
      id: 0,
      nome: 'Thiaguinho',
      integrantes: ['Thiaguinho'],
      contato: 47999238765
    },
    local: {
      id: 0,
      cep: 89000123,
      cidade: 'São Paulo',
      complemento: 'Casa 739',
      estado: 'SP',
      contato: 21988901234
    },
    data: new Date(2018, 9, 14)
  }]

/*
    {
    id: 0,
    nome: "Thiaguinho",
    local: "P12",
    data: new Date(2018, 9, 14)
  }, {
    id: 1,
    nome: "Turma do Pagode",
    local: "OBS",
    data: new Date (2018, 4, 2)
  }*/
  constructor() { }
  addEvento(evento): void {
    this.eventos.push(evento);
  }

  editarEvento(evento) {
    for (var i = 0; i < this.eventos.length; i++) {
      if (this.eventos[i].id == evento.id) {
        this.eventos[i] == evento;
      }
    }
  }

  getEventos() {
    return this.eventos;
  }

  getEvento(idEvento) {
    for(var i=0; i<this.eventos.length; i++){
      if (this.eventos[i].id == idEvento){
        return this.eventos[i];
      }
    }
  }

  removerEvento(idEvento){
    for(var i=0; i<this.eventos.length; i++){
      if (this.eventos[i].id == idEvento){
        this.eventos.splice(i, 1);
  
      }
    }
  }
}
