import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  eventos = [{
    id: 0,
    nome: "Thiaguinho",
    local: "P12",
    data: "30/06/2018"
  }, {
    id: 1,
    nome: "Turma do Pagode",
    local: "OBS",
    data: "03/07/2018"
  }]
  constructor() { }
  addEvento(evento): void {
    this.eventos.push(evento);
  }

  editarEvento(evento) {
    for (var i = 0; i <= this.eventos.length; i++) {
      if (this.eventos[i] == evento.id) {
        this.eventos[i] == evento;
      }
    }
  }

  getEventos() {
    return this.eventos;
  }

  getEvento(idEvento) {
    for(var i=0; i<=this.eventos.length; i++){
      if (this.eventos[i].id == idEvento){
        return this.eventos[i];
      }
    }
  }
}
