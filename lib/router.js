const Router = require('koa-router');
const router = new Router();

// router.prefix('/kapi');

const conf = require('./routes/conf.route');
const map = require('./routes/map.route');

router.use('/map', map.routes());
router.use('/conf', conf.routes());

module.exports = router;