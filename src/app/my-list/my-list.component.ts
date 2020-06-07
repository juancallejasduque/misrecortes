import { Component, OnInit } from '@angular/core';

//import {PageLinkService} from '../core/services/page-link.service';
import {PageLinkServiceMock} from '../core/mocks/page-link.service.mock';
//import {PageLink} from '../shared/models/page-link.model'
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  title = 'Lista';
  pageLinkList;

  constructor(private pageLinkService: PageLinkServiceMock) { 
    this.pageLinkList = this.pageLinkService.getPageLinks();
  }

  ngOnInit() {
  }

}
