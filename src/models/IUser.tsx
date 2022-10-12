import { InputNames } from '../constans/constans';

interface IEditUserProfileGeneralParams {
  [InputNames.firstName]: string;
  [InputNames.secondName]: string;
  [InputNames.displayName]: string;
}
export interface IEditUserProfileForumParams
  extends Partial<IEditUserProfileGeneralParams> {
  id: number;
  score?: number;
  theme?: string;
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
