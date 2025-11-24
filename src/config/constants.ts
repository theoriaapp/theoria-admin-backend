require('dotenv').config();

export const CONSTANTS = {
    ENV: {
        LOCAL: 'local',
        PRODUCTION: 'production',
        DEVELOPMENT: 'development',
        STAGING: 'staging'
    },

    V1: "1", // Exa : http://localhost:3000/v1/sample
    VERSIONV1: "v1/",

    WEB_URL: process.env.ANGULAR_APP_URL,

    DEFAULT_PAGE_NUMBER: 1,
    DEFAULT_PAGE_LIMIT: 10,

    ANDROID_APP_VERSION: "1.00",
    IOS_APP_VERSION: "1.00",

    // Bcrypt algorithms
    SALT_ROUND: 10,
    RESET_PW_OTP_EXPIRE_TIME: 30, //in minutes

    //JWT token
    JWT_TOKEN_TYPE: "Bearer",
    JWT_AT_WEB_EXPIRES_IN: '2h',
    JWT_RT_WEB_EXPIRES_IN: '3h',

    // JWT_AT_WEB_LTI_EXPIRES_IN: '5h',
    // JWT_RT_WEB_LTI_EXPIRES_IN: '7h',

    JWT_AT_WEB_LTI_EXPIRES_IN: '60m',
    JWT_RT_WEB_LTI_EXPIRES_IN: '70m',

    // JWT_AT_MOBILE_APP_EXPIRES_IN: '200d', //200d
    // JWT_RT_MOBILE_APP_EXPIRES_IN: '210d',

    JWT_AT_MOBILE_APP_EXPIRES_IN: '180s', //200d
    JWT_RT_MOBILE_APP_EXPIRES_IN: '300s',

    JWT_SECRET: process.env.APP_ENV == 'production' ? 'dfasdfadgtrr' : (process.env.APP_ENV == 'staging' ? 'sghyudhg==' : 'uoltjhrtjt='),

    //Crypto service keys
    CRYPTO_ALGO: 'aes-256-cbc',
    CRYPTO_INIT_VECTOR: '!232sdfgsfg', // 16 Length
    CRYPTO_SECURE_KEY: 'TRRsefgs@!@3243', // 32 Length

    STATUS: {
        INACTIVE: 0,
        ACTIVE: 1,
        DELETED: 2
    }
}
