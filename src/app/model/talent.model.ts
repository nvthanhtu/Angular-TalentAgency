export interface Talent {
    gender: string;
    name: Name;
    picture: Picture;
    email: string;
    nat: string;
    id: TalentId;
}
interface Name {
    title: string;
    first: string;
    last: string;
}
interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}
interface TalentId {
    name: string;
    value: string;
}