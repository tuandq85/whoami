import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ChannelDomain } from '../domain/ChannelDomain';
import { Observable } from 'rxjs';
import { GroupService } from '../services/group.service';
import { LoginResponInfoDomain } from '../domain/UserDomain';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  channels: Observable<ChannelDomain[]>;
  private groupActive: string;
  info: LoginResponInfoDomain = new LoginResponInfoDomain();

  constructor(private router: Router, 
              private activeRouter: ActivatedRoute,
              private service: GroupService) { }

  ngOnInit() {
    this.groupActive = this.activeRouter.snapshot.params['group-id'];
    this.loadGroupChannel();
  }

  loadGroupChannel() {
    this.info = JSON.parse(localStorage.getItem('whoami')) as LoginResponInfoDomain;
    this.channels = this.service.getChannelByGroup(this.groupActive, this.info);
  }
  gotoQuizTest() {
    // Get list quiz and start test.
    this.router.navigate(['quiz-test']);
  }
}
