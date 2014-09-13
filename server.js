var app = require('app'),
    winston = require('winston'),
    mgoose = require('./db/mgoose'),
    Bear = require('./models/bear');
    port = process.env.PORT || 3000;

app.listen(port, function () {
    winston.info('Server running on: ' + port);
});

