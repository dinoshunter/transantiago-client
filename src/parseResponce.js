"use strict";

var cheerio = require('cheerio');

module.exports = function (body) {

    var $ = cheerio.load(body);
    var availServices = [];
    var outOfServices = [];


    var isheader = true;
    var currService = null;

    $("div > div > table").not(".cabecera4").find("tr").each((i, tr) => {
        if(isheader) {
            // ignore  first  <tr>,
            isheader = false;
            return;
        }

        var ntr = $(tr).children().length;

        switch (ntr) {
        case 1:{
            // end of data
            if(currService){
                availServices.push(currService);
            }

            currService = null;

            return;
            break;
        }
        case 2:{
            // say: servies is out operation time
            let bus = $(tr).children().eq(0).text().trim().replace(/(\r\n|\n|\r)/gm," ").trim();
            outOfServices.push(bus);
            return;
            break;
        }
        case 3:{
            // add bus  on current service
            let bus          = $(tr).children().eq(0).text().trim().replace(/(\r\n|\n|\r)/gm," ").trim();
            let arrivaltime  = $(tr).children().eq(1).text().trim().replace(/(\r\n|\n|\r)/gm," ").trim();
            let dist         = $(tr).children().eq(2).text().trim().replace(/(\r\n|\n|\r)/gm," ").trim();
            currService.buses.push({
                bus         : bus,
                arrivaltime : arrivaltime,
                dist        : dist
            });
            break;
        }
        case 4:{
            // start servise data, this is current servise.
            let service     = $(tr).children().eq(0).text().trim().replace(/(\r\n|\n|\r)/gm," ").trim();
            let bus         = $(tr).children().eq(1).text().trim().replace(/(\r\n|\n|\r)/gm," ").trim();
            let arrivaltime = $(tr).children().eq(2).text().trim().replace(/(\r\n|\n|\r)/gm," ").trim();
            let dist        = $(tr).children().eq(3).text().trim().replace(/(\r\n|\n|\r)/gm," ").trim();

            currService = {
                service : service,
                buses   : []
            };

            currService.buses.push({
                bus         : bus,
                arrivaltime : arrivaltime,
                dist        : dist
            });

            return;
            break;
        }
        }

    });

    return {avail : availServices, outof : outOfServices};
};
