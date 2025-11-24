import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';

@Injectable()
export class NotificationMessageService {
  constructor(
    private readonly langService: I18nService,
  ) { }
  
  async getMessage(key: string,data : any = {}) {
    let msg = {}
    return msg[key];
  }
}
