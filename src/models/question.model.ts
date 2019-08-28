import { Entity, model, property } from '@loopback/repository';

@model({ settings: { "strict": false } })
export class Question extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'string',
    required: true,
  })
  image: string;

  @property({
    type: 'number',
    required: true,
  })
  time: number;

  @property({
    type: 'number',
    required: true,
  })
  id: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  //[prop: string]: any;

  constructor(data?: Partial<Question>) {
    super(data);
  }
}
