import React from 'react'
import {Trait} from "core/domain/ancestry/Trait";

export default function TraitCard(props: Props) {
    const trait = props.trait
    return (
        <div className="tile is-parent" data-testid={props["data-testid"]}>
            <div className="tile is-child box">
                <p className="title has-text-centered" data-testid="trait-card-name">{trait.name}</p>
                <p className="is-small is-italic is-family-sans-serif" data-testid="trait-card-description" >{trait.description}</p>
                <p className="is-small" data-testid="trait-card-effect">{trait.effect}</p>
            </div>
        </div>
    )
}

type Props = {
    trait: Trait,
    'data-testid': string
}