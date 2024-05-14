import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AceuilComponent } from './aceuil/aceuil.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PlanningComponent } from './planning/planning.component';
import { PointageComponent } from './pointage/pointage.component';
import { MachineComponent } from './machine/machine.component';
import { ParametrageLogicielComponent } from './parametrage-logiciel/parametrage-logiciel.component';
import { ParametragePointageComponent } from './parametrage-pointage/parametrage-pointage.component';
import { RapportetstatistiqueComponent } from './rapportetstatistique/rapportetstatistique.component';
import { TimeflowComponent } from './timeflow/timeflow.component';
const routes: Routes = [
  { path: '', component: AceuilComponent},
  { path: 'login', component:LoginComponent },
  { path: 'signup', component: SignupComponent}, 
  { path: 'planning', component: PlanningComponent },
  { path: 'pointage', component: PointageComponent },
  { path: 'machine', component: MachineComponent },
  { path: 'parametrage-logiciel', component: ParametrageLogicielComponent},
  { path: 'parametrage-pointage',component: ParametragePointageComponent },
  { path: 'rapportetstatistique', component: RapportetstatistiqueComponent},
  { path: 'timeflow', component: TimeflowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
