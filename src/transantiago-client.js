var request = require("request-promise");
var rua     = require('random-mobile-ua');
var parse   = require("./parseResponce.js");
var cheerio = require('cheerio');
var Promise = require("bluebird");


module.exports = function(stopcode) {

    return new Promise(function(resolve, reject){
        var options = {
            uri: `http://m.ibus.cl/Servlet?paradero=${ stopcode }&servicio=&button=Consulta+Paradero+`,
            headers: {
                'User-Agent': rua.randomPhoneAgent().agent
            }
        };

        request(options)
            .then( body => {
                var r =  parse(body);
                resolve(r);
            })
            .catch(e => {
                reject(e);
            });
    });

};
