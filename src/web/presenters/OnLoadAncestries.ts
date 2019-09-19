import GetAllAncestries from "core/actions/ancestries/GetAllAncestries"
import AncestriesView from "web/presenters/views/AncestriesView";

export default class OnLoadAncestries {
    constructor(private view: AncestriesView,
                private getAllAncestries: GetAllAncestries){
    }

    handle = async () => {
        const ancestries = await this.getAllAncestries.invoke()
        const human = ancestries.find(ancestry => ancestry.code === "human")
        this.view.showAncestriesTabs(ancestries)
        this.view.showAncestry(human || null)
    }
}

