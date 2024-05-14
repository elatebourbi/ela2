import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AceuilComponent } from './aceuil/aceuil.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { CreationPlanningComponent } from './creation-planning/creation-planning.component';
import { AfficherPlanningComponent } from './afficher-planning/afficher-planning.component';
import { PlanningComponent } from './planning/planning.component';
import { HierarchiComponent } from './hierarchi/hierarchi.component';
import { FilialeComponent } from './filiale/filiale.component';
import { SiteComponent } from './site/site.component';
import { ServiceComponent } from './service/service.component';
import { MachineComponent } from './machine/machine.component';
import { PointeuseComponent } from './pointeuse/pointeuse.component';
import { PointageComponent } from './pointage/pointage.component';
import { PointageJournalierComponent } from './pointage-journalier/pointage-journalier.component';
import { PointageMensuelComponent } from './pointage-mensuel/pointage-mensuel.component';
import { TelechargerPointageComponent } from './telecharger-pointage/telecharger-pointage.component';
import { Ajouter0Component } from './ajouter0/ajouter0.component';
import { Ajouter1Component } from './ajouter1/ajouter1.component';
import { Ajouter2Component } from './ajouter2/ajouter2.component';
import { ParametrageLogicielComponent } from './parametrage-logiciel/parametrage-logiciel.component';
import { ChampDeCalculeDynamiqueComponent } from './champ-de-calcule-dynamique/champ-de-calcule-dynamique.component';
import { EditeurDeFormulePointageJournalierComponent } from './editeur-de-formule-pointage-journalier/editeur-de-formule-pointage-journalier.component';
import { EditeurDeFormulePointageMensuelComponent } from './editeur-de-formule-pointage-mensuel/editeur-de-formule-pointage-mensuel.component';
import { GestionDaccesComponent } from './gestion-dacces/gestion-dacces.component';
import { TypeSeanceComponent } from './type-seance/type-seance.component';
import { ParametragePointageComponent } from './parametrage-pointage/parametrage-pointage.component';
import { EmployeComponent } from './employe/employe.component';
import { ModeleComponent } from './modele/modele.component';
import { AdminComponent } from './admin/admin.component';
import { ReposComponent } from './repos/repos.component';
import { JourFerieComponent } from './jour-ferie/jour-ferie.component';
import { Ajouter3Component } from './ajouter3/ajouter3.component';
import { RapportetstatistiqueComponent } from './rapportetstatistique/rapportetstatistique.component';
import { HeuresSuppComponent } from './heures-supp/heures-supp.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { ListeDesAbsencesComponent } from './liste-des-absences/liste-des-absences.component';
import { ListeDesRetardsComponent } from './liste-des-retards/liste-des-retards.component';
import { ListeDesCongesComponent } from './liste-des-conges/liste-des-conges.component';
import { ListeDesPointagesComponent } from './liste-des-pointages/liste-des-pointages.component';
import { PointageManquantComponent } from './pointage-manquant/pointage-manquant.component';
import { Ajouter4Component } from './ajouter4/ajouter4.component';
import { PauseComponent } from './pause/pause.component';
import { Ajouter5Component } from './ajouter5/ajouter5.component';
import { Ajouter6Component } from './ajouter6/ajouter6.component';
import { Ajouter7Component } from './ajouter7/ajouter7.component';
import { TimeflowComponent } from './timeflow/timeflow.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AceuilComponent,
    LoginComponent,
    SignupComponent,
    ConfigurationComponent,
    CreationPlanningComponent,
    AfficherPlanningComponent,
    PlanningComponent,
    HierarchiComponent,
    FilialeComponent,
    SiteComponent,
    ServiceComponent,
    MachineComponent,
    PointeuseComponent,
    PointageComponent,
    PointageJournalierComponent,
    PointageMensuelComponent,
    TelechargerPointageComponent,
    Ajouter0Component,
    Ajouter1Component,
    Ajouter2Component,
    ParametrageLogicielComponent,
    ChampDeCalculeDynamiqueComponent,
    EditeurDeFormulePointageJournalierComponent,
    EditeurDeFormulePointageMensuelComponent,
    GestionDaccesComponent,
    TypeSeanceComponent,
    ParametragePointageComponent,
    EmployeComponent,
    AdminComponent,
    ReposComponent,
    JourFerieComponent,
    Ajouter3Component,
    RapportetstatistiqueComponent,
    HeuresSuppComponent,
    TableauDeBordComponent,
    ListeDesAbsencesComponent,
    ListeDesRetardsComponent,
    ListeDesCongesComponent,
    ListeDesPointagesComponent,
    PointageManquantComponent,
    Ajouter4Component,
    PauseComponent,
    ModeleComponent,
    Ajouter5Component,
    Ajouter6Component,
    Ajouter7Component,
    TimeflowComponent,
    

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '',redirectTo: 'acceuil', pathMatch: 'full' },
      { path: 'planning', component: PlanningComponent},
      { path: 'pointage', component: PointageComponent},
      { path: 'machine', component: MachineComponent},
      { path: 'hierarchie', component: HierarchiComponent},
      { path: 'paramétrage-logiciel', component: ParametrageLogicielComponent},
      { path: 'paramétrage-pointage', component: ParametragePointageComponent},
      { path: 'rapportetsatistique', component: RapportetstatistiqueComponent},
      { path: 'login', component: LoginComponent},
      { path: 'signup', component: SignupComponent},
      { path: 'filiale', component: FilialeComponent},
      { path: 'site', component: SiteComponent},
      { path: 'service', component: ServiceComponent},
      { path: 'pointeuse', component: PointeuseComponent},
      { path: 'configuration-pointeuse', component: ConfigurationComponent},
      { path: 'type-séance', component: TypeSeanceComponent},
      { path: 'gestion-daccés', component: GestionDaccesComponent},
      { path: 'editeur-de-formule-pointage-mensuel', component: EditeurDeFormulePointageMensuelComponent},
      { path: 'editeur-de-formule-pointage-journalier', component: EditeurDeFormulePointageJournalierComponent},
      { path: 'champ-de-calcule-dynamique', component: ChampDeCalculeDynamiqueComponent},
      { path: 'pause', component: PauseComponent},
      { path: 'jourferie', component: JourFerieComponent},
      { path: 'admin', component: AdminComponent},
      { path: 'employe', component: EmployeComponent},
      { path: 'creation-de-planning', component: CreationPlanningComponent},
      { path: 'afficher-planning', component: AfficherPlanningComponent},
      { path: 'telechargerpointage', component: TelechargerPointageComponent},
      { path: 'pointagejournalier', component: PointageJournalierComponent},
      { path: 'pointagemensuel', component: PointageMensuelComponent},
      { path: 'tableau-de-bord', component: TableauDeBordComponent},
      { path: 'pointage-manquant', component: PointageManquantComponent},
      { path: 'heures-supp', component: HeuresSuppComponent},
      { path: 'liste-pointages', component: ListeDesPointagesComponent},
      { path: 'liste-des-retards', component: ListeDesRetardsComponent},
      { path: 'liste-des-absents', component: ListeDesAbsencesComponent},
      { path: 'liste-des-conges', component: ListeDesCongesComponent},
      { path: 'repos', component: ReposComponent},
      { path: 'ajouter0', component: Ajouter0Component},
      { path: 'ajouter1', component: Ajouter1Component},
      { path: 'ajouter2', component: Ajouter2Component},
      { path: 'ajouter3', component: Ajouter3Component},
      { path: 'ajouter4', component: Ajouter4Component},
      { path: 'ajouter5', component: Ajouter5Component},
      { path: 'ajouter6', component: Ajouter6Component},
      { path: 'ajouter7', component: Ajouter7Component},
      { path: 'timeflow', component: TimeflowComponent},
    
    





      { path: '**',redirectTo: 'acceuil', pathMatch: 'full'},

    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
