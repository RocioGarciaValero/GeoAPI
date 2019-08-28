import { Entity, model, property } from '@loopback/repository';

@model({ settings: { "strict": false } })
export class Student extends Entity {
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
  surname: string;

  @property({
    type: 'string',
    required: false,
  })
  profileImage: string;

  @property({
    type: 'string',
    required: false,
  })
  username: string;

  @property({
    type: 'string',
    required: false,
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
    required: true,
  })
  points: number;

  @property({
    type: 'number',
    required: false,
  })
  id: number;

  @property({
    type: 'number',
    required: false,
  })
  schoolId: number;

  @property({
    type: 'number',
    required: false,
  })
  studentId: number;

  @property({
    type: 'number',
    required: false,
  })
  avatarId: number;


  // Define well-known properties here

  // Indexer property to allow additional data
  // [prop: string]: any;

  constructor(data?: Partial<Student>) {
    super(data);
  }
}
