import {Ancestry} from "core/domain/ancestry/Ancestry"
import Ancestries from "../../domain/ancestry/Ancestries";

export default class GetAllAncestries {
    constructor(private ancestries: Ancestries){}

    async invoke(): Promise<Array<Ancestry>> {
        return this.ancestries.findAll()
    }
}