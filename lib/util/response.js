const fsx = require('fs-extra');

exports.getValue = (obj, options) => {
    if (obj && typeof obj === 'string') {
        let str = fsx.readFileSync(obj, 'utf-8');
        return str;
    }
    return undefined;
}