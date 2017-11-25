import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  imagens = [
    {
      id: 1,
      url: 'https://static.vix.com/pt/sites/default/files/t/tatuagem-comida-hamburguer-0816-1400x800.jpg',
      descricao: 'descricao'
    },
    {
      id: 2,
      url: 'http://www.tattoaria.com.br/blog/wp-content/uploads/2017/10/22709229_1506519979391413_6874834656127090688_n-740x410.jpg',
      descricao: 'descricao'
    },
    {
      id: 3,
      url: 'https://www.freetheessence.com.br/lib/uploads/2016/08/tatuagem.jpg',
      descricao: 'descricao'
    },
    {
      id: 4,
      url: 'http://cdn.blog.psafe.com/blog/wp-content/uploads/2016/07/header_BR_3006_perfis_instagram_apaixonados_tatuagem.jpg',
      descricao: 'descricao'
    },
    {
      id: 5,
      url: 'https://i.pinimg.com/736x/89/4d/3a/894d3ab980224d8d86ba20a4eb9d6d82--lace-tattoos-house.jpg',
      descricao: 'descricao'
    }
  ];
  ngOnInit() {}
}
