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

- Base url: `http://localhost:3000`

### Movies

**Search**

- Request

```bash
GET /movies/search?query=string&page=number // page is optional
```

- Response

```json
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

```json
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

**Movie Details**

- Request

```bash
GET /movies/:movieId // movieId is an integer
```

- Response

```json
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
