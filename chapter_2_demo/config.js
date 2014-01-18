var config = {
    local: {
        mode: 'local',
        port: 3000,
        db: {
            host: '127.0.0.1',
            name: 'local',
            port: 27017
        }
    },
    production: {
        mode: 'production',
        port: process.env.PORT,
        db: {
            host: '127.0.0.1',
            name: 'production',
            port: 27017
        }
    },
    staging: {
        mode: 'staging',
        port: 1000,
        db: {
            host: '127.0.0.1',
            name: 'staging',
            port: 27017
        }
    }
}

module.exports = function () {
    if (process.argv[2] == undefined) {
        return config['local'];
    } else return config[process.argv[2]];
}