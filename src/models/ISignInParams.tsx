import { InputNames } from '../contans/constans';

export interface ISignInParams {
  [InputNames.login]: string;
  [InputNames.password]: string;
}
