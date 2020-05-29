import {expect} from "chai";
import "mocha";
import {NorwegianBlueParrot, ParrotAfrican, ParrotEuropean} from "../src/parrot";

describe("Parrot", () => {

    it("gets speed of European Parrot", () => {
        const parrot = new ParrotEuropean();

        expect(parrot.getSpeed()).eql(12);
    });

    it("gets speed of African Parrot with one coconut", () => {
        const parrot = new ParrotAfrican(1);

        expect(parrot.getSpeed()).eql(3);
    });

    it("gets speed of African Parrot with two coconuts", () => {
        const parrot = new ParrotAfrican(2);

        expect(parrot.getSpeed()).eql(0);
    });

    it("gets speed of African Parrot with no coconuts", () => {
        const parrot = new ParrotAfrican(0);

        expect(parrot.getSpeed()).eql(12);
    });

    it("gets speed of Norwegian Blue Parrot nailed", () => {
        const parrot = new NorwegianBlueParrot(  true, 1.5);

        expect(parrot.getSpeed()).eql(0);
    });

    it("gets speed of Norwegian Blue Parrot not nailed", () => {
        const parrot = new NorwegianBlueParrot( false, 1.5);

        expect(parrot.getSpeed()).eql(18);
    });

    it("gets speed of Norwegian Blue Parrot not nailed high voltage", () => {
        const parrot = new NorwegianBlueParrot( false, 4);

        expect(parrot.getSpeed()).eql(24);
    });
});
