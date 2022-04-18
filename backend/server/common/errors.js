
class Errors extends Error {
   constructor(code, message) {
      super();
      this.name = "Errors";
      this.code = code;
      this.message = message;
   }
}

const errorHandler = (err, req, resp, next) => {
   if (err.name === "Errors") {
      const { code, message } = err;
      return resp.status(code).send({error: message});
   }
   resp.status(500).send({error: `Internal Server Error ${err}`});
};


module.exports = {
   errorHandler,
   Errors
}