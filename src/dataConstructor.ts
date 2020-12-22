export class DataConstructor {
  isEnd = (time: string): boolean => {
    const endDate: number = this.calcTime(time)
    const now: number = new Date().getTime()
    return endDate - now > 0
  }

  calcTime = (time: string): number => {
    const timeArr: string[] = time.split(" ")
    if (timeArr[0] !== "利用可能期間") {
      return 0
    }
    return Date.parse(`${timeArr.slice(-2).join(" ")}`)
  }
}