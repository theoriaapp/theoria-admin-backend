import { HttpException } from "@nestjs/common";
import { CONSTANTS } from "src/config/constants";

/**
 * 
 * @param statusCode 
 * @param data 
 * @param errors 
 * @returns 
 * Document link - API https://docs.google.com/document/d/13gTY5AEgCIQe48VfXNpaals6jBTNmzy0ZUu0bOyjpKQ/edit
 */
export function httpResponse(
    statusCode: any = 404,
    data: any = {},
    errors: any = {},
    message: any = "",
    devGuid: any = "",
    isPaidUser: any = 0,
    extraKeyValObj: any = {}
) {

    throw new HttpException(
        {
            "statusCode": statusCode,
            "data": data,
            "error": errors,
            "message": message,
            "devGuid": devGuid,
            "androidVersion": CONSTANTS.ANDROID_APP_VERSION,
            "iosVersion": CONSTANTS.IOS_APP_VERSION,
            "forceUpdateAndroid": 1,
            "forceUpdateIos": 1,
            "extraKeyValObj": extraKeyValObj
        },
        statusCode
    );
}
