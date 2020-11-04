import React from "react"
import {create, act, mount} from "react-test-renderer"
import Pagination from "./Pagination";

describe("pagination tests", () => {
    test("pages number is 11 but should be showed 10", () => {
        const pagination = create(<Pagination currentPage={1}
                                              pageSize={1}
                                              portionSize={10}
                                              totalItemsCount={11}/>)
        let root = pagination.root
        let spans = root.findAllByType('span')
        expect(spans.length).toBe(10)

    })
    test('if pages count more than 10, button NEXT should be showed', () => {
        const pagination = create(<Pagination pageSize={1}
                                              totalItemsCount={11}/>)
        let root = pagination.root
        let nextButton = root.findAllByType('button').filter(e => e.children[0] === 'NEXT')
        expect(nextButton.length).toBe(1)
    })
})