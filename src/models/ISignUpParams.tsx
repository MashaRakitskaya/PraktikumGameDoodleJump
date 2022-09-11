import { InputNames } from '../contans/constans';

export interface ISignUpParams {
  [InputNames.firstName]: string;
  [InputNames.secondName]: string;
  [InputNames.login]: string;
  [InputNames.email]: string;
  [InputNames.password]: string;
  [InputNames.passwordAgain]: string;
  [InputNames.phone]: string;
}
