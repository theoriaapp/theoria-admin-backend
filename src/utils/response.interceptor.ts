import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import * as moment from 'moment-timezone';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response> {
    const clientTimeZone = context.switchToHttp().getRequest().headers['client-timezone'];
    var clientCurrentTime: any = 0;
    if (clientTimeZone) {
      var now = moment().utc();
      const responseObj = context.switchToHttp().getResponse();
      // responseObj.setHeader("Access-Control-Expose-Headers", "client-current-time");
      // responseObj.setHeader('client-current-time', now.tz(clientTimeZone).unix());
      clientCurrentTime = now.tz(clientTimeZone).unix();
    }


    const now1 = Date.now();
    return next.handle().pipe(
      tap((data) => {
        // you can capture user-agent string of user browser and save it to logger
        // also can calculate the execution time.
      }),
      catchError((err) => {
        // console.log(clientCurrentTime);
        if (clientCurrentTime != 0 && err.response != undefined) {
          // err.response['client-current-time'] = clientCurrentTime;
        }
        throw err; // throwing it for client
      }),
    );

  }
}

