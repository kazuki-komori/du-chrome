import {DataConstructor} from "./dataConstructor";
import {calcTimeType} from "../@types/DataConstructor";

describe("isArticle", () => {
  const today = new Date()
  const Data = new DataConstructor()
  test("正常系: 期間外 - 期間外", () => {
    expect(Data.isActive("利用可能期間  2020/10/21 00:00 - 2020/10/27 23:59")).toBe(false)
  })
  test("正常系: 期間内 - 期間内", () => {
    expect(Data.isActive(`利用可能期間  2020/12/16 00:00 - ${today.getFullYear()+1}/${today.getMonth()+1}/${today.getDate()} 23:59`)).toBe(true)
  })
  test("正常系: 期間外 - 期間内", () => {
    expect(Data.isActive(`利用可能期間  ${today.getFullYear() + 1}/${today.getMonth() + 1}/${today.getDate()} 23:59\`) - ${today.getFullYear()+2}/${today.getMonth()+1}/${today.getDate()} 23:59`)).toBe(false)
  })
})

describe("calcTime", () => {
  const Data = new DataConstructor()
  test("正常系: 時間計算", () => {
    const actual: calcTimeType = Data.calcTime("利用可能期間  2020/12/16 00:00 - 2020/12/26 23:59")
    expect(actual.start).toBe(Date.parse("2020/12/16 00:00"))
    expect(actual.end).toBe(Date.parse("2020/12/26 23:59"))
  })
})