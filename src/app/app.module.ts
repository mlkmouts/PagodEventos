import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { EditComponent } from './components/edit/edit.component';

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
    EditComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
