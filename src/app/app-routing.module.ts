import { ExcluirClienteComponent } from './componentes/clientes/excluir-cliente/excluir-cliente.component';
import { EditarClienteComponent } from './componentes/clientes/editar-cliente/editar-cliente.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarClienteComponent } from './componentes/clientes/criar-cliente/criar-cliente.component';
import { ListarClientesComponent } from './componentes/clientes/listar-clientes/listar-clientes.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarClientes',
    pathMatch: 'full'
  },
  {
    path: 'criarCliente',
    component: CriarClienteComponent
  },
  {
    path: 'listarClientes',
    component: ListarClientesComponent
  },
  {
    path: 'clientes/excluirCliente/:id',
    component: ExcluirClienteComponent
  },
  {
    path: 'clientes/editarCliente/:id',
    component: EditarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
