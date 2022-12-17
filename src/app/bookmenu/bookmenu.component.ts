import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-bookmenu',
  templateUrl: './bookmenu.component.html',
  styleUrls: ['./bookmenu.component.css']
})
export class BookmenuComponent{
  routerUrl = '/menu/search';
  constructor(public router: Router, public route: ActivatedRoute) {
  }
  paragaghs = ['一口石棺横陈在灵堂，一波一波的弟子行礼祭拜，人头攒动。',
  '一个身着缟白素衣，清丽绝俗的少女跪在棺前，身段凹凸有致，眼睛红肿，泪痕遍布绝美的脸蛋，我见犹怜。'];

  gotoHome(){
    this.router.navigate(['search'], {relativeTo: this.route});
  }

  getRouterUrl(){
    return this.router.routerState.snapshot.url;
  }
}
