import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';
require('dotenv').config();
// const partialDir=join(__dirname, 'templates');
@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      // imports: [ConfigModule], // import module if not enabled globally
      useFactory: async () => ({
        // transport: config.get("MAIL_TRANSPORT"),
        // or
        transport: {
          host: process.env.MAIL_HOST,
          secure: false,
          port : 587, //Only for mailgun
          auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
          },
        },
        defaults: {
          from: `"${process.env.APP_NAME}" <${process.env.MAIL_FROM}>`,
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: false,
          },
        },
        options: {
          partials: {
            dir: join(__dirname, 'templates/layout'),
            options: {
              strict: true,
            },
          },
        },
      }),
      inject: [],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
