import {Ancestry} from "core/domain/ancestry/Ancestry";

export default interface AncestriesView {
    showAncestriesTabs(ancestries:Array<Ancestry>): void,
    showAncestry(ancestry:Ancestry|null): void
}