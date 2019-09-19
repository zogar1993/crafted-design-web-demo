import AncestriesView from "./views/AncestriesView";
import GetAncestryByCode from "core/actions/ancestries/GetAncestry";

export default class OnSelectAncestry {
    constructor(private view: AncestriesView,
                private getAncestryByCode: GetAncestryByCode) {
    }

    handle = async (code: string) => {
        const ancestry = await this.getAncestryByCode.invoke(code)
        if (ancestry === null) throw Error(`Ancestry of code '${code}' was not found`)
        this.view.showAncestry(ancestry)
    }

}