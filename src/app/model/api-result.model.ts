import { Talent } from "./talent.model";

export interface ApiResult<T> {
    results: T[];
    info: Info;
}
interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface TalentData{
  talent: Talent;
  property: any;
}