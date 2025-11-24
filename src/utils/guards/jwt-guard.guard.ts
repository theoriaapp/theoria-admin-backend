import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    /*canActivate(context: ExecutionContext) {
        return super.canActivate(context);
    }
    
    handleRequest(err, user, info) {
        if (err || !user) {
            return response.status(422).json({
                // validationErrors: exception.validationErrors,
                statusCode: 4011,
                message: "",
                data: {},
                error: {}
            })
        //   throw err || new Error("PAJGJGJ");
            // return httpResponse();
        }
        return user;
    }
      

    /*handleRequest(err: any, user: any, info: any, context: any, status: any) {

        if(info){
            // try{
                throw new UnauthorizedException('KP Invalid Token!');
            // }
            // catch(err){
                // throw new JwtException({
                //     key_name : "adfasfd",
                //     message : "sdfsdf"
                // });
            // }

            // return response.status(999).json({
            //     // validationErrors: exception.validationErrors,
            //     status_code: 999,
            //     message: "",
            //     data: {},
            //     error: {}
            // })
        }

        // console.log(info);
        // if (info instanceof JsonWebTokenError) {
        //     throw new UnauthorizedException('Invalid Token!');
        // }
        return super.handleRequest(err, user, info, context, status);
    }*/
}
