export interface StorageParams {
  [id: string]: Array<paramsObj>
}

interface paramsObj {
  className: string,
  type: string,
  endTime: number,
}