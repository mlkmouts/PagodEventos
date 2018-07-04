import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EventoService } from '../../evento.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IBanda } from '../../ibanda';
import { BandaService } from '../../banda.service';
import { Observable } from 'rxjs';
import { BandaComponent } from './modal/banda/banda.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;
  bandas: IBanda[];

  constructor(private fb: FormBuilder, private eventoService: EventoService, private bandaService: BandaService) {
    this.angForm = this.fb.group({
      nome: ['', Validators.required],
      local: ['', Validators.required],
      data: ['', Validators.required]

    })
  }

  addEvento(): void {
    let evento;
    evento = this.angForm.value;

    evento.id = Math.random();
    evento.data = new Date(this.angForm.value);

    this.eventoService.addEvento(evento);
  }

  ngOnInit() {
    this.bandas = this.bandaService.getBandas();
    console.log(this.bandas)
  }

}
