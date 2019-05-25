const defConfig = require('../charles.cfg');

let config = defConfig || {};

exports.setConfig = (cfg) => {
    config = Object.assign({}, config, cfg);
};

exports.getConfig = () => {
    return config;
};