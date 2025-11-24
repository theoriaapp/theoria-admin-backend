import { Global, Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { NotificationMessageService } from './notification-message.service';

@Global()
@Module({
  imports:[],
  controllers: [],
  providers: [MessageService,NotificationMessageService],
  exports: [MessageService,NotificationMessageService]
})
export class MessageModule {}
