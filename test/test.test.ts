import  { Test } from "tsdown-test"

it("can use package", () => {
    const test = new Test(1)
    expect(test.value()).toBe(2)
})