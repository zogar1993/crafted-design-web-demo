import GetAllAncestries from "core/actions/ancestries/GetAllAncestries"
import GetAncestry from "./actions/ancestries/GetAncestry";
import AncestriesInMemory from "./infrastructure/AncestriesInMemory";

const ancestries = new AncestriesInMemory()

export const provider = {
    getAllAncestries: new GetAllAncestries(ancestries),
    getAncestry: new GetAncestry(ancestries)
}

export type Provider = typeof provider