import React from 'react'
import {Trait} from "core/domain/ancestry/Trait";
import TraitCard from "web/views/ancestries/components/TraitCard";

export default function AncestryTraitCardsRow(props: Props) {
    const traits = props.traits
    return (
        <div className="tile">
            { traits.map(trait => <TraitCard trait={trait} key={trait.name} data-testid="ancestry-trait"/>) }
        </div>
    )
}

type Props = {
    traits: Array<Trait>
}