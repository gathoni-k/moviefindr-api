# moviefindr API

An Express API that fetches data from The Movie DataBase(TMDB)

# Stack Used

- NodeJs
- Express
- Jest
- MongoDB

## Project Setup

Clone Project

`git clone https://github.com/gathoni-k/moviefindr-api`

Install dependencies

`yarn install`

## Scripts

Start

`yarn start`

Test

`yarn test`

## How to use API

- Base url: 'https://shrouded-journey-95640.herokuapp.com/'

### Movies

**Search**

- Request

```bash
GET /movies/search?query=string&page=number // page is optional
```

- Response

```
  {
    results: [
              {
                "popularity": number,
                "vote_count": integer,
                "video": boolean,
                "poster_path": string or null,
                "id": number,
                "adult": boolean,
                "backdrop_path": null,
                "original_language": string,
                "original_title": string,
                "genre_ids": array[integer],
                "title": string,
                "vote_average": number,
                "overview": string,
                "release_date": string
              }
            ],
    error: string or null
  }
```

**Trending Movies**

- Request

```bash
GET /movies/trending/:time // time must be either 'day' or 'week'
```

- Response

```
  {
   results: {
      page: number,
      results: [
              {
                "popularity": number,
                "vote_count": integer,
                "video": boolean,
                "poster_path": string or null,
                "id": number,
                "adult": boolean,
                "backdrop_path": null,
                "original_language": string,
                "original_title": string,
                "genre_ids": array[integer],
                "title": string,
                "vote_average": number,
                "overview": string,
                "release_date": string
              }
            ],
      total_pages: number,
      total_results: number
   },
    error: string or null
  }
```

**Top rated Movies**

- Request

```bash
GET /movies/top
```

- Response

```
  {
   results: {
    adult: booloean,
    backdrop_path: string,
    belongs_to_collection: string or null,
    budget: integer
    genres: array[object],
    homepage: string or null,
    id: integer,
    imdb_id: string or null,
    original_language: string,
    original_title: string,
    overview: string or null,
    popularity: number,
    poster_path: string or null,
    production_companies: array[object],
    status: string,
    tagline: string or null,
    title: string,
    video: boolean,
    vote_average: numebr,
    vote_count: integer
  },
    error: string or null
  }
```
**Popular**

- Request

```bash
GET /movies/popular
```

- Response

```
  {
   results: {
    adult: booloean,
    backdrop_path: string,
    belongs_to_collection: string or null,
    budget: integer
    genres: array[object],
    homepage: string or null,
    id: integer,
    imdb_id: string or null,
    original_language: string,
    original_title: string,
    overview: string or null,
    popularity: number,
    poster_path: string or null,
    production_companies: array[object],
    status: string,
    tagline: string or null,
    title: string,
    video: boolean,
    vote_average: numebr,
    vote_count: integer
  },
    error: string or null
  }
```

**Similar**

- Request

```bash
GET /movies/:movieId/similar
```

- Response

```
  {
   results: {
    adult: booloean,
    backdrop_path: string,
    belongs_to_collection: string or null,
    budget: integer
    genres: array[object],
    homepage: string or null,
    id: integer,
    imdb_id: string or null,
    original_language: string,
    original_title: string,
    overview: string or null,
    popularity: number,
    poster_path: string or null,
    production_companies: array[object],
    status: string,
    tagline: string or null,
    title: string,
    video: boolean,
    vote_average: numebr,
    vote_count: integer
  },
    error: string or null
  }
```
**Recommended**

- Request

```bash
GET /movies/:movieId/recommended
```

- Response

```
  {
   results: {
    adult: booloean,
    backdrop_path: string,
    belongs_to_collection: string or null,
    budget: integer
    genres: array[object],
    homepage: string or null,
    id: integer,
    imdb_id: string or null,
    original_language: string,
    original_title: string,
    overview: string or null,
    popularity: number,
    poster_path: string or null,
    production_companies: array[object],
    status: string,
    tagline: string or null,
    title: string,
    video: boolean,
    vote_average: numebr,
    vote_count: integer
  },
    error: string or null
  }
```
