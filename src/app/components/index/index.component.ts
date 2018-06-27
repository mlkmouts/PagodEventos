import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../evento.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  eventos;
  constructor(private eventoSevice:EventoService) { 
    this.eventos=eventoSevice.getEventos();
  }

  ngOnInit() {
  }

}
