import { Injectable } from '@nestjs/common';
import { httpResponse } from 'src/utils/response';
import { STATUSCODE } from 'src/config/status-code';
import { SampleRepository } from './repository/sample.repository';

@Injectable()
export class SampleService {
  constructor(
    private readonly sampleRepository: SampleRepository
  ) { }

  async index() {
    return httpResponse(STATUSCODE.SUCCESS, await this.sampleRepository.findAll());
  }
  
}
