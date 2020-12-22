import {StorageParams} from "../../../@types/chrome/storage";

export class StorageService {
  setStorage = (params: StorageParams) => {
    console.log(params)
    // @ts-ignore
    chrome.storage.sync.set(params, () => {console.log("Saved!!")})
  }

  getAllData = () => new Promise(resolve => {
    // @ts-ignore
    chrome.storage.sync.get(null, resolve)
  })

  getDataById = (ids: string[]) => new Promise(resolve => {
    // @ts-ignore
    chrome.storage.sync.get(ids, resolve)
  })

  removeStorage = (classId: string) => {
    // @ts-ignore
    chrome.storage.sync.remove(classId, () => {console.log("Removed!!")})
  }

  clearStorage = () => {
    // @ts-ignore
    chrome.storage.sync.clear()
  }
}