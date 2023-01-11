import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { TabularformComponent } from './tabularform/tabularform.component';

const routes: Routes = [

    {//login path
      path:``,component:TabularformComponent
    },
  {
    path:`registration`,component:RegistrationComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
