import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';


@Injectable()
export class MessageService {
  constructor(
    private readonly langService: I18nService,
  ) { }

  /**
   * validation error message
   * @param key 
   * @param data 
   * @returns 
   */
  async getErrorMessage(key: string,keyName : string = 'custom_error',data : any = {}) {
    let messages = {
      "somethingWentWrong" : {
        "key_name": keyName,
        "message": await this.langService.translate('validation.SOMETHING_WENT_WRONG_ERROR')
      },
      "notFound" : {
        "key_name": keyName,
        "message": await this.langService.translate('validation.NOT_FOUND')
      },
    }
    return messages[key];
  }

  async getSuccessMessage(key: string,data : Object = {}) {
    let messages = {
      "CreateSuccess":await this.langService.translate('message.CREATE_SUCCESS')
    }
    return messages[key];
  }


}
