import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-cliente',
  templateUrl: './excluir-cliente.component.html',
  styleUrls: ['./excluir-cliente.component.css']
})
export class ExcluirClienteComponent implements OnInit {

  cliente: Cliente = {
    id: 0,
    name: 'Emanuel',
    email: 'eg@g.com',
    phoneNumber: '81-222-1111',
    birthDay: '06-01-1971'
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

  excluirCliente() {
    if(this.cliente.id) {
      this.service.excluir(this.cliente.id).subscribe(() => {
        this.router.navigate(['/listarClientes'])
      })
    }
    
  }

  cancelar() {
    this.router.navigate(['/listarClientes'])
  }

}
