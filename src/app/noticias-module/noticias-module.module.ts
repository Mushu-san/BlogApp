import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasModuleRoutingModule } from './noticias-module-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { DetailNewsComponent } from './detail-news/detail-news.component';
import { NewsComponent } from './news/news.component';
import { RelatedNewsComponent } from './news/related-news/related-news.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    NewsComponent,
    DetailNewsComponent,
    RelatedNewsComponent,
    CategoriesComponent,
  ],
  imports: [CommonModule, NoticiasModuleRoutingModule, IonicModule],
})
export class NoticiasModuleModule {}
