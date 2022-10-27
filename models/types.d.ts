export interface movies {
    _id: number
    plot: String,
    genres: Array<String>,
    runtime: Number,
    cast: Array<String>,
    poster: String,
    title: String,
    fullplot: String,
    languages: Array<String>,
    directors: Array<String>,
    rated: String,
    lastupdated: String,
    year: Number,
    type: String,
}

export interface MovieProps {
    movies: Array<movies>
}

export interface products {
    _id: number
    name: string
    status: string
    price: number
    rating: number
    img: string
}

export interface ProductsProps {
    products: Array<products>
}

export interface ProductCardProps {
    data: products
}