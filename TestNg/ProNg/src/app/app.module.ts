import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';  
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { DailogMaterialComponent } from './dailog-material/dailog-material.component';
import { MaterialTablesComponent } from './material-tables/material-tables.component';
import { HomeComponent } from './home/home.component'; 
import { EmpSevices} from './Shared/emp-sevices';
import { AlertComponent } from './alert/alert.component'
 


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    DailogMaterialComponent,
    MaterialTablesComponent,
    HomeComponent,
    AlertComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
    
  ],
  exports :[
    AppRoutingModule,
    
  ],
  providers: [EmpSevices],
  bootstrap: [AppComponent]
})
export class AppModule { }
