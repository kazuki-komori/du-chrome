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
      let description: string = ""
      for (let el of element.children){
        if (el.localName === "h4") {
          description = el.innerText
        }
        if (types.includes(el.innerText) && Data.isActive(element.lastChild?.textContent ?? "")) {
          console.log(description)
          params[id].push({
            className: className,
            description: description,
            type: el.innerText,
            id: this.getSecId(element),
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

  getSecId = (element: any): string => {
    return element.parentElement.parentElement.parentElement.parentElement.id
  }
}