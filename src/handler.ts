import {DataConstructor} from "./dataConstructor";
import {StorageService} from "./services/Chrome/StorageService";
import {StorageParams} from "../@types/chrome/storage";

const Data = new DataConstructor()
const Storage = new StorageService()

export class Handler{
  getElem = () => {
    const id: string = this.getClassId(location.pathname)
    const elements: HTMLCollectionOf<any> = document.getElementsByClassName('cl-contentsList_contentInfo')
    const params: StorageParams = {[id]: []}
    const className: string = document.getElementsByClassName('course-name')[0]?.textContent ?? ""

    //いったん空に
    Storage.removeStorage(id)

    for (let element of elements) {
      for (let e of element.children)
        if (e.innerHTML == ("試験" || "レポート") && Data.isEnd(element.lastChild?.textContent ?? "")) {
          params[id].push({className: className, type: e.innerHTML, endTime: Data.calcTime(element.lastChild?.textContent ?? "")})
        }
    }
    console.log(params)
    Storage.setStorage(params)
  }

  getClassId = (url: string): string => {
    const urlArr: string[] = url.split("/").filter(Boolean)
    return String(urlArr.pop())
  }
}


const handler = new Handler()
handler.getElem()