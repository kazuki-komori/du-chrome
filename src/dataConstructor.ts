export class DataConstructor {
  isEnd = (time: string): boolean => {
    const timeArr: string[] = time.split(" ")
    if (timeArr[0] !== "利用可能期間") {
      return false
    }
    const endDate: number = Date.parse(`${timeArr.slice(-2).join(" ")}`)
    const now: number = new Date().getTime()
    return endDate - now > 0
  }
}