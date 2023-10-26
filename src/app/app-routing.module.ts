import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { OffersComponent } from './offers/offers.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './edit/edit.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AuthGuard } from './services/auth.guard';
import { RoleGuard } from './services/role.guard';
import { NotCompleteGuard } from './services/not-complete.guard';
import { ModuleGaurdGuard } from './services/module-gaurd.guard';
import { ResolveGuard } from './services/resolve.guard';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';
import { OfficeComponent } from './office/office.component';
import { UserComponent } from './user/user.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SimpleObservableComponent } from './simple-observable/simple-observable.component';
import { WebWorkerExampleComponent } from './web-worker-example/web-worker-example.component';

const routes: Routes = [
  {path :'home', component:HomeComponent},
  {path :'products', component:ProductsComponent, resolve: { totalFetchedData : ResolveGuard}},
  {
    path :'about', component:AboutComponent, canActivateChild:[RoleGuard],
    children:[{path:'edit', component: EditComponent}] //we can use canActivate here also but it would show us the parent route access-denied page, also we ll have to write for all the children
  },
  {path :'admin', component:AdminComponent, canActivate: [AuthGuard]}, 
  {path :'contact', component:ContactComponent, canDeactivate: [NotCompleteGuard]},
  { 
      path :'offers',
      canLoad:[ModuleGaurdGuard],
      loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule)
  },
  {
    path : 'observable', component: ObservableComponent

  },
  {
    path : 'promise', component:PromiseComponent
  },
  {
    path:'access-denied', component: AccessDeniedComponent
  },
  {
    path:'office', component: OfficeComponent
  },
  {
    path:'user/:id', component : UserComponent
  },
  {
    path:'async-pipe', component : AsyncPipeComponent
  },
  {
    path:'custom-validator', component : ReactiveFormComponent
  },
  {
    path:'simple-observable', component: SimpleObservableComponent
  },
  {
    path: 'web-worker-example', component: WebWorkerExampleComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
