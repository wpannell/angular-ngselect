import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgSelectModule} from '@ng-select/ng-select';
import { AppComponent,TestComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  imports:      [ BrowserModule, FormsModule,NgSelectModule,ReactiveFormsModule ],
  declarations: [ AppComponent,TestComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
