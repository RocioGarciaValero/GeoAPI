import { Entity, model, property } from '@loopback/repository';

@model({ settings: { "strict": false } })
export class Scene extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  namescene: string;

  @property({
    type: 'number',
    id: true,
    required: false,
  })
  latitude: number;

  @property({
    type: 'number',
    id: true,
    required: false,
  })
  longitude: number;

  @property({
    type: 'number',
    id: true,
    required: false,
  })
  latitude1: number;

  @property({
    type: 'number',
    id: true,
    required: false,
  })
  longitude1: number;

  @property({
    type: 'number',
    id: true,
    required: false,
  })
  latitude2: number;

  @property({
    type: 'number',
    id: true,
    required: false,
  })
  longitude2: number;

  @property({
    type: 'number',
    id: true,
    required: false,
  })
  latitude3: number;

  @property({
    type: 'number',
    id: true,
    required: false,
  })
  longitude3: number;

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
