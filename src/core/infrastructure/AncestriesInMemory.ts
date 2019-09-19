import Ancestries from "../domain/ancestry/Ancestries";
import {Ancestry} from "../domain/ancestry/Ancestry";
import {ancestries} from "../../data/Ancestries";

export default class AncestriesInMemory implements Ancestries {
    findAll(): Promise<Array<Ancestry>> {
        return Promise.resolve(ancestries);
    }

    findByCode(code: string): Promise<Ancestry | null> {
        const ancestry = ancestries.find(ancestry => ancestry.code === code)
        return Promise.resolve(ancestry ? ancestry : null);
    }
}