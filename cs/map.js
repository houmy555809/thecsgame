var maps={
    0:{
        "gridsize":1000,
        "width":12,
        "height":12,
        "spawnX":9000,
        "spawnY":6000,
        "obstacle":[
            "XXXXXXXXXXXX",
            "XXXX    XXXX",
            "XXXX    XXXX",
            "XXXX    XXXX",
            "XXXX    XXXX",
            "XXXX    XXXX",
            "XXXX    XXXX",
            "XXX      XXX",
            "XX        XX",
            "X          X",
            "X          X",
            "XXXXXXXXXXXX"
        ],
        "spawners":[
            {
                "tag":"basic",
                "lvl":[0,1,2],
                "pos":[
                    "XXXXXXXXXXXX",
                    "XXXX    XXXX",
                    "XXXX    XXXX",
                    "XXXX    XXXX",
                    "XXXX    XXXX",
                    "XXXX    XXXX",
                    "XXXX    XXXX",
                    "XXX  OO  XXX",
                    "XX  OOOO  XX",
                    "X  OOOOOO  X",
                    "X          X",
                    "XXXXXXXXXXXX"
                ],
                "prob":1,
            },
            {
                "tag":"basic",
                "lvl":[3,4,5],
                "pos":[
                    "XXXXXXXXXXXX",
                    "XXXX    XXXX",
                    "XXXX    XXXX",
                    "XXXXOOOOXXXX",
                    "XXXXOOOOXXXX",
                    "XXXXOOOOXXXX",
                    "XXXXOOOOXXXX",
                    "XXXO    OXXX",
                    "XXOO    OOXX",
                    "XOO      OOX",
                    "XOOOOOOOOOOX",
                    "XXXXXXXXXXXX"
                ],
                "prob":0.75,
            },
            {
                "tag":"basic",
                "lvl":[6],
                "pos":[
                    "XXXXXXXXXXXX",
                    "XXXXOOOOXXXX",
                    "XXXXOOOOXXXX",
                    "XXXXOOOOXXXX",
                    "XXXX    XXXX",
                    "XXXX    XXXX",
                    "XXXX    XXXX",
                    "XXX      XXX",
                    "XX        XX",
                    "X          X",
                    "X          X",
                    "XXXXXXXXXXXX"
                ],
                "prob":0.5,
            },
            {
                "tag":"rare",
                "lvl":[0,1,2,3],
                "pos":[
                    "XXXXXXXXXXXX",
                    "XXXX    XXXX",
                    "XXXX    XXXX",
                    "XXXXOOOOXXXX",
                    "XXXXOOOOXXXX",
                    "XXXXOOOOXXXX",
                    "XXXXOOOOXXXX",
                    "XXXO    OXXX",
                    "XXOO    OOXX",
                    "XOO      OOX",
                    "XOOOOOOOOOOX",
                    "XXXXXXXXXXXX"
                ],
                "prob":0.5,
            },
            {
                "tag":"rare",
                "lvl":[4,5,6],
                "pos":[
                    "XXXXXXXXXXXX",
                    "XXXXOOOOXXXX",
                    "XXXXOOOOXXXX",
                    "XXXX    XXXX",
                    "XXXX    XXXX",
                    "XXXX    XXXX",
                    "XXXX    XXXX",
                    "XXX      XXX",
                    "XX        XX",
                    "X          X",
                    "X          X",
                    "XXXXXXXXXXXX"
                ],
                "prob":0.25,
            },
            {
                "tag":"radioactive",
                "lvl":[0,1,2,3],
                "pos":[
                    "XXXXXXXXXXXX",
                    "XXXX    XXXX",
                    "XXXX    XXXX",
                    "XXXXOOOOXXXX",
                    "XXXXOOOOXXXX",
                    "XXXXOOOOXXXX",
                    "XXXXOOOOXXXX",
                    "XXXO    OXXX",
                    "XXOO    OOXX",
                    "XOO      OOX",
                    "XOOOOOOOOOOX",
                    "XXXXXXXXXXXX"
                ],
                "prob":0.1,
            },
            {
                "tag":"radioactive",
                "lvl":[4,5,6],
                "pos":[
                    "XXXXXXXXXXXX",
                    "XXXXOOOOXXXX",
                    "XXXXOOOOXXXX",
                    "XXXX    XXXX",
                    "XXXX    XXXX",
                    "XXXX    XXXX",
                    "XXXX    XXXX",
                    "XXX      XXX",
                    "XX        XX",
                    "X          X",
                    "X          X",
                    "XXXXXXXXXXXX"
                ],
                "prob":0.1,
            }
        ],
        "teleporters":[
            {
                "x":1500,
                "y":6000,
                "mapid":1,
            }
        ]
    },
    1:{
        "gridsize":1000,
        "width":12,
        "height":12,
        "spawnX":1500,
        "spawnY":6000,
        "obstacle":[
            "XXXXXXXXXXXX",
            "X          X",
            "X          X",
            "X          X",
            "X          X",
            "X          X",
            "X          X",
            "X          X",
            "X          X",
            "X          X",
            "X          X",
            "XXXXXXXXXXXX"
        ],
        "spawners":[
            {
                "tag":"basic",
                "lvl":[5,6],
                "pos":[
                    "XXXXXXXXXXXX",
                    "XOOOOOOOOOOX",
                    "XOOOOOOOOOOX",
                    "X  OOOOOO  X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "XXXXXXXXXXXX"
                ],
                "prob":0.95
            },
            {
                "tag":"rare",
                "lvl":[5,6],
                "pos":[
                    "XXXXXXXXXXXX",
                    "XOOOOOOOOOOX",
                    "XOOOOOOOOOOX",
                    "X  OOOOOO  X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "XXXXXXXXXXXX"
                ],
                "prob":0.75
            },
            {
                "tag":"radioactive",
                "lvl":[5,6],
                "pos":[
                    "XXXXXXXXXXXX",
                    "XOOOOOOOOOOX",
                    "XOOOOOOOOOOX",
                    "X  OOOOOO  X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "XXXXXXXXXXXX"
                ],
                "prob":0.25
            },
            {
                "tag":"basic",
                "lvl":[5,6],
                "pos":[
                    "XXXXXXXXXXXX",
                    "XOOOOOOOOOOX",
                    "XOOOOOOOOOOX",
                    "X  OOOOOO  X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "XXXXXXXXXXXX"
                ],
                "prob":0.75
            },
            {
                "tag":"boss",
                "lvl":[7],
                "pos":[
                    "XXXXXXXXXXXX",
                    "X          X",
                    "XOO      OOX",
                    "XOOOOOOOOOOX",
                    "XOOOOOOOOOOX",
                    "XOOOOOOOOOOX",
                    "XOOOOOOOOOOX",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "XXXXXXXXXXXX"
                ],
                "prob":0.3
            },
            {
                "tag":"boss",
                "lvl":[8],
                "pos":[
                    "XXXXXXXXXXXX",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "XOOOOOOOOOOX",
                    "XOOOOOOOOOOX",
                    "XOOOOOOOOOOX",
                    "XXXXXXXXXXXX"
                ],
                "prob":0.3
            },
            {
                "tag":"whr",
                "lvl":[8],
                "pos":[
                    "XXXXXXXXXXXX",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X          X",
                    "X   OOOO   X",
                    "XXXXXXXXXXXX"
                ],
                "prob":0.05
            }
        ],
        "teleporters":[
            {
                "x":1250,
                "y":6000,
                "mapid":0,
            },
            {
                "x":10950,
                "y":6000,
                "mapid":3
            }
        ]
    },
    2:{
        "gridsize":100,
        "width":22,
        "height":85,
        "spawnX":1150,
        "spawnY":250,
        "obstacle":[
            "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "X                    X                                         X                    X",
            "X                    X                    X                    X                    X",
            "X                    X                    X                    X                    X",
            "X                    X                    X                    X                    X",
            "X                    X                    X                    X                    X",
            "X                    X                    X                    X                    X",
            "X                    X                    X                    X                    X",
            "X                    X                    X                    X                    X",
            "X                    X                    X                    X                    X",
            "X                    X                    X                    X                    X",
            "X                    X                    X                    X                    X",
            "X                    X                    X                    X                    X",
            "X                    X                    X                    X                    X",
            "X                    X                    X                    X                    X",
            "X                    X                    X                    X                    X",
            "X                    X                    X                    X                    X",
            "X                    X                    X                    X                    X",
            "X                    X                    X                    X                    X",
            "X                    X                    X                    X                    X",
            "X                                         X                                         X",
            "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        ],
        "spawners":[
            {
                "tag":"basic",
                "lvl":[0],
                "pos":[
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "XOOOOOOOOOOOOOOOOOOOOX                                         X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOO                     X                                         X",
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                ],
                "prob":0.5
            },
            {
                "tag":"rare",
                "lvl":[0],
                "pos":[
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "XOOOOOOOOOOOOOOOOOOOOX                                         X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOO                     X                                         X",
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                ],
                "prob":0.3
            },
            {
                "tag":"radioactive",
                "lvl":[0],
                "pos":[
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "XOOOOOOOOOOOOOOOOOOOOX                                         X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOOX                    X                    X                    X",
                    "XOOOOOOOOOOOOOOOOOOOO                     X                                         X",
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                ],
                "prob":0.1
            },
            {
                "tag":"basic",
                "lvl":[1],
                "pos":[
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "X                    XOOOOOOOOOOOOOOOOOOOO                     X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                     OOOOOOOOOOOOOOOOOOOOX                                         X",
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                ],
                "prob":0.5
            },
            {
                "tag":"rare",
                "lvl":[1],
                "pos":[
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "X                    XOOOOOOOOOOOOOOOOOOOO                     X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                     OOOOOOOOOOOOOOOOOOOOX                                         X",
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                ],
                "prob":0.3
            },
            {
                "tag":"radioactive",
                "lvl":[1],
                "pos":[
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "X                    XOOOOOOOOOOOOOOOOOOOO                     X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                    XOOOOOOOOOOOOOOOOOOOOX                    X                    X",
                    "X                     OOOOOOOOOOOOOOOOOOOOX                                         X",
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                ],
                "prob":0.1
            },
            {
                "tag":"basic",
                "lvl":[2],
                "pos":[
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "X                    X                     OOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                                         XOOOOOOOOOOOOOOOOOOOO                     X",
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                ],
                "prob":0.5
            },
            {
                "tag":"rare",
                "lvl":[2],
                "pos":[
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "X                    X                     OOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                                         XOOOOOOOOOOOOOOOOOOOO                     X",
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                ],
                "prob":0.3
            },
            {
                "tag":"radioactive",
                "lvl":[2],
                "pos":[
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "X                    X                     OOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                    X                    XOOOOOOOOOOOOOOOOOOOOX                    X",
                    "X                                         XOOOOOOOOOOOOOOOOOOOO                     X",
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                ],
                "prob":0.1
            },
            {
                "tag":"basic",
                "lvl":[3],
                "pos":[
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "X                    X                                         XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                                         X                     OOOOOOOOOOOOOOOOOOOOX",
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                ],
                "prob":0.5
            },
            {
                "tag":"rare",
                "lvl":[3],
                "pos":[
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "X                    X                                         XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                                         X                     OOOOOOOOOOOOOOOOOOOOX",
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                ],
                "prob":0.3
            },
            {
                "tag":"radioactive",
                "lvl":[3],
                "pos":[
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "X                    X                                         XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                    X                    X                    XOOOOOOOOOOOOOOOOOOOOX",
                    "X                                         X                     OOOOOOOOOOOOOOOOOOOOX",
                    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                ],
                "prob":0.1
            }
        ],
        "teleporters":[
            {
                "x":1100,
                "y":8350,
                "mapid":0
            }
        ]
    },
    3:{
        "gridsize":100,
        "width":11,
        "height":11,
        "spawnX":200,
        "spawnY":550,
        "obstacle":[
            "XXXXXXXXXXX",
            "X         X",
            "X         X",
            "X         X",
            "X         X",
            "X         X",
            "X         X",
            "X         X",
            "X         X",
            "X         X",
            "XXXXXXXXXXX"
        ],
        "spawners":[
            {
                "tag":"final-boss",
                "cond":function(){
                    var flag=false;
                    for(var i=0;i<active_mobs.length;i++){
                        if(active_mobs[i].name=="Fr"){
                            flag=true;
                            break;
                        }
                    }
                    return !flag;
                },
                "lvl":[8],
                "pos":[
                    "XXXXXXXXXXX",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X    O    X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "XXXXXXXXXXX"
                ],
                "prob":1
            },
            {
                "tag":"basic",
                "cond":function(){
                    var flag=false;
                    for(var i=0;i<active_mobs.length;i++){
                        if(active_mobs[i].name=="Fr"){
                            flag=true;
                            break;
                        }
                    }
                    return flag;
                },
                "lvl":[8],
                "pos":[
                    "XXXXXXXXXXX",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X    O    X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "XXXXXXXXXXX"
                ],
                "prob":0.5
            },
            {
                "tag":"rare",
                "cond":function(){
                    var flag=false;
                    for(var i=0;i<active_mobs.length;i++){
                        if(active_mobs[i].name=="Fr"){
                            flag=true;
                            break;
                        }
                    }
                    return flag;
                },
                "lvl":[8],
                "pos":[
                    "XXXXXXXXXXX",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X    O    X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "XXXXXXXXXXX"
                ],
                "prob":1
            }
        ],
        "teleporters":[
            {
                "x":875,
                "y":550,
                "mapid":1,
            }
        ]
    },
    4:{
        "gridsize":100,
        "width":11,
        "height":11,
        "spawnX":200,
        "spawnY":550,
        "obstacle":[
            "XXXXXXXXXXX",
            "X         X",
            "X         X",
            "X         X",
            "X         X",
            "X         X",
            "X         X",
            "X         X",
            "X         X",
            "X         X",
            "XXXXXXXXXXX"
        ],
        "spawners":[
            {
                "tag":"ultra-final-boss",
                "cond":function(){
                    var flag=false;
                    for(var i=0;i<active_mobs.length;i++){
                        if(active_mobs[i].name=="Uue"){
                            flag=true;
                            break;
                        }
                    }
                    return !flag;
                },
                "lvl":[8],
                "pos":[
                    "XXXXXXXXXXX",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X    O    X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "XXXXXXXXXXX"
                ],
                "prob":1
            },
            {
                "tag":"basic",
                "cond":function(){
                    var flag=false;
                    for(var i=0;i<active_mobs.length;i++){
                        if(active_mobs[i].name=="Uue"){
                            flag=true;
                            break;
                        }
                    }
                    return flag;
                },
                "lvl":[8],
                "pos":[
                    "XXXXXXXXXXX",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X    O    X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "XXXXXXXXXXX"
                ],
                "prob":1
            },
            {
                "tag":"rare",
                "cond":function(){
                    var flag=false;
                    for(var i=0;i<active_mobs.length;i++){
                        if(active_mobs[i].name=="Uue"){
                            flag=true;
                            break;
                        }
                    }
                    return flag;
                },
                "lvl":[8],
                "pos":[
                    "XXXXXXXXXXX",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X    O    X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "XXXXXXXXXXX"
                ],
                "prob":1
            },
            {
                "tag":"basic",
                "cond":function(){
                    var flag=false;
                    for(var i=0;i<active_mobs.length;i++){
                        if(active_mobs[i].name=="Uue"){
                            flag=true;
                            break;
                        }
                    }
                    return flag;
                },
                "lvl":[8],
                "pos":[
                    "XXXXXXXXXXX",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X    O    X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "XXXXXXXXXXX"
                ],
                "prob":1
            },
            {
                "tag":"rare",
                "cond":function(){
                    var flag=false;
                    for(var i=0;i<active_mobs.length;i++){
                        if(active_mobs[i].name=="Uue"){
                            flag=true;
                            break;
                        }
                    }
                    return flag;
                },
                "lvl":[8],
                "pos":[
                    "XXXXXXXXXXX",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X    O    X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "XXXXXXXXXXX"
                ],
                "prob":1
            },
            {
                "tag":"basic",
                "cond":function(){
                    var flag=false;
                    for(var i=0;i<active_mobs.length;i++){
                        if(active_mobs[i].name=="Uue"){
                            flag=true;
                            break;
                        }
                    }
                    return flag;
                },
                "lvl":[8],
                "pos":[
                    "XXXXXXXXXXX",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X    O    X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "XXXXXXXXXXX"
                ],
                "prob":1
            },
            {
                "tag":"rare",
                "cond":function(){
                    var flag=false;
                    for(var i=0;i<active_mobs.length;i++){
                        if(active_mobs[i].name=="Uue"){
                            flag=true;
                            break;
                        }
                    }
                    return flag;
                },
                "lvl":[8],
                "pos":[
                    "XXXXXXXXXXX",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X    O    X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "X         X",
                    "XXXXXXXXXXX"
                ],
                "prob":1
            }
        ],
        "teleporters":[
            {
                "x":875,
                "y":550,
                "mapid":3,
            }
        ]
    },
};
