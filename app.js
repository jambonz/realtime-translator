const {createServer} = require('http');
const {createEndpoint} = require('@jambonz/node-client-ws');
const server = createServer();
const logger = require('pino')({level: process.env.LOGLEVEL || 'info'});
const port = process.env.WS_PORT || 3000;
const makeService = createEndpoint({server, logger});

require('./lib/routes')({logger, makeService});

server.listen(port, () => {
  logger.info(`jambonz websocket server listening at http://localhost:${port}`);
});
