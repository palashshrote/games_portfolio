
import generes from "../data/generes";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGame = () => ({data:generes, isLoading: false, error: null})

export default useGame;
