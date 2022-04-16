
const { Errors } = require('../common/errors');
const User = require('./users.model');
const auth = require('./auth');


const register = async (req, resp, next) => {
    try {
        const { email, password, username } = req.body;
        const usernameAlreadyExists = await User.findOne({username}).lean().exec();
        const emailAlreadtExists = await User.findOne({email}).lean().exec();
        
        //bad request
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
     
        //encript bcrypt
        const hashedUserPassword = await auth.hashThePassword(password);
     
        //user data
        const user = await User.create({email, password:hashedUserPassword, username});
        resp.status(201).send(user);

    } catch(error) {
        next(error);

    }
}; 

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

        //generate token
        const accessToken = auth.generateToken(user.username);
        resp.status(200).send(accessToken);

    } catch(error) {
        next(error)
    }
}

const favourites = async (req, resp, next) => {
    try {
        const { username } = req.body;
        const user = await User.findOne({ username }).select('+favourites').lean().exec();
       // const resFavourites = user.favourites;
        console.log(username)
        resp.status(200).send(resFavourites);
    } catch(error) {
        next(error)
    }
}


const addRoutes = (app) => {
    app.post('/register', register);
    app.post('/login', login);
    app.post('/user/favourites', favourites);
}

module.exports = {
    addRoutes
}