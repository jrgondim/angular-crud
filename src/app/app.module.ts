import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';

import { CriarClienteComponent } from './componentes/clientes/criar-cliente/criar-cliente.component';
import { FormsModule } from '@angular/forms';
import { ListarClientesComponent } from './componentes/clientes/listar-clientes/listar-clientes.component';
import { ClienteComponent } from './componentes/clientes/cliente/cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirClienteComponent } from './componentes/clientes/excluir-cliente/excluir-cliente.component';
import { EditarClienteComponent } from './componentes/clientes/editar-cliente/editar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    ClientesComponent,
    CriarClienteComponent,
    ListarClientesComponent,
    ClienteComponent,
    ExcluirClienteComponent,
    EditarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
