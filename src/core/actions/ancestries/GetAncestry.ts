import {Ancestry} from "core/domain/ancestry/Ancestry"
import Ancestries from "../../domain/ancestry/Ancestries";

export default class GetAllAncestries {
    constructor(private ancestries: Ancestries){}

    async invoke(code: string): Promise<Ancestry | null> {
        return this.ancestries.findByCode(code)
    }
}