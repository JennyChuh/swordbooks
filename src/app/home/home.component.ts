import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {Router, ActivatedRoute} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// 当前轮播图下标
  curFig = 0;

  constructor(public message: NzMessageService,
              private route: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.data.name === 'home'){
      $('#home').css('color', '#d32f2f');
    }
    this.carousel();
  }

  search(){
    if (!$('input').val()){
      return;
    }
    // 查询数据
    this.message.warning('未搜索到您想看的作品!');
  }

  private carousel(){
    const len = $('#ulid').children('li').length;
    let curli = $('#ulid').children('li').eq(this.curFig = this.curFig % len);
    curli.animate({opacity: '1'}, 1000);
    curli.css('zIndex', 1);
    setInterval(() => {
      ++this.curFig;
      curli.animate({opacity: '0'}, 500);
      curli.css('zIndex', 0);
      curli = $('#ulid').children('li').eq(this.curFig = this.curFig % len);
      curli.animate({opacity: '1'}, 1000);
      curli.css('zIndex', 1);
    }, 10000);
  }

  public prev(){
    const len = $('#ulid').children('li').length;
    let curli = $('#ulid').children('li').eq(this.curFig = this.curFig % len);
    this.curFig = this.curFig + len - 1;
    curli.animate({opacity: '0'}, 500);
    curli.css('zIndex', 0);
    curli = $('#ulid').children('li').eq(this.curFig = this.curFig % len);
    curli.animate({opacity: '1'}, 1000);
    curli.css('zIndex', 1);
  }

  public next(){
    const len = $('#ulid').children('li').length;
    let curli = $('#ulid').children('li').eq(this.curFig = this.curFig % len);
    ++this.curFig;
    curli.animate({opacity: '0'}, 500);
    curli.css('zIndex', 0);
    curli = $('#ulid').children('li').eq(this.curFig = this.curFig % len);
    curli.animate({opacity: '1'}, 1000);
    curli.css('zIndex', 1);
  }
}
