import {DataConstructor} from "../dataConstructor";
const Data = new DataConstructor()

const getElement = () => {
  const elements = document.getElementsByClassName('cl-contentsList_contentInfo')
  console.log(elements)
  for (let element of elements) {
    for (let e of element.children)
      if (e.innerHTML == "試験" && Data.isEnd(element.lastChild?.textContent ?? "")) {
        console.log(element)
      }
  }
}

getElement()
