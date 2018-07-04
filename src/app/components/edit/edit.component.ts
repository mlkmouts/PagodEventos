import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventoService } from '../../evento.service';
import * as moment from 'moment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  angForm: FormGroup;
  banda;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private eventoService: EventoService) {

    this.angForm = this.fb.group({
      nome: ["", Validators.required],
      local: ["", Validators.required],
      data: ["", Validators.required]
    })
  }
  editarEvento(angForm) {
    debugger;
    this.eventoService.editarEvento(this.angForm.value);
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      console.log(param["id"])
      this.banda=this.eventoService.getEvento(param["id"])
     this.banda.data=moment(this.banda.data).format("Y-MM-DD");
    })



  }

}
