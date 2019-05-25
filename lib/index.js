const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const logger = require('./logger');
const router = require('./router');

const app = new Koa();
app.context.logger = logger;

app.use(cors());
app.use(bodyParser());

app.use(router.routes())
app.use(router.allowedMethods())

// app.listen(3000);

// app.on('error', (err) => {
//     logger.error(err);
// })

module.exports = app;