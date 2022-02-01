import FlickModelInterface from "~/models/FlickModelInterface";

export default interface FlickServiceInterface {
    getFlicks(): FlickModelInterface[],

    getFlickById(id: number): FlickModelInterface | undefined,
}