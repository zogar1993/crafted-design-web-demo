import React from "react";
import {Ancestry} from "core/domain/ancestry/Ancestry";
import TabItem from "./TabItem";

export default function Tab ({ item, selected, onClick }: Props) {
    return (
        <li key={item.code} className={selected ? 'is-active' : ''}>
            <a data-testid="ancestry-tab" onClick={() => onClick(item.code)}>
                {item.name}
            </a>
        </li>
    )
}

type Props = {
    item: TabItem,
    selected: boolean,
    onClick: (code: string) => void
}