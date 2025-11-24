import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { SampleEntity } from '../entities/sample.entity';

@Injectable()
export class SampleRepository{

  constructor(
    @InjectRepository(SampleEntity) private readonly repository: Repository<SampleEntity>
  ) {}

  /**
   * Create / Update
   * @param dto 
   * @returns 
   */
  async saveEntity(dto: any) {
    try {
      return await this.repository.save(dto);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    var query = this.repository.createQueryBuilder('s')
      .select([
        's.id_sample as id_sample',
        's.title as title',
        's.status as status',
        's.created_at as created_at',
        's.updated_at as updated_at'
      ])

      query.orderBy({
        's.id_sample': 'DESC',
      })

    return query.getRawMany();
  }

}