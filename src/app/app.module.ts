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
import { HttpInterceptorComponent } from './http-interceptor/http-interceptor.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { TokenInterceptor } from './services/token.interceptor';
import { ActivatedRouteVActivatedRouteSnapshotComponent } from './activated-route-v-activated-route-snapshot/activated-route-v-activated-route-snapshot.component';
import { UserComponent } from './user/user.component';
import { OfficeComponent } from './office/office.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SimpleObservableComponent } from './simple-observable/simple-observable.component';
import { WebWorkerExampleComponent } from './web-worker-example/web-worker-example.component';

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
    ForkJoinExampleComponent,
    HttpInterceptorComponent,
    ActivatedRouteVActivatedRouteSnapshotComponent,
    UserComponent,
    OfficeComponent,
    ContentProjectionComponent,
    AsyncPipeComponent,
    ReactiveFormComponent,
    SimpleObservableComponent,
    WebWorkerExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
