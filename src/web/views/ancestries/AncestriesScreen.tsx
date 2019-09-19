import React, {Component} from 'react'
import {Ancestry} from "core/domain/ancestry/Ancestry"
import Tabs from "web/views/components/tabs/Tabs"
import AncestryDescriptionSection from "web/views/ancestries/components/AncestryDescriptionSection"
import AncestryTraitsSection from "web/views/ancestries/components/AncestryTraitsSection"
import { Provider} from "core/Provider"
import OnLoadAncestries from "web/presenters/OnLoadAncestries"
import OnSelectAncestry from "web/presenters/OnSelectAncestry"
import AncestriesView from "web/presenters/views/AncestriesView"

export default class AncestriesScreen extends Component<Props, State> implements AncestriesView {
    constructor(props: Props) {
        super(props)
        this.loadAncestries = new OnLoadAncestries(this, props.provider.getAllAncestries).handle
        this.selectAncestry = new OnSelectAncestry(this, props.provider.getAncestry).handle
        this.state = {selected: null, ancestries: []}
    }

    componentDidMount = () => {
        this.loadAncestries()
    }

    render() {
        const ancestry = this.state.selected
        const ancestries = this.state.ancestries
        if (ancestry === null) return <div/>
        return (
            <section className="section" data-testid={ancestry.code}>
                <Tabs items={ancestries} selected={ancestry.code} onChange={this.selectAncestry}/>
                <AncestryDescriptionSection ancestry={ancestry}/>
                <AncestryTraitsSection traits={ancestry.traits}/>
            </section>
        )
    }

    showAncestriesTabs = (ancestries: Array<Ancestry>) => this.setState({ancestries: ancestries})
    showAncestry = (ancestry: Ancestry|null) => this.setState({selected: ancestry})
    loadAncestries: ()=>void
    selectAncestry: (code: string)=>void
}

type Props = {
    provider: Provider
}

type State = {
    selected: Ancestry | null
    ancestries: Array<Ancestry>
}