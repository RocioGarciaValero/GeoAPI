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
import {Hint} from '../models';
import {HintRepository} from '../repositories';

export class HintController {
  constructor(
    @repository(HintRepository)
    public hintRepository : HintRepository,
  ) {}

  @post('/hints', {
    responses: {
      '200': {
        description: 'Hint model instance',
        content: {'application/json': {schema: {'x-ts-type': Hint}}},
      },
    },
  })
  async create(@requestBody() hint: Hint): Promise<Hint> {
    return await this.hintRepository.create(hint);
  }

  @get('/hints/count', {
    responses: {
      '200': {
        description: 'Hint model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Hint)) where?: Where,
  ): Promise<Count> {
    return await this.hintRepository.count(where);
  }

  @get('/hints', {
    responses: {
      '200': {
        description: 'Array of Hint model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Hint}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Hint)) filter?: Filter,
  ): Promise<Hint[]> {
    return await this.hintRepository.find(filter);
  }

  @patch('/hints', {
    responses: {
      '200': {
        description: 'Hint PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() hint: Hint,
    @param.query.object('where', getWhereSchemaFor(Hint)) where?: Where,
  ): Promise<Count> {
    return await this.hintRepository.updateAll(hint, where);
  }

  @get('/hints/{id}', {
    responses: {
      '200': {
        description: 'Hint model instance',
        content: {'application/json': {schema: {'x-ts-type': Hint}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Hint> {
    return await this.hintRepository.findById(id);
  }

  @patch('/hints/{id}', {
    responses: {
      '204': {
        description: 'Hint PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() hint: Hint,
  ): Promise<void> {
    await this.hintRepository.updateById(id, hint);
  }

  @put('/hints/{id}', {
    responses: {
      '204': {
        description: 'Hint PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() hint: Hint,
  ): Promise<void> {
    await this.hintRepository.replaceById(id, hint);
  }

  @del('/hints/{id}', {
    responses: {
      '204': {
        description: 'Hint DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.hintRepository.deleteById(id);
  }
}
