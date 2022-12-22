import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  listaClientes: Cliente[] = [];

  constructor(private service: ClienteService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaClientes) => {
      this.listaClientes = listaClientes
    })
  }

}
