var petals={
    "H₂-0":{
        "atk":10,
        "hp":10,
        "srad":[],
        "cd":100,
        "desc":"一种无色透明气体。</br>atk:10 hp:10 cd:1s",
        "forge_factor":1
    },
    "H₂-1":{
        "atk":30,
        "hp":30,
        "srad":[],
        "cd":100,
        "desc":"一种无色透明气体。</br>atk:30 hp:30 cd:1s",
        "forge_factor":1
    },
    "H₂-2":{
        "atk":90,
        "hp":90,
        "srad":[],
        "cd":100,
        "desc":"一种无色透明气体。</br>atk:90 hp:90 cd:1s",
        "forge_factor":1
    },
    "H₂-3":{
        "atk":270,
        "hp":270,
        "srad":[],
        "cd":100,
        "desc":"一种无色透明气体。</br>atk:270 hp:270 cd:1s",
        "forge_factor":1
    },
    "H₂-4":{
        "atk":810,
        "hp":810,
        "srad":[],
        "cd":100,
        "desc":"一种无色透明气体。</br>atk:810 hp:810 cd:1s",
        "forge_factor":1
    },
    "H₂-5":{
        "atk":2430,
        "hp":2430,
        "srad":[],
        "cd":100,
        "desc":"一种无色透明气体。</br>atk:2430 hp:2430 cd:1s",
        "forge_factor":1
    },
    "H₂-6":{
        "atk":7290,
        "hp":7290,
        "srad":[],
        "cd":100,
        "desc":"一种无色透明气体。</br>atk:7290 hp:7290 cd:1s",
        "forge_factor":1
    },
    "H₂-7":{
        "atk":21870,
        "hp":21870,
        "srad":[],
        "cd":100,
        "desc":"一种无色透明气体。</br>atk:21870 hp:21870 cd:1s",
        "forge_factor":1
    },
    "H₂-8":{
        "atk":65610,
        "hp":65610,
        "srad":[],
        "cd":100,
        "desc":"一种无色透明气体。</br>atk:65610 hp:65610 cd:1s",
        "forge_factor":1
    },
    "O₂-0":{
        "atk":3,
        "hp":5,
        "srad":[
            {
                "cond":function(){return hp<maxhp-.01;},
                "rad":0,
                "vel":0.025,
                "die":true,
                "heal":5,
                "priority":0
            },
            {
                "cond":function(){return true;},
                "rad":60,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":0
            }
        ],
        "cd":200,
        "desc":"另外一种无色透明气体。可以支持呼吸。</br>atk:3 hp:5 heal:5 cd:2s",
        "forge_factor":1
    },
    "O₂-1":{
        "atk":9,
        "hp":15,
        "srad":[
            {
                "cond":function(){return hp<maxhp-.01;},
                "rad":0,
                "vel":0.025,
                "die":true,
                "heal":15,
                "priority":0
            },
            {
                "cond":function(){return true;},
                "rad":60,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":0
            }
        ],
        "cd":200,
        "desc":"另外一种无色透明气体。可以支持呼吸。</br>atk:9 hp:15 heal:15 cd:2s",
        "forge_factor":1
    },
    "O₂-2":{
        "atk":27,
        "hp":45,
        "srad":[
            {
                "cond":function(){return hp<maxhp-.01;},
                "rad":0,
                "vel":0.025,
                "die":true,
                "heal":45,
                "priority":0
            },
            {
                "cond":function(){return true;},
                "rad":60,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":0
            }
        ],
        "cd":200,
        "desc":"另外一种无色透明气体。可以支持呼吸。</br>atk:27 hp:45 heal:45 cd:2s",
        "forge_factor":1
    },
    "O₂-3":{
        "atk":81,
        "hp":135,
        "srad":[
            {
                "cond":function(){return hp<maxhp-.01;},
                "rad":0,
                "vel":0.025,
                "die":true,
                "heal":135,
                "priority":0
            },
            {
                "cond":function(){return true;},
                "rad":60,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":0
            }
        ],
        "cd":200,
        "desc":"另外一种无色透明气体。可以支持呼吸。</br>atk:81 hp:135 heal:135 cd:2s",
        "forge_factor":1
    },
    "O₂-4":{
        "atk":243,
        "hp":405,
        "srad":[
            {
                "cond":function(){return hp<maxhp-.01;},
                "rad":0,
                "vel":0.025,
                "die":true,
                "heal":405,
                "priority":0
            },
            {
                "cond":function(){return true;},
                "rad":60,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":0
            }
        ],
        "cd":200,
        "desc":"另外一种无色透明气体。可以支持呼吸。</br>atk:243 hp:405 heal:405 cd:2s",
        "forge_factor":1
    },
    "O₂-5":{
        "atk":729,
        "hp":1215,
        "srad":[
            {
                "cond":function(){return hp<maxhp-.01;},
                "rad":0,
                "vel":0.025,
                "die":true,
                "heal":1215,
                "priority":0
            },
            {
                "cond":function(){return true;},
                "rad":60,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":0
            }
        ],
        "cd":200,
        "desc":"另外一种无色透明气体。可以支持呼吸。</br>atk:729 hp:1215 heal:1215 cd:2s",
        "forge_factor":1
    },
    "O₂-6":{
        "atk":2187,
        "hp":3645,
        "srad":[
            {
                "cond":function(){return hp<maxhp-.01;},
                "rad":0,
                "vel":0.025,
                "die":true,
                "heal":3645,
                "priority":0
            },
            {
                "cond":function(){return true;},
                "rad":60,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":0
            }
        ],
        "cd":200,
        "desc":"另外一种无色透明气体。可以支持呼吸。</br>atk:2187 hp:3645 heal:3645 cd:2s",
        "forge_factor":1
    },
    "O₂-7":{
        "atk":6561,
        "hp":10935,
        "srad":[
            {
                "cond":function(){return hp<maxhp-.01;},
                "rad":0,
                "vel":0.025,
                "die":true,
                "heal":10935,
                "priority":0
            },
            {
                "cond":function(){return true;},
                "rad":60,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":0
            }
        ],
        "cd":200,
        "desc":"另外一种无色透明气体。可以支持呼吸。</br>atk:65613 hp:10935 heal:10935 cd:2s",
        "forge_factor":1
    },
    "O₂-8":{
        "atk":19683,
        "hp":32805,
        "srad":[
            {
                "cond":function(){return hp<maxhp-.01;},
                "rad":0,
                "vel":0.025,
                "die":true,
                "heal":32805,
                "priority":0
            },
            {
                "cond":function(){return true;},
                "rad":60,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":0
            }
        ],
        "cd":200,
        "desc":"另外一种无色透明气体。可以支持呼吸。</br>atk:19683 hp:32805 heal:32805 cd:2s",
        "forge_factor":1
    },
    "CaCO₃-0":{
        "atk":5,
        "hp":100,
        "srad":[],
        "cd":1000,
        "desc":"碳酸钙。硬度相对比较高。</br>atk:5 hp:100 cd:10s",
        "forge_factor":1
    },
    "CaCO₃-1":{
        "atk":15,
        "hp":300,
        "srad":[],
        "cd":1000,
        "desc":"碳酸钙。硬度相对比较高。</br>atk:15 hp:300 cd:10s",
        "forge_factor":1
    },
    "CaCO₃-2":{
        "atk":45,
        "hp":900,
        "srad":[],
        "cd":1000,
        "desc":"碳酸钙。硬度相对比较高。</br>atk:45 hp:900 cd:10s",
        "forge_factor":1
    },
    "CaCO₃-3":{
        "atk":135,
        "hp":2700,
        "srad":[],
        "cd":1000,
        "desc":"碳酸钙。硬度相对比较高。</br>atk:135 hp:2700 cd:10s",
        "forge_factor":1
    },
    "CaCO₃-4":{
        "atk":405,
        "hp":8100,
        "srad":[],
        "cd":1000,
        "desc":"碳酸钙。硬度相对比较高。</br>atk:405 hp:8100 cd:10s",
        "forge_factor":1
    },
    "CaCO₃-5":{
        "atk":1215,
        "hp":24300,
        "srad":[],
        "cd":1000,
        "desc":"碳酸钙。硬度相对比较高。</br>atk:1215 hp:24300 cd:10s",
        "forge_factor":1
    },
    "CaCO₃-6":{
        "atk":3645,
        "hp":72900,
        "srad":[],
        "cd":1000,
        "desc":"碳酸钙。硬度相对比较高。</br>atk:3645 hp:72900 cd:10s",
        "forge_factor":1
    },
    "CaCO₃-7":{
        "atk":10935,
        "hp":218700,
        "srad":[],
        "cd":1000,
        "desc":"碳酸钙。硬度相对比较高。</br>atk:10935 hp:218700 cd:10s",
        "forge_factor":1
    },
    "CaCO₃-8":{
        "atk":32805,
        "hp":656100,
        "srad":[],
        "cd":1000,
        "desc":"碳酸钙。硬度相对比较高。</br>atk:32805 hp:656100 cd:10s",
        "forge_factor":1
    },
    "HNO₃-0":{
        "atk":50,
        "hp":1,
        "srad":[],
        "cd":100,
        "desc":"硝酸，高伤害但是不稳定。</br>atk:50 hp:1 cd:1s",
        "forge_factor":1.25
    },
    "HNO₃-1":{
        "atk":150,
        "hp":3,
        "srad":[],
        "cd":100,
        "desc":"硝酸，高伤害但是不稳定。</br>atk:150 hp:3 cd:1s",
        "forge_factor":1.25
    },
    "HNO₃-2":{
        "atk":450,
        "hp":9,
        "srad":[],
        "cd":100,
        "desc":"硝酸，高伤害但是不稳定。</br>atk:450 hp:9 cd:1s",
        "forge_factor":1.25
    },
    "HNO₃-3":{
        "atk":1350,
        "hp":27,
        "srad":[],
        "cd":100,
        "desc":"硝酸，高伤害但是不稳定。</br>atk:1350 hp:27 cd:1s",
        "forge_factor":1.25
    },
    "HNO₃-4":{
        "atk":4050,
        "hp":81,
        "srad":[],
        "cd":100,
        "desc":"硝酸，高伤害但是不稳定。</br>atk:4050 hp:81 cd:1s",
        "forge_factor":1.25
    },
    "HNO₃-5":{
        "atk":12150,
        "hp":243,
        "srad":[],
        "cd":100,
        "desc":"硝酸，高伤害但是不稳定。</br>atk:12150 hp:243 cd:1s",
        "forge_factor":1.25
    },
    "HNO₃-6":{
        "atk":32450,
        "hp":729,
        "srad":[],
        "cd":100,
        "desc":"硝酸，高伤害但是不稳定。</br>atk:32450 hp:729 cd:1s",
        "forge_factor":1.25
    },
    "HNO₃-7":{
        "atk":109350,
        "hp":2187,
        "srad":[],
        "cd":100,
        "desc":"硝酸，高伤害但是不稳定。</br>atk:109350 hp:2187 cd:1s",
        "forge_factor":1.25
    },
    "HNO₃-8":{
        "atk":328050,
        "hp":6561,
        "srad":[],
        "cd":100,
        "desc":"硝酸，高伤害但是不稳定。</br>atk:328050 hp:6561 cd:1s",
        "forge_factor":1.25
    },
    "H₂CO₃-0":{
        "atk":30,
        "hp":2,
        "srad":[],
        "cd":100,
        "desc":"从历史的垃圾堆里面翻出来的废稿（<br>碳酸，不稳定。</br>atk:30 hp:2 cd:1s",
        "forge_factor":10
    },
    "H₂CO₃-1":{
        "atk":90,
        "hp":6,
        "srad":[],
        "cd":100,
        "desc":"从历史的垃圾堆里面翻出来的废稿（<br>碳酸，不稳定。</br>atk:90 hp:6 cd:1s",
        "forge_factor":10
    },
    "H₂CO₃-2":{
        "atk":270,
        "hp":18,
        "srad":[],
        "cd":100,
        "desc":"从历史的垃圾堆里面翻出来的废稿（<br>碳酸，不稳定。</br>atk:270 hp:18 cd:1s",
        "forge_factor":10
    },
    "H₂CO₃-3":{
        "atk":810,
        "hp":54,
        "srad":[],
        "cd":100,
        "desc":"从历史的垃圾堆里面翻出来的废稿（<br>碳酸，不稳定。</br>atk:810 hp:54 cd:1s",
        "forge_factor":10
    },
    "H₂CO₃-4":{
        "atk":2430,
        "hp":162,
        "srad":[],
        "cd":100,
        "desc":"从历史的垃圾堆里面翻出来的废稿（<br>碳酸，不稳定。</br>atk:2430 hp:162 cd:1s",
        "forge_factor":10
    },
    "H₂CO₃-5":{
        "atk":7290,
        "hp":486,
        "srad":[],
        "cd":100,
        "desc":"从历史的垃圾堆里面翻出来的废稿（<br>碳酸，不稳定。</br>atk:7290 hp:486 cd:1s",
        "forge_factor":10
    },
    "H₂CO₃-6":{
        "atk":21870,
        "hp":1458,
        "srad":[],
        "cd":100,
        "desc":"从历史的垃圾堆里面翻出来的废稿（<br>碳酸，不稳定。</br>atk:21870 hp:1458 cd:1s",
        "forge_factor":10
    },
    "H₂CO₃-7":{
        "atk":65610,
        "hp":4376,
        "srad":[],
        "cd":100,
        "desc":"从历史的垃圾堆里面翻出来的废稿（<br>碳酸，不稳定。</br>atk:65610 hp:4376 cd:1s",
        "forge_factor":10
    },
    "H₂CO₃-8":{
        "atk":196830,
        "hp":12138,
        "srad":[],
        "cd":100,
        "desc":"从历史的垃圾堆里面翻出来的废稿（<br>碳酸，不稳定。</br>atk:196830 hp:12138 cd:1s",
        "forge_factor":10
    },
    "KMnO₄-0":{
        "atk":7,
        "hp":10,
        "srad":[
            {
                "cond":function(){return tgt_radius==60;},
                "rad":60,
                "vel":0.05,
                "die":false,
                "heal":0.1,
                "priority":0
            },
            {
                "cond":function(){return tgt_radius==150;},
                "rad":150,
                "vel":0.05,
                "die":false,
                "heal":0.1,
                "priority":0
            }
        ],
        "cd":100,
        "desc":"缓慢释放氧气。</br>atk:7 hp:10 cd:1s heal:10/s",
        "forge_factor":1.25
    },
    "KMnO₄-1":{
        "atk":21,
        "hp":30,
        "srad":[
            {
                "cond":function(){return tgt_radius==60;},
                "rad":60,
                "vel":0.05,
                "die":false,
                "heal":0.3,
                "priority":0
            },
            {
                "cond":function(){return tgt_radius==150;},
                "rad":150,
                "vel":0.05,
                "die":false,
                "heal":0.3,
                "priority":0
            }
        ],
        "cd":100,
        "desc":"缓慢释放氧气。</br>atk:21 hp:30 cd:1s heal:30/s",
        "forge_factor":1.25
    },
    "KMnO₄-2":{
        "atk":63,
        "hp":90,
        "srad":[
            {
                "cond":function(){return tgt_radius==60;},
                "rad":60,
                "vel":0.05,
                "die":false,
                "heal":0.9,
                "priority":0
            },
            {
                "cond":function(){return tgt_radius==150;},
                "rad":150,
                "vel":0.05,
                "die":false,
                "heal":0.9,
                "priority":0
            }
        ],
        "cd":100,
        "desc":"缓慢释放氧气。</br>atk:63 hp:90 cd:1s heal:90/s",
        "forge_factor":1.25
    },
    "KMnO₄-3":{
        "atk":189,
        "hp":270,
        "srad":[
            {
                "cond":function(){return tgt_radius==60;},
                "rad":60,
                "vel":0.05,
                "die":false,
                "heal":2.7,
                "priority":0
            },
            {
                "cond":function(){return tgt_radius==150;},
                "rad":150,
                "vel":0.05,
                "die":false,
                "heal":2.7,
                "priority":0
            }
        ],
        "cd":100,
        "desc":"缓慢释放氧气。</br>atk:189 hp:270 cd:1s heal:270/s",
        "forge_factor":1.25
    },
    "KMnO₄-4":{
        "atk":567,
        "hp":810,
        "srad":[
            {
                "cond":function(){return tgt_radius==60;},
                "rad":60,
                "vel":0.05,
                "die":false,
                "heal":8.1,
                "priority":0
            },
            {
                "cond":function(){return tgt_radius==150;},
                "rad":150,
                "vel":0.05,
                "die":false,
                "heal":8.1,
                "priority":0
            }
        ],
        "cd":100,
        "desc":"缓慢释放氧气。</br>atk:189 hp:270 cd:1s heal:810/s",
        "forge_factor":1.25
    },
    "KMnO₄-5":{
        "atk":1701,
        "hp":2430,
        "srad":[
            {
                "cond":function(){return tgt_radius==60;},
                "rad":60,
                "vel":0.05,
                "die":false,
                "heal":24.3,
                "priority":0
            },
            {
                "cond":function(){return tgt_radius==150;},
                "rad":150,
                "vel":0.05,
                "die":false,
                "heal":24.3,
                "priority":0
            }
        ],
        "cd":100,
        "desc":"缓慢释放氧气。</br>atk:189 hp:270 cd:1s heal:2430/s",
        "forge_factor":1.25
    },
    "KMnO₄-6":{
        "atk":5103,
        "hp":2430,
        "srad":[
            {
                "cond":function(){return tgt_radius==60;},
                "rad":60,
                "vel":0.05,
                "die":false,
                "heal":72.9,
                "priority":0
            },
            {
                "cond":function(){return tgt_radius==150;},
                "rad":150,
                "vel":0.05,
                "die":false,
                "heal":72.9,
                "priority":0
            }
        ],
        "cd":100,
        "desc":"缓慢释放氧气。</br>atk:5103 hp:2430 cd:1s heal:7290/s",
        "forge_factor":1.25
    },
    "KMnO₄-7":{
        "atk":15309,
        "hp":7290,
        "srad":[
            {
                "cond":function(){return tgt_radius==60;},
                "rad":60,
                "vel":0.05,
                "die":false,
                "heal":218.7,
                "priority":0
            },
            {
                "cond":function(){return tgt_radius==150;},
                "rad":150,
                "vel":0.05,
                "die":false,
                "heal":218.7,
                "priority":0
            }
        ],
        "cd":100,
        "desc":"缓慢释放氧气。</br>atk:15309 hp:7290 cd:1s heal:21870/s",
        "forge_factor":1.25
    },
    "KMnO₄-8":{
        "atk":45937,
        "hp":21870,
        "srad":[
            {
                "cond":function(){return tgt_radius==60;},
                "rad":60,
                "vel":0.05,
                "die":false,
                "heal":656.1,
                "priority":0
            },
            {
                "cond":function(){return tgt_radius==150;},
                "rad":150,
                "vel":0.05,
                "die":false,
                "heal":656.1,
                "priority":0
            }
        ],
        "cd":100,
        "desc":"缓慢释放氧气。</br>atk:45937 hp:21870 cd:1s heal:65610/s",
        "forge_factor":1.25
    },
    "LiOH-0":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"这个东西没有意义。"
    },
    "LiOH-1":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"这个东西没有意义。"
    },
    "LiOH-2":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"这个东西没有意义。"
    },
    "LiOH-3":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"这个东西没有意义。"
    },
    "LiOH-4":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"这个东西没有意义。"
    },
    "LiOH-5":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"这个东西没有意义。"
    },
    "LiOH-6":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"这个东西没有意义。"
    },
    "LiOH-7":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"这个东西没有意义。"
    },
    "LiOH-8":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){petaldmgfactor*=10/3;return false;},
                "priority":-1
            }
        ],
        "cd":0,
        "desc":"谨以此纪念逝去的【数据删除】</br>对所有怪物的伤害×¹↉",
        "forge_factor":3 //10?
    },
    "HNO₂-0":{
        "atk":100000,
        "hp":0.0001,
        "srad":[
            {
                "cond":function(){petaldmgfactor*=0.1;return false;},
                "priority":-1
            }
        ],
        "cd":100,
        "desc":"【数据删除】在制备硝酸的时候混进去的杂质。</br>atk:10000 hp:0.0001 所有花瓣伤害×0.1",
        "forge_factor":1.5
    },
    "HNO₂-1":{
        "atk":200000,
        "hp":0.0001,
        "srad":[
            {
                "cond":function(){petaldmgfactor*=0.1;return false;},
                "priority":-1
            }
        ],
        "cd":100,
        "desc":"【数据删除】在制备硝酸的时候混进去的杂质。</br>atk:20000 hp:0.0001 所有花瓣伤害×0.1",
        "forge_factor":1.5
    },
    "HNO₂-2":{
        "atk":400000,
        "hp":0.0001,
        "srad":[
            {
                "cond":function(){petaldmgfactor*=0.1;return false;},
                "priority":-1
            }
        ],
        "cd":100,
        "desc":"【数据删除】在制备硝酸的时候混进去的杂质。</br>atk:40000 hp:0.0001 所有花瓣伤害×0.1",
        "forge_factor":1.5
    },
    "HNO₂-3":{
        "atk":800000,
        "hp":0.0001,
        "srad":[
            {
                "cond":function(){petaldmgfactor*=0.1;return false;},
                "priority":-1
            }
        ],
        "cd":100,
        "desc":"【数据删除】在制备硝酸的时候混进去的杂质。</br>atk:80000 hp:0.0001 所有花瓣伤害×0.1",
        "forge_factor":1.5
    },
    "HNO₂-4":{
        "atk":1600000,
        "hp":0.0001,
        "srad":[
            {
                "cond":function(){petaldmgfactor*=0.1;return false;},
                "priority":-1
            }
        ],
        "cd":100,
        "desc":"【数据删除】在制备硝酸的时候混进去的杂质。</br>atk:160000 hp:0.0001 所有花瓣伤害×0.1",
        "forge_factor":1.5
    },
    "HNO₂-5":{
        "atk":3200000,
        "hp":0.0001,
        "srad":[
            {
                "cond":function(){petaldmgfactor*=0.1;return false;},
                "priority":-1
            }
        ],
        "cd":100,
        "desc":"【数据删除】在制备硝酸的时候混进去的杂质。</br>atk:320000 hp:0.0001 所有花瓣伤害×0.1",
        "forge_factor":1.5
    },
    "HNO₂-6":{
        "atk":6400000,
        "hp":0.0001,
        "srad":[
            {
                "cond":function(){petaldmgfactor*=0.1;return false;},
                "priority":-1
            }
        ],
        "cd":100,
        "desc":"【数据删除】在制备硝酸的时候混进去的杂质。</br>atk:640000 hp:0.0001 所有花瓣伤害×0.1",
        "forge_factor":1.5
    },
    "HNO₂-7":{
        "atk":12800000,
        "hp":0.0001,
        "srad":[
            {
                "cond":function(){petaldmgfactor*=0.1;return false;},
                "priority":-1
            }
        ],
        "cd":100,
        "desc":"【数据删除】在制备硝酸的时候混进去的杂质。</br>atk:1280000 hp:0.0001 所有花瓣伤害×0.1",
        "forge_factor":1.5
    },
    "HNO₂-8":{
        "atk":25600000,
        "hp":0.0001,
        "srad":[
            {
                "cond":function(){petaldmgfactor*=0.1;return false;},
                "priority":-1
            }
        ],
        "cd":100,
        "desc":"【数据删除】在制备硝酸的时候混进去的杂质。</br>atk:2560000 hp:0.0001 所有花瓣伤害×0.1",
        "forge_factor":1.5
    },
    "He-0":{
        "atk":10,
        "hp":10,
        "srad":[
            {
                "cond":function(){return curtick%100<=50&&tgt_radius==150;},
                "rad":250,
                "vel":0.1,
                "die":false,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"它太轻了，很容易四处飘散。</br>atk:10 hp:10",
        "forge_factor":1.25
    },
    "He-1":{
        "atk":30,
        "hp":30,
        "srad":[
            {
                "cond":function(){return curtick%100<=50&&tgt_radius==150;},
                "rad":250,
                "vel":0.1,
                "die":false,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"它太轻了，很容易四处飘散。</br>atk:30 hp:30",
        "forge_factor":1.25
    },
    "He-2":{
        "atk":90,
        "hp":90,
        "srad":[
            {
                "cond":function(){return curtick%100<=50&&tgt_radius==150;},
                "rad":250,
                "vel":0.1,
                "die":false,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"它太轻了，很容易四处飘散。</br>atk:90 hp:90",
        "forge_factor":1.25
    },
    "He-3":{
        "atk":270,
        "hp":270,
        "srad":[
            {
                "cond":function(){return curtick%100<=50&&tgt_radius==150;},
                "rad":250,
                "vel":0.1,
                "die":false,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"它太轻了，很容易四处飘散。</br>atk:270 hp:270",
        "forge_factor":1.25
    },
    "He-4":{
        "atk":810,
        "hp":810,
        "srad":[
            {
                "cond":function(){return curtick%100<=50&&tgt_radius==150;},
                "rad":250,
                "vel":0.1,
                "die":false,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"它太轻了，很容易四处飘散。</br>atk:810 hp:810",
        "forge_factor":1.25
    },
    "He-5":{
        "atk":2430,
        "hp":2430,
        "srad":[
            {
                "cond":function(){return curtick%100<=50&&tgt_radius==150;},
                "rad":250,
                "vel":0.1,
                "die":false,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"它太轻了，很容易四处飘散。</br>atk:2430 hp:2430",
        "forge_factor":1.25
    },
    "He-6":{
        "atk":7290,
        "hp":7290,
        "srad":[
            {
                "cond":function(){return curtick%100<=50&&tgt_radius==150;},
                "rad":250,
                "vel":0.1,
                "die":false,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"它太轻了，很容易四处飘散。</br>atk:7290 hp:7290",
        "forge_factor":1.25
    },
    "He-7":{
        "atk":21870,
        "hp":21870,
        "srad":[
            {
                "cond":function(){return curtick%100<=50&&tgt_radius==150;},
                "rad":250,
                "vel":0.1,
                "die":false,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"它太轻了，很容易四处飘散。</br>atk:21870 hp:21870",
        "forge_factor":1.25
    },
    "He-8":{
        "atk":65610,
        "hp":65610,
        "srad":[
            {
                "cond":function(){return curtick%100<=50&&tgt_radius==150;},
                "rad":250,
                "vel":0.1,
                "die":false,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"它太轻了，很容易四处飘散。</br>atk:65610 hp:65610",
        "forge_factor":1.25
    },
    "NH₃-0":{
        "atk":5,
        "hp":5,
        "srad":[
            {
                "cond":function(){
                    for(var j=0;j<active_mobs.length;j++){
						try{
							if((active_mobs[j].x-x)**2+(active_mobs[j].y-y)**2>(40+150)**2)continue;
							active_mobs[j].hp-=0.1*petaldmgfactor;
							if(active_mobs[j].hp<0){
								var temp=active_mobs[j];
								active_mobs.splice(j,1);
								j--;
								for(var k=0;k<temp.template.drop.length;k++){
									if(Math.random()<=temp.template.drop[k].prob){
										active_drop.push({
											"name":temp.template.drop[k].petal,
											"lvl":temp.template.drop[k].lvl,
											"x":temp.x+Math.random()*10,
											"y":temp.y+Math.random()*10
										});
									}
								}
							}
						}catch(e){}
					}
                    return false;
                },
                "priority":1
            }
        ],
        "cd":100,
        "desc":"要 扇 闻 不 能 指 接 闻</br>atk:5 hp:5 持续伤害玩家周围的怪物（atk:10/s rad:150）",
        "forge_factor":1.5
    },
    "NH₃-1":{
        "atk":15,
        "hp":15,
        "srad":[
            {
                "cond":function(){
                    for(var j=0;j<active_mobs.length;j++){
						try{
							if((active_mobs[j].x-x)**2+(active_mobs[j].y-y)**2>(40+200)**2)continue;
							active_mobs[j].hp-=0.5*petaldmgfactor;
							if(active_mobs[j].hp<0){
								var temp=active_mobs[j];
								active_mobs.splice(j,1);
								j--;
								for(var k=0;k<temp.template.drop.length;k++){
									if(Math.random()<=temp.template.drop[k].prob){
										active_drop.push({
											"name":temp.template.drop[k].petal,
											"lvl":temp.template.drop[k].lvl,
											"x":temp.x+Math.random()*10,
											"y":temp.y+Math.random()*10
										});
									}
								}
							}
						}catch(e){}
					}
                    return false;
                },
                "priority":1
            }
        ],
        "cd":100,
        "desc":"要 扇 闻 不 能 指 接 闻</br>atk:15 hp:15 持续伤害玩家周围的怪物（atk:50/s rad:200）",
        "forge_factor":1.5
    },
    "NH₃-2":{
        "atk":45,
        "hp":45,
        "srad":[
            {
                "cond":function(){
                    for(var j=0;j<active_mobs.length;j++){
						try{
							if((active_mobs[j].x-x)**2+(active_mobs[j].y-y)**2>(40+250)**2)continue;
							active_mobs[j].hp-=1.5*petaldmgfactor;
							if(active_mobs[j].hp<0){
								var temp=active_mobs[j];
								active_mobs.splice(j,1);
								j--;
								for(var k=0;k<temp.template.drop.length;k++){
									if(Math.random()<=temp.template.drop[k].prob){
										active_drop.push({
											"name":temp.template.drop[k].petal,
											"lvl":temp.template.drop[k].lvl,
											"x":temp.x+Math.random()*10,
											"y":temp.y+Math.random()*10
										});
									}
								}
							}
						}catch(e){}
					}
                    return false;
                },
                "priority":1
            }
        ],
        "cd":100,
        "desc":"要 扇 闻 不 能 指 接 闻</br>atk:45 hp:45 持续伤害玩家周围的怪物（atk:150/s rad:250）",
        "forge_factor":1.5
    },
    "NH₃-3":{
        "atk":135,
        "hp":135,
        "srad":[
            {
                "cond":function(){
                    for(var j=0;j<active_mobs.length;j++){
						try{
							if((active_mobs[j].x-x)**2+(active_mobs[j].y-y)**2>(40+300)**2)continue;
							active_mobs[j].hp-=4.5*petaldmgfactor;
							if(active_mobs[j].hp<0){
								var temp=active_mobs[j];
								active_mobs.splice(j,1);
								j--;
								for(var k=0;k<temp.template.drop.length;k++){
									if(Math.random()<=temp.template.drop[k].prob){
										active_drop.push({
											"name":temp.template.drop[k].petal,
											"lvl":temp.template.drop[k].lvl,
											"x":temp.x+Math.random()*10,
											"y":temp.y+Math.random()*10
										});
									}
								}
							}
						}catch(e){}
					}
                    return false;
                },
                "priority":1
            }
        ],
        "cd":100,
        "desc":"要 扇 闻 不 能 指 接 闻</br>atk:135 hp:135 持续伤害玩家周围的怪物（atk:450/s rad:300）",
        "forge_factor":1.5
    },
    "NH₃-4":{
        "atk":405,
        "hp":405,
        "srad":[
            {
                "cond":function(){
                    for(var j=0;j<active_mobs.length;j++){
						try{
							if((active_mobs[j].x-x)**2+(active_mobs[j].y-y)**2>(40+350)**2)continue;
							active_mobs[j].hp-=13.5*petaldmgfactor;
							if(active_mobs[j].hp<0){
								var temp=active_mobs[j];
								active_mobs.splice(j,1);
								j--;
								for(var k=0;k<temp.template.drop.length;k++){
									if(Math.random()<=temp.template.drop[k].prob){
										active_drop.push({
											"name":temp.template.drop[k].petal,
											"lvl":temp.template.drop[k].lvl,
											"x":temp.x+Math.random()*10,
											"y":temp.y+Math.random()*10
										});
									}
								}
							}
						}catch(e){}
					}
                    return false;
                },
                "priority":1
            }
        ],
        "cd":100,
        "desc":"要 扇 闻 不 能 指 接 闻</br>atk:405 hp:405 持续伤害玩家周围的怪物（atk:1350/s rad:350）",
        "forge_factor":1.5
    },
    "NH₃-5":{
        "atk":1215,
        "hp":1215,
        "srad":[
            {
                "cond":function(){
                    for(var j=0;j<active_mobs.length;j++){
						try{
							if((active_mobs[j].x-x)**2+(active_mobs[j].y-y)**2>(40+400)**2)continue;
							active_mobs[j].hp-=40.5*petaldmgfactor;
							if(active_mobs[j].hp<0){
								var temp=active_mobs[j];
								active_mobs.splice(j,1);
								j--;
								for(var k=0;k<temp.template.drop.length;k++){
									if(Math.random()<=temp.template.drop[k].prob){
										active_drop.push({
											"name":temp.template.drop[k].petal,
											"lvl":temp.template.drop[k].lvl,
											"x":temp.x+Math.random()*10,
											"y":temp.y+Math.random()*10
										});
									}
								}
							}
						}catch(e){}
					}
                    return false;
                },
                "priority":1
            }
        ],
        "cd":100,
        "desc":"要 扇 闻 不 能 指 接 闻</br>atk:1215 hp:1215 持续伤害玩家周围的怪物（atk:4050/s rad:400）",
        "forge_factor":1.5
    },
    "NH₃-6":{
        "atk":3645,
        "hp":3645,
        "srad":[
            {
                "cond":function(){
                    for(var j=0;j<active_mobs.length;j++){
						try{
							if((active_mobs[j].x-x)**2+(active_mobs[j].y-y)**2>(40+450)**2)continue;
							active_mobs[j].hp-=121.5*petaldmgfactor;
							if(active_mobs[j].hp<0){
								var temp=active_mobs[j];
								active_mobs.splice(j,1);
								j--;
								for(var k=0;k<temp.template.drop.length;k++){
									if(Math.random()<=temp.template.drop[k].prob){
										active_drop.push({
											"name":temp.template.drop[k].petal,
											"lvl":temp.template.drop[k].lvl,
											"x":temp.x+Math.random()*10,
											"y":temp.y+Math.random()*10
										});
									}
								}
							}
						}catch(e){}
					}
                    return false;
                },
                "priority":1
            }
        ],
        "cd":100,
        "desc":"要 扇 闻 不 能 指 接 闻</br>atk:3645 hp:3645 持续伤害玩家周围的怪物（atk:12150/s rad:450）",
        "forge_factor":1.5
    },
    "NH₃-7":{
        "atk":10935,
        "hp":10935,
        "srad":[
            {
                "cond":function(){
                    for(var j=0;j<active_mobs.length;j++){
						try{
							if((active_mobs[j].x-x)**2+(active_mobs[j].y-y)**2>(40+10935)**2)continue;
							active_mobs[j].hp-=364.5*petaldmgfactor;
							if(active_mobs[j].hp<0){
								var temp=active_mobs[j];
								active_mobs.splice(j,1);
								j--;
								for(var k=0;k<temp.template.drop.length;k++){
									if(Math.random()<=temp.template.drop[k].prob){
										active_drop.push({
											"name":temp.template.drop[k].petal,
											"lvl":temp.template.drop[k].lvl,
											"x":temp.x+Math.random()*10,
											"y":temp.y+Math.random()*10
										});
									}
								}
							}
						}catch(e){}
					}
                    return false;
                },
                "priority":1
            }
        ],
        "cd":100,
        "desc":"要 扇 闻 不 能 指 接 闻</br>atk:10935 hp:10935 持续伤害玩家周围的怪物（atk:36450/s rad:500）",
        "forge_factor":1.5
    },
    "NH₃-8":{
        "atk":32805,
        "hp":32805,
        "srad":[
            {
                "cond":function(){
                    for(var j=0;j<active_mobs.length;j++){
						try{
							if((active_mobs[j].x-x)**2+(active_mobs[j].y-y)**2>(40+550)**2)continue;
							active_mobs[j].hp-=1093.5*petaldmgfactor;
							if(active_mobs[j].hp<0){
								var temp=active_mobs[j];
								active_mobs.splice(j,1);
								j--;
								for(var k=0;k<temp.template.drop.length;k++){
									if(Math.random()<=temp.template.drop[k].prob){
										active_drop.push({
											"name":temp.template.drop[k].petal,
											"lvl":temp.template.drop[k].lvl,
											"x":temp.x+Math.random()*10,
											"y":temp.y+Math.random()*10
										});
									}
								}
							}
						}catch(e){}
					}
                    return false;
                },
                "priority":1
            }
        ],
        "cd":100,
        "desc":"要 扇 闻 不 能 指 接 闻</br>atk:32805 hp:32805 持续伤害玩家周围的怪物（atk:109350/s rad:550）",
        "forge_factor":1.5
    },
    "?-0":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"只是个占位符而已（"
    },
    "?-1":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"只是个占位符而已（"
    },
    "?-2":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"只是个占位符而已（"
    },
    "?-3":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"只是个占位符而已（"
    },
    "?-4":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"只是个占位符而已（"
    },
    "?-5":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"只是个占位符而已（"
    },
    "?-6":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"只是个占位符而已（"
    },
    "?-7":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"只是个占位符而已（"
    },
    "?-8":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"只是个占位符而已（"
    },
    "SiO₂-0":{
        "atk":.3,
        "hp":Infinity,
        "srad":[],
        "cd":100,
        "desc":"glass（物理）</br>atk:30/s hp:inf",
        "forge_factor":1.25
    },
    "SiO₂-1":{
        "atk":.9,
        "hp":Infinity,
        "srad":[],
        "cd":100,
        "desc":"glass（物理）</br>atk:90/s hp:inf",
        "forge_factor":1.25
    },
    "SiO₂-2":{
        "atk":2.7,
        "hp":Infinity,
        "srad":[],
        "cd":100,
        "desc":"glass（物理）</br>atk:270/s hp:inf",
        "forge_factor":1.25
    },
    "SiO₂-3":{
        "atk":8.1,
        "hp":Infinity,
        "srad":[],
        "cd":100,
        "desc":"glass（物理）</br>atk:810/s hp:inf",
        "forge_factor":1.25
    },
    "SiO₂-4":{
        "atk":24.3,
        "hp":Infinity,
        "srad":[],
        "cd":100,
        "desc":"glass（物理）</br>atk:2430/s hp:inf",
        "forge_factor":1.25
    },
    "SiO₂-5":{
        "atk":72.9,
        "hp":Infinity,
        "srad":[],
        "cd":100,
        "desc":"glass（物理）</br>atk:7290/s hp:inf",
        "forge_factor":1.25
    },
    "SiO₂-6":{
        "atk":218.7,
        "hp":Infinity,
        "srad":[],
        "cd":100,
        "desc":"glass（物理）</br>atk:21870/s hp:inf",
        "forge_factor":1.25
    },
    "SiO₂-7":{
        "atk":656.1,
        "hp":Infinity,
        "srad":[],
        "cd":100,
        "desc":"glass（物理）</br>atk:65610/s hp:inf",
        "forge_factor":1.25
    },
    "SiO₂-8":{
        "atk":1968.3,
        "hp":Infinity,
        "srad":[],
        "cd":100,
        "desc":"glass（物理）</br>atk:196830/s hp:inf",
        "forge_factor":1.25
    },
    "HHe⁺-0":{
        "atk":1000,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){return curtick%2==1&&tgt_radius==60;},
                "rad":61,
                "vel":0.9,
                "die":true,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return curtick%2==1&&tgt_radius==150;},
                "rad":151,
                "vel":0.9,
                "die":true,
                "heal":0,
                "priority":1
            },
        ],
        "cd":1000,
        "desc":"chemistry's for the luckless（bushi</br>只出现一瞬间，伤害非常大</br>cd:10s atk:1000",
        "forge_factor":2
    },
    "HHe⁺-1":{
        "atk":3000,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){return curtick%2==1&&tgt_radius==60;},
                "rad":61,
                "vel":0.9,
                "die":true,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return curtick%2==1&&tgt_radius==150;},
                "rad":151,
                "vel":0.9,
                "die":true,
                "heal":0,
                "priority":1
            },
        ],
        "cd":800,
        "desc":"chemistry's for the luckless（bushi</br>只出现一瞬间，伤害非常大</br>cd:8s atk:3000",
        "forge_factor":2
    },
    "HHe⁺-2":{
        "atk":9000,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){return curtick%2==1&&tgt_radius==60;},
                "rad":61,
                "vel":0.9,
                "die":true,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return curtick%2==1&&tgt_radius==150;},
                "rad":151,
                "vel":0.9,
                "die":true,
                "heal":0,
                "priority":1
            },
        ],
        "cd":600,
        "desc":"chemistry's for the luckless（bushi</br>只出现一瞬间，伤害非常大</br>cd:6s atk:9000",
        "forge_factor":2
    },
    "HHe⁺-3":{
        "atk":27000,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){return curtick%2==1&&tgt_radius==60;},
                "rad":61,
                "vel":0.9,
                "die":true,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return curtick%2==1&&tgt_radius==150;},
                "rad":151,
                "vel":0.9,
                "die":true,
                "heal":0,
                "priority":1
            },
        ],
        "cd":400,
        "desc":"chemistry's for the luckless（bushi</br>只出现一瞬间，伤害非常大</br>cd:4s atk:27000",
        "forge_factor":2
    },
    "HHe⁺-4":{
        "atk":81000,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){return curtick%2==1&&tgt_radius==60;},
                "rad":61,
                "vel":0.9,
                "die":true,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return curtick%2==1&&tgt_radius==150;},
                "rad":151,
                "vel":0.9,
                "die":true,
                "heal":0,
                "priority":1
            },
        ],
        "cd":200,
        "desc":"chemistry's for the luckless（bushi</br>只出现一瞬间，伤害非常大</br>cd:2s atk:81000",
        "forge_factor":2
    },
    "HHe⁺-5":{
        "atk":243000,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){return curtick%2==1&&tgt_radius==60;},
                "rad":61,
                "vel":0.9,
                "die":true,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return curtick%2==1&&tgt_radius==150;},
                "rad":151,
                "vel":0.9,
                "die":true,
                "heal":0,
                "priority":1
            },
        ],
        "cd":180,
        "desc":"chemistry's for the luckless（bushi</br>只出现一瞬间，伤害非常大</br>cd:1.8s atk:243000",
        "forge_factor":2
    },
    "HHe⁺-6":{
        "atk":729000,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){return curtick%2==1&&tgt_radius==60;},
                "rad":61,
                "vel":0.9,
                "die":true,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return curtick%2==1&&tgt_radius==150;},
                "rad":151,
                "vel":0.9,
                "die":true,
                "heal":0,
                "priority":1
            },
        ],
        "cd":160,
        "desc":"chemistry's for the luckless（bushi</br>只出现一瞬间，伤害非常大</br>cd:1.6s atk:729000",
        "forge_factor":2
    },
    "HHe⁺-7":{
        "atk":2187000,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){return curtick%2==1&&tgt_radius==60;},
                "rad":61,
                "vel":0.9,
                "die":true,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return curtick%2==1&&tgt_radius==150;},
                "rad":151,
                "vel":0.9,
                "die":true,
                "heal":0,
                "priority":1
            },
        ],
        "cd":140,
        "desc":"chemistry's for the luckless（bushi</br>只出现一瞬间，伤害非常大</br>cd:1.4s atk:2187000",
        "forge_factor":2
    },
    "HHe⁺-8":{
        "atk":6561000,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){return curtick%2==1&&tgt_radius==60;},
                "rad":61,
                "vel":0.9,
                "die":true,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return curtick%2==1&&tgt_radius==150;},
                "rad":151,
                "vel":0.9,
                "die":true,
                "heal":0,
                "priority":1
            },
        ],
        "cd":120,
        "desc":"chemistry's for the luckless（bushi</br>只出现一瞬间，伤害非常大</br>cd:1.2s atk:6561000",
        "forge_factor":2
    },
    "CuSO₄-0":{
        "atk":0,
        "hp":100,
        "srad":[
            {
                "cond":function(){petalhpfactor*=3;return false;},
                "priority":-1
            }
        ],
        "cd":500,
        "desc":"@ch_threenine 会非常锎锌的（<br>atk:0 hp:100 cd:5s 所有花瓣血量×3",
        "forge_factor":1.25
    },
    "CuSO₄-1":{
        "atk":0,
        "hp":300,
        "srad":[
            {
                "cond":function(){petalhpfactor*=3;return false;},
                "priority":-1
            }
        ],
        "cd":500,
        "desc":"@ch_threenine 会非常锎锌的（<br>atk:0 hp:300 cd:5s 所有花瓣血量×3",
        "forge_factor":1.25
    },
    "CuSO₄-2":{
        "atk":0,
        "hp":900,
        "srad":[
            {
                "cond":function(){petalhpfactor*=3;return false;},
                "priority":-1
            }
        ],
        "cd":500,
        "desc":"@ch_threenine 会非常锎锌的（<br>atk:0 hp:900 cd:5s 所有花瓣血量×3",
        "forge_factor":1.25
    },
    "CuSO₄-3":{
        "atk":0,
        "hp":2700,
        "srad":[
            {
                "cond":function(){petalhpfactor*=3;return false;},
                "priority":-1
            }
        ],
        "cd":500,
        "desc":"@ch_threenine 会非常锎锌的（<br>atk:0 hp:2700 cd:5s 所有花瓣血量×3",
        "forge_factor":1.25
    },
    "CuSO₄-4":{
        "atk":0,
        "hp":8100,
        "srad":[
            {
                "cond":function(){petalhpfactor*=3;return false;},
                "priority":-1
            }
        ],
        "cd":500,
        "desc":"@ch_threenine 会非常锎锌的（<br>atk:0 hp:8100 cd:5s 所有花瓣血量×3",
        "forge_factor":1.25
    },
    "CuSO₄-5":{
        "atk":0,
        "hp":24300,
        "srad":[
            {
                "cond":function(){petalhpfactor*=3;return false;},
                "priority":-1
            }
        ],
        "cd":500,
        "desc":"@ch_threenine 会非常锎锌的（<br>atk:0 hp:24300 cd:5s 所有花瓣血量×3",
        "forge_factor":1.25
    },
    "CuSO₄-6":{
        "atk":0,
        "hp":72900,
        "srad":[
            {
                "cond":function(){petalhpfactor*=3;return false;},
                "priority":-1
            }
        ],
        "cd":500,
        "desc":"@ch_threenine 会非常锎锌的（<br>atk:0 hp:72900 cd:5s 所有花瓣血量×3",
        "forge_factor":1.25
    },
    "CuSO₄-7":{
        "atk":0,
        "hp":218700,
        "srad":[
            {
                "cond":function(){petalhpfactor*=3;return false;},
                "priority":-1
            }
        ],
        "cd":500,
        "desc":"@ch_threenine 会非常锎锌的（<br>atk:0 hp:218700 cd:5s 所有花瓣血量×3",
        "forge_factor":1.25
    },
    "CuSO₄-8":{
        "atk":0,
        "hp":656100,
        "srad":[
            {
                "cond":function(){petalhpfactor*=3;return false;},
                "priority":-1
            }
        ],
        "cd":500,
        "desc":"@ch_threenine 会非常锎锌的（<br>atk:0 hp:656100 cd:5s 所有花瓣血量×3",
        "forge_factor":1.25
    },
    "↑+++-0":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"这个东西真的没有意义<span style='color:lightyellow'>，因为宇宙终将毁灭</span>"
    },
    "↑+++-1":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"这个东西真的没有意义<span style='color:lightyellow'>，因为宇宙终将毁灭</span>"
    },
    "↑+++-2":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"这个东西真的没有意义<span style='color:lightyellow'>，因为宇宙终将毁灭</span>"
    },
    "↑+++-3":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"这个东西真的没有意义<span style='color:lightyellow'>，因为宇宙终将毁灭</span>"
    },
    "↑+++-4":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"这个东西真的没有意义<span style='color:lightyellow'>，因为宇宙终将毁灭</span>"
    },
    "↑+++-5":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"这个东西真的没有意义<span style='color:lightyellow'>，因为宇宙终将毁灭</span>"
    },
    "↑+++-6":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"这个东西真的没有意义<span style='color:lightyellow'>，因为宇宙终将毁灭</span>"
    },
    "↑+++-7":{
        "atk":0,
        "hp":0,
        "srad":[],
        "cd":0,
        "desc":"这个东西真的没有意义<span style='color:lightyellow'>，因为宇宙终将毁灭</span>"
    },
    "↑+++-8":{
        "atk":100,
        "hp":100,
        "srad":[
            {"cond":function(){
                petaldmgfactor*=3;
                petalhpfactor*=3;  
            },"priority":-1}
        ],
        "cd":100,
        "desc":"【数据删除】的力量<br>atk:100 hp:100 所有花瓣血量×3 伤害×3",
        "forge_factor":5
    },
    "e⁻-0":{
        "atk":50000,
        "hp":1,
        "srad":[
            {
                "cond":function(){return Math.random()<1/4;},
                "rad":60,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/3;},
                "rad":100,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/2;},
                "rad":150,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/1;},
                "rad":200,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
        ],
        "cd":100,
        "desc":"¹³³Cs原子位于海平面处于非扰动基态时两个超精细能级间跃迁对应的辐射频率以Hz为单位表达时取固定数值9192631770来定义秒，打Cs掉这个很合理吧（<br>atk:遵从量子力学你信吗",
        "forge_factor":5**8*10
    },
    "e⁻-1":{
        "atk":150000,
        "hp":1,
        "srad":[
            {
                "cond":function(){return Math.random()<1/4;},
                "rad":60,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/3;},
                "rad":100,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/2;},
                "rad":150,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/1;},
                "rad":200,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
        ],
        "cd":100,
        "desc":"¹³³Cs原子位于海平面处于非扰动基态时两个超精细能级间跃迁对应的辐射频率以Hz为单位表达时取固定数值9192631770来定义秒，打Cs掉这个很合理吧（<br>atk:遵从量子力学你信吗"
    },
    "e⁻-2":{
        "atk":450000,
        "hp":1,
        "srad":[
            {
                "cond":function(){return Math.random()<1/4;},
                "rad":60,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/3;},
                "rad":100,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/2;},
                "rad":150,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/1;},
                "rad":200,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
        ],
        "cd":100,
        "desc":"¹³³Cs原子位于海平面处于非扰动基态时两个超精细能级间跃迁对应的辐射频率以Hz为单位表达时取固定数值9192631770来定义秒，打Cs掉这个很合理吧（<br>atk:遵从量子力学你信吗"
    },
    "e⁻-3":{
        "atk":1350000,
        "hp":1,
        "srad":[
            {
                "cond":function(){return Math.random()<1/4;},
                "rad":60,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/3;},
                "rad":100,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/2;},
                "rad":150,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/1;},
                "rad":200,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
        ],
        "cd":100,
        "desc":"¹³³Cs原子位于海平面处于非扰动基态时两个超精细能级间跃迁对应的辐射频率以Hz为单位表达时取固定数值9192631770来定义秒，打Cs掉这个很合理吧（<br>atk:遵从量子力学你信吗"
    },
    "e⁻-4":{
        "atk":4050000,
        "hp":1,
        "srad":[
            {
                "cond":function(){return Math.random()<1/4;},
                "rad":60,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/3;},
                "rad":100,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/2;},
                "rad":150,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/1;},
                "rad":200,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
        ],
        "cd":100,
        "desc":"¹³³Cs原子位于海平面处于非扰动基态时两个超精细能级间跃迁对应的辐射频率以Hz为单位表达时取固定数值9192631770来定义秒，打Cs掉这个很合理吧（<br>atk:遵从量子力学你信吗"
    },
    "e⁻-5":{
        "atk":12150000,
        "hp":1,
        "srad":[
            {
                "cond":function(){return Math.random()<1/4;},
                "rad":60,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/3;},
                "rad":100,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/2;},
                "rad":150,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/1;},
                "rad":200,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
        ],
        "cd":100,
        "desc":"¹³³Cs原子位于海平面处于非扰动基态时两个超精细能级间跃迁对应的辐射频率以Hz为单位表达时取固定数值9192631770来定义秒，打Cs掉这个很合理吧（<br>atk:遵从量子力学你信吗"
    },
    "e⁻-6":{
        "atk":36450000,
        "hp":1,
        "srad":[
            {
                "cond":function(){return Math.random()<1/4;},
                "rad":60,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/3;},
                "rad":100,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/2;},
                "rad":150,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/1;},
                "rad":200,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
        ],
        "cd":100,
        "desc":"¹³³Cs原子位于海平面处于非扰动基态时两个超精细能级间跃迁对应的辐射频率以Hz为单位表达时取固定数值9192631770来定义秒，打Cs掉这个很合理吧（<br>atk:遵从量子力学你信吗"
    },
    "e⁻-7":{
        "atk":109350000,
        "hp":1,
        "srad":[
            {
                "cond":function(){return Math.random()<1/4;},
                "rad":60,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/3;},
                "rad":100,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/2;},
                "rad":150,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/1;},
                "rad":200,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
        ],
        "cd":100,
        "desc":"¹³³Cs原子位于海平面处于非扰动基态时两个超精细能级间跃迁对应的辐射频率以Hz为单位表达时取固定数值9192631770来定义秒，打Cs掉这个很合理吧（<br>atk:遵从量子力学你信吗"
    },
    "e⁻-8":{
        "atk":328050000,
        "hp":1,
        "srad":[
            {
                "cond":function(){return Math.random()<1/4;},
                "rad":60,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/3;},
                "rad":100,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/2;},
                "rad":150,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
            {
                "cond":function(){return Math.random()<1/1;},
                "rad":200,
                "vel":1,
                "die":false,
                "heal":0,
                "priority":1
            },
        ],
        "cd":100,
        "desc":"¹³³Cs原子位于海平面处于非扰动基态时两个超精细能级间跃迁对应的辐射频率以Hz为单位表达时取固定数值9192631770来定义秒，打Cs掉这个很合理吧（<br>atk:遵从量子力学你信吗"
    },
    "<span style='color:blue'>V</span>-0":{
        "atk":-5,
        "hp":Infinity,
        "srad":[
            {"cond":function(){
                var obs=document.getElementsByClassName("obstacle");
                for(var i=0;i<obs.length;i++){
                    obs[i].style.backgroundColor="lightblue";
                }
                return false;
            }},
            {"cond":function(){
                for(var i=0;i<active_mobs.length;i++){
                    try{
                        if(active_mobs[i].lvl!=4)continue;
                        active_mobs[j].hp-=1145141919810;
                        if(active_mobs[j].hp<0){
                            var temp=active_mobs[j];
                            active_mobs.splice(j,1);
                            j--;
                            for(var k=0;k<temp.template.drop.length;k++){
                                if(Math.random()<=temp.template.drop[k].prob){
                                    active_drop.push({
                                        "name":temp.template.drop[k].petal,
                                        "lvl":temp.template.drop[k].lvl,
                                        "x":temp.x+Math.random()*10,
                                        "y":temp.y+Math.random()*10
                                    });
                                }
                            }
                        }
                    }catch(e){}
                }
            },"priority":0}
        ],
        "cd":100,
        "desc":"你 线 蓝 了（bushi<br>秒杀一切红（bad）怪"
    },
    "<span style='color:blue'>V</span>-1":{
        "atk":-5,
        "hp":Infinity,
        "srad":[
            {"cond":function(){
                var obs=document.getElementsByClassName("obstacle");
                for(var i=0;i<obs.length;i++){
                    obs[i].style.backgroundColor="lightblue";
                }
                return false;
            }},
            {"cond":function(){
                for(var i=0;i<active_mobs.length;i++){
                    try{
                        if(active_mobs[i].lvl!=4)continue;
                        active_mobs[j].hp-=1145141919810;
                        if(active_mobs[j].hp<0){
                            var temp=active_mobs[j];
                            active_mobs.splice(j,1);
                            j--;
                            for(var k=0;k<temp.template.drop.length;k++){
                                if(Math.random()<=temp.template.drop[k].prob){
                                    active_drop.push({
                                        "name":temp.template.drop[k].petal,
                                        "lvl":temp.template.drop[k].lvl,
                                        "x":temp.x+Math.random()*10,
                                        "y":temp.y+Math.random()*10
                                    });
                                }
                            }
                        }
                    }catch(e){}
                }
            },"priority":0}
        ],
        "cd":100,
        "desc":"你 线 蓝 了（bushi<br>秒杀一切红（bad）怪"
    },
    "<span style='color:blue'>V</span>-2":{
        "atk":-5,
        "hp":Infinity,
        "srad":[
            {"cond":function(){
                var obs=document.getElementsByClassName("obstacle");
                for(var i=0;i<obs.length;i++){
                    obs[i].style.backgroundColor="lightblue";
                }
                return false;
            }},
            {"cond":function(){
                for(var i=0;i<active_mobs.length;i++){
                    try{
                        if(active_mobs[i].lvl!=4)continue;
                        active_mobs[j].hp-=1145141919810;
                        if(active_mobs[j].hp<0){
                            var temp=active_mobs[j];
                            active_mobs.splice(j,1);
                            j--;
                            for(var k=0;k<temp.template.drop.length;k++){
                                if(Math.random()<=temp.template.drop[k].prob){
                                    active_drop.push({
                                        "name":temp.template.drop[k].petal,
                                        "lvl":temp.template.drop[k].lvl,
                                        "x":temp.x+Math.random()*10,
                                        "y":temp.y+Math.random()*10
                                    });
                                }
                            }
                        }
                    }catch(e){}
                }
            },"priority":0}
        ],
        "cd":100,
        "desc":"你 线 蓝 了（bushi<br>秒杀一切红（bad）怪"
    },
    "<span style='color:blue'>V</span>-3":{
        "atk":-5,
        "hp":Infinity,
        "srad":[
            {"cond":function(){
                var obs=document.getElementsByClassName("obstacle");
                for(var i=0;i<obs.length;i++){
                    obs[i].style.backgroundColor="lightblue";
                }
                return false;
            }},
            {"cond":function(){
                for(var i=0;i<active_mobs.length;i++){
                    try{
                        if(active_mobs[i].lvl!=4)continue;
                        active_mobs[j].hp-=1145141919810;
                        if(active_mobs[j].hp<0){
                            var temp=active_mobs[j];
                            active_mobs.splice(j,1);
                            j--;
                            for(var k=0;k<temp.template.drop.length;k++){
                                if(Math.random()<=temp.template.drop[k].prob){
                                    active_drop.push({
                                        "name":temp.template.drop[k].petal,
                                        "lvl":temp.template.drop[k].lvl,
                                        "x":temp.x+Math.random()*10,
                                        "y":temp.y+Math.random()*10
                                    });
                                }
                            }
                        }
                    }catch(e){}
                }
            },"priority":0}
        ],
        "cd":100,
        "desc":"你 线 蓝 了（bushi<br>秒杀一切红（bad）怪"
    },
    "<span style='color:blue'>V</span>-4":{
        "atk":-5,
        "hp":Infinity,
        "srad":[
            {"cond":function(){
                var obs=document.getElementsByClassName("obstacle");
                for(var i=0;i<obs.length;i++){
                    obs[i].style.backgroundColor="lightblue";
                }
                return false;
            }},
            {"cond":function(){
                for(var i=0;i<active_mobs.length;i++){
                    try{
                        if(active_mobs[i].lvl!=4)continue;
                        active_mobs[j].hp-=1145141919810;
                        if(active_mobs[j].hp<0){
                            var temp=active_mobs[j];
                            active_mobs.splice(j,1);
                            j--;
                            for(var k=0;k<temp.template.drop.length;k++){
                                if(Math.random()<=temp.template.drop[k].prob){
                                    active_drop.push({
                                        "name":temp.template.drop[k].petal,
                                        "lvl":temp.template.drop[k].lvl,
                                        "x":temp.x+Math.random()*10,
                                        "y":temp.y+Math.random()*10
                                    });
                                }
                            }
                        }
                    }catch(e){}
                }
            },"priority":0}
        ],
        "cd":100,
        "desc":"你 线 蓝 了（bushi<br>秒杀一切红（bad）怪"
    },
    "<span style='color:blue'>V</span>-5":{
        "atk":-5,
        "hp":Infinity,
        "srad":[
            {"cond":function(){
                var obs=document.getElementsByClassName("obstacle");
                for(var i=0;i<obs.length;i++){
                    obs[i].style.backgroundColor="lightblue";
                }
                return false;
            }},
            {"cond":function(){
                for(var i=0;i<active_mobs.length;i++){
                    try{
                        if(active_mobs[i].lvl!=4)continue;
                        active_mobs[j].hp-=1145141919810;
                        if(active_mobs[j].hp<0){
                            var temp=active_mobs[j];
                            active_mobs.splice(j,1);
                            j--;
                            for(var k=0;k<temp.template.drop.length;k++){
                                if(Math.random()<=temp.template.drop[k].prob){
                                    active_drop.push({
                                        "name":temp.template.drop[k].petal,
                                        "lvl":temp.template.drop[k].lvl,
                                        "x":temp.x+Math.random()*10,
                                        "y":temp.y+Math.random()*10
                                    });
                                }
                            }
                        }
                    }catch(e){}
                }
            },"priority":0}
        ],
        "cd":100,
        "desc":"你 线 蓝 了（bushi<br>秒杀一切红（bad）怪"
    },
    "<span style='color:blue'>V</span>-6":{
        "atk":-5,
        "hp":Infinity,
        "srad":[
            {"cond":function(){
                var obs=document.getElementsByClassName("obstacle");
                for(var i=0;i<obs.length;i++){
                    obs[i].style.backgroundColor="lightblue";
                }
                return false;
            }},
            {"cond":function(){
                for(var i=0;i<active_mobs.length;i++){
                    try{
                        if(active_mobs[i].lvl!=4)continue;
                        active_mobs[j].hp-=1145141919810;
                        if(active_mobs[j].hp<0){
                            var temp=active_mobs[j];
                            active_mobs.splice(j,1);
                            j--;
                            for(var k=0;k<temp.template.drop.length;k++){
                                if(Math.random()<=temp.template.drop[k].prob){
                                    active_drop.push({
                                        "name":temp.template.drop[k].petal,
                                        "lvl":temp.template.drop[k].lvl,
                                        "x":temp.x+Math.random()*10,
                                        "y":temp.y+Math.random()*10
                                    });
                                }
                            }
                        }
                    }catch(e){}
                }
            },"priority":0}
        ],
        "cd":100,
        "desc":"你 线 蓝 了（bushi<br>秒杀一切红（bad）怪"
    },
    "<span style='color:blue'>V</span>-7":{
        "atk":-5,
        "hp":Infinity,
        "srad":[
            {"cond":function(){
                var obs=document.getElementsByClassName("obstacle");
                for(var i=0;i<obs.length;i++){
                    obs[i].style.backgroundColor="lightblue";
                }
                return false;
            }},
            {"cond":function(){
                for(var i=0;i<active_mobs.length;i++){
                    try{
                        if(active_mobs[i].lvl!=4)continue;
                        active_mobs[j].hp-=1145141919810;
                        if(active_mobs[j].hp<0){
                            var temp=active_mobs[j];
                            active_mobs.splice(j,1);
                            j--;
                            for(var k=0;k<temp.template.drop.length;k++){
                                if(Math.random()<=temp.template.drop[k].prob){
                                    active_drop.push({
                                        "name":temp.template.drop[k].petal,
                                        "lvl":temp.template.drop[k].lvl,
                                        "x":temp.x+Math.random()*10,
                                        "y":temp.y+Math.random()*10
                                    });
                                }
                            }
                        }
                    }catch(e){}
                }
            },"priority":0}
        ],
        "cd":100,
        "desc":"你 线 蓝 了（bushi<br>秒杀一切红（bad）怪"
    },
    "<span style='color:blue'>V</span>-8":{
        "atk":-5,
        "hp":Infinity,
        "srad":[
            {"cond":function(){
                var obs=document.getElementsByClassName("obstacle");
                for(var i=0;i<obs.length;i++){
                    obs[i].style.backgroundColor="lightblue";
                }
                return false;
            }},
            {"cond":function(){
                for(var i=0;i<active_mobs.length;i++){
                    try{
                        if(active_mobs[i].lvl!=4)continue;
                        active_mobs[j].hp-=1145141919810;
                        if(active_mobs[j].hp<0){
                            var temp=active_mobs[j];
                            active_mobs.splice(j,1);
                            j--;
                            for(var k=0;k<temp.template.drop.length;k++){
                                if(Math.random()<=temp.template.drop[k].prob){
                                    active_drop.push({
                                        "name":temp.template.drop[k].petal,
                                        "lvl":temp.template.drop[k].lvl,
                                        "x":temp.x+Math.random()*10,
                                        "y":temp.y+Math.random()*10
                                    });
                                }
                            }
                        }
                    }catch(e){}
                }
            },"priority":0}
        ],
        "cd":100,
        "desc":"你 线 蓝 了（bushi<br>秒杀一切红（bad）怪"
    },
    "<span style='color:yellow'>φ</span>-0":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {"cond":function(){
                for(var i=0;i<active_mobs.length;i++){
                    try{
                        if(active_mobs[i].lvl!=1&&active_mobs[i].lvl!=2&&active_mobs[i].lvl!=4&&active_mobs[i].lvl!=5)continue;
                        active_mobs[j].hp-=1145141919810;
                        if(active_mobs[j].hp<0){
                            var temp=active_mobs[j];
                            active_mobs.splice(j,1);
                            j--;
                            for(var k=0;k<temp.template.drop.length;k++){
                                if(Math.random()<=temp.template.drop[k].prob){
                                    active_drop.push({
                                        "name":temp.template.drop[k].petal,
                                        "lvl":temp.template.drop[k].lvl,
                                        "x":temp.x+Math.random()*10,
                                        "y":temp.y+Math.random()*10
                                    });
                                }
                            }
                        }
                    }catch(e){}
                }
            },"priority":0}
        ],
        "cd":100,
        "desc":"请停止你的 重生 行为<br>秒杀一切红（bad）、蓝、青（good）、黄（perfect）怪"
    },
    "<span style='color:yellow'>φ</span>-1":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {"cond":function(){
                for(var i=0;i<active_mobs.length;i++){
                    try{
                        if(active_mobs[i].lvl!=1&&active_mobs[i].lvl!=2&&active_mobs[i].lvl!=4&&active_mobs[i].lvl!=5)continue;
                        active_mobs[j].hp-=1145141919810;
                        if(active_mobs[j].hp<0){
                            var temp=active_mobs[j];
                            active_mobs.splice(j,1);
                            j--;
                            for(var k=0;k<temp.template.drop.length;k++){
                                if(Math.random()<=temp.template.drop[k].prob){
                                    active_drop.push({
                                        "name":temp.template.drop[k].petal,
                                        "lvl":temp.template.drop[k].lvl,
                                        "x":temp.x+Math.random()*10,
                                        "y":temp.y+Math.random()*10
                                    });
                                }
                            }
                        }
                    }catch(e){}
                }
            },"priority":0}
        ],
        "cd":100,
        "desc":"请停止你的 重生 行为<br>秒杀一切红（bad）、蓝、青（good）、黄（perfect）怪"
    },
    "<span style='color:yellow'>φ</span>-2":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {"cond":function(){
                for(var i=0;i<active_mobs.length;i++){
                    try{
                        if(active_mobs[i].lvl!=1&&active_mobs[i].lvl!=2&&active_mobs[i].lvl!=4&&active_mobs[i].lvl!=5)continue;
                        active_mobs[j].hp-=1145141919810;
                        if(active_mobs[j].hp<0){
                            var temp=active_mobs[j];
                            active_mobs.splice(j,1);
                            j--;
                            for(var k=0;k<temp.template.drop.length;k++){
                                if(Math.random()<=temp.template.drop[k].prob){
                                    active_drop.push({
                                        "name":temp.template.drop[k].petal,
                                        "lvl":temp.template.drop[k].lvl,
                                        "x":temp.x+Math.random()*10,
                                        "y":temp.y+Math.random()*10
                                    });
                                }
                            }
                        }
                    }catch(e){}
                }
            },"priority":0}
        ],
        "cd":100,
        "desc":"请停止你的 重生 行为<br>秒杀一切红（bad）、蓝、青（good）、黄（perfect）怪"
    },
    "<span style='color:yellow'>φ</span>-3":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {"cond":function(){
                for(var i=0;i<active_mobs.length;i++){
                    try{
                        if(active_mobs[i].lvl!=1&&active_mobs[i].lvl!=2&&active_mobs[i].lvl!=4&&active_mobs[i].lvl!=5)continue;
                        active_mobs[j].hp-=1145141919810;
                        if(active_mobs[j].hp<0){
                            var temp=active_mobs[j];
                            active_mobs.splice(j,1);
                            j--;
                            for(var k=0;k<temp.template.drop.length;k++){
                                if(Math.random()<=temp.template.drop[k].prob){
                                    active_drop.push({
                                        "name":temp.template.drop[k].petal,
                                        "lvl":temp.template.drop[k].lvl,
                                        "x":temp.x+Math.random()*10,
                                        "y":temp.y+Math.random()*10
                                    });
                                }
                            }
                        }
                    }catch(e){}
                }
            },"priority":0}
        ],
        "cd":100,
        "desc":"请停止你的 重生 行为<br>秒杀一切红（bad）、蓝、青（good）、黄（perfect）怪"
    },
    "<span style='color:yellow'>φ</span>-4":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {"cond":function(){
                for(var i=0;i<active_mobs.length;i++){
                    try{
                        if(active_mobs[i].lvl!=1&&active_mobs[i].lvl!=2&&active_mobs[i].lvl!=4&&active_mobs[i].lvl!=5)continue;
                        active_mobs[j].hp-=1145141919810;
                        if(active_mobs[j].hp<0){
                            var temp=active_mobs[j];
                            active_mobs.splice(j,1);
                            j--;
                            for(var k=0;k<temp.template.drop.length;k++){
                                if(Math.random()<=temp.template.drop[k].prob){
                                    active_drop.push({
                                        "name":temp.template.drop[k].petal,
                                        "lvl":temp.template.drop[k].lvl,
                                        "x":temp.x+Math.random()*10,
                                        "y":temp.y+Math.random()*10
                                    });
                                }
                            }
                        }
                    }catch(e){}
                }
            },"priority":0}
        ],
        "cd":100,
        "desc":"请停止你的 重生 行为<br>秒杀一切红（bad）、蓝、青（good）、黄（perfect）怪"
    },
    "<span style='color:yellow'>φ</span>-5":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {"cond":function(){
                for(var i=0;i<active_mobs.length;i++){
                    try{
                        if(active_mobs[i].lvl!=1&&active_mobs[i].lvl!=2&&active_mobs[i].lvl!=4&&active_mobs[i].lvl!=5)continue;
                        active_mobs[j].hp-=1145141919810;
                        if(active_mobs[j].hp<0){
                            var temp=active_mobs[j];
                            active_mobs.splice(j,1);
                            j--;
                            for(var k=0;k<temp.template.drop.length;k++){
                                if(Math.random()<=temp.template.drop[k].prob){
                                    active_drop.push({
                                        "name":temp.template.drop[k].petal,
                                        "lvl":temp.template.drop[k].lvl,
                                        "x":temp.x+Math.random()*10,
                                        "y":temp.y+Math.random()*10
                                    });
                                }
                            }
                        }
                    }catch(e){}
                }
            },"priority":0}
        ],
        "cd":100,
        "desc":"请停止你的 重生 行为<br>秒杀一切红（bad）、蓝、青（good）、黄（perfect）怪"
    },
    "<span style='color:yellow'>φ</span>-6":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {"cond":function(){
                for(var i=0;i<active_mobs.length;i++){
                    try{
                        if(active_mobs[i].lvl!=1&&active_mobs[i].lvl!=2&&active_mobs[i].lvl!=4&&active_mobs[i].lvl!=5)continue;
                        active_mobs[j].hp-=1145141919810;
                        if(active_mobs[j].hp<0){
                            var temp=active_mobs[j];
                            active_mobs.splice(j,1);
                            j--;
                            for(var k=0;k<temp.template.drop.length;k++){
                                if(Math.random()<=temp.template.drop[k].prob){
                                    active_drop.push({
                                        "name":temp.template.drop[k].petal,
                                        "lvl":temp.template.drop[k].lvl,
                                        "x":temp.x+Math.random()*10,
                                        "y":temp.y+Math.random()*10
                                    });
                                }
                            }
                        }
                    }catch(e){}
                }
            },"priority":0}
        ],
        "cd":100,
        "desc":"请停止你的 重生 行为<br>秒杀一切红（bad）、蓝、青（good）、黄（perfect）怪"
    },
    "<span style='color:yellow'>φ</span>-7":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {"cond":function(){
                for(var i=0;i<active_mobs.length;i++){
                    try{
                        if(active_mobs[i].lvl!=1&&active_mobs[i].lvl!=2&&active_mobs[i].lvl!=4&&active_mobs[i].lvl!=5)continue;
                        active_mobs[j].hp-=1145141919810;
                        if(active_mobs[j].hp<0){
                            var temp=active_mobs[j];
                            active_mobs.splice(j,1);
                            j--;
                            for(var k=0;k<temp.template.drop.length;k++){
                                if(Math.random()<=temp.template.drop[k].prob){
                                    active_drop.push({
                                        "name":temp.template.drop[k].petal,
                                        "lvl":temp.template.drop[k].lvl,
                                        "x":temp.x+Math.random()*10,
                                        "y":temp.y+Math.random()*10
                                    });
                                }
                            }
                        }
                    }catch(e){}
                }
            },"priority":0}
        ],
        "cd":100,
        "desc":"请停止你的 重生 行为<br>秒杀一切红（bad）、蓝、青（good）、黄（perfect）怪"
    },
    "<span style='color:yellow'>φ</span>-8":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {"cond":function(){
                for(var i=0;i<active_mobs.length;i++){
                    try{
                        if(active_mobs[i].lvl!=1&&active_mobs[i].lvl!=2&&active_mobs[i].lvl!=4&&active_mobs[i].lvl!=5)continue;
                        active_mobs[j].hp-=1145141919810;
                        if(active_mobs[j].hp<0){
                            var temp=active_mobs[j];
                            active_mobs.splice(j,1);
                            j--;
                            for(var k=0;k<temp.template.drop.length;k++){
                                if(Math.random()<=temp.template.drop[k].prob){
                                    active_drop.push({
                                        "name":temp.template.drop[k].petal,
                                        "lvl":temp.template.drop[k].lvl,
                                        "x":temp.x+Math.random()*10,
                                        "y":temp.y+Math.random()*10
                                    });
                                }
                            }
                        }
                    }catch(e){}
                }
            },"priority":0}
        ],
        "cd":100,
        "desc":"请停止你的 重生 行为<br>秒杀一切红（bad）、蓝、青（good）、黄（perfect）怪"
    },
    "Nd-0":{
        "atk":5,
        "hp":5,
        "srad":[{"cond":function(){petalrotfactor*=1.5;},"priority":-1}],
        "cd":100,
        "desc":"用于构建粒子加速器的一块磁体<br>atk:5 hp:5 转速×1.5",
        "forge_factor":1.5
    },
    "Nd-1":{
        "atk":15,
        "hp":15,
        "srad":[{"cond":function(){petalrotfactor*=1.6;},"priority":-1}],
        "cd":100,
        "desc":"用于构建粒子加速器的一块磁体<br>atk:15 hp:15 转速×1.6",
        "forge_factor":1.5
    },
    "Nd-2":{
        "atk":45,
        "hp":45,
        "srad":[{"cond":function(){petalrotfactor*=1.7;},"priority":-1}],
        "cd":100,
        "desc":"用于构建粒子加速器的一块磁体<br>atk:45 hp:45 转速×1.7",
        "forge_factor":1.5
    },
    "Nd-3":{
        "atk":135,
        "hp":135,
        "srad":[{"cond":function(){petalrotfactor*=1.8;},"priority":-1}],
        "cd":100,
        "desc":"用于构建粒子加速器的一块磁体<br>atk:135 hp:135 转速×1.8",
        "forge_factor":1.5
    },
    "Nd-4":{
        "atk":405,
        "hp":405,
        "srad":[{"cond":function(){petalrotfactor*=1.9;},"priority":-1}],
        "cd":100,
        "desc":"用于构建粒子加速器的一块磁体<br>atk:405 hp:405 转速×1.9",
        "forge_factor":1.5
    },
    "Nd-5":{
        "atk":1215,
        "hp":1215,
        "srad":[{"cond":function(){petalrotfactor*=2.0;},"priority":-1}],
        "cd":100,
        "desc":"用于构建粒子加速器的一块磁体<br>atk:1215 hp:1215 转速×2.0",
        "forge_factor":1.5
    },
    "Nd-6":{
        "atk":3645,
        "hp":3645,
        "srad":[{"cond":function(){petalrotfactor*=2.2;},"priority":-1}],
        "cd":100,
        "desc":"用于构建粒子加速器的一块磁体<br>atk:3645 hp:3645 转速×2.2",
        "forge_factor":1.5
    },
    "Nd-7":{
        "atk":10935,
        "hp":10935,
        "srad":[{"cond":function(){petalrotfactor*=2.5;},"priority":-1}],
        "cd":100,
        "desc":"用于构建粒子加速器的一块磁体<br>atk:10935 hp:10935 转速×2.5",
        "forge_factor":1.5
    },
    "Nd-8":{
        "atk":32805,
        "hp":32805,
        "srad":[{"cond":function(){petalrotfactor*=3.0;},"priority":-1}],
        "cd":100,
        "desc":"用于构建粒子加速器的一块磁体<br>atk:32805 hp:32805 转速×3.0",
        "forge_factor":1.5
    },
    "Fe₃O₄-0":{
        "atk":5,
        "hp":5,
        "srad":[{"cond":function(){pickupfactor*=1.5;},"priority":-1}],
        "cd":100,
        "desc":"<del>石头里面居然有磁铁，这不科学</del><br>atk:5 hp:5 掉落物拾取半径×1.5",
        "forge_factor":1.5
    },
    "Fe₃O₄-1":{
        "atk":15,
        "hp":15,
        "srad":[{"cond":function(){pickupfactor*=2.0;},"priority":-1}],
        "cd":100,
        "desc":"<del>石头里面居然有磁铁，这不科学</del><br>atk:15 hp:15 掉落物拾取半径×2.0",
        "forge_factor":1.5
    },
    "Fe₃O₄-2":{
        "atk":45,
        "hp":45,
        "srad":[{"cond":function(){pickupfactor*=2.5;},"priority":-1}],
        "cd":100,
        "desc":"<del>石头里面居然有磁铁，这不科学</del><br>atk:45 hp:45 掉落物拾取半径×2.5",
        "forge_factor":1.5
    },
    "Fe₃O₄-3":{
        "atk":135,
        "hp":135,
        "srad":[{"cond":function(){pickupfactor*=3.0;},"priority":-1}],
        "cd":100,
        "desc":"<del>石头里面居然有磁铁，这不科学</del><br>atk:135 hp:135 掉落物拾取半径×3.0",
        "forge_factor":1.5
    },
    "Fe₃O₄-4":{
        "atk":405,
        "hp":405,
        "srad":[{"cond":function(){pickupfactor*=3.5;},"priority":-1}],
        "cd":100,
        "desc":"<del>石头里面居然有磁铁，这不科学</del><br>atk:405 hp:405 掉落物拾取半径×3.5",
        "forge_factor":1.5
    },
    "Fe₃O₄-5":{
        "atk":1215,
        "hp":1215,
        "srad":[{"cond":function(){pickupfactor*=4.0;},"priority":-1}],
        "cd":100,
        "desc":"<del>石头里面居然有磁铁，这不科学</del><br>atk:1215 hp:1215 掉落物拾取半径×4.0",
        "forge_factor":1.5
    },
    "Fe₃O₄-6":{
        "atk":3645,
        "hp":3645,
        "srad":[{"cond":function(){pickupfactor*=4.5;},"priority":-1}],
        "cd":100,
        "desc":"<del>石头里面居然有磁铁，这不科学</del><br>atk:3645 hp:3645 掉落物拾取半径×4.5",
        "forge_factor":1.5
    },
    "Fe₃O₄-7":{
        "atk":10935,
        "hp":10935,
        "srad":[{"cond":function(){pickupfactor*=5.0;},"priority":-1}],
        "cd":100,
        "desc":"<del>石头里面居然有磁铁，这不科学</del><br>atk:10935 hp:10935 掉落物拾取半径×5.0",
        "forge_factor":1.5
    },
    "Fe₃O₄-8":{
        "atk":32805,
        "hp":32805,
        "srad":[{"cond":function(){pickupfactor*=6.0;},"priority":-1}],
        "cd":100,
        "desc":"<del>石头里面居然有磁铁，这不科学</del><br>atk:32805 hp:32805 掉落物拾取半径×6.0",
        "forge_factor":1.5
    },
    "N₂-0":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){
                    var flag=(tgt_radius==150);
                    if(!flag)return false;
                    if(lastDeathX&&lastDeathY){
                        x-=(x-lastDeathX)*0.05;
                        y-=(y-lastDeathY)*0.05;
                    }
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":0
            }
        ],
        "cd":100,
        "desc":"按照常理来讲，你并不能控制布朗运动的方向<br>可惜你是麦克斯韦妖</br>cd:1s 向上次死亡地点行进（5%）",
        "forge_factor":1.5
    },
    "N₂-1":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){
                    var flag=(tgt_radius==150);
                    if(!flag)return false;
                    if(lastDeathX&&lastDeathY){
                        x-=(x-lastDeathX)*0.075;
                        y-=(y-lastDeathY)*0.075;
                    }
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":0
            }
        ],
        "cd":100,
        "desc":"按照常理来讲，你并不能控制布朗运动的方向<br>可惜你是麦克斯韦妖</br>cd:1s 向上次死亡地点行进（7.5%）",
        "forge_factor":1.5
    },
    "N₂-2":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){
                    var flag=(tgt_radius==150);
                    if(!flag)return false;
                    if(lastDeathX&&lastDeathY){
                        x-=(x-lastDeathX)*0.1;
                        y-=(y-lastDeathY)*0.1;
                    }
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":0
            }
        ],
        "cd":100,
        "desc":"按照常理来讲，你并不能控制布朗运动的方向<br>可惜你是麦克斯韦妖</br>cd:1s 向上次死亡地点行进（10%）",
        "forge_factor":1.5
    },
    "N₂-3":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){
                    var flag=(tgt_radius==150);
                    if(!flag)return false;
                    if(lastDeathX&&lastDeathY){
                        x-=(x-lastDeathX)*0.125;
                        y-=(y-lastDeathY)*0.125;
                    }
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":0
            }
        ],
        "cd":100,
        "desc":"按照常理来讲，你并不能控制布朗运动的方向<br>可惜你是麦克斯韦妖</br>cd:1s 向上次死亡地点行进（12.5%）",
        "forge_factor":1.5
    },
    "N₂-4":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){
                    var flag=(tgt_radius==150);
                    if(!flag)return false;
                    if(lastDeathX&&lastDeathY){
                        x-=(x-lastDeathX)*0.15;
                        y-=(y-lastDeathY)*0.15;
                    }
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":0
            }
        ],
        "cd":100,
        "desc":"按照常理来讲，你并不能控制布朗运动的方向<br>可惜你是麦克斯韦妖</br>cd:1s 向上次死亡地点行进（15%）",
        "forge_factor":1.5
    },
    "N₂-5":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){
                    var flag=(tgt_radius==150);
                    if(!flag)return false;
                    if(lastDeathX&&lastDeathY){
                        x-=(x-lastDeathX)*0.175;
                        y-=(y-lastDeathY)*0.175;
                    }
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":0
            }
        ],
        "cd":100,
        "desc":"按照常理来讲，你并不能控制布朗运动的方向<br>可惜你是麦克斯韦妖</br>cd:1s 向上次死亡地点行进（17.5%）",
        "forge_factor":1.5
    },
    "N₂-6":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){
                    var flag=(tgt_radius==150);
                    if(!flag)return false;
                    if(lastDeathX&&lastDeathY){
                        x-=(x-lastDeathX)*0.2;
                        y-=(y-lastDeathY)*0.2;
                    }
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":0
            }
        ],
        "cd":100,
        "desc":"按照常理来讲，你并不能控制布朗运动的方向<br>可惜你是麦克斯韦妖</br>cd:1s 向上次死亡地点行进（20%）",
        "forge_factor":1.5
    },
    "N₂-7":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){
                    var flag=(tgt_radius==150);
                    if(!flag)return false;
                    if(lastDeathX&&lastDeathY){
                        x-=(x-lastDeathX)*0.225;
                        y-=(y-lastDeathY)*0.225;
                    }
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":0
            }
        ],
        "cd":100,
        "desc":"按照常理来讲，你并不能控制布朗运动的方向<br>可惜你是麦克斯韦妖</br>cd:1s 向上次死亡地点行进（22.5%）",
        "forge_factor":1.5
    },
    "N₂-8":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){
                    var flag=(tgt_radius==150);
                    if(!flag)return false;
                    if(lastDeathX&&lastDeathY){
                        x-=(x-lastDeathX)*0.25;
                        y-=(y-lastDeathY)*0.25;
                    }
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":0
            }
        ],
        "cd":100,
        "desc":"按照常理来讲，你并不能控制布朗运动的方向<br>可惜你是麦克斯韦妖</br>cd:1s 向上次死亡地点行进（25%）",
        "forge_factor":1.5
    },
    "γ-0":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){
                    return false;
                    var flag=(tgt_radius==150);
                    if(!flag)return false;
                    petaldmgfactor*=10;
                    if(curtick%2==0){
                        for(var i=0;i<player_petals.length;i++)if(player_petals[i]!="γ")die_petal(i);
                    }else{
                        for(var i=0;i<player_petals.length;i++)player_petal_hp[i]=Infinity;
                    }
                }
            }
        ],
        "cd":100,
        "desc":"按照常理来讲，一个花瓣不能既死又活<br>可惜你是薛定谔的猫<br>效果：略"
    },
    "γ-1":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){
                    return false;
                    var flag=(tgt_radius==150);
                    if(!flag)return false;
                    petaldmgfactor*=20;
                    if(curtick%2==0){
                        for(var i=0;i<player_petals.length;i++)if(player_petals[i]!="γ")die_petal(i);
                    }else{
                        for(var i=0;i<player_petals.length;i++)player_petal_hp[i]=Infinity;
                    }
                }
            }
        ],
        "cd":100,
        "desc":"按照常理来讲，一个花瓣不能既死又活<br>可惜你是薛定谔的猫<br>效果：略"
    },
    "γ-2":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){
                    return false;
                    var flag=(tgt_radius==150);
                    if(!flag)return false;
                    petaldmgfactor*=30;
                    if(curtick%2==0){
                        for(var i=0;i<player_petals.length;i++)if(player_petals[i]!="γ")die_petal(i);
                    }else{
                        for(var i=0;i<player_petals.length;i++)player_petal_hp[i]=Infinity;
                    }
                }
            }
        ],
        "cd":100,
        "desc":"按照常理来讲，一个花瓣不能既死又活<br>可惜你是薛定谔的猫<br>效果：略"
    },
    "γ-3":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){
                    return false;
                    var flag=(tgt_radius==150);
                    if(!flag)return false;
                    petaldmgfactor*=40;
                    if(curtick%2==0){
                        for(var i=0;i<player_petals.length;i++)if(player_petals[i]!="γ")die_petal(i);
                    }else{
                        for(var i=0;i<player_petals.length;i++)player_petal_hp[i]=Infinity;
                    }
                }
            }
        ],
        "cd":100,
        "desc":"按照常理来讲，一个花瓣不能既死又活<br>可惜你是薛定谔的猫<br>效果：略"
    },
    "γ-4":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){
                    return false;
                    var flag=(tgt_radius==150);
                    if(!flag)return false;
                    petaldmgfactor*=50;
                    if(curtick%2==0){
                        for(var i=0;i<player_petals.length;i++)if(player_petals[i]!="γ")die_petal(i);
                    }else{
                        for(var i=0;i<player_petals.length;i++)player_petal_hp[i]=Infinity;
                    }
                }
            }
        ],
        "cd":100,
        "desc":"按照常理来讲，一个花瓣不能既死又活<br>可惜你是薛定谔的猫<br>效果：略"
    },
    "γ-5":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){
                    return false;
                    var flag=(tgt_radius==150);
                    if(!flag)return false;
                    petaldmgfactor*=60;
                    if(curtick%2==0){
                        for(var i=0;i<player_petals.length;i++)if(player_petals[i]!="γ")die_petal(i);
                    }else{
                        for(var i=0;i<player_petals.length;i++)player_petal_hp[i]=Infinity;
                    }
                }
            }
        ],
        "cd":100,
        "desc":"按照常理来讲，一个花瓣不能既死又活<br>可惜你是薛定谔的猫<br>效果：略"
    },
    "γ-6":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){
                    return false;
                    var flag=(tgt_radius==150);
                    if(!flag)return false;
                    petaldmgfactor*=70;
                    if(curtick%2==0){
                        for(var i=0;i<player_petals.length;i++)if(player_petals[i]!="γ")die_petal(i);
                    }else{
                        for(var i=0;i<player_petals.length;i++)player_petal_hp[i]=Infinity;
                    }
                }
            }
        ],
        "cd":100,
        "desc":"按照常理来讲，一个花瓣不能既死又活<br>可惜你是薛定谔的猫<br>效果：略"
    },
    "γ-7":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){
                    return false;
                    var flag=(tgt_radius==150);
                    if(!flag)return false;
                    petaldmgfactor*=80;
                    if(curtick%2==0){
                        for(var i=0;i<player_petals.length;i++)if(player_petals[i]!="γ")die_petal(i);
                    }else{
                        for(var i=0;i<player_petals.length;i++)player_petal_hp[i]=Infinity;
                    }
                }
            }
        ],
        "cd":100,
        "desc":"按照常理来讲，一个花瓣不能既死又活<br>可惜你是薛定谔的猫<br>效果：略"
    },
    "γ-8":{
        "atk":0,
        "hp":Infinity,
        "srad":[
            {
                "cond":function(){
                    return false;
                    var flag=(tgt_radius==150);
                    if(!flag)return false;
                    petaldmgfactor*=100;
                    if(curtick%2==0){
                        for(var i=0;i<player_petals.length;i++)if(player_petals[i]!="γ")die_petal(i);
                    }else{
                        for(var i=0;i<player_petals.length;i++)player_petal_hp[i]=Infinity;
                    }
                }
            }
        ],
        "cd":100,
        "desc":"按照常理来讲，一个花瓣不能既死又活<br>可惜你是薛定谔的猫<br>效果：略"
    },
    "NO₂-0":{
        "atk":5,
        "hp":100,
        "srad":[
            {
                "cond":function(){
                    movement_speed_factor*=1.10;
                    return false;
                },
                "priority":-1
            }
        ],
        "cd":100,
        "desc":"氮气加速（bushi<br>cd:1s atk:5 hp:100 移速+10%",
        "forge_factor":1.5
    },
    "NO₂-1":{
        "atk":15,
        "hp":300,
        "srad":[
            {
                "cond":function(){
                    movement_speed_factor*=1.20;
                    return false;
                },
                "priority":-1
            }
        ],
        "cd":100,
        "desc":"氮气加速（bushi<br>cd:1s atk:15 hp:300 移速+20%",
        "forge_factor":1.5
    },
    "NO₂-2":{
        "atk":45,
        "hp":900,
        "srad":[
            {
                "cond":function(){
                    movement_speed_factor*=1.30;
                    return false;
                },
                "priority":-1
            }
        ],
        "cd":100,
        "desc":"氮气加速（bushi<br>cd:1s atk:45 hp:900 移速+30%",
        "forge_factor":1.5
    },
    "NO₂-3":{
        "atk":135,
        "hp":2700,
        "srad":[
            {
                "cond":function(){
                    movement_speed_factor*=1.40;
                    return false;
                },
                "priority":-1
            }
        ],
        "cd":100,
        "desc":"氮气加速（bushi<br>cd:1s atk:135 hp:2700 移速+40%",
        "forge_factor":1.5
    },
    "NO₂-4":{
        "atk":405,
        "hp":8100,
        "srad":[
            {
                "cond":function(){
                    movement_speed_factor*=1.50;
                    return false;
                },
                "priority":-1
            }
        ],
        "cd":100,
        "desc":"氮气加速（bushi<br>cd:1s atk:405 hp:8100 移速+50%",
        "forge_factor":1.5
    },
    "NO₂-5":{
        "atk":1215,
        "hp":24300,
        "srad":[
            {
                "cond":function(){
                    movement_speed_factor*=1.60;
                    return false;
                },
                "priority":-1
            }
        ],
        "cd":100,
        "desc":"氮气加速（bushi<br>cd:1s atk:1215 hp:24300 移速+60%",
        "forge_factor":1.5
    },
    "NO₂-6":{
        "atk":3645,
        "hp":72900,
        "srad":[
            {
                "cond":function(){
                    movement_speed_factor*=1.70;
                    return false;
                },
                "priority":-1
            }
        ],
        "cd":100,
        "desc":"氮气加速（bushi<br>cd:1s atk:3645 hp:72900 移速+70%",
        "forge_factor":1.5
    },
    "NO₂-7":{
        "atk":10935,
        "hp":218700,
        "srad":[
            {
                "cond":function(){
                    movement_speed_factor*=1.85;
                    return false;
                },
                "priority":-1
            }
        ],
        "cd":100,
        "desc":"氮气加速（bushi<br>cd:1s atk:10935 hp:218700 移速+85%",
        "forge_factor":1.5
    },
    "NO₂-8":{
        "atk":32805,
        "hp":656100,
        "srad":[
            {
                "cond":function(){
                    movement_speed_factor*=2.00;
                    return false;
                },
                "priority":-1
            }
        ],
        "cd":100,
        "desc":"氮气加速（bushi<br>cd:1s atk:32805 hp:656100 移速+100%",
        "forge_factor":1.5
    },
    "Na-0":{
        "atk":100,
        "hp":1,
        "srad":[
            {
                "cond":function(){
                    hp-=0.1;
                    return false;
                },
                "priority":1
            }
        ],
        "cd":30,
        "desc":"不管了，直接加钠<br>cd:0.3s atk:100 hp:1 自伤 10/s",
        "forge_factor":1.5
    },
    "Na-1":{
        "atk":300,
        "hp":3,
        "srad":[
            {
                "cond":function(){
                    hp-=0.3;
                    return false;
                },
                "priority":1
            }
        ],
        "cd":30,
        "desc":"不管了，直接加钠<br>cd:0.3s atk:300 hp:3 自伤 30/s",
        "forge_factor":1.5
    },
    "Na-2":{
        "atk":900,
        "hp":9,
        "srad":[
            {
                "cond":function(){
                    hp-=0.9;
                    return false;
                },
                "priority":1
            }
        ],
        "cd":30,
        "desc":"不管了，直接加钠<br>cd:0.3s atk:100 hp:1 自伤 90/s",
        "forge_factor":1.5
    },
    "Na-3":{
        "atk":2700,
        "hp":27,
        "srad":[
            {
                "cond":function(){
                    hp-=2.7;
                    return false;
                },
                "priority":1
            }
        ],
        "cd":30,
        "desc":"不管了，直接加钠<br>cd:0.3s atk:2700 hp:27 自伤 270/s",
        "forge_factor":1.5
    },
    "Na-4":{
        "atk":8100,
        "hp":81,
        "srad":[
            {
                "cond":function(){
                    hp-=8.1;
                    return false;
                },
                "priority":1
            }
        ],
        "cd":30,
        "desc":"不管了，直接加钠<br>cd:0.3s atk:8100 hp:81 自伤 810/s",
        "forge_factor":1.5
    },
    "Na-5":{
        "atk":24300,
        "hp":243,
        "srad":[
            {
                "cond":function(){
                    hp-=24.3;
                    return false;
                },
                "priority":1
            }
        ],
        "cd":30,
        "desc":"不管了，直接加钠<br>cd:0.3s atk:24300 hp:243 自伤 2430/s",
        "forge_factor":1.5
    },
    "Na-6":{
        "atk":72900,
        "hp":729,
        "srad":[
            {
                "cond":function(){
                    hp-=72.9;
                    return false;
                },
                "priority":1
            }
        ],
        "cd":30,
        "desc":"不管了，直接加钠<br>cd:0.3s atk:72900 hp:729 自伤 7290/s",
        "forge_factor":1.5
    },
    "Na-7":{
        "atk":218700,
        "hp":2187,
        "srad":[
            {
                "cond":function(){
                    hp-=218.7;
                    return false;
                },
                "priority":1
            }
        ],
        "cd":30,
        "desc":"不管了，直接加钠<br>cd:0.3s atk:218700 hp:2187 自伤 21870/s",
        "forge_factor":1.5
    },
    "Na-8":{
        "atk":656100,
        "hp":6561,
        "srad":[
            {
                "cond":function(){
                    hp-=656.1;
                    return false;
                },
                "priority":1
            }
        ],
        "cd":30,
        "desc":"不管了，直接加钠<br>cd:0.3s atk:656100 hp:6561 自伤 65610/s",
        "forge_factor":1.5
    },
    "²³⁵U-0":{
        "atk":5,
        "hp":10,
        "srad":[
            {
                "cond":function(){
                    if(curtick%200!=0)return false;
                    if(tgt_radius!=150)return false;
                    var nearest=0;
                    if(!active_mobs.length)return false;
                    for(var i=1;i<active_mobs.length;i++){
                        if((active_mobs[i].x-x)**2+(active_mobs[i].y-y)**2<(active_mobs[nearest].x-x)**2+(active_mobs[nearest].y-y)**2)nearest=i;
                    }
                    active_projectiles.push({
                        "lvl":0,
                        "name":"n",
                        "atk":10*petaldmgfactor,
                        "is_player":true,
                        "life":1000,
                        "x":x,
                        "y":y,
                        "vx":3*Math.sin(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y)),
                        "vy":3*Math.cos(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y))
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"小心点，这个东西有放射性</br>cd:1s atk:5 hp:10 发射：n（cd:2s atk:10 vel:3）",
        "forge_factor":1.5
    },
    "²³⁵U-1":{
        "atk":15,
        "hp":30,
        "srad":[
            {
                "cond":function(){
                    if(curtick%200!=0)return false;
                    if(tgt_radius!=150)return false;
                    var nearest=0;
                    if(!active_mobs.length)return false;
                    for(var i=1;i<active_mobs.length;i++){
                        if((active_mobs[i].x-x)**2+(active_mobs[i].y-y)**2<(active_mobs[nearest].x-x)**2+(active_mobs[nearest].y-y)**2)nearest=i;
                    }
                    active_projectiles.push({
                        "lvl":1,
                        "name":"n",
                        "atk":30*petaldmgfactor,
                        "is_player":true,
                        "life":1000,
                        "x":x,
                        "y":y,
                        "vx":3*Math.sin(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y)),
                        "vy":3*Math.cos(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y))
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"小心点，这个东西有放射性</br>cd:1s atk:15 hp:30 发射：n（cd:2s atk:30 vel:3）",
        "forge_factor":1.5
    },
    "²³⁵U-2":{
        "atk":45,
        "hp":90,
        "srad":[
            {
                "cond":function(){
                    if(curtick%200!=0)return false;
                    if(tgt_radius!=150)return false;
                    var nearest=0;
                    if(!active_mobs.length)return false;
                    for(var i=1;i<active_mobs.length;i++){
                        if((active_mobs[i].x-x)**2+(active_mobs[i].y-y)**2<(active_mobs[nearest].x-x)**2+(active_mobs[nearest].y-y)**2)nearest=i;
                    }
                    active_projectiles.push({
                        "lvl":2,
                        "name":"n",
                        "atk":90*petaldmgfactor,
                        "is_player":true,
                        "life":1000,
                        "x":x,
                        "y":y,
                        "vx":3*Math.sin(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y)),
                        "vy":3*Math.cos(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y))
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"小心点，这个东西有放射性</br>cd:1s atk:45 hp:90 发射：n（cd:2s atk:90 vel:3）",
        "forge_factor":1.5
    },
    "²³⁵U-3":{
        "atk":135,
        "hp":270,
        "srad":[
            {
                "cond":function(){
                    if(curtick%200!=0)return false;
                    if(tgt_radius!=150)return false;
                    var nearest=0;
                    if(!active_mobs.length)return false;
                    for(var i=1;i<active_mobs.length;i++){
                        if((active_mobs[i].x-x)**2+(active_mobs[i].y-y)**2<(active_mobs[nearest].x-x)**2+(active_mobs[nearest].y-y)**2)nearest=i;
                    }
                    active_projectiles.push({
                        "lvl":3,
                        "name":"n",
                        "atk":270*petaldmgfactor,
                        "is_player":true,
                        "life":1000,
                        "x":x,
                        "y":y,
                        "vx":3*Math.sin(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y)),
                        "vy":3*Math.cos(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y))
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"小心点，这个东西有放射性</br>cd:1s atk:135 hp:270 发射：n（cd:2s atk:270 vel:3）",
        "forge_factor":1.5
    },
    "²³⁵U-4":{
        "atk":405,
        "hp":810,
        "srad":[
            {
                "cond":function(){
                    if(curtick%200!=0)return false;
                    if(tgt_radius!=150)return false;
                    var nearest=0;
                    if(!active_mobs.length)return false;
                    for(var i=1;i<active_mobs.length;i++){
                        if((active_mobs[i].x-x)**2+(active_mobs[i].y-y)**2<(active_mobs[nearest].x-x)**2+(active_mobs[nearest].y-y)**2)nearest=i;
                    }
                    active_projectiles.push({
                        "lvl":4,
                        "name":"n",
                        "atk":810*petaldmgfactor,
                        "is_player":true,
                        "life":1000,
                        "x":x,
                        "y":y,
                        "vx":3*Math.sin(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y)),
                        "vy":3*Math.cos(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y))
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"小心点，这个东西有放射性</br>cd:1s atk:405 hp:810 发射：n（cd:2s atk:810 vel:3）",
        "forge_factor":1.5
    },
    "²³⁵U-5":{
        "atk":1215,
        "hp":2430,
        "srad":[
            {
                "cond":function(){
                    if(curtick%200!=0)return false;
                    if(tgt_radius!=150)return false;
                    var nearest=0;
                    if(!active_mobs.length)return false;
                    for(var i=1;i<active_mobs.length;i++){
                        if((active_mobs[i].x-x)**2+(active_mobs[i].y-y)**2<(active_mobs[nearest].x-x)**2+(active_mobs[nearest].y-y)**2)nearest=i;
                    }
                    active_projectiles.push({
                        "lvl":5,
                        "name":"n",
                        "atk":2430*petaldmgfactor,
                        "is_player":true,
                        "life":1000,
                        "x":x,
                        "y":y,
                        "vx":3*Math.sin(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y)),
                        "vy":3*Math.cos(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y))
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"小心点，这个东西有放射性</br>cd:1s atk:1215 hp:2430 发射：n（cd:2s atk:2430 vel:3）",
        "forge_factor":1.5
    },
    "²³⁵U-6":{
        "atk":3645,
        "hp":7290,
        "srad":[
            {
                "cond":function(){
                    if(curtick%200!=0)return false;
                    if(tgt_radius!=150)return false;
                    var nearest=0;
                    if(!active_mobs.length)return false;
                    for(var i=1;i<active_mobs.length;i++){
                        if((active_mobs[i].x-x)**2+(active_mobs[i].y-y)**2<(active_mobs[nearest].x-x)**2+(active_mobs[nearest].y-y)**2)nearest=i;
                    }
                    active_projectiles.push({
                        "lvl":6,
                        "name":"n",
                        "atk":7290*petaldmgfactor,
                        "is_player":true,
                        "life":1000,
                        "x":x,
                        "y":y,
                        "vx":3*Math.sin(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y)),
                        "vy":3*Math.cos(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y))
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"小心点，这个东西有放射性</br>cd:1s atk:3645 hp:7290 发射：n（cd:2s atk:7290 vel:3）",
        "forge_factor":1.5
    },
    "²³⁵U-7":{
        "atk":10935,
        "hp":21870,
        "srad":[
            {
                "cond":function(){
                    if(curtick%200!=0)return false;
                    if(tgt_radius!=150)return false;
                    var nearest=0;
                    if(!active_mobs.length)return false;
                    for(var i=1;i<active_mobs.length;i++){
                        if((active_mobs[i].x-x)**2+(active_mobs[i].y-y)**2<(active_mobs[nearest].x-x)**2+(active_mobs[nearest].y-y)**2)nearest=i;
                    }
                    active_projectiles.push({
                        "lvl":7,
                        "name":"n",
                        "atk":21870*petaldmgfactor,
                        "is_player":true,
                        "life":1000,
                        "x":x,
                        "y":y,
                        "vx":3*Math.sin(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y)),
                        "vy":3*Math.cos(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y))
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"小心点，这个东西有放射性</br>cd:1s atk:10935 hp:21870 发射：n（cd:2s atk:21870 vel:3）",
        "forge_factor":1.5
    },
    "²³⁵U-8":{
        "atk":32805,
        "hp":65610,
        "srad":[
            {
                "cond":function(){
                    if(curtick%200!=0)return false;
                    if(tgt_radius!=150)return false;
                    var nearest=0;
                    if(!active_mobs.length)return false;
                    for(var i=1;i<active_mobs.length;i++){
                        if((active_mobs[i].x-x)**2+(active_mobs[i].y-y)**2<(active_mobs[nearest].x-x)**2+(active_mobs[nearest].y-y)**2)nearest=i;
                    }
                    active_projectiles.push({
                        "lvl":8,
                        "name":"n",
                        "atk":65610*petaldmgfactor,
                        "is_player":true,
                        "life":1000,
                        "x":x,
                        "y":y,
                        "vx":3*Math.sin(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y)),
                        "vy":3*Math.cos(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y))
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"小心点，这个东西有放射性</br>cd:1s atk:32805 hp:65610 发射：n（cd:2s atk:65610 vel:3）",
        "forge_factor":1.5
    },
    "Pb-0":{
        "atk":5,
        "hp":10,
        "srad":[
            {
                "cond":function(){
                    for(var i=0;i<active_projectiles.length;i++){
                        if(active_projectiles[i].is_player)continue;
                        if((active_projectiles[i].x-x)**2+(active_projectiles[i].y-y)**2>=22500)continue;
                        if(Math.random()<0.002){
                            active_projectiles[i].is_player=true;
                            active_projectiles[i].vx=-active_projectiles[i].vx;
                            active_projectiles[i].vy=-active_projectiles[i].vy;
                        }
                    }
                    return false;
                },
                "priority":0
            }
        ],
        "cd":100,
        "desc":"可以帮你阻挡射线。</br>cd:1s atk:5 hp:10 reflect:0.2%（每0.01秒）",
        "forge_factor":1.25
    },
    "Pb-1":{
        "atk":15,
        "hp":30,
        "srad":[
            {
                "cond":function(){
                    for(var i=0;i<active_projectiles.length;i++){
                        if(active_projectiles[i].is_player)continue;
                        if((active_projectiles[i].x-x)**2+(active_projectiles[i].y-y)**2>=22500)continue;
                        if(Math.random()<0.003){
                            active_projectiles[i].is_player=true;
                            active_projectiles[i].vx=-active_projectiles[i].vx;
                            active_projectiles[i].vy=-active_projectiles[i].vy;
                        }
                    }
                    return false;
                },
                "priority":0
            }
        ],
        "cd":100,
        "desc":"可以帮你阻挡射线。</br>cd:1s atk:15 hp:30 reflect:0.3%（每0.01秒）",
        "forge_factor":1.25
    },
    "Pb-2":{
        "atk":45,
        "hp":90,
        "srad":[
            {
                "cond":function(){
                    for(var i=0;i<active_projectiles.length;i++){
                        if(active_projectiles[i].is_player)continue;
                        if((active_projectiles[i].x-x)**2+(active_projectiles[i].y-y)**2>=22500)continue;
                        if(Math.random()<0.005){
                            active_projectiles[i].is_player=true;
                            active_projectiles[i].vx=-active_projectiles[i].vx;
                            active_projectiles[i].vy=-active_projectiles[i].vy;
                        }
                    }
                    return false;
                },
                "priority":0
            }
        ],
        "cd":100,
        "desc":"可以帮你阻挡射线。</br>cd:1s atk:45 hp:120 reflect:0.5%（每0.01秒）",
        "forge_factor":1.25
    },
    "Pb-3":{
        "atk":135,
        "hp":270,
        "srad":[
            {
                "cond":function(){
                    for(var i=0;i<active_projectiles.length;i++){
                        if(active_projectiles[i].is_player)continue;
                        if((active_projectiles[i].x-x)**2+(active_projectiles[i].y-y)**2>=22500)continue;
                        if(Math.random()<0.007){
                            active_projectiles[i].is_player=true;
                            active_projectiles[i].vx=-active_projectiles[i].vx;
                            active_projectiles[i].vy=-active_projectiles[i].vy;
                        }
                    }
                    return false;
                },
                "priority":0
            }
        ],
        "cd":100,
        "desc":"可以帮你阻挡射线。</br>cd:1s atk:135 hp:270 reflect:0.7%（每0.01秒）",
        "forge_factor":1.25
    },
    "Pb-4":{
        "atk":405,
        "hp":810,
        "srad":[
            {
                "cond":function(){
                    for(var i=0;i<active_projectiles.length;i++){
                        if(active_projectiles[i].is_player)continue;
                        if((active_projectiles[i].x-x)**2+(active_projectiles[i].y-y)**2>=22500)continue;
                        if(Math.random()<0.01){
                            active_projectiles[i].is_player=true;
                            active_projectiles[i].vx=-active_projectiles[i].vx;
                            active_projectiles[i].vy=-active_projectiles[i].vy;
                        }
                    }
                    return false;
                },
                "priority":0
            }
        ],
        "cd":100,
        "desc":"可以帮你阻挡射线。</br>cd:1s atk:405 hp:810 reflect:1%（每0.01秒）",
        "forge_factor":1.25
    },
    "Pb-5":{
        "atk":1215,
        "hp":2430,
        "srad":[
            {
                "cond":function(){
                    for(var i=0;i<active_projectiles.length;i++){
                        if(active_projectiles[i].is_player)continue;
                        if((active_projectiles[i].x-x)**2+(active_projectiles[i].y-y)**2>=22500)continue;
                        if(Math.random()<0.0125){
                            active_projectiles[i].is_player=true;
                            active_projectiles[i].vx=-active_projectiles[i].vx;
                            active_projectiles[i].vy=-active_projectiles[i].vy;
                        }
                    }
                    return false;
                },
                "priority":0
            }
        ],
        "cd":100,
        "desc":"可以帮你阻挡射线。</br>cd:1s atk:1215 hp:2430 reflect:1.25%（每0.01秒）",
        "forge_factor":1.25
    },
    "Pb-6":{
        "atk":3645,
        "hp":7290,
        "srad":[
            {
                "cond":function(){
                    for(var i=0;i<active_projectiles.length;i++){
                        if(active_projectiles[i].is_player)continue;
                        if((active_projectiles[i].x-x)**2+(active_projectiles[i].y-y)**2>=22500)continue;
                        if(Math.random()<0.015){
                            active_projectiles[i].is_player=true;
                            active_projectiles[i].vx=-active_projectiles[i].vx;
                            active_projectiles[i].vy=-active_projectiles[i].vy;
                        }
                    }
                    return false;
                },
                "priority":0
            }
        ],
        "cd":100,
        "desc":"可以帮你阻挡射线。</br>cd:1s atk:3645 hp:7290 reflect:1.5%（每0.01秒）",
        "forge_factor":1.25
    },
    "Pb-7":{
        "atk":10935,
        "hp":21870,
        "srad":[
            {
                "cond":function(){
                    for(var i=0;i<active_projectiles.length;i++){
                        if(active_projectiles[i].is_player)continue;
                        if((active_projectiles[i].x-x)**2+(active_projectiles[i].y-y)**2>=22500)continue;
                        if(Math.random()<0.0175){
                            active_projectiles[i].is_player=true;
                            active_projectiles[i].vx=-active_projectiles[i].vx;
                            active_projectiles[i].vy=-active_projectiles[i].vy;
                        }
                    }
                    return false;
                },
                "priority":0
            }
        ],
        "cd":100,
        "desc":"可以帮你阻挡射线。</br>cd:1s atk:10935 hp:21870 reflect:1.75%（每0.01秒）",
        "forge_factor":1.25
    },
    "Pb-8":{
        "atk":32805,
        "hp":65610,
        "srad":[
            {
                "cond":function(){
                    for(var i=0;i<active_projectiles.length;i++){
                        if(active_projectiles[i].is_player)continue;
                        if((active_projectiles[i].x-x)**2+(active_projectiles[i].y-y)**2>=22500)continue;
                        if(Math.random()<0.02){
                            active_projectiles[i].is_player=true;
                            active_projectiles[i].vx=-active_projectiles[i].vx;
                            active_projectiles[i].vy=-active_projectiles[i].vy;
                        }
                    }
                    return false;
                },
                "priority":0
            }
        ],
        "cd":100,
        "desc":"可以帮你阻挡射线。</br>cd:1s atk:32805 hp:65610 reflect:2%（每0.01秒）",
        "forge_factor":1.25
    },
    "²³⁹Pu-0":{
        "atk":8,
        "hp":5,
        "srad":[
            {
                "cond":function(){
                    if(curtick%100!=0)return false;
                    if(tgt_radius!=150)return false;
                    var nearest=0;
                    if(!active_mobs.length)return false;
                    for(var i=1;i<active_mobs.length;i++){
                        if((active_mobs[i].x-x)**2+(active_mobs[i].y-y)**2<(active_mobs[nearest].x-x)**2+(active_mobs[nearest].y-y)**2)nearest=i;
                    }
                    active_projectiles.push({
                        "lvl":0,
                        "name":"n",
                        "atk":4*petaldmgfactor,
                        "is_player":true,
                        "life":1000,
                        "x":x,
                        "y":y,
                        "vx":3*Math.sin(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y)),
                        "vy":3*Math.cos(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y))
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"射速稍微快亿点点的放射性物质</br>cd:1s atk:8 hp:5 发射：n（cd:1s atk:4 vel:3）",
        "forge_factor":2
    },
    "²³⁹Pu-1":{
        "atk":24,
        "hp":15,
        "srad":[
            {
                "cond":function(){
                    if(curtick%100!=0)return false;
                    if(tgt_radius!=150)return false;
                    var nearest=0;
                    if(!active_mobs.length)return false;
                    for(var i=1;i<active_mobs.length;i++){
                        if((active_mobs[i].x-x)**2+(active_mobs[i].y-y)**2<(active_mobs[nearest].x-x)**2+(active_mobs[nearest].y-y)**2)nearest=i;
                    }
                    active_projectiles.push({
                        "lvl":1,
                        "name":"n",
                        "atk":12*petaldmgfactor,
                        "is_player":true,
                        "life":1000,
                        "x":x,
                        "y":y,
                        "vx":3*Math.sin(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y)),
                        "vy":3*Math.cos(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y))
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"射速稍微快亿点点的放射性物质</br>cd:1s atk:24 hp:15 发射：n（cd:1s atk:12 vel:3）",
        "forge_factor":2
    },
    "²³⁹Pu-2":{
        "atk":72,
        "hp":45,
        "srad":[
            {
                "cond":function(){
                    if(curtick%100!=0)return false;
                    if(tgt_radius!=150)return false;
                    var nearest=0;
                    if(!active_mobs.length)return false;
                    for(var i=1;i<active_mobs.length;i++){
                        if((active_mobs[i].x-x)**2+(active_mobs[i].y-y)**2<(active_mobs[nearest].x-x)**2+(active_mobs[nearest].y-y)**2)nearest=i;
                    }
                    active_projectiles.push({
                        "lvl":2,
                        "name":"n",
                        "atk":12*petaldmgfactor,
                        "is_player":true,
                        "life":1000,
                        "x":x,
                        "y":y,
                        "vx":3*Math.sin(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y)),
                        "vy":3*Math.cos(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y))
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"射速稍微快亿点点的放射性物质</br>cd:1s atk:24 hp:15 发射：n（cd:1s atk:12 vel:3）",
        "forge_factor":2
    },
    "²³⁹Pu-3":{
        "atk":216,
        "hp":135,
        "srad":[
            {
                "cond":function(){
                    if(curtick%100!=0)return false;
                    if(tgt_radius!=150)return false;
                    var nearest=0;
                    if(!active_mobs.length)return false;
                    for(var i=1;i<active_mobs.length;i++){
                        if((active_mobs[i].x-x)**2+(active_mobs[i].y-y)**2<(active_mobs[nearest].x-x)**2+(active_mobs[nearest].y-y)**2)nearest=i;
                    }
                    active_projectiles.push({
                        "lvl":3,
                        "name":"n",
                        "atk":72*petaldmgfactor,
                        "is_player":true,
                        "life":1000,
                        "x":x,
                        "y":y,
                        "vx":3*Math.sin(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y)),
                        "vy":3*Math.cos(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y))
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"射速稍微快亿点点的放射性物质</br>cd:1s atk:216 hp:135 发射：n（cd:1s atk:72 vel:3）",
        "forge_factor":2
    },
    "²³⁹Pu-4":{
        "atk":648,
        "hp":405,
        "srad":[
            {
                "cond":function(){
                    if(curtick%100!=0)return false;
                    if(tgt_radius!=150)return false;
                    var nearest=0;
                    if(!active_mobs.length)return false;
                    for(var i=1;i<active_mobs.length;i++){
                        if((active_mobs[i].x-x)**2+(active_mobs[i].y-y)**2<(active_mobs[nearest].x-x)**2+(active_mobs[nearest].y-y)**2)nearest=i;
                    }
                    active_projectiles.push({
                        "lvl":4,
                        "name":"n",
                        "atk":216*petaldmgfactor,
                        "is_player":true,
                        "life":1000,
                        "x":x,
                        "y":y,
                        "vx":3*Math.sin(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y)),
                        "vy":3*Math.cos(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y))
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"射速稍微快亿点点的放射性物质</br>cd:1s atk:648 hp:405 发射：n（cd:1s atk:216 vel:3）",
        "forge_factor":2
    },
    "²³⁹Pu-5":{
        "atk":1944,
        "hp":1215,
        "srad":[
            {
                "cond":function(){
                    if(curtick%100!=0)return false;
                    if(tgt_radius!=150)return false;
                    var nearest=0;
                    if(!active_mobs.length)return false;
                    for(var i=1;i<active_mobs.length;i++){
                        if((active_mobs[i].x-x)**2+(active_mobs[i].y-y)**2<(active_mobs[nearest].x-x)**2+(active_mobs[nearest].y-y)**2)nearest=i;
                    }
                    active_projectiles.push({
                        "lvl":5,
                        "name":"n",
                        "atk":648*petaldmgfactor,
                        "is_player":true,
                        "life":1000,
                        "x":x,
                        "y":y,
                        "vx":3*Math.sin(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y)),
                        "vy":3*Math.cos(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y))
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"射速稍微快亿点点的放射性物质</br>cd:1s atk:1944 hp:1215 发射：n（cd:1s atk:648 vel:3）",
        "forge_factor":2
    },
    "²³⁹Pu-6":{
        "atk":5832,
        "hp":3645,
        "srad":[
            {
                "cond":function(){
                    if(curtick%100!=0)return false;
                    if(tgt_radius!=150)return false;
                    var nearest=0;
                    if(!active_mobs.length)return false;
                    for(var i=1;i<active_mobs.length;i++){
                        if((active_mobs[i].x-x)**2+(active_mobs[i].y-y)**2<(active_mobs[nearest].x-x)**2+(active_mobs[nearest].y-y)**2)nearest=i;
                    }
                    active_projectiles.push({
                        "lvl":6,
                        "name":"n",
                        "atk":1944*petaldmgfactor,
                        "is_player":true,
                        "life":1000,
                        "x":x,
                        "y":y,
                        "vx":3*Math.sin(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y)),
                        "vy":3*Math.cos(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y))
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"射速稍微快亿点点的放射性物质</br>cd:1s atk:5832 hp:3645 发射：n（cd:1s atk:1944 vel:3）",
        "forge_factor":2
    },
    "²³⁹Pu-7":{
        "atk":17496,
        "hp":10935,
        "srad":[
            {
                "cond":function(){
                    if(curtick%100!=0)return false;
                    if(tgt_radius!=150)return false;
                    var nearest=0;
                    if(!active_mobs.length)return false;
                    for(var i=1;i<active_mobs.length;i++){
                        if((active_mobs[i].x-x)**2+(active_mobs[i].y-y)**2<(active_mobs[nearest].x-x)**2+(active_mobs[nearest].y-y)**2)nearest=i;
                    }
                    active_projectiles.push({
                        "lvl":7,
                        "name":"n",
                        "atk":5832*petaldmgfactor,
                        "is_player":true,
                        "life":1000,
                        "x":x,
                        "y":y,
                        "vx":3*Math.sin(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y)),
                        "vy":3*Math.cos(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y))
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"射速稍微快亿点点的放射性物质</br>cd:1s atk:17496 hp:10935 发射：n（cd:1s atk:5832 vel:3）",
        "forge_factor":2
    },
    "²³⁹Pu-8":{
        "atk":52488,
        "hp":32805,
        "srad":[
            {
                "cond":function(){
                    if(curtick%100!=0)return false;
                    if(tgt_radius!=150)return false;
                    var nearest=0;
                    if(!active_mobs.length)return false;
                    for(var i=1;i<active_mobs.length;i++){
                        if((active_mobs[i].x-x)**2+(active_mobs[i].y-y)**2<(active_mobs[nearest].x-x)**2+(active_mobs[nearest].y-y)**2)nearest=i;
                    }
                    active_projectiles.push({
                        "lvl":8,
                        "name":"n",
                        "atk":17496*petaldmgfactor,
                        "is_player":true,
                        "life":1000,
                        "x":x,
                        "y":y,
                        "vx":3*Math.sin(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y)),
                        "vy":3*Math.cos(Math.atan2(active_mobs[nearest].x-x,active_mobs[nearest].y-y))
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"射速稍微快亿点点的放射性物质</br>cd:1s atk:52488 hp:32805 发射：n（cd:1s atk:17496 vel:3）",
        "forge_factor":2
    },
    "¹³⁷Cs-0":{
        "atk":10,
        "hp":5,
        "srad":[
            {
                "cond":function(){
                    if(curtick%300!=0)return false;
                    if(tgt_radius!=150)return false;
                    for(var i=0;i<10;i++){
                        var dir=Math.random()*Math.PI*2;
                        active_projectiles.push({
                            "lvl":0,
                            "name":"γ",
                            "atk":30*petaldmgfactor,
                            "is_player":true,
                            "life":1000,
                            "x":x,
                            "y":y,
                            "vx":3*Math.sin(dir),
                            "vy":3*Math.cos(dir)
                        });
                    }
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"略<br>atk:10 hp:5 发射：γ（10 个/3 秒 atk:30 vel:3）",
        "forge_factor":1.5
    },
    "¹³⁷Cs-1":{
        "atk":30,
        "hp":15,
        "srad":[
            {
                "cond":function(){
                    if(curtick%300!=0)return false;
                    if(tgt_radius!=150)return false;
                    for(var i=0;i<10;i++){
                        var dir=Math.random()*Math.PI*2;
                        active_projectiles.push({
                            "lvl":1,
                            "name":"γ",
                            "atk":90*petaldmgfactor,
                            "is_player":true,
                            "life":1000,
                            "x":x,
                            "y":y,
                            "vx":3*Math.sin(dir),
                            "vy":3*Math.cos(dir)
                        });
                    }
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"略<br>atk:30 hp:15 发射：γ（10 个/3 秒 atk:90 vel:3）",
        "forge_factor":1.5
    },
    "¹³⁷Cs-2":{
        "atk":90,
        "hp":45,
        "srad":[
            {
                "cond":function(){
                    if(curtick%300!=0)return false;
                    if(tgt_radius!=150)return false;
                    for(var i=0;i<10;i++){
                        var dir=Math.random()*Math.PI*2;
                        active_projectiles.push({
                            "lvl":2,
                            "name":"γ",
                            "atk":270*petaldmgfactor,
                            "is_player":true,
                            "life":1000,
                            "x":x,
                            "y":y,
                            "vx":3*Math.sin(dir),
                            "vy":3*Math.cos(dir)
                        });
                    }
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"略<br>atk:90 hp:45 发射：γ（10 个/3 秒 atk:270 vel:3）",
        "forge_factor":1.5
    },
    "¹³⁷Cs-3":{
        "atk":270,
        "hp":135,
        "srad":[
            {
                "cond":function(){
                    if(curtick%300!=0)return false;
                    if(tgt_radius!=150)return false;
                    for(var i=0;i<10;i++){
                        var dir=Math.random()*Math.PI*2;
                        active_projectiles.push({
                            "lvl":3,
                            "name":"γ",
                            "atk":810*petaldmgfactor,
                            "is_player":true,
                            "life":1000,
                            "x":x,
                            "y":y,
                            "vx":3*Math.sin(dir),
                            "vy":3*Math.cos(dir)
                        });
                    }
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"略<br>atk:270 hp:135 发射：γ（10 个/3 秒 atk:810 vel:3）",
        "forge_factor":1.5
    },
    "¹³⁷Cs-4":{
        "atk":810,
        "hp":405,
        "srad":[
            {
                "cond":function(){
                    if(curtick%300!=0)return false;
                    if(tgt_radius!=150)return false;
                    for(var i=0;i<10;i++){
                        var dir=Math.random()*Math.PI*2;
                        active_projectiles.push({
                            "lvl":4,
                            "name":"γ",
                            "atk":2430*petaldmgfactor,
                            "is_player":true,
                            "life":1000,
                            "x":x,
                            "y":y,
                            "vx":3*Math.sin(dir),
                            "vy":3*Math.cos(dir)
                        });
                    }
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"略<br>atk:810 hp:405 发射：γ（10 个/3 秒 atk:2430 vel:3）",
        "forge_factor":1.5
    },
    "¹³⁷Cs-5":{
        "atk":2430,
        "hp":1215,
        "srad":[
            {
                "cond":function(){
                    if(curtick%300!=0)return false;
                    if(tgt_radius!=150)return false;
                    for(var i=0;i<10;i++){
                        var dir=Math.random()*Math.PI*2;
                        active_projectiles.push({
                            "lvl":5,
                            "name":"γ",
                            "atk":7290*petaldmgfactor,
                            "is_player":true,
                            "life":1000,
                            "x":x,
                            "y":y,
                            "vx":3*Math.sin(dir),
                            "vy":3*Math.cos(dir)
                        });
                    }
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"略<br>atk:2430 hp:1215 发射：γ（10 个/3 秒 atk:7290 vel:3）",
        "forge_factor":1.5
    },
    "¹³⁷Cs-6":{
        "atk":7290,
        "hp":3645,
        "srad":[
            {
                "cond":function(){
                    if(curtick%300!=0)return false;
                    if(tgt_radius!=150)return false;
                    for(var i=0;i<10;i++){
                        var dir=Math.random()*Math.PI*2;
                        active_projectiles.push({
                            "lvl":6,
                            "name":"γ",
                            "atk":21870*petaldmgfactor,
                            "is_player":true,
                            "life":1000,
                            "x":x,
                            "y":y,
                            "vx":3*Math.sin(dir),
                            "vy":3*Math.cos(dir)
                        });
                    }
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"略<br>atk:7290 hp:3645 发射：γ（10 个/3 秒 atk:21870 vel:3）",
        "forge_factor":1.5
    },
    "¹³⁷Cs-7":{
        "atk":21870,
        "hp":10935,
        "srad":[
            {
                "cond":function(){
                    if(curtick%300!=0)return false;
                    if(tgt_radius!=150)return false;
                    for(var i=0;i<10;i++){
                        var dir=Math.random()*Math.PI*2;
                        active_projectiles.push({
                            "lvl":7,
                            "name":"γ",
                            "atk":65610*petaldmgfactor,
                            "is_player":true,
                            "life":1000,
                            "x":x,
                            "y":y,
                            "vx":3*Math.sin(dir),
                            "vy":3*Math.cos(dir)
                        });
                    }
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"略<br>atk:21870 hp:10935 发射：γ（10 个/3 秒 atk:65610 vel:3）",
        "forge_factor":1.5
    },
    "¹³⁷Cs-8":{
        "atk":65610,
        "hp":32805,
        "srad":[
            {
                "cond":function(){
                    if(curtick%300!=0)return false;
                    if(tgt_radius!=150)return false;
                    for(var i=0;i<10;i++){
                        var dir=Math.random()*Math.PI*2;
                        active_projectiles.push({
                            "lvl":8,
                            "name":"γ",
                            "atk":196830*petaldmgfactor,
                            "is_player":true,
                            "life":1000,
                            "x":x,
                            "y":y,
                            "vx":3*Math.sin(dir),
                            "vy":3*Math.cos(dir)
                        });
                    }
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"略<br>atk:65610 hp:32805 发射：γ（10 个/3 秒 atk:196830 vel:3）",
        "forge_factor":1.5
    },
    "Bi-0":{
        "atk":10,
        "hp":5,
        "srad":[
            {
                "cond":function(){
                    if(curtick%300!=0)return false;
                    if(tgt_radius!=150)return false;
                    active_projectiles.push({
                        "lvl":0,
                        "name":"Tl",
                        "atk":30*petaldmgfactor,
                        "is_player":true,
                        "life":100000,
                        "x":x,
                        "y":y,
                        "vx":0,
                        "vy":0
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"半衰期非常“短”<br>atk:10 hp:5 发射：Tl（cd:3s atk:30 vel:0）",
        "forge_factor":1.5
    },
    "Bi-1":{
        "atk":30,
        "hp":15,
        "srad":[
            {
                "cond":function(){
                    if(curtick%250!=0)return false;
                    if(tgt_radius!=150)return false;
                    active_projectiles.push({
                        "lvl":1,
                        "name":"Tl",
                        "atk":90*petaldmgfactor,
                        "is_player":true,
                        "life":100000,
                        "x":x,
                        "y":y,
                        "vx":0,
                        "vy":0
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"半衰期非常“短”<br>atk:30 hp:15 发射：Tl（cd:2.5s atk:90 vel:0）",
        "forge_factor":1.5
    },
    "Bi-2":{
        "atk":90,
        "hp":45,
        "srad":[
            {
                "cond":function(){
                    if(curtick%225!=0)return false;
                    if(tgt_radius!=150)return false;
                    active_projectiles.push({
                        "lvl":2,
                        "name":"Tl",
                        "atk":270*petaldmgfactor,
                        "is_player":true,
                        "life":100000,
                        "x":x,
                        "y":y,
                        "vx":0,
                        "vy":0
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"半衰期非常“短”<br>atk:90 hp:45 发射：Tl（cd:2.25s atk:270 vel:0）",
        "forge_factor":1.5
    },
    "Bi-3":{
        "atk":270,
        "hp":135,
        "srad":[
            {
                "cond":function(){
                    if(curtick%200!=0)return false;
                    if(tgt_radius!=150)return false;
                    active_projectiles.push({
                        "lvl":3,
                        "name":"Tl",
                        "atk":810*petaldmgfactor,
                        "is_player":true,
                        "life":100000,
                        "x":x,
                        "y":y,
                        "vx":0,
                        "vy":0
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"半衰期非常“短”<br>atk:270 hp:135 发射：Tl（cd:2s atk:810 vel:0）",
        "forge_factor":1.5
    },
    "Bi-4":{
        "atk":810,
        "hp":405,
        "srad":[
            {
                "cond":function(){
                    if(curtick%175!=0)return false;
                    if(tgt_radius!=150)return false;
                    active_projectiles.push({
                        "lvl":4,
                        "name":"Tl",
                        "atk":2430*petaldmgfactor,
                        "is_player":true,
                        "life":100000,
                        "x":x,
                        "y":y,
                        "vx":0,
                        "vy":0
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"半衰期非常“短”<br>atk:810 hp:405 发射：Tl（cd:1.75s atk:2430 vel:0）",
        "forge_factor":1.5
    },
    "Bi-5":{
        "atk":2430,
        "hp":1215,
        "srad":[
            {
                "cond":function(){
                    if(curtick%150!=0)return false;
                    if(tgt_radius!=150)return false;
                    active_projectiles.push({
                        "lvl":5,
                        "name":"Tl",
                        "atk":7290*petaldmgfactor,
                        "is_player":true,
                        "life":100000,
                        "x":x,
                        "y":y,
                        "vx":0,
                        "vy":0
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"半衰期非常“短”<br>atk:2430 hp:1215 发射：Tl（cd:1.5s atk:7290 vel:0）",
        "forge_factor":1.5
    },
    "Bi-6":{
        "atk":7290,
        "hp":3645,
        "srad":[
            {
                "cond":function(){
                    if(curtick%125!=0)return false;
                    if(tgt_radius!=150)return false;
                    active_projectiles.push({
                        "lvl":6,
                        "name":"Tl",
                        "atk":21870*petaldmgfactor,
                        "is_player":true,
                        "life":100000,
                        "x":x,
                        "y":y,
                        "vx":0,
                        "vy":0
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":100,
        "desc":"半衰期非常“短”<br>atk:7290 hp:3645 发射：Tl（cd:1.25s atk:21870 vel:0）",
        "forge_factor":1.5
    },
    "Bi-7":{
        "atk":21870,
        "hp":10935,
        "srad":[
            {
                "cond":function(){
                    if(curtick%100!=0)return false;
                    if(tgt_radius!=150)return false;
                    active_projectiles.push({
                        "lvl":7,
                        "name":"Tl",
                        "atk":65610*petaldmgfactor,
                        "is_player":true,
                        "life":100000,
                        "x":x,
                        "y":y,
                        "vx":0,
                        "vy":0
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":0,
        "desc":"半衰期非常“短”<br>atk:21870 hp:10935 发射：Tl（cd:1s atk:65610 vel:0）",
        "forge_factor":1.5
    },
    "Bi-8":{
        "atk":65610,
        "hp":32805,
        "srad":[
            {
                "cond":function(){
                    if(curtick%50!=0)return false;
                    if(tgt_radius!=150)return false;
                    active_projectiles.push({
                        "lvl":8,
                        "name":"Tl",
                        "atk":196830*petaldmgfactor,
                        "is_player":true,
                        "life":100000,
                        "x":x,
                        "y":y,
                        "vx":0,
                        "vy":0
                    });
                    return true;
                },
                "rad":0,
                "vel":1,
                "die":true,
                "heal":0,
                "priority":1
            }
        ],
        "cd":0,
        "desc":"半衰期非常“短”<br>atk:65610 hp:32805 发射：Tl（cd:0.5s atk:196830 vel:0）",
        "forge_factor":1.5
    },
    "D₂O-0":{
        "atk":5,
        "hp":10,
        "srad":[
            {
                "cond":function(){
                    for(var i=0;i<active_projectiles.length;i++){
                        if(active_projectiles[i].is_player)continue;
                        if((active_projectiles[i].x-x)**2+(active_projectiles[i].y-y)**2>=22500)continue;
                        active_projectiles[i].vx*=0.995;
                        active_projectiles[i].vy*=0.995;
                    }
                    return false;
                },
                "priority":0
            }
        ],
        "cd":100,
        "desc":"一氧化二氢......？等等，确实是一氧化二氢。</br>cd:1s atk:5 hp:10 减慢发射物速度（-0.5%/tick）",
        "forge_factor":1.25
    },
    "D₂O-1":{
        "atk":15,
        "hp":30,
        "srad":[
            {
                "cond":function(){
                    for(var i=0;i<active_projectiles.length;i++){
                        if(active_projectiles[i].is_player)continue;
                        if((active_projectiles[i].x-x)**2+(active_projectiles[i].y-y)**2>=22500)continue;
                        active_projectiles[i].vx*=0.9945;
                        active_projectiles[i].vy*=0.9945;
                    }
                    return false;
                },
                "priority":0
            }
        ],
        "cd":100,
        "desc":"一氧化二氢......？等等，确实是一氧化二氢。</br>cd:1s atk:15 hp:30 减慢发射物速度（-0.55%/tick）",
        "forge_factor":1.25
    },
    "D₂O-2":{
        "atk":45,
        "hp":90,
        "srad":[
            {
                "cond":function(){
                    for(var i=0;i<active_projectiles.length;i++){
                        if(active_projectiles[i].is_player)continue;
                        if((active_projectiles[i].x-x)**2+(active_projectiles[i].y-y)**2>=22500)continue;
                        active_projectiles[i].vx*=0.994;
                        active_projectiles[i].vy*=0.994;
                    }
                    return false;
                },
                "priority":0
            }
        ],
        "cd":100,
        "desc":"一氧化二氢......？等等，确实是一氧化二氢。</br>cd:1s atk:45 hp:120 减慢发射物速度（-0.6%/tick）",
        "forge_factor":1.25
    },
    "D₂O-3":{
        "atk":135,
        "hp":270,
        "srad":[
            {
                "cond":function(){
                    for(var i=0;i<active_projectiles.length;i++){
                        if(active_projectiles[i].is_player)continue;
                        if((active_projectiles[i].x-x)**2+(active_projectiles[i].y-y)**2>=22500)continue;
                        active_projectiles[i].vx*=0.9935;
                        active_projectiles[i].vy*=0.9935;
                    }
                    return false;
                },
                "priority":0
            }
        ],
        "cd":100,
        "desc":"一氧化二氢......？等等，确实是一氧化二氢。</br>cd:1s atk:135 hp:270 减慢发射物速度（-0.65%/tick）",
        "forge_factor":1.25
    },
    "D₂O-4":{
        "atk":405,
        "hp":810,
        "srad":[
            {
                "cond":function(){
                    for(var i=0;i<active_projectiles.length;i++){
                        if(active_projectiles[i].is_player)continue;
                        if((active_projectiles[i].x-x)**2+(active_projectiles[i].y-y)**2>=22500)continue;
                        active_projectiles[i].vx*=0.993;
                        active_projectiles[i].vy*=0.993;
                    }
                    return false;
                },
                "priority":0
            }
        ],
        "cd":100,
        "desc":"一氧化二氢......？等等，确实是一氧化二氢。</br>cd:1s atk:405 hp:810 减慢发射物速度（-0.7%/tick）",
        "forge_factor":1.25
    },
    "D₂O-5":{
        "atk":1215,
        "hp":2430,
        "srad":[
            {
                "cond":function(){
                    for(var i=0;i<active_projectiles.length;i++){
                        if(active_projectiles[i].is_player)continue;
                        if((active_projectiles[i].x-x)**2+(active_projectiles[i].y-y)**2>=22500)continue;
                        active_projectiles[i].vx*=0.9925;
                        active_projectiles[i].vy*=0.9925;
                    }
                    return false;
                },
                "priority":0
            }
        ],
        "cd":100,
        "desc":"一氧化二氢......？等等，确实是一氧化二氢。</br>cd:1s atk:1215 hp:2430 减慢发射物速度（-0.75%/tick）",
        "forge_factor":1.25
    },
    "D₂O-6":{
        "atk":3645,
        "hp":7290,
        "srad":[
            {
                "cond":function(){
                    for(var i=0;i<active_projectiles.length;i++){
                        if(active_projectiles[i].is_player)continue;
                        if((active_projectiles[i].x-x)**2+(active_projectiles[i].y-y)**2>=22500)continue;
                        active_projectiles[i].vx*=0.992;
                        active_projectiles[i].vy*=0.992;
                    }
                    return false;
                },
                "priority":0
            }
        ],
        "cd":100,
        "desc":"一氧化二氢......？等等，确实是一氧化二氢。</br>cd:1s atk:3645 hp:7290 减慢发射物速度（-0.8%/tick）",
        "forge_factor":1.25
    },
    "D₂O-7":{
        "atk":10935,
        "hp":21870,
        "srad":[
            {
                "cond":function(){
                    for(var i=0;i<active_projectiles.length;i++){
                        if(active_projectiles[i].is_player)continue;
                        if((active_projectiles[i].x-x)**2+(active_projectiles[i].y-y)**2>=22500)continue;
                        active_projectiles[i].vx*=0.9915;
                        active_projectiles[i].vy*=0.9915;
                    }
                    return false;
                },
                "priority":0
            }
        ],
        "cd":100,
        "desc":"一氧化二氢......？等等，确实是一氧化二氢。</br>cd:1s atk:10935 hp:21870 减慢发射物速度（-0.85%/tick）",
        "forge_factor":1.25
    },
    "D₂O-8":{
        "atk":32805,
        "hp":65610,
        "srad":[
            {
                "cond":function(){
                    for(var i=0;i<active_projectiles.length;i++){
                        if(active_projectiles[i].is_player)continue;
                        if((active_projectiles[i].x-x)**2+(active_projectiles[i].y-y)**2>=22500)continue;
                        active_projectiles[i].vx*=0.91;
                        active_projectiles[i].vy*=0.91;
                    }
                    return false;
                },
                "priority":0
            }
        ],
        "cd":100,
        "desc":"一氧化二氢......？等等，确实是一氧化二氢。</br>cd:1s atk:32805 hp:65610 减慢发射物速度（-0.9%/tick）",
        "forge_factor":1.25
    },
	"Uue-0":{
		"atk":0,
		"hp":0,
		"srad":[],
		"cd":0,
		"desc":"这个东西没有意义"
	},
	"Uue-1":{
		"atk":0,
		"hp":0,
		"srad":[],
		"desc":"这个意义没有东西"
	},
	"Uue-2":{
		"atk":0,
		"hp":0,
		"srad":[],
		"desc":"这个没意义有东西"
	},
	"Uue-3":{
		"atk":0,
		"hp":0,
		"srad":[],
		"desc":"个这东西有意义没"
	},
	"Uue-4":{
		"atk":0,
		"hp":0,
		"srad":[],
		"desc":"这西东个没意有义"
	},
	"Uue-5":{
		"atk":0,
		"hp":0,
		"srad":[],
		"desc":"这没西东意有个义"
	},
	"Uue-6":{
		"atk":0,
		"hp":0,
		"srad":[],
		"desc":"义意有没西东个这"
	},
	"Uue-7":{
		"atk":0,
		"hp":0,
		"srad":[],
		"desc":"#无限猴子定理 #宇宙终将毁灭 #亚硝酸"
	},
	"Uue-8":{
		"atk":0,
		"hp":0,
		"srad":[
			{
				"priority":0,
				"cond":function(){if(mapid!=4){mapid=4;x=maps[mapid].spawnX;y=maps[mapid].spawnY;}}
			}
		],
		"desc":"可能会将你带到某个神奇的地方",
		"cd":100
	}
};
