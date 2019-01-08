import { Injectable } from '@angular/core';

@Injectable()
export class PageLinkServiceMock {
  constructor() { }

  getPageLinks(): Array<{}> {
      return [
          {
            id: 1,
            title: "Titulo 1",
            desc: "Este es un titulo de prueba para mas info: PageLinkServiceMock",
            img: "https://via.placeholder.com/150/0000FF/808080 ?Text=Mis RecorteS",
            update: Date(),
            url: "https://getpocket.com"
          }
      ];
  }
}