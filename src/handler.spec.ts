import {Handler} from "./handler";

describe("handler内の関数テスト", () => {
  const handler = new Handler()
  test("getClassId", () => {
    expect("202010807225000").toBe(handler.getClassId("/webclass/course.php/202010807225000/"))
    expect("202010807623000").toBe(handler.getClassId("/webclass/course.php/202010807623000/"))
  })
})