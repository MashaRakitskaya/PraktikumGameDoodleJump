import { InputNames } from '../constans/constans';

export interface ISignInParams {
  [InputNames.login]: string;
  [InputNames.password]: string;
}

export interface ISignInParamsOauth {
  code: string;
  redirect_uri: string;
}

export type ISignInResponseOauth = { reason?: string } | string;
