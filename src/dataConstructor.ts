import {calcTimeType} from "../@types/DataConstructor";

export class DataConstructor {
  isActive = (time: string): boolean => {
    const startDate: number = this.calcTime(time).start
    const endDate: number = this.calcTime(time).end
    const now: number = new Date().getTime()
    return endDate - now > 0 && now - startDate > 0
  }

  calcTime = (time: string): calcTimeType => {
    const timeArr: string[] = time.split(" ").filter(Boolean)
    if (timeArr[0] !== "利用可能期間") {
      return {start: 0, end: 0}
    }
    timeArr.shift()
    return {
      start: Date.parse(`${timeArr[0]} ${timeArr[1]}`),
      end: Date.parse(`${timeArr.slice(-2).join(" ")}`)
    }
  }
}