import { Entity, model, property } from '@loopback/repository';

@model({ settings: { "strict": false } })
export class Position extends Entity {
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
  latitude: number;

  @property({
    type: 'number',
    required: true,
  })
  longitude: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  pista1: string;

  @property({
    type: 'string',
    required: true,
  })
  pista2: string;

  @property({
    type: 'string',
    required: true,
  })
  pregunta: string;

  @property({
    type: 'string',
    required: true,
  })
  respuesta1: string;

  @property({
    type: 'string',
    required: true,
  })
  respuesta2: string;

  @property({
    type: 'string',
    required: true,
  })
  respuesta3: string;
  @property({
    type: 'string',
    required: true,
  })
  respuesta4: string;

  @property({
    type: 'number',
    required: false,
  })
  id: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  //[prop: string]: any;

  constructor(data?: Partial<Position>) {
    super(data);
  }

}
