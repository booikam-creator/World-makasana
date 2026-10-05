import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AcountComponent } from './pages/acount/acount.component';
import { signinGuard } from './guards/signin.guard';
import { StoreComponent } from './pages/store/store.component';
import { MainComponent } from './pages/main/main.component';
import { LandingComponent } from './admin/landing/landing.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { StepDetailComponent } from './admin/step-detail/step-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  {path:'store/:name', component:StoreComponent},
  {path:'mc/:name', component:MainComponent},
  {path:'landing', component:LandingComponent},
  {path:'verify',component:VerifyComponent},
  {path:'step',  component:StepDetailComponent},
  {
    path: 'account',
  //  canActivate: [signinGuard],
    component: AcountComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
