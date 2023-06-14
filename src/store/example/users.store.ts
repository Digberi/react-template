import { UserDto } from '@api';
import { UserApi } from '@api/example/users/user.api';
import { RootStore } from '@store';
import { TrinityFetcherStore } from '@store/trinity-fetcher.store';
import { makeAutoObservable } from 'mobx';

export class UserStore {
  api = new UserApi();

  users: TrinityFetcherStore<UserDto[]> = new TrinityFetcherStore([], this.api.getUsers, UserDto);

  get trinity() {
    return this.users.trinity;
  }

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }
}