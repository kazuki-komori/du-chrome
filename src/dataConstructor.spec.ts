import {DataConstructor} from "./dataConstructor";

describe("isEnd関数", () => {
  test("正常系: 過去の期間", () => {
    const Data = new DataConstructor()
    expect(false).toBe(Data.isEnd("利用可能期間  2020/10/21 00:00 - 2020/10/27 23:59"))
  })
  test("正常系: 未来の期間", () => {
    const Data = new DataConstructor()
    expect(true).toBe(Data.isEnd("利用可能期間  2020/12/16 00:00 - 2020/12/26 23:59"))
  })
})