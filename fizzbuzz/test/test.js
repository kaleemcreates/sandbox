import Mocha from "mocha";
import { expect } from "chai";
import { fizzbuzz } from "../src/index";

describe("Canary Test", ()=> {
    it("true equals true", ()=> {
        expect(true).to.equal(true);
    })
})

describe("fizzbuzz kata", () => {
    describe("fizzbuzz input", () => {
        it("returns input", () =>{
            expect(fizzbuzz()).to.equal(1);
        })
    })
}) 