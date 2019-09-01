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
import {Rules} from '../models';
import {RulesRepository} from '../repositories';

export class RulesController {
  constructor(
    @repository(RulesRepository)
    public rulesRepository : RulesRepository,
  ) {}

  @post('/rules', {
    responses: {
      '200': {
        description: 'Rules model instance',
        content: {'application/json': {schema: {'x-ts-type': Rules}}},
      },
    },
  })
  async create(@requestBody() rules: Rules): Promise<Rules> {
    return await this.rulesRepository.create(rules);
  }

  @get('/rules/count', {
    responses: {
      '200': {
        description: 'Rules model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Rules)) where?: Where,
  ): Promise<Count> {
    return await this.rulesRepository.count(where);
  }

  @get('/rules', {
    responses: {
      '200': {
        description: 'Array of Rules model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Rules}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Rules)) filter?: Filter,
  ): Promise<Rules[]> {
    return await this.rulesRepository.find(filter);
  }

  @patch('/rules', {
    responses: {
      '200': {
        description: 'Rules PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() rules: Rules,
    @param.query.object('where', getWhereSchemaFor(Rules)) where?: Where,
  ): Promise<Count> {
    return await this.rulesRepository.updateAll(rules, where);
  }

  @get('/rules/{id}', {
    responses: {
      '200': {
        description: 'Rules model instance',
        content: {'application/json': {schema: {'x-ts-type': Rules}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Rules> {
    return await this.rulesRepository.findById(id);
  }

  @patch('/rules/{id}', {
    responses: {
      '204': {
        description: 'Rules PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() rules: Rules,
  ): Promise<void> {
    await this.rulesRepository.updateById(id, rules);
  }

  @put('/rules/{id}', {
    responses: {
      '204': {
        description: 'Rules PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() rules: Rules,
  ): Promise<void> {
    await this.rulesRepository.replaceById(id, rules);
  }

  @del('/rules/{id}', {
    responses: {
      '204': {
        description: 'Rules DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.rulesRepository.deleteById(id);
  }
}
