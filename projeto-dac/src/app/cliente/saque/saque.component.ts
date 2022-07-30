import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/shared/models';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  @ViewChild('formMotivo') formMotivo! : NgForm;
  
  @Input() cliente! : Cliente;
  clientes : Cliente[] | undefined = [];

  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }

}
