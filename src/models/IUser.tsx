import { InputNames } from '../constans/constans';

interface IEditUserProfileGeneralParams {
  [InputNames.firstName]: string;
  [InputNames.secondName]: string;
  [InputNames.displayName]: string;
}

export interface IEditUserProfileParams extends IEditUserProfileGeneralParams {
  [InputNames.login]: string;
  [InputNames.email]: string;
  [InputNames.phone]: string;
}

export interface IEditUserProfileParamsResponse extends IEditUserProfileParams {
  id?: number;
  avatar?: string;
}

export interface IEditUserPasswordParams {
  [InputNames.oldPassword]: string;
  [InputNames.newPassword]: string;
}
export interface IEditUserPasswordResponse {
  oldPassword?: string;
  newPassword?: string;
}
