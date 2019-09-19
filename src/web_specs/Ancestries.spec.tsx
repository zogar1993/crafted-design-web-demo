import React from "react"
import {Matcher, MatcherOptions, render, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import AncestriesScreen from "web/views/ancestries/AncestriesScreen"
import 'jest-extended';
import {ancestries} from "data/Ancestries"
import {Ancestry} from "core/domain/ancestry/Ancestry"
import {provider} from "core/Provider"
import {Trait} from "core/domain/ancestry/Trait"

describe("Ancestries Screen", () => {
    let getByTestId: (text: Matcher, options?: MatcherOptions) => HTMLElement
    let getByText: (text: Matcher, options?: MatcherOptions) => HTMLElement
    let findByText: (text: Matcher, options?: MatcherOptions) => Promise<HTMLElement>
    let findByTestId: (text: Matcher, options?: MatcherOptions) => Promise<HTMLElement>
    let findAllByTestId: (text: Matcher, options?: MatcherOptions) => Promise<Array<HTMLElement>>
    const HUMAN = "Human"
    const DWARF = "Dwarf"

    it("when first loaded should show all ancestries tabs with human selected", async () => {
        given_the_ancestries_screen_is_shown()
        await then_all_ancestries_tabs_are_shown()
        await then_a_tab_is_active(HUMAN)
        await then_details_are_shown_for(HUMAN)
        await then_all_ancestry_traits_are_shown_for(HUMAN)
    })

    it("should show selected ancestry when clicked", async () => {
        given_the_ancestries_screen_is_shown()
        await when_ancestry_tab_is_clicked(DWARF)
        await then_a_tab_is_active(DWARF)
        await then_details_are_shown_for(DWARF)
        await then_all_ancestry_traits_are_shown_for(DWARF)
    })

    function given_the_ancestries_screen_is_shown() {
        const result = render(<AncestriesScreen provider={provider}/>)
        findByTestId = result.findByTestId
        findByText = result.findByText
        findAllByTestId = result.findAllByTestId
        getByTestId = result.getByTestId
        getByText = result.getByText
    }

    async function when_ancestry_tab_is_clicked(name: string) {
        const ancestry = await findByText(name)
        fireEvent.click(ancestry)
    }

    async function then_all_ancestries_tabs_are_shown() {
        const ancestriesTab = await findAllByTestId("ancestry-tab")

        expect(ancestriesTab).toHaveLength(ancestries.length)
        expect(ancestriesTab.map(ancestry => ancestry.textContent))
            .toIncludeAllMembers(ancestries.map(ancestry => ancestry.name))
    }

    async function then_a_tab_is_active(name: string) {
        expect(await findByTestId(name.toLocaleLowerCase()))
        expect(getByText(name).parentElement).toHaveClass("is-active")
    }

    async function then_details_are_shown_for(name: string) {
        const ancestry = ancestryOfName(name)
        expect(await findByTestId(`ancestry-description`)).toHaveTextContent(ancestry.description)
    }

    async function then_all_ancestry_traits_are_shown_for(name: string) {
        const ancestry = ancestryOfName(name)
        const traitCards = await findAllByTestId("ancestry-trait")

        const names = traitCards.map(traitCard => getWithTestId("trait-card-name", traitCard).textContent)
        expect(names).toIncludeSameMembers(ancestry.traits.map(trait => trait.name))

        for(const traitCard of traitCards){
            const name = getWithTestId("trait-card-name", traitCard)
            const trait = ancestryTraitOfName(name.textContent, ancestry)

            expect(getWithTestId("trait-card-description", traitCard).textContent).toEqual(trait.description)
            expect(getWithTestId("trait-card-effect", traitCard).textContent).toEqual(trait.effect)
        }
    }

    function ancestryOfName(name: string): Ancestry {
        const ancestry = ancestries.find(ancestry => ancestry.name === name)
        if (ancestry === undefined) throw `Ancestry of name '${name}' not found.`
        else return ancestry
    }

    function ancestryTraitOfName(name: string | null, ancestry: Ancestry): Trait {
        const trait = ancestry.traits.find(trait => trait.name === name)
        if (trait === undefined) throw `Trait of name '${name}' not found inside ancestry '${ancestry.name}'.`
        else return trait
    }

    function getWithTestId(testId: string, element: Element): Element {
        const subElement = element.querySelector(`[data-testid='${testId}']`)
        if (subElement === null) throw Error(`Could not find element with attribute 'data-testid=${testId}'`)
        return subElement
    }
})