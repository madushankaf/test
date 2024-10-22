const fastify = require('fastify')({ logger: true })

fastify.route({
  method: 'GET',
  url: '/hello',
  schema: {
    // request needs to have a querystring with a `name` parameter
    // the response needs to be an object with an `hello` property of type 'string'
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
  // this function is executed for every request before the handler is executed
  preHandler: (request, reply, done) => {
    // E.g. check authentication
    done()
  },
  handler: (request, reply) => {
    reply.send({ hello: 'world' })
  }
})

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})

// const express = require('express');
// const app = express();
// const port = 8080;

// // Middleware for handling request schema validation
// // Express doesn't natively support schema validation like Fastify, 
// // so you'll need an external library like `express-validator` for this purpose.

// // Middleware for checking authentication (preHandler)
// const checkAuth = (req, res, next) => {
//   // E.g. check authentication
//   next();
// };

// // Route definition
// app.get('/hello', checkAuth, (req, res) => {
//   // Response handler
//   res.json({ hello: 'world' });
// });

// // Start the server
// app.listen(port, (err) => {
//   if (err) {
//     console.error(err);
//     process.exit(1);
//   }
//   console.log(`Server is listening on port ${port}`);
});