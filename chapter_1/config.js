var config = {
    local: {
        mode: 'local',
        port: 3000,
        database : {
            host : 127.0.0.1,
            database : 'test'
        }
    },
    production: {
        mode: 'production',
        port: process.env.PORT,
        database : {
            host : 127.0.0.2,
            database : 'production'
        }
    },
    staging: {
        mode: 'staging',
        port: 1000,
        database : {
            host : 127.0.0.3,
            database : 'staging'
        }
    }
}

module.exports = function () {
    if (process.argv[2] == undefined) {
        return config['local'];
    } else return config[process.argv[2]];
}