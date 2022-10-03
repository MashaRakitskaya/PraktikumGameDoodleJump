import { InputNames } from '../constans/constans';

export interface ISignInParams {
  [InputNames.login]: string;
  [InputNames.password]: string;
}
