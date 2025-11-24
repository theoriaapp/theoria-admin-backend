import { Injectable } from '@nestjs/common';

import * as Pusher from "pusher"
require('dotenv').config();

@Injectable()
export class PusherService {

    pusher = new Pusher({
        appId: process.env.PUSHER_APP_ID,
        key: process.env.PUSHER_KEY,
        secret: process.env.PUSHER_SECRET,
        cluster: process.env.PUSHER_CLUSTER,
        useTLS: true
    });

    // pusher.trigger("my-channel", "my-event", {
    //     message: "hello world"
    // });

    /**
     * Broadcast message with channel, event and data payload
     * used in poll service, attendance service
     * @param pusherObj 
     */
    async _broadCastMessage(pusherObj: any) {
        try {
            let channel = pusherObj.channel;
            let event = pusherObj.event;
            let message = pusherObj.hasOwnProperty('message') ? pusherObj.message : 'new data available';
            let payload = pusherObj.hasOwnProperty('payload') ? pusherObj.payload : {};
            await this.pusher.trigger(
                channel,
                event,
                {
                    payload: payload,
                    message: message
                }
            );
        }
        catch (e) {
            console.log(e);
        }
    }

}
