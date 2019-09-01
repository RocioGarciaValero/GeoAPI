import { Entity, model, property } from '@loopback/repository';

@model()
export class Rules extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    id: true,
    required: true,
  })
  Description: string;


  constructor(data?: Partial<Rules>) {
    super(data);
  }
}
