export interface Personajes {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  image: string;
  created: Date;
  location: {
    name: string;
    url: string;
  };
}
