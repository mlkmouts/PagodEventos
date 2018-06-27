import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EventoService } from '../../evento.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  angForm:FormGroup;
  constructor(private fb:FormBuilder, private eventoService:EventoService) {
    this.angForm=this.fb.group({
      nome:  ['', Validators.required],
      local:  ['', Validators.required],
      data:  ['', Validators.required]

    })
   }
   addEvento():void{
    this.angForm.value.id=Math.random();
    this.eventoService.addEvento(this.angForm.value);
   }

  ngOnInit() {
  }

}
