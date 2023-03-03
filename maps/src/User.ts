// create and export a class - name with capital first letter (convention)

import { faker } from '@faker-js/faker';
import { Mappable } from './types';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude()),
    }
  }
}