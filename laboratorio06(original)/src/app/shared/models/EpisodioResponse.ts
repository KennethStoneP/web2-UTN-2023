import { Episodios } from './Episodio';
import { Info } from './info';

export default interface EpisodiosResponse {
  Info: Info;
  results: Episodios[];
}
