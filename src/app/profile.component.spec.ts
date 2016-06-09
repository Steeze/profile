import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ProfileAppComponent } from '../app/profile.component';

beforeEachProviders(() => [ProfileAppComponent]);

describe('App: Profile', () => {
  it('should create the app',
      inject([ProfileAppComponent], (app: ProfileAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'profile works!\'',
      inject([ProfileAppComponent], (app: ProfileAppComponent) => {
    expect(app.title).toEqual('profile works!');
  }));
});
