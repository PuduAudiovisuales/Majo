var APP_DATA = {
  "scenes": [
    {
      "id": "0-cuarto",
      "name": "Cuarto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0.7666029492043513,
        "pitch": 0.08905106229476445,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.6900916226782225,
          "pitch": 0.015234742525340295,
          "rotation": 0,
          "target": "5-repartidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 2.2662967514080847,
        "pitch": 0.24358655007136498,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.5709373921386103,
          "pitch": 0.11022549519536717,
          "rotation": 0,
          "target": "5-repartidor"
        },
        {
          "yaw": -3.079301270729017,
          "pitch": 0.1922316661295156,
          "rotation": 0,
          "target": "2-comedor"
        },
        {
          "yaw": -2.7362044728427293,
          "pitch": 0.12056777059822821,
          "rotation": 0,
          "target": "3-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-comedor",
      "name": "Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0.3249036369535556,
        "pitch": 0.22819250759367016,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.03517029779191816,
          "pitch": 0.14867873384065788,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": 1.6757801153480818,
          "pitch": 0.16067846610209635,
          "rotation": 0,
          "target": "5-repartidor"
        },
        {
          "yaw": -2.408710214320033,
          "pitch": 0.13470607856740457,
          "rotation": 0,
          "target": "3-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6349557516560402,
          "pitch": 0.14976633441366616,
          "rotation": 0,
          "target": "2-comedor"
        },
        {
          "yaw": 0.2650644860661462,
          "pitch": 0.07861578107062606,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": 1.5873563155138593,
          "pitch": 0.15140649266819395,
          "rotation": 0,
          "target": "4-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4536080433387717,
          "pitch": 0.13356078843459152,
          "rotation": 0,
          "target": "3-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-repartidor",
      "name": "Repartidor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -1.3600224885262122,
        "pitch": 0.15955298555557462,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.5161807597518013,
          "pitch": 0.15764394645365343,
          "rotation": 0,
          "target": "2-comedor"
        },
        {
          "yaw": -0.05908091530888804,
          "pitch": 0.2114696060030088,
          "rotation": 0,
          "target": "0-cuarto"
        },
        {
          "yaw": 1.267547970915702,
          "pitch": 0.1382510251032727,
          "rotation": 0,
          "target": "6-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.091215478062093,
          "pitch": 0.1608108647997195,
          "rotation": 0,
          "target": "5-repartidor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Majo",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
