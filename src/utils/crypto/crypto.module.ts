import { Global, Module } from '@nestjs/common';
import { Helpers } from '../helpers';
import { CryptoService } from './crypto.service';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [CryptoService, Helpers],
  exports: [CryptoService, Helpers],
})
export class CryptoModule { }
