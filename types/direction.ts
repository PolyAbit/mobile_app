type DirectionType = {
  id: string;
  code: string;
  name: string;
  exams: string;
  description: string;
};

type DirectionsType = { directions: DirectionType[] };

export { DirectionType, DirectionsType };
