import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { KegListComponent } from './keg-list.component';
import { KegEditComponent } from './keg-edit.component';
import { FormsModule }   from '@angular/forms';
import { NewKegComponent } from './new-keg.component';


@NgModule({
  imports: [BrowserModule,FormsModule],
  declarations: [ AppComponent, KegListComponent, KegEditComponent, NewKegComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
