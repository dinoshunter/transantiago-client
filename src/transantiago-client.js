var request = require("request-promise");
var rua     = require('random-mobile-ua');
var parse   = require("./parseResponse.js");


module.exports = function(stopcode) {

    var options = {
        uri: `http://m.ibus.cl/Servlet?paradero=${ stopcode }&servicio=&button=Consulta+Paradero`,
        headers: {
            'User-Agent': rua.randomPhoneAgent().agent
        },
        transform: parse
    };

    return request(options);

};
