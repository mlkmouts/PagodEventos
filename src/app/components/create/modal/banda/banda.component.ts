import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BandaService } from '../../../../banda.service';
import { IBanda } from '../../../../ibanda';
import { createComponent } from '@angular/compiler/src/core';

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class BandaComponent implements OnInit {

  closeResult: string;
  bandaForm: FormGroup;

  constructor(private modalService: NgbModal, private fb: FormBuilder, private bandaService: BandaService) { 
    this.bandaForm = this.fb.group({
      nome: ['', Validators.required],
      integrantes: ['', Validators.required],
      contato: ['', Validators.required]

    })
  }

  openModal(content) {
    return this.modalService.open(content).result;
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  cadastrarBanda(): void {
    let banda:IBanda = {
      id: Math.random(),
      nome: this.bandaForm.value.nome,
      integrantes: this.bandaForm.value.integrantes.split(", "),
      contato: this.bandaForm.value.contato
    }

    this.bandaService.addBanda(banda);
  }

  ngOnInit() {
  }

}
