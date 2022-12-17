import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {element} from 'protractor';

declare var $: any;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // 当前轮播图下标
  curFig = 0;

  constructor(private message: NzMessageService) { }

  ngOnInit(): void {
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
    // curli.css('opacity', 1);
    curli.animate({opacity: '1'}, 1000);
    curli.css('zIndex', 1);
    setInterval(() => {
      ++this.curFig;
      // curli.css('opacity', 0);
      curli.animate({opacity: '0'}, 500);
      curli.css('zIndex', 0);
      curli = $('#ulid').children('li').eq(this.curFig = this.curFig % len);
      // curli.css('opacity', 1);
      curli.animate({opacity: '1'}, 1000);
      curli.css('zIndex', 1);
    }, 10000);
  }
}
