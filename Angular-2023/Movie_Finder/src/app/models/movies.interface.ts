export interface IMovies {
    page: number;
    results: Array<
        {
            adult: boolean,
            backdrop_path: string,
            genre_ids: number[],
            id: number,
            original_language: string,
            original_title: string,
            overview: string,
            popularity: number,
            poster_path: string,
            release_date: string,
            title: string,
            video: boolean,
            vote_average: number,
            vote_count: number,
        }
    >;
    total_pages: number;
    total_results: number;
}

export interface IMovie {
    id: number,
    title: string,
    poster_path: string,
    release_date: string,
}

export interface IGenres {
    genres: Array<
        {
            id: number,
            name: string
        }
    >
}

export interface IMovieDetails {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: null | string,
    budget: number,
    genres: [
        {
            id: number,
            name: string,
        }
    ],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: Array<
        {
            id: number,
            logo_path: string,
            name: string,
            origin_country: string,
        }>,
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: [
        {
            english_name: string,
            iso_639_1: string,
            name: string,
        }
    ],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}