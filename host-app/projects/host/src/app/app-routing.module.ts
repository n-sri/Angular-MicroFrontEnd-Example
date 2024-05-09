import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'mfe1',
    loadChildren: () => {
      return import('remoteapp1/homeModule').then(
        (module) => module.HomeModule
      );
    },
  },
  {
    path: 'mfe2',
    loadChildren: () => {
      return import('remoteapp2/homeModule').then(
        (module) => module.HomeModule
      );
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
