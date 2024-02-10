import platforms from "../data/platforms";
export interface Platform{
    name: string,
    id: number,
    slug: string,
}
const usePlatforms = () => ({data:platforms, error: null});

export default usePlatforms