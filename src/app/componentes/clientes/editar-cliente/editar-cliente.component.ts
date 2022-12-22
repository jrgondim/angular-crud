import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente = {
    id: 0,
    name: '',
    email: '',
    phoneNumber: '',
    birthDay: ''
  }

  constructor(
    private service: ClienteService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((cliente) => {
      this.cliente = cliente
    })
  }

  editarCliente() {
    this.service.editar(this.cliente).subscribe(() => {
    this.router.navigate(['/listarClientes'])
    })
  }

  botaoCancelar() {
    this.router.navigate(['/listarClientes'])
  }
}
