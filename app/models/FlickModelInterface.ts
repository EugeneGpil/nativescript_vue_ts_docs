export default interface FlickModelInterface {
    id: number
    genre: string
    title: string
    image: string
    url: string
    description: string
    details: {
        title: string
        body: string
    }[]
}
