import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CreateAccountService } from '../services/create-account.service';
import { Cliente, User } from 'src/app/shared/models';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  @ViewChild('formCreateAccount') formCreateAccount! : NgForm;

  cliente! : Cliente;
  user! : User;

  constructor(private createaccountService : CreateAccountService, private router : Router) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
    this.user = new User();
  }

  insert(): void {
    if (this.formCreateAccount.form.valid) {
      this.createaccountService.insert(this.cliente, this.user);
      this.router.navigate( ["/login"] );
    }
  }

}
