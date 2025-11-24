import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { CONSTANTS } from "src/config/constants";
import { STATUSCODE } from "src/config/status-code";
import { ValidationException } from "./validation.exception";

@Catch(ValidationException)
export class ValidationFilter implements ExceptionFilter {
    catch(exception: ValidationException, host: ArgumentsHost): any {
        const context = host.switchToHttp();
        const response = context.getResponse();

        return response.status(STATUSCODE.ERROR).json({
            // validationErrors: exception.validationErrors,
            statusCode: STATUSCODE.ERROR,
            message: "",
            devGuid: "",
            data: {},
            error: {
                key_name: exception.validationErrors[0].key_name,
                message: exception.validationErrors[0].message,
            },
            androidVersion: CONSTANTS.ANDROID_APP_VERSION,
            iosVersion: CONSTANTS.IOS_APP_VERSION,
            forceUpdateAndroid: 1,
            forceUpdateIos: 1
        })
    }
}