const { response } = require("@hapi/hapi/lib/validation");

module.exports = function (server,logger){
  server.route({
    method: 'POST',
    path: '/login',
    handler: async function (request, reply) {
        var payload = request.payload
        return response
    }
  });  
};