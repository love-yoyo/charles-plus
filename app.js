const app = require('./lib');

app.listen(3000);

app.on('error', (err) => {
    logger.error(err);
})
