import { Observable } from 'rxjs';

export class ResponseDataAPI {
    data: Object;
    total_rows: Object;
    errors: Object;
    message: string;
    offset: number;
    limit: number;
    success: boolean;
}