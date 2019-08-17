import { Observable } from 'rxjs';

export class ChannelDomain {
    title: string;
    create_date: string;
    description: string;
}

export class GroupChannelDomain {
    groupId: string;
	groupName: string;
	groupUrl: string;
	groupImg: string;
	channels: Observable<ChannelDomain[]>;
}