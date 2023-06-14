import { faker } from '@faker-js/faker';
import { createServer, Factory, Model } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  amount: string;
}

const UserModel: ModelDefinition<User> = Model.extend({});

export function makeServer() {
  return createServer({
    models: {
      user: UserModel
    },

    factories: {
      user: Factory.extend<Partial<User>>({
        get name() {
          return faker.person.fullName();
        },
        get username() {
          return faker.internet.userName();
        },
        get email() {
          return faker.internet.email();
        },
        get amount() {
          return faker.finance.amount();
        }
      })
    },

    seeds(server) {
      server.createList('user', 10);
    },

    routes() {
      this.namespace = 'api';

      this.resource('user');
    }
  });
}
