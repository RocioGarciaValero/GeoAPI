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
import {Avatar} from '../models';
import {AvatarRepository} from '../repositories';

export class AvatarController {
  constructor(
    @repository(AvatarRepository)
    public avatarRepository : AvatarRepository,
  ) {}

  @post('/avatars', {
    responses: {
      '200': {
        description: 'Avatar model instance',
        content: {'application/json': {schema: {'x-ts-type': Avatar}}},
      },
    },
  })
  async create(@requestBody() avatar: Avatar): Promise<Avatar> {
    return await this.avatarRepository.create(avatar);
  }

  @get('/avatars/count', {
    responses: {
      '200': {
        description: 'Avatar model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Avatar)) where?: Where,
  ): Promise<Count> {
    return await this.avatarRepository.count(where);
  }

  @get('/avatars', {
    responses: {
      '200': {
        description: 'Array of Avatar model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Avatar}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Avatar)) filter?: Filter,
  ): Promise<Avatar[]> {
    return await this.avatarRepository.find(filter);
  }

  @patch('/avatars', {
    responses: {
      '200': {
        description: 'Avatar PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() avatar: Avatar,
    @param.query.object('where', getWhereSchemaFor(Avatar)) where?: Where,
  ): Promise<Count> {
    return await this.avatarRepository.updateAll(avatar, where);
  }

  @get('/avatars/{id}', {
    responses: {
      '200': {
        description: 'Avatar model instance',
        content: {'application/json': {schema: {'x-ts-type': Avatar}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Avatar> {
    return await this.avatarRepository.findById(id);
  }

  @patch('/avatars/{id}', {
    responses: {
      '204': {
        description: 'Avatar PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() avatar: Avatar,
  ): Promise<void> {
    await this.avatarRepository.updateById(id, avatar);
  }

  @put('/avatars/{id}', {
    responses: {
      '204': {
        description: 'Avatar PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() avatar: Avatar,
  ): Promise<void> {
    await this.avatarRepository.replaceById(id, avatar);
  }

  @del('/avatars/{id}', {
    responses: {
      '204': {
        description: 'Avatar DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.avatarRepository.deleteById(id);
  }
}
