import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CONSTANTS } from 'src/config/constants';
import { SampleService } from './sample.service';
require('dotenv').config();

const controllerPath = 'sample';

@ApiTags(controllerPath)
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@Controller({
  path: controllerPath,
  version: CONSTANTS.V1
})
export class SampleController {
  public APP_URL: any;
  constructor(private sampleService: SampleService) {
  }

  @Get("")
  async index() {
    return await this.sampleService.index();
  }

  
}
