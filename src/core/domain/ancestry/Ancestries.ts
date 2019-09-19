import {Ancestry} from "./Ancestry";

export default interface Ancestries {
    findByCode(code: string): Promise<Ancestry | null>
    findAll(): Promise<Array<Ancestry>>
}