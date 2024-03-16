import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/general-module/Services/categoria.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: any;

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {

    this.categoriaService.getCategories().subscribe((response) => {
      this.categories = response;
    });

  }
}
