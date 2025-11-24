import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig } from "./config/database.config";
import { SampleModule } from './modules/v1/sample/sample.module';
import * as path from 'path';
import { I18nJsonParser, I18nModule } from 'nestjs-i18n';
import { MailModule } from './mail/mail.module';
import { AuthModule } from './modules/v1/auth/auth.module';
import { MessageModule } from './lang/message.module';
import { CryptoModule } from './utils/crypto/crypto.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TwilioModule } from 'nestjs-twilio';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PusherModule } from './utils/pusher/pusher.module';
import { ResponseInterceptor } from './utils/response.interceptor';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    //translation msg 
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      parser: I18nJsonParser,
      parserOptions: {
        path: path.join(__dirname, '/lang/'),
      },
    }),
    //sms sending twilio api 
    TwilioModule.forRoot({
      accountSid: process.env.TWILIO_ACCOUNT_SID,
      authToken: process.env.TWILIO_AUTH_TOKEN,
    }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot(DatabaseConfig),
    AuthModule,
    MailModule,
    MessageModule,
    CryptoModule,
    PusherModule,
    SampleModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ResponseInterceptor
  ]
})
export class AppModule {
}
