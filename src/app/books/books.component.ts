import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as $ from 'jquery';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  visible = false;
  constructor(public message: NzMessageService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.data.name === 'books'){
      $('#books').css('color', '#d32f2f');
    }
  }

}
