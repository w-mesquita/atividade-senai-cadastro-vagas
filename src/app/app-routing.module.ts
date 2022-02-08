import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroVagasComponent } from './components/cadastro-vagas/cadastro-vagas.component';
import { ConsultaVagasComponent } from './components/consulta-vagas/consulta-vagas.component';

const routes: Routes = [
  {path: '', component: CadastroVagasComponent},
  {path: 'consulta', component: ConsultaVagasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
