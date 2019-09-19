import React from 'react'
import {Ancestry} from "core/domain/ancestry/Ancestry"

export default function AncestryDescriptionSection(props: Props) {
    const { description } = props.ancestry
    return (
        <div className="box">
            <div className="columns">
                <p data-testid={"ancestry-description"}>{description}</p>
            </div>
        </div>
    )
}

type Props = {
    ancestry: Ancestry
}