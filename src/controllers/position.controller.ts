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
import {Position} from '../models';
import {PositionRepository} from '../repositories';

export class PositionController {
  constructor(
    @repository(PositionRepository)
    public positionRepository : PositionRepository,
  ) {}

  @post('/positions', {
    responses: {
      '200': {
        description: 'Position model instance',
        content: {'application/json': {schema: {'x-ts-type': Position}}},
      },
    },
  })
  async create(@requestBody() position: Position): Promise<Position> {
    return await this.positionRepository.create(position);
  }

  @get('/positions/count', {
    responses: {
      '200': {
        description: 'Position model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Position)) where?: Where,
  ): Promise<Count> {
    return await this.positionRepository.count(where);
  }

  @get('/positions', {
    responses: {
      '200': {
        description: 'Array of Position model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Position}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Position)) filter?: Filter,
  ): Promise<Position[]> {
    return await this.positionRepository.find(filter);
  }

  @patch('/positions', {
    responses: {
      '200': {
        description: 'Position PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() position: Position,
    @param.query.object('where', getWhereSchemaFor(Position)) where?: Where,
  ): Promise<Count> {
    return await this.positionRepository.updateAll(position, where);
  }

  @get('/positions/{id}', {
    responses: {
      '200': {
        description: 'Position model instance',
        content: {'application/json': {schema: {'x-ts-type': Position}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Position> {
    return await this.positionRepository.findById(id);
  }

  @patch('/positions/{id}', {
    responses: {
      '204': {
        description: 'Position PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() position: Position,
  ): Promise<void> {
    await this.positionRepository.updateById(id, position);
  }

  @put('/positions/{id}', {
    responses: {
      '204': {
        description: 'Position PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() position: Position,
  ): Promise<void> {
    await this.positionRepository.replaceById(id, position);
  }

  @del('/positions/{id}', {
    responses: {
      '204': {
        description: 'Position DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.positionRepository.deleteById(id);
  }
}
