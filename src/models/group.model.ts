import { Entity, model, property } from '@loopback/repository';

@model({ settings: { "strict": false } })
export class Group extends Entity {
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
  schoolId: number;

  @property({
    type: 'number',
    required: true,
  })
  teacherId: number;

  @property({
    type: 'number',
    required: true,
  })
  matterId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  //[prop: string]: any;

  constructor(data?: Partial<Group>) {
    super(data);
  }
}
