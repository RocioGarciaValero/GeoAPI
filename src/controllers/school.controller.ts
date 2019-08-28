import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {School} from '../models';
import {SchoolRepository} from '../repositories';

export class SchoolController {
  constructor(
    @repository(SchoolRepository)
    public schoolRepository : SchoolRepository,
  ) {}

  @post('/schools', {
    responses: {
      '200': {
        description: 'School model instance',
        content: {'application/json': {schema: {'x-ts-type': School}}},
      },
    },
  })
  async create(@requestBody() school: School): Promise<School> {
    return await this.schoolRepository.create(school);
  }

  @get('/schools/count', {
    responses: {
      '200': {
        description: 'School model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(School)) where?: Where,
  ): Promise<Count> {
    return await this.schoolRepository.count(where);
  }

  @get('/schools', {
    responses: {
      '200': {
        description: 'Array of School model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': School}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(School)) filter?: Filter,
  ): Promise<School[]> {
    return await this.schoolRepository.find(filter);
  }

  @patch('/schools', {
    responses: {
      '200': {
        description: 'School PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() school: School,
    @param.query.object('where', getWhereSchemaFor(School)) where?: Where,
  ): Promise<Count> {
    return await this.schoolRepository.updateAll(school, where);
  }

  @get('/schools/{id}', {
    responses: {
      '200': {
        description: 'School model instance',
        content: {'application/json': {schema: {'x-ts-type': School}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<School> {
    return await this.schoolRepository.findById(id);
  }

  @patch('/schools/{id}', {
    responses: {
      '204': {
        description: 'School PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() school: School,
  ): Promise<void> {
    await this.schoolRepository.updateById(id, school);
  }

  @put('/schools/{id}', {
    responses: {
      '204': {
        description: 'School PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() school: School,
  ): Promise<void> {
    await this.schoolRepository.replaceById(id, school);
  }

  @del('/schools/{id}', {
    responses: {
      '204': {
        description: 'School DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.schoolRepository.deleteById(id);
  }
}
