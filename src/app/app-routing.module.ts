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

const routes: Routes = [
  {path :'home', component:HomeComponent},
  {path :'products', component:ProductsComponent},
  {
    path :'about', component:AboutComponent,
    children:[{path:'edit', component: EditComponent}]
  },
  {path :'admin', component:AdminComponent, canActivate: [AuthGuard]}, 
  {path :'contact', component:ContactComponent},
  { 
      path :'offers',
      loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule)
  },
  {
    path:'access-denied', component: AccessDeniedComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
