import {Entity, model, property} from '@loopback/repository';

@model({settings: {"strict":false}})
export class Game extends Entity {
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
  studentId: number;

  @property({
    type: 'number',
    required: true,
  })
  groupId: number;

  @property({
    type: 'number',
    required: true,
  })
  time: number;

  @property({
    type: 'number',
    required: true,
  })
  questionId: number;

  @property({
    type: 'number',
    required: true,
  })
  sceneId: number;

  @property({
    type: 'number',
    required: true,
  })
  id: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // tslint:disable-next-line:no-any
  [prop: string]: any;

  constructor(data?: Partial<Game>) {
    super(data);
  }
}
