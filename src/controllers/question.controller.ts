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
import {Question} from '../models';
import {QuestionRepository} from '../repositories';

export class QuestionController {
  constructor(
    @repository(QuestionRepository)
    public questionRepository : QuestionRepository,
  ) {}

  @post('/questions', {
    responses: {
      '200': {
        description: 'Question model instance',
        content: {'application/json': {schema: {'x-ts-type': Question}}},
      },
    },
  })
  async create(@requestBody() question: Question): Promise<Question> {
    return await this.questionRepository.create(question);
  }

  @get('/questions/count', {
    responses: {
      '200': {
        description: 'Question model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Question)) where?: Where,
  ): Promise<Count> {
    return await this.questionRepository.count(where);
  }

  @get('/questions', {
    responses: {
      '200': {
        description: 'Array of Question model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Question}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Question)) filter?: Filter,
  ): Promise<Question[]> {
    return await this.questionRepository.find(filter);
  }

  @patch('/questions', {
    responses: {
      '200': {
        description: 'Question PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() question: Question,
    @param.query.object('where', getWhereSchemaFor(Question)) where?: Where,
  ): Promise<Count> {
    return await this.questionRepository.updateAll(question, where);
  }

  @get('/questions/{id}', {
    responses: {
      '200': {
        description: 'Question model instance',
        content: {'application/json': {schema: {'x-ts-type': Question}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Question> {
    return await this.questionRepository.findById(id);
  }

  @patch('/questions/{id}', {
    responses: {
      '204': {
        description: 'Question PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() question: Question,
  ): Promise<void> {
    await this.questionRepository.updateById(id, question);
  }

  @put('/questions/{id}', {
    responses: {
      '204': {
        description: 'Question PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() question: Question,
  ): Promise<void> {
    await this.questionRepository.replaceById(id, question);
  }

  @del('/questions/{id}', {
    responses: {
      '204': {
        description: 'Question DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.questionRepository.deleteById(id);
  }
}
