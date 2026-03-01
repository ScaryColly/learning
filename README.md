# learning

This is a simple Express/MongoDB REST API for movies, comments and authentication.

## Swagger Documentation

Auto-generated OpenAPI (Swagger) docs are available at `/docs` once the server is running. For example:

```
http://localhost:3000/docs
```

The API definitions are stored alongside the route definitions using JSDoc comments and served with `swagger-ui-express`.

## Setup

Install dependencies and types:

```bash
npm install
npm install swagger-ui-express swagger-jsdoc @types/swagger-ui-express
```

Run the server:

```bash
npm run start
```

```bash
npm run dev # for development with nodemon
```
