import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { HighlightDirective } from './highlight.directive';
import { RouterGaurdsComponent } from './router-gaurds/router-gaurds.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { EditComponent } from './edit/edit.component';
import { ObservableVpromiseComponent } from './observable-vpromise/observable-vpromise.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';
import { ForkJoinExampleComponent } from './fork-join-example/fork-join-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveComponent,
    HighlightDirective,
    RouterGaurdsComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    AdminComponent,
    AccessDeniedComponent,
    EditComponent,
    ObservableVpromiseComponent,
    ObservableComponent,
    PromiseComponent,
    ForkJoinExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
