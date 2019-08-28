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
import {Group} from '../models';
import {GroupRepository} from '../repositories';

export class GroupController {
  constructor(
    @repository(GroupRepository)
    public groupRepository : GroupRepository,
  ) {}

  @post('/groups', {
    responses: {
      '200': {
        description: 'Group model instance',
        content: {'application/json': {schema: {'x-ts-type': Group}}},
      },
    },
  })
  async create(@requestBody() group: Group): Promise<Group> {
    return await this.groupRepository.create(group);
  }

  @get('/groups/count', {
    responses: {
      '200': {
        description: 'Group model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Group)) where?: Where,
  ): Promise<Count> {
    return await this.groupRepository.count(where);
  }

  @get('/groups', {
    responses: {
      '200': {
        description: 'Array of Group model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Group}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Group)) filter?: Filter,
  ): Promise<Group[]> {
    return await this.groupRepository.find(filter);
  }

  @patch('/groups', {
    responses: {
      '200': {
        description: 'Group PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() group: Group,
    @param.query.object('where', getWhereSchemaFor(Group)) where?: Where,
  ): Promise<Count> {
    return await this.groupRepository.updateAll(group, where);
  }

  @get('/groups/{id}', {
    responses: {
      '200': {
        description: 'Group model instance',
        content: {'application/json': {schema: {'x-ts-type': Group}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Group> {
    return await this.groupRepository.findById(id);
  }

  @patch('/groups/{id}', {
    responses: {
      '204': {
        description: 'Group PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() group: Group,
  ): Promise<void> {
    await this.groupRepository.updateById(id, group);
  }

  @put('/groups/{id}', {
    responses: {
      '204': {
        description: 'Group PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() group: Group,
  ): Promise<void> {
    await this.groupRepository.replaceById(id, group);
  }

  @del('/groups/{id}', {
    responses: {
      '204': {
        description: 'Group DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.groupRepository.deleteById(id);
  }
}
