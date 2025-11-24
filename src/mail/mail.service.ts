import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService
    ) {}

  /**
   * 
   * @param to Global function to send email
   * @param subject 
   * @param template 
   * @param data 
   */
  async sendEmail(to: any,subject : string,template : string,data: any) {
    try {
      await this.mailerService.sendMail({
        to: to,
        subject: subject,
        template: template,
        context: data
      });
    } catch (e) {
        console.log("Send Email Exception Error : " + e);
        return e;
    }
  }

}