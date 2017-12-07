# Transantiago api

Non official api for querying data from [Transantiago](http://www.transantiago.cl/) and
get closest buses to bus stop.

# Install
```sh
npm install transantiago-client --save
```

# Usage

Example: Query for buses arrival time and distance to bus stop pc155.

```javascript
var tsapi = require("transantiago-client");

tsapi("pc155").then( r => {

  //do something
  console.log(JSON.stringify(r));

}).catch(err => {
    console.log(err)
});
```

The result is:

```json
{
  "avail": [
    {
      "service": "401N",
      "buses": [
        {
          "bus": "CJRX99",
          "arrivaltime": "En menos de 10 min.",
          "dist": "47  mts."
        },
        {
          "bus": "FLXC69",
          "arrivaltime": "En menos de 10 min.",
          "dist": "4117  mts."
        }
      ]
    },
    {
      "service": "426",
      "buses": [
        {
          "bus": "FLXJ72",
          "arrivaltime": "Entre 07 Y 15 min.",
          "dist": "5727  mts."
        },
        {
          "bus": "WB1981",
          "arrivaltime": "Entre 22 Y 32 min.",
          "dist": "14017  mts."
        }
      ]
    }
  ],
  "outof": [
    "117",
    "117C",
    "401",
    "406",
    "407",
    "421",
    "427",
    "429C",
    "430"
  ]
}

```
You may also include service code (the bus code) in your query:

```javascript
var tsapi = require("transantiago-client");

tsapi("pa167", "210").then( r => {

  //do something
  console.log(JSON.stringify(r));

}).catch(err => {
    console.log(err)
});
```

The result is
```json
{
	"avail": [
		{
			"service": "210",
			"buses": [
				{
					"bus": "ZN6619",
					"arrivaltime": "Menos de 5 min.",
					"dist": "540  mts."
				},
				{
					"bus": "ZU5657",
					"arrivaltime": "Entre 10 Y 16 min.",
					"dist": "2740  mts."
				}
			]
		}
	],
	"outof": []
}
```