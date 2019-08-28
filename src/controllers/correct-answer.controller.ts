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
import {CorrectAnswer} from '../models';
import {CorrectAnswerRepository} from '../repositories';

export class CorrectAnswerController {
  constructor(
    @repository(CorrectAnswerRepository)
    public correctAnswerRepository : CorrectAnswerRepository,
  ) {}

  @post('/correct-answers', {
    responses: {
      '200': {
        description: 'CorrectAnswer model instance',
        content: {'application/json': {schema: {'x-ts-type': CorrectAnswer}}},
      },
    },
  })
  async create(@requestBody() correctAnswer: CorrectAnswer): Promise<CorrectAnswer> {
    return await this.correctAnswerRepository.create(correctAnswer);
  }

  @get('/correct-answers/count', {
    responses: {
      '200': {
        description: 'CorrectAnswer model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(CorrectAnswer)) where?: Where,
  ): Promise<Count> {
    return await this.correctAnswerRepository.count(where);
  }

  @get('/correct-answers', {
    responses: {
      '200': {
        description: 'Array of CorrectAnswer model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': CorrectAnswer}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(CorrectAnswer)) filter?: Filter,
  ): Promise<CorrectAnswer[]> {
    return await this.correctAnswerRepository.find(filter);
  }

  @patch('/correct-answers', {
    responses: {
      '200': {
        description: 'CorrectAnswer PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() correctAnswer: CorrectAnswer,
    @param.query.object('where', getWhereSchemaFor(CorrectAnswer)) where?: Where,
  ): Promise<Count> {
    return await this.correctAnswerRepository.updateAll(correctAnswer, where);
  }

  @get('/correct-answers/{id}', {
    responses: {
      '200': {
        description: 'CorrectAnswer model instance',
        content: {'application/json': {schema: {'x-ts-type': CorrectAnswer}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<CorrectAnswer> {
    return await this.correctAnswerRepository.findById(id);
  }

  @patch('/correct-answers/{id}', {
    responses: {
      '204': {
        description: 'CorrectAnswer PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() correctAnswer: CorrectAnswer,
  ): Promise<void> {
    await this.correctAnswerRepository.updateById(id, correctAnswer);
  }

  @put('/correct-answers/{id}', {
    responses: {
      '204': {
        description: 'CorrectAnswer PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() correctAnswer: CorrectAnswer,
  ): Promise<void> {
    await this.correctAnswerRepository.replaceById(id, correctAnswer);
  }

  @del('/correct-answers/{id}', {
    responses: {
      '204': {
        description: 'CorrectAnswer DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.correctAnswerRepository.deleteById(id);
  }
}
