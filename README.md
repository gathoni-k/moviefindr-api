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
