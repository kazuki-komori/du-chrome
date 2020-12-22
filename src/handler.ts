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

    const types: string[] = ["試験", "レポート", "レポート（成績非公開）"]
    for (let element of elements) {
      console.log(element.children)
      for (let el of element.children){
        if (types.includes(el.innerText) && Data.isActive(element.lastChild?.textContent ?? "")) {
          params[id].push({
            className: className,
            type: el.innerText,
            endTime: Data.calcTime(element.lastChild?.textContent ?? "").end
          })
        }
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