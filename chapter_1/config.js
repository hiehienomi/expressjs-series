var config = {
    local: {
        mode: 'local',
        port: 3000
    },
    production: {
        mode: 'production',
        port: process.env.PORT
    },
    staging: {
        mode: 'staging',
        port: 1000
    }
}

module.exports = function () {
    if (process.argv[2] == undefined) {
        return config['local'];
    } else return config[process.argv[2]];
}