import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BottombarComponent } from './components/bottombar/bottombar.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AcountComponent } from './pages/acount/acount.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreComponent } from './pages/store/store.component';
import { MainComponent } from './pages/main/main.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { ReatailComponent } from './components/reatail/reatail.component';
import { LandingComponent } from './admin/landing/landing.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { StepDetailComponent } from './admin/step-detail/step-detail.component';
import { StepPersonComponent } from './admin/step-person/step-person.component';



@NgModule({
  declarations: [
    AppComponent,
    BottombarComponent,
    HomeComponent,
    SignupComponent,
    AcountComponent,
    NavbarComponent,
    StoreComponent,
    MainComponent,
    ReplacePipe,
    ReatailComponent,
    LandingComponent,
    VerifyComponent,
    StepDetailComponent,
    StepPersonComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCardModule,
    AppRoutingModule,
    
],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
