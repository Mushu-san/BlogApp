import { ActivatedRoute, Router } from '@angular/router';
import { NoticiasService } from './../../general-module/Services/noticias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.scss']
})
export class DetailNewsComponent implements OnInit {

  relatedNews!: any[];
  new: any = {};

  constructor(private noticiasService: NoticiasService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      const id = params['id'];
      this.noticiasService.getNewsById(id).subscribe(response => {

        this.new = response.noticia;
        this.relatedNews = response.relacionados.filter((noticia: any) => noticia.id != id);
      });
    });

  }

}
