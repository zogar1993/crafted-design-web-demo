import React from "react"
import Tab from "web/views/components/tabs/Tab"
import TabItem from "./TabItem";

export default function Tabs({items, selected, onChange}: Props) {
    return (
        <div className="tabs is-centered is-toggle">
            <ul>
                { items.map(item => <Tab item={item}
                                         onClick={onChange}
                                         selected={item.code === selected}
                                         key={item.code}/>) }
            </ul>
        </div>
    )
}

type Props = {
    items: Array<TabItem>,
    selected: string,
    onChange: (code: string)=>void
}