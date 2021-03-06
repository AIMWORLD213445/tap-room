import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { KegListComponent } from './keg-list.component';
import { KegEditComponent } from './keg-edit.component';
import { FormsModule }   from '@angular/forms';
import { NewKegComponent } from './new-keg.component';
import { ABVAmountPipe } from './abv.pipe';
import { PricePipe } from './price.pipe'

@NgModule({
  imports: [BrowserModule,FormsModule],
  declarations: [ AppComponent,
    KegListComponent,
    KegEditComponent,
    NewKegComponent,
    ABVAmountPipe,
    PricePipe
 ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
