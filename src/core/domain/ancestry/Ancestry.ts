import {Trait} from "core/domain/ancestry/Trait";

export type Ancestry = {
    name: string,
    code: string,
    description: string,
    traits: Array<Trait>
}