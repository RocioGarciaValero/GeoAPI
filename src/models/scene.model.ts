import { Entity, model, property } from '@loopback/repository';

@model({ settings: { "strict": false } })
export class Scene extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    id: true,
    required: true,
  })
  latitude: number;

  @property({
    type: 'number',
    id: true,
    required: true,
  })
  longitude: number;

  @property({
    type: 'number',
    required: false,
  })
  positionId: number;

  @property({
    type: 'number',
    required: false,
  })
  hintId: number;

  @property({
    type: 'number',
    required: false,
  })
  id: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // [prop: string]: any;

  constructor(data?: Partial<Scene>) {
    super(data);
  }
}
