var request = require("request-promise");
var rua     = require('random-mobile-ua');
var parse   = require("./parseResponse.js");


module.exports = function(stopcode, servicecode) {
    var options = {
        uri: `http://m.ibus.cl/Servlet?paradero=${ stopcode }&servicio=${ servicecode ? servicecode : "" }&button=Consulta+Paradero`,
        headers: {
            'User-Agent': rua.randomPhoneAgent().agent
        },
        transform: parse
    };

    return request(options);

};
