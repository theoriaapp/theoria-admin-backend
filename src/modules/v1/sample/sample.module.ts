import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SampleController } from './sample.controller';
import { SampleService } from './sample.service';
import { SampleRepository } from './repository/sample.repository';
import { SampleEntity } from './entities/sample.entity';

@Module({
  imports: [TypeOrmModule.forFeature(
    [
      SampleEntity
    ]
  )],
  controllers: [SampleController],
  providers: [SampleService,SampleRepository]
})
export class SampleModule { }
