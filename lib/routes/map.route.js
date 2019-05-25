const Router = require('koa-router');

const config = require('../config');
const responseUtil = require('../util/response');

const router = new Router();

router.get('/:name*', (ctx, body) => {
    const { logger } = ctx;

    let name = ctx.originalUrl;
    
    let maps = config.getConfig().map;

    if (maps && typeof maps === 'object') {
        if (maps[name]) {
            let result = responseUtil.getValue(maps[name], {
                header: ctx.header
            });

            ctx.body = result;
            return;
        }
    }
    ctx.body = 'Not found';
})

router.post('/:name*', (ctx, body) => {
    const { logger } = ctx;

    let name = ctx.originalUrl;
    
    let maps = config.getConfig().map;

    if (maps && typeof maps === 'object') {
        if (maps[name]) {
            let result = responseUtil.getValue(maps[name], {
                header: ctx.header
            });

            ctx.body = result;
            return;
        }
    }
    ctx.body = 'Not found';
})

module.exports = router;