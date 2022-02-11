import { Title } from "./app"

test(`Title`, () => {
    expect(Title('abc')).toBe('ABC')
})