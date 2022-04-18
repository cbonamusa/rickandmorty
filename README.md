# Rick & Morty application 
####  React, Express and MongoDB

This project was bootstrapped with Vite js (Pre-configured Rollup build) using React for the Frontend on the `client` directory. 
Uses Express for the server and Mongo for the database.


## Start the project

1. Cone the project and install the dependencies:

   ```bash
   git clone https://github.com/cbonamusa/rickandmorty.git
   ```

   /backend
   ```bash
   docker-compose up -d
   ```

   /backend/server
   ```bash
   npm install
   ```

   /client
   ```bash
   npm install
   ```

2. Start the server
   
   /backend/server
   ```bash
      npm run dev
   ```

3. Start the frontend
   
   /client
   ```bash
    npm run dev
   ```
The React application will run on port `3000` and the server port `5000`.

## What I use: 

1. Frontend
   * [ViteJs](https://vitejs.dev/) : Frontend build tool that bundles your code with Rollup, pre-configured to output highly optimized static assets for production. It's fast for installing and serving.
   * [React](https://facebook.github.io/react/) 
   * [Redux](https://redux.js.org/) : Managing and centralizing application state
   * [Router](https://reactrouter.com/) : Standard library for routing in React.



2. Backend
   * [express](https://expressjs.com/) 
   * [nodemon](https://www.npmjs.com/package/nodemon) : Listen to changes on the server, avoid starting the server on each change.
   * [mongoose](https://mongoosejs.com/) : MongoDB object modeling tool that provides straight-forward, schema-based solution to model your application data
   * [morgan](https://mongoosejs.com/) : Middleware that helps to serve the HTTP requests that are requested from our application.
   * [cors](https://reactrouter.com/) : To request external data and prevent CORS blocking and avoid errors
   * [dotenv](https://www.npmjs.com/package/dotenv) : Loads environment variables from .env file.
   * [helmet](https://www.npmjs.com/package/helmet) : Secure HTTP headers returned by your Express apps
   * [bcryptjs](https://www.npmjs.com/package/bcryptjs) : For Hashing the passwords 
   * [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) : Keep session on client-side



## Overview:
   #### Login and Register 
   ![alt text](https://github.com/cbonamusa/rickandmorty/blob/master/client/public/overview2.png?raw=true)

   #### Characters and favourites
   ![alt text](https://github.com/cbonamusa/rickandmorty/blob/master/client/public/overview.png?raw=true)
