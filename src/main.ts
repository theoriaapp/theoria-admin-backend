import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationFilter } from './utils/exeption-filter/validation.filter';
import { ValidationException } from './utils/exeption-filter/validation.exception';
import { join } from 'path';
import * as express from 'express';
require('dotenv').config();

// import * as admin from 'firebase-admin';
// import { ServiceAccount } from "firebase-admin";
import { ResponseInterceptor } from './utils/response.interceptor';
import { urlencoded, json } from 'express';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  try {
    // Get DataSource using the correct token
    const dataSource = app.get(DataSource);

    // Check connection status
    if (dataSource.isInitialized) {
      console.log('✅ Database connected successfully!');
      console.log(`📊 Database Name : ${dataSource.options.database}`);
      // console.log(`🏠 Host: ${dataSource.options.host}:${dataSource.options.port}`);
      // console.log(`👤 User: ${dataSource.options.username}`);
    } else {
      console.error('❌ Database connection failed!');
    }
  } catch (error) {
    console.error('❌ Error checking database connection:', error.message);
  }

  // Serve the public folder
  app.use('/public', express.static(join(__dirname, '..', 'public')));

  /** 413 : Request entity too large error */
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  /** 413 : Request entity too large error */

  app.useGlobalInterceptors(new ResponseInterceptor()); //global response interceptor

  /** Global Validation */
  app.useGlobalFilters(
    new ValidationFilter()
  )
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    skipMissingProperties: false,
    exceptionFactory: (errors: any) => {
      const messages = errors.map((error) => {
        // error: `${error.property} has wrong value ${error.value}.`,
        return {
          key_name: `${error.property}`,
          // message: Object.values(error.constraints).join(', '),
          message: Object.values(error.constraints).join(', '),
          // message: Object.values(error.constraints)[0]
        }
      })
      return new ValidationException(messages);
    }
  }));

  /** Application versioning */
  app.enableVersioning({
    type: VersioningType.URI,
  });

  const config = new DocumentBuilder()
    .setTitle(process.env.APP_NAME)
    // .setDescription("Nest JS API")
    .setVersion('v1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 } // hide schema option from ui
  });

  app.enableCors(); // To access api in other apps

  /*
  const adminConfig: ServiceAccount = {
    "projectId": process.env.FIREBASE_PROJECT_ID,
    "privateKey": process.env.FIREBASE_PVT_KEY,
    "clientEmail": process.env.FIREBASE_CLIENT_EMAIL
  };

  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
    // databaseURL: "https://xxxxx.firebaseio.com",
  });
  */

  /** Application serve on port 3000 */
  await app.listen(process.env.APP_PORT);
}
bootstrap();
