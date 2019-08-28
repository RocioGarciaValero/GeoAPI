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
import { Answer } from '../models';
import { AnswerRepository } from '../repositories';

export class AnswerController {
  constructor(
    @repository(AnswerRepository)
    public answerRepository: AnswerRepository,
  ) { }

  @post('/answers', {
    responses: {
      '200': {
        description: 'Answer model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Answer } } },
      },
    },
  })
  async create(@requestBody() answer: Answer): Promise<Answer> {
    return await this.answerRepository.create(answer);
  }

  @get('/answers/count', {
    responses: {
      '200': {
        description: 'Answer model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Answer)) where?: Where,
  ): Promise<Count> {
    return await this.answerRepository.count(where);
  }

  @get('/answers', {
    responses: {
      '200': {
        description: 'Array of Answer model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Answer } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Answer)) filter?: Filter,
  ): Promise<Answer[]> {
    return await this.answerRepository.find(filter);
  }

  @patch('/answers', {
    responses: {
      '200': {
        description: 'Answer PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() answer: Answer,
    @param.query.object('where', getWhereSchemaFor(Answer)) where?: Where,
  ): Promise<Count> {
    return await this.answerRepository.updateAll(answer, where);
  }

  @get('/answers/{id}', {
    responses: {
      '200': {
        description: 'Answer model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Answer } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Answer> {
    return await this.answerRepository.findById(id);
  }

  @patch('/answers/{id}', {
    responses: {
      '204': {
        description: 'Answer PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() answer: Answer,
  ): Promise<void> {
    await this.answerRepository.updateById(id, answer);
  }

  @put('/answers/{id}', {
    responses: {
      '204': {
        description: 'Answer PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() answer: Answer,
  ): Promise<void> {
    await this.answerRepository.replaceById(id, answer);
  }

  @del('/answers/{id}', {
    responses: {
      '204': {
        description: 'Answer DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.answerRepository.deleteById(id);
  }
}
