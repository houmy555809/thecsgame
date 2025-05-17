var achievements={
    0:{
        "cond":function(){return mapid==2;},
        "title":"教程",
        "desc":"欢迎来到 cs.html。",
        "time":200
    },
    1:{
        "cond":function(){return mapid==2;},
        "title":"教程",
        "desc":"现在进行新手教程。",
        "time":200
    },
    2:{
        "cond":function(){return mapid==2;},
        "title":"教程",
        "desc":"按 W/A/S/D 分别可以 上/左/下/右 移动。",
        "time":1000
    },
    3:{
        "cond":function(){return mapid==2&&x!=maps[mapid].spawnX&&y!=maps[mapid].spawnY;},
        "title":"教程",
        "desc":"非常好。按空格键可以增加花瓣的旋转半径。",
        "time":1000
    },
    4:{
        "cond":function(){
            var petal_num=0;
            for(var i=0;i<inventory_petal_num.length;i++){
                for(var j=0;j<9;j++){
                    petal_num+=inventory_petal_num[i][j];
                }
            }
            return mapid==2&&petal_num!=1;
        },
        "title":"教程",
        "desc":"你刚才获得了一个花瓣。按 E 打开物品栏。在物品栏里面可以用上/下/左/右键选择。",
        "time":1000
    },
    5:{
        "cond":function(){return mapid==2&&disp_inventory;},
        "title":"教程",
        "desc":"好。你可以按 1/2/3/4/5 替换掉对应位置的花瓣。",
        "time":1000
    },
    6:{
        "cond":function(){return achievements_unlocked[5];},
        "title":"教程",
        "desc":"继续打怪，打怪会涨经验值，经验值可以在左上角看到。",
        "time":1000
    },
    7:{
        "cond":function(){return lvl!=5;},
        "title":"教程",
        "desc":"你刚才升了一级，获得了一个新的槽位。",
        "time":1000
    },
    8:{
        "cond":function(){return achievements_unlocked[6]&&achievements_unlocked[7];},
        "title":"教程",
        "desc":"很好，你完成了新手教程。继续冒险吧",
        "time":1000
    },
    9:{
        "cond":function(){return mapid!=2;},
        "title":"走上不归路",
        "desc":"从【新手村】进入【主图】",
        "time":500
    },
    10:{
        "cond":function(){return mapid==1;},
        "title":"勇往直......上？",
        "desc":"进入 boss 地图",
        "time":500
    },
    11:{
        "cond":function(){return petalrotfactor>=20;},
        "title":"man!!!",
        "desc":"转速像【直升机】一样快",
        "time":500
    },
    12:{
        "cond":function(){
            var petal_num=0;
            for(var i=0;i<inventory_petal_num.length;i++){
                petal_num+=inventory_petal_num[7];
            }
            return petal_num>0;
        },
        "title":"%%%",
        "desc":"获得一个 super 花瓣",
        "time":500
    },
    13:{
        "cond":function(){
            var petal_num=0;
            for(var i=0;i<inventory_petal_num.length;i++){
                if(inventory_petals[i]!="?")petal_num+=inventory_petal_num[8];
            }
            return petal_num>0;
        },
        "title":"STO ORZ",
        "desc":"获得一个 unique 花瓣",
        "time":500
    },
    14:{
        "cond":function(){return projectile_mob_hit_cnt;},
        "title":"中门对狙",
        "desc":"用远程花瓣杀死怪物",
        "time":500
    },
    15:{
        "cond":function(){return WATER_triggered;},
        "title":"WATER？",
        "desc":"被确诊为 Phigros 玩家",
        "time":500
    },
    16:{
        "cond":function(){return DESTRUCTION321_triggered;},
        "title":"求求你了，不要再爆破了",
        "desc":"被确诊为喜欢爆破他人听力器官的 Phigros 玩家",
        "time":500
    },
    17:{
        "cond":function(){return HOMO_triggered;},
        "title":"%%% NH₃ 之神",
        "desc":"被确诊为【词根，表“相同的”】",
        "time":500
    },
    18:{
        "cond":function(){return craft_history.at(-1)=="?";},
        "title":"神金，害我笑了一下",
        "desc":"尝试合成问号",
        "time":500
    },
    19:{
        "cond":function(){return craft_history.at(-1)=="e⁻";},
        "title":"千里之刑，始于卒下",
        "desc":"合成 e⁻",
        "time":500
    },
    20:{
        "cond":function(){return NeverGonnaGiveYouUp_triggered;},
        "title":"你 被 骗 了",
        "desc":"播放诈骗神曲",
        "time":500
    },
    21:{
        "cond":function(){return MAN_triggered;},
        "title":"What can I say!",
        "desc":"播放坠机曲目",
        "time":500
    },
    114514:{
        "cond":function(){return mapid==3;},
        "title":"结束了？",
        "desc":"进入 boss 战",
        "time":500
    },
    114515:{
        "cond":function(){
            return mapid==3&&curtick>=100&&(!active_mobs.length||active_mobs[0].name!="Fr");
        },
        "title":"结束了。",
        "desc":"战胜 boss",
        "time":500
    },
    1919810:{
        "cond":function(){return mapid==4;},
        "title":"并非结束",
        "desc":"进入最终 boss",
        "time":500
    },
    1919811:{
        "cond":function(){return mapid==4&&curtick>=100&&(!active_mobs.length||active_mobs[0].name!="Uue");},
        "title":"这下真结束了",
        "desc":"战胜最终 boss",
        "time":500
    }
}