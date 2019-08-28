import { Entity, model, property } from '@loopback/repository';

@model({ settings: { "strict": false } })
export class CorrectAnswer extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  id: number;

  @property({
    type: 'number',
    required: true,
  })
  questionId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  //[prop: string]: any;

  constructor(data?: Partial<CorrectAnswer>) {
    super(data);
  }
}
