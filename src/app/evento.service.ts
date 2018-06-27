import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  eventos = [{
    id: 0,
    nome: "Thiaguinho",
    local: "P12",
    data: new Date(2018, 9, 14)
  }, {
    id: 1,
    nome: "Turma do Pagode",
    local: "OBS",
    data: new Date (2018, 4, 2)
  }]
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
    debugger;
    for(var i=0; i<this.eventos.length; i++){
      if (this.eventos[i].id == idEvento){
        this.eventos.splice(i, 1);
  
      }
    }
  }
}
