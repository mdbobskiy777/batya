import React from "react"
import {create, act, mount} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component ", () =>{
    test("after creation <span> should be displayed", ()=>{
        const component = create(<ProfileStatus status = "status1"/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span).not.toBeNull()
    })
    test("after creation <span> should contains correct status",()=>{
        const component = create(<ProfileStatus status = "status1"/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span.children[0]).toBe("status1")
    })
    test("after creation <input> shouldn`t be displayed", ()=>{
        const component = create(<ProfileStatus status = "status1"/>)
        const root = component.root
        expect(()=>{
            let input = root.findByType('input')
        }).toThrow()
    })

    test("<input> should be displayed in editMode instead of <span>", async ()=>{
        const component = create(<ProfileStatus status = "status1"/>)
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect( await  input).not.toBeNull()
    })
    test("<input> should have correct value>", async ()=>{
        const component = create(<ProfileStatus status = "status1"/>)
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input =  root.findByType('input')
        expect( await input.props.value).toBe("status1")
    })
})