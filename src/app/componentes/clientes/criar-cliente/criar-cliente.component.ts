import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css']
})
export class CriarClienteComponent implements OnInit {

  cliente: Cliente = {
    id: 0,
    name: "",
    email: "",
    phoneNumber: "",
    birthDay: ""
  }

  constructor(
    private service: ClienteService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  criarCliente() {
    this.service.criar(this.cliente).subscribe(() => {
    this.router.navigate(['/listarClientes'])
    })
  }

  botaoCancelar() {
    alert("Cancelado!")
    this.router.navigate(['/listarClientes'])
  }

}
