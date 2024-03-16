import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DetailNewsComponent } from './detail-news/detail-news.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [{
  path: '',
  component: NewsComponent,
},
{
  path: 'detail/:id',
  component: DetailNewsComponent
},
{
  path: 'categories',
  component: CategoriesComponent
},
{
  path: ':id',
  component: NewsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasModuleRoutingModule { }
