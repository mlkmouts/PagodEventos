import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';

import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { EditComponent } from './components/edit/edit.component';
import { BandaComponent } from './components/create/modal/banda/banda.component';
import { LocalComponent } from './components/create/modal/local/local.component';


const routes:Routes=[
  {
    path:"create",
    component:CreateComponent

},
{
  path:"",
  component:IndexComponent
},
{
  path:"edit/:id",
  component:EditComponent
}
]


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    IndexComponent,
    EditComponent,
    BandaComponent,
    LocalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MomentModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
