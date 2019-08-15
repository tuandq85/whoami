import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ChannelDomain } from '../domain/ChannelDomain';
import { Observable } from 'rxjs';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  channels: Observable<ChannelDomain[]>;
  private groupActive: string;

  constructor(private router: Router, 
              private activeRouter: ActivatedRoute,
              private service: GroupService) { }

  ngOnInit() {
    this.groupActive = this.activeRouter.snapshot.params['group-id'];
    this.loadGroupChannel();
  }

  loadGroupChannel() {
    this.channels = this.service.getChannelByGroup(this.groupActive);
  }
  gotoQuizTest() {
    // Get list quiz and start test.
    this.router.navigate(['quiz-test']);
  }
}
