import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { ModifyComponent } from './components/modify/modify.component';

const routes: Routes = [
      {path:'', redirectTo:'/home', pathMatch:'full'},
      {path:'home', component: HomeComponent},
      {path: 'add', component: AddComponent},
      {path:'modify/:id', component: ModifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
