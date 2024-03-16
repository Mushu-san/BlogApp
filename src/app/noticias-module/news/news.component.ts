import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from './../../general-module/Services/noticias.service';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/general-module/Services/categoria.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: any[] = [];

  constructor(private noticiasService: NoticiasService, private router: ActivatedRoute, private categoriaService: CategoriaService) { }

  ngOnInit(): void {

    this.router.params.subscribe(params => {
      const id = params['id'];
      if(!id){
        this.noticiasService.getNews().subscribe(async response => {
          this.news = await response;
          console.log(this.news);
        });
      }
      else{
        this.categoriaService.getNewsByCategory(id).subscribe(async response => {
          this.news = await response;
          console.log(this.news);
        });
      }

    });






  }

}
