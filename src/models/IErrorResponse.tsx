export interface IErrorResponse {
  [x: string]: any;
  status: number;
  data: {
    reason?: string;
    id?: number;
  };
}
