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
You can also include service code (the bus code) in your query:

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
		},
		{
			"service": "210V",
			"buses": [
				{
					"bus": "BJFK63",
					"arrivaltime": "Entre 09 Y 15 min.",
					"dist": "2689  mts."
				},
				{
					"bus": "BJFG94",
					"arrivaltime": "Entre 18 Y 28 min.",
					"dist": "4859  mts."
				}
			]
		},
		{
			"service": "345",
			"buses": [
				{
					"bus": "CJRW14",
					"arrivaltime": "Menos de 5 min.",
					"dist": "693  mts."
				},
				{
					"bus": "CJRW52",
					"arrivaltime": "Entre 20 Y 30 min.",
					"dist": "5523  mts."
				}
			]
		},
		{
			"service": "385",
			"buses": [
				{
					"bus": "FLXF70",
					"arrivaltime": "Menos de 5 min.",
					"dist": "825  mts."
				},
				{
					"bus": "BJFS12",
					"arrivaltime": "Entre 09 Y 15 min.",
					"dist": "2705  mts."
				}
			]
		},
		{
			"service": "403",
			"buses": [
				{
					"bus": "ZN5156",
					"arrivaltime": "Entre 07 Y 11 min.",
					"dist": "1062   mts."
				}
			]
		},
		{
			"service": "412",
			"buses": [
				{
					"bus": "WA9497",
					"arrivaltime": "Entre 19 Y 29 min.",
					"dist": "7044   mts."
				}
			]
		},
		{
			"service": "418",
			"buses": [
				{
					"bus": "CJRH78",
					"arrivaltime": "Entre 12 Y 18 min.",
					"dist": "3133  mts."
				},
				{
					"bus": "BBZX42",
					"arrivaltime": "Entre 24 Y 34 min.",
					"dist": "6783  mts."
				}
			]
		},
		{
			"service": "422",
			"buses": [
				{
					"bus": "ZN6155",
					"arrivaltime": "Menos de 5 min.",
					"dist": "230  mts."
				},
				{
					"bus": "FLXB10",
					"arrivaltime": "Entre 03 Y 07 min.",
					"dist": "1370  mts."
				}
			]
		},
		{
			"service": "513",
			"buses": [
				{
					"bus": "BJFH50",
					"arrivaltime": "Entre 04 Y 08 min.",
					"dist": "1134  mts."
				},
				{
					"bus": "FLXD29",
					"arrivaltime": "Entre 12 Y 20 min.",
					"dist": "2954  mts."
				}
			]
		},
		{
			"service": "518",
			"buses": [
				{
					"bus": "CJRZ76",
					"arrivaltime": "Menos de 5 min.",
					"dist": "27  mts."
				},
				{
					"bus": "BJFH47",
					"arrivaltime": "Entre 08 Y 14 min.",
					"dist": "1357  mts."
				}
			]
		}
	],
	"outof": [
		"221E",
		"346N",
		"I14N",
		"F30N"
	]
}
```