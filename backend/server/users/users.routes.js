
const { Errors } = require('../common/errors');
const User = require('./users.model');
const auth = require('./auth');

/**
* Register: creates a user if it doesnt exist
* @async
* @throws hashThePassword
* @returns user
*/ 
const register = async (req, resp, next) => {
   try {
      const { email, password, username } = req.body;
      const usernameAlreadyExists = await User.findOne({username}).lean().exec();
      const emailAlreadtExists = await User.findOne({email}).lean().exec();

      /* Bad request */
      if(!username) {
          throw new Errors(400, 'Missing username');
      }
      if (usernameAlreadyExists) {
         throw new Errors(400, 'User already exists');
      }
      if (!email) {
         throw new Errors(400, 'Missing email');
      }
      if (emailAlreadtExists) {
         throw new Errors(400, 'Email already exists');
      }
      if (!password) {
          throw new Errors(400, 'Missing password');
      }

      /* Encript bcrypt */
      const hashedUserPassword = await auth.hashThePassword(password);
     
      /* User data */
      const user = await User.create({email, password:hashedUserPassword, username});
      resp.status(201).send(user);

   } catch(error) {
      next(error);
   }
}; 

/**
* Login: gets the username and password and if the user exists returns token
* @async
* @throws generateToken
* @returns token
*/ 
const login = async (req, resp, next) => {
   try {
      const { password, username } = req.body;
      const user = await User.findOne({ username }).select('+password').lean().exec();
      const passwordMatch = await auth.matchPasswords(password, user.password);

      if(!username) {
         throw new Errors(400, 'Missing username');
      }
      if(!password) {
         throw new Errors(400, 'Missing password');
      }
      if(!user) {
         throw new Errors(400, 'Username does not exists')
      }
      if (!passwordMatch) {
         throw new Errors(400, 'Username and password dont match!')
      }

      /* Generate token */
      const accessToken = auth.generateToken(user.username);
      resp.status(200).send(accessToken);

   } catch(error) {
      next(error)
   }
}

/**
* Adds a favourite to the user bd favourites
* @async
* @returns updated Favourites
*/ 
const addFavourites = async (req, resp, next) => {
   try {
      const userUpdateFavourites = await User.findOneAndUpdate(
         {username: req.body.username},
         {$push: { favourites: req.body.favourites }}
      );
      resp.status(200).send(userUpdateFavourites);

   } catch(error) {
      next(error)
   }
}

/**
* Removes a favourite to the user bd favourites
* @async
* @returns updated Favourites
*/ 
const removeFavourites = async (req, resp, next) => {
   try {
      const userUpdateFavourites = await User.findOneAndUpdate(
         {username: req.body.username},
         {$pull: { favourites: req.body.favourites }}
      );
      resp.status(200).send(userUpdateFavourites);

   } catch(error) {
      next(error)
   }
}

/**
* Gets all favourites from user
* @async
* @returns user's Favourites
*/ 
const getFavourites = async (req, resp, next) => {
   try {
      const { username } = req.body;
      const favouritesFromUser = await User.find({ username }).select('+favourites').lean().exec();
      resp.status(200).send(favouritesFromUser);
   } catch(error) {
      next(error)
   }
}

/**
* Creates the routes needed for the app
*/ 
const addRoutes = (app) => {
   app.post('/register', register);
   app.post('/login', login);
   app.post('/user/addfavourites', addFavourites);
   app.post('/user/removefavourites', removeFavourites);
   app.post('/user/favourites', getFavourites);
}

module.exports = {
   addRoutes
}