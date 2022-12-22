import { Cliente } from './../cliente';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @Input() cliente: Cliente = {
    id: 0,
    name: 'Emanuel',
    email: 'eg@g.com',
    phoneNumber: '81-222-1111',
    birthDay: '06-01-1971'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
