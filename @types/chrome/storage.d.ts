export interface StorageParams {
  [id: string]: Array<paramsObj>
}

interface paramsObj {
  className: string,
  description: string,
  type: string,
  id: string
  endTime: number,
}