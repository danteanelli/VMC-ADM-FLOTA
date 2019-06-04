import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestService } from './request.service';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private requestService: RequestService) { }
}
