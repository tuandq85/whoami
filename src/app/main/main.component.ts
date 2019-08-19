import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ChannelDomain, GroupChannelDomain } from '../domain/ChannelDomain';
import { Observable } from 'rxjs';
import { GroupService } from '../services/group.service';
import { LoginResponInfoDomain } from '../domain/UserDomain';
import { ResponseDataAPI } from '../domain/ResponseData';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  channels: Observable<ChannelDomain[]>;
  private groupActive: string;
  private groupInfo: GroupChannelDomain;

  constructor(private router: Router,
    private activeRouter: ActivatedRoute,
    private service: GroupService) { }

  ngOnInit() {
    this.groupActive = this.activeRouter.snapshot.params['active-group'];
    this.loadGroupChannel();
  }

  loadGroupChannel() {
    console.log('Token access :' + localStorage.getItem('whoami'));
    console.log('Group ID :', this.groupActive);
    this.service.getChannelByGroup(this.groupActive, localStorage.getItem('whoami')).subscribe(
    (res: ResponseDataAPI) => {
      this.groupInfo = res.data as GroupChannelDomain;
      this.channels = this.groupInfo.channels;
      console.log("Current chanel: ", this.channels);
    }, (error) => {
      console.log("Error happen.")
    });
  }
  gotoQuizTest() {
    // Get list quiz and start test.
    this.router.navigate(['quiz-test']);
  }
}
