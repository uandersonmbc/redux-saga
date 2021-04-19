export enum RepositoriesTypes {
  LOAD_REQUEST = 'repositories@request',
  LOAD_SUCCESS = 'repositories@success',
  LOAD_FAILURE = 'repositories@failure',
}

export interface Repository {
  id: number;
  name: string;
}

export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}
