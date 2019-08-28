import { Entity, model, property } from '@loopback/repository';

@model({ settings: { "strict": false } })
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: false,
  })
  email: string;

  @property({
    type: 'boolean',
    required: false,
  })
  emailVerified: boolean;

  @property({
    type: 'number',
    required: false,
  })
  id: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}
