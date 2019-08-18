import { Observable } from 'rxjs';

export class ChannelDomain {
    channel_id: string;
    channel_name: string;
    channel_description: string;
    create_date: string;
    lock_status: string;
}

export class GroupChannelDomain {
    group_id: string;
    group_name: string;
    group_url: string;
    group_img: string;
    channels: Observable<ChannelDomain[]>;
}