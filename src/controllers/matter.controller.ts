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
import {Matter} from '../models';
import {MatterRepository} from '../repositories';

export class MatterController {
  constructor(
    @repository(MatterRepository)
    public matterRepository : MatterRepository,
  ) {}

  @post('/matters', {
    responses: {
      '200': {
        description: 'Matter model instance',
        content: {'application/json': {schema: {'x-ts-type': Matter}}},
      },
    },
  })
  async create(@requestBody() matter: Matter): Promise<Matter> {
    return await this.matterRepository.create(matter);
  }

  @get('/matters/count', {
    responses: {
      '200': {
        description: 'Matter model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Matter)) where?: Where,
  ): Promise<Count> {
    return await this.matterRepository.count(where);
  }

  @get('/matters', {
    responses: {
      '200': {
        description: 'Array of Matter model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Matter}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Matter)) filter?: Filter,
  ): Promise<Matter[]> {
    return await this.matterRepository.find(filter);
  }

  @patch('/matters', {
    responses: {
      '200': {
        description: 'Matter PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() matter: Matter,
    @param.query.object('where', getWhereSchemaFor(Matter)) where?: Where,
  ): Promise<Count> {
    return await this.matterRepository.updateAll(matter, where);
  }

  @get('/matters/{id}', {
    responses: {
      '200': {
        description: 'Matter model instance',
        content: {'application/json': {schema: {'x-ts-type': Matter}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Matter> {
    return await this.matterRepository.findById(id);
  }

  @patch('/matters/{id}', {
    responses: {
      '204': {
        description: 'Matter PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() matter: Matter,
  ): Promise<void> {
    await this.matterRepository.updateById(id, matter);
  }

  @put('/matters/{id}', {
    responses: {
      '204': {
        description: 'Matter PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() matter: Matter,
  ): Promise<void> {
    await this.matterRepository.replaceById(id, matter);
  }

  @del('/matters/{id}', {
    responses: {
      '204': {
        description: 'Matter DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.matterRepository.deleteById(id);
  }
}
