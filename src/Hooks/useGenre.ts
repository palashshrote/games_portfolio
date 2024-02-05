
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  background_image: string;
}

const useGame = () => useData<Genre>('/genres');

export default useGame;
