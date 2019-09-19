import React from 'react'
import {Trait} from "core/domain/ancestry/Trait";
import AncestryTraitCardsRow from "web/views/ancestries/components/AncestryTraitCardsRow"

export default function AncestryTraitsSection(props: Props) {
    const traits = props.traits
    return (
        <div className="tile is-ancestor is-vertical">
            <AncestryTraitCardsRow traits={traits.slice(0, 2)}/>
            <AncestryTraitCardsRow traits={traits.slice(2, 4)}/>
            <AncestryTraitCardsRow traits={traits.slice(4, 6)}/>
            <AncestryTraitCardsRow traits={traits.slice(6, 8)}/>
            <AncestryTraitCardsRow traits={traits.slice(8, 10)}/>
            <AncestryTraitCardsRow traits={traits.slice(10, 12)}/>
        </div>
    )
}

type Props = {
    traits: Array<Trait>
}