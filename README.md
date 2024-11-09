<h1 align="center">
  <img width="110" alt="searchpets-peanut-transparent" src="https://user-images.githubusercontent.com/94678583/170873665-9d07cb32-abb9-45b6-8aea-8e361da84bd7.png" />
  <br />
  <em>Searchpets!</em>
</h1>
<p align="center">
  <img src="https://img.shields.io/github/license/fusky-labs/searchpets?style=flat" alt="GPL 2.0 License" />
  <img src="https://img.shields.io/github/issues/fusky-labs/searchpets?style=flat" alt="Searchpets' open issues" />
  <img src="https://img.shields.io/github/last-commit/fusky-labs/searchpets" />
  <img src="https://img.shields.io/github/contributors/fusky-labs/searchpets" />
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/94678583/192121601-8083d9a5-a607-4201-8db1-d15369e240b7.png" alt="Searchpets Dev Demo" />
</p>

_Searchpets!_ is comic search engine for querying characters, texts from comics, and chapter arcs from the entire _Housepets!_ catalog! Written in Python and TypeScript - it was taken inspiration from this [forum post][hp-post].

The backend is written in Python to update latest comics from
the [official website](https://www.housepetscomic.com).

## Running the app locally

### Prerequisites

- Node.js 20 or higher (LTS recommended)
- Python 3.11 or higher
- Yarn package manager
- Docker

### Setup and Installation

Install dependencies with `yarn install` or `yarn` from their respective directories

```sh
cd client
yarn install

cd ../server
python -v venv venv
pip install -r requirements.txt
```

From in the `server` directory; provision the MongoDB database locally via Docker Compose

```sh
docker compose up
```

## Copyright disclaimer

_Searchpets!_ is an open source fan project. SP does not own any of the
contents used on this website and has no direct affiliation with the entire
_Housepets!_ web comic or all of Rick Griffin's intellectual property.

## License

GPL-2.0

[hp-post]: https://www.housepetscomic.com/forums/viewtopic.php?f=13&t=5434&p=938783&hilit=search+engine#p938783
