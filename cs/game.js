setInterval(function(){
    document.getElementById("colorscheme").innerHTML="切换颜色风格（当前："+cur_color_scheme+"）";
},100);
function toggleColorScheme(){
    if(cur_color_scheme=="classic")cur_color_scheme="florrio";
    else cur_color_scheme="classic";
    lvl_colors=lvl_color_schemes[cur_color_scheme];
}
function $$(id){return document.getElementById(id);}
var hp=496,maxhp=514;
var spawn_immune_cd=200;//2s
var petaldmgfactor=1,petalhpfactor=1;
var tips=[
    "你知道吗，H2=basic，O2=rose，HNO3=stinger，KMnO4=leaf，He=wing",
    "你知道吗，你可以从开发者工具输入作弊代码",
    "默认的旋转半径是60px，按住space可以变成150px",
    "wasd移动，空格键加大旋转半径，按e打开物品栏，上下左右选择，回车合成，1/2/3/4/5装载",
    "这个游戏和某f开头五个字母的游戏相似度非常高",
    "快看，这只巨型 flower 都打了 2147483647 只红 legendary 了，咦，怎么突然消失了。（某音游行为）",
    "宇宙终将毁灭，所以全黑没有意义",
    "1145141919810",
    "知周所众，铋的半衰期 << @H2元素实验室 出一期视频需要的时间 << 周刊写一个字的时间",
    "假设现在有 x 个槽位，那么加一个槽位需要 5*2^x 分数。",
    "你先别急，这不是有本地存档吗？",
    "这个tips成分非常复杂，大家可以在这里找一找某不知名音游的彩蛋",
    "要多赤石，石头能爆各种好东西",
    "wangyuexi ak ioi",
    "No_Rest ak ioi",
    "撸——————",
    "西比西比西比西比",
    "在 ClassIn 讨论群中发 1145141919810 能获赠神秘的东西（请打开云存档）",
    "boss（错）麦子®机关枪（对）",
    "众所不一定周知，Bi 的黄及以上都是 DeepSeek 实现的",
    "【数据删除】玩 hornex",
    "催——————更——————啦——————",
    "加————强————boss————",
    "“int 是 7 位的” ————某赵姓同学",
    "不要的服务器可以到我们这里换绿问号（"
];
var lastDeathX=0,lastDeathY=0;
var active_drop=[];
var active_mobs=[];
var active_projectiles=[];
var player_petals=["H₂","H₂","H₂","H₂","O₂"];
var player_petal_lvl=[0,0,0,0,0];
var player_petal_hp=[50,50,50,50,25];
var player_petal_rad=[60,60,60,60,60];
var player_petal_radtgt=[60,60,60,60,60];
var player_petal_radvel=[0.05,0.05,0.05,0.05,0.05];
var player_petal_die_after_rad=[0,0,0,0,0];
var player_petal_cd=[0,0,0,0,0];
var inventory_petals=["H₂","O₂"];
var inventory_petal_num=[[1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
var inventory_select_x,inventory_select_y;
var lvl_color_schemes={
    "classic":["lightgreen","#fffb00","blue","purple","red","cyan","pink","orange","black"],
    "florrio":["#7EEF6D","#FFE65D","#4D52E3","#861FDE","#DE1F1F","#1FDBDE","#FF2B75","#2BFFA3","black"]
};
var cur_color_scheme="florrio";
lvl_colors=lvl_color_schemes[cur_color_scheme];
var petal_rotation=0;
var radius=60,tgt_radius=60;
var body_atk=50;
var x=1150,y=250;
var width=document.documentElement.clientWidth;
var height=document.documentElement.clientHeight;
var disp_inventory=false;
var curtick=0;
var score=0;
var forge_score=0;
var mapid=2;
var all_maps_active_mobs={};
var all_maps_active_drop={};
var all_maps_active_projectiles={};
var lvl=5;
var movement_speed_factor=1;
var hp_factor=1;
var achievements_unlocked={};
var cur_achievement=0;
var projectile_mob_hit_cnt=0;
var key_history="";
var trigger={
    "6632366366653253":function(){WATER_triggered=true;},
    "2655676576":function(){DESTRUCTION321_triggered=true;},
    "114514":function(){HOMO_triggered=true;},
    "1122235431125":function(){NeverGonnaGiveYouUp_triggered=true;},
    "67863325675221":function(){NeverGonnaGiveYouUp_triggered=true;},
    "35676532212231":function(){MAN_triggered=true;},
    "HELLOWORLD":function(){spawn_immune_cd=6000;}
};
var craft_history=[];

// hidden triggers
var WATER_triggered=false;
var DESTRUCTION321_triggered=false;
var HOMO_triggered=false;
var NeverGonnaGiveYouUp_triggered=false;
var MAN_triggered=false;

setInterval(function(){
    if(hp<0)return;
    for(var i=0;i<Object.keys(achievements).length;i++){
        var key=Object.keys(achievements)[i];
        var data=achievements[key];
        if(!achievements_unlocked[key]&&data.cond()){
            if(!achievements_unlocked.queue)achievements_unlocked.queue=[];
            achievements_unlocked.queue.push({
                "data":data,
                "cd":data.time
            });
            achievements_unlocked[key]="unlocked";
        }
    }
    while(cur_achievement<achievements_unlocked.queue.length&&achievements_unlocked.queue[cur_achievement].cd==0)cur_achievement++;
    if(cur_achievement<achievements_unlocked.queue.length){
        $$("achievement").style.display="block";
        var data=achievements_unlocked.queue[cur_achievement].data;
        $$("achievement").innerHTML=`
        <span style="font-size:20px;">${data.title}</span><br>
        <span style="font-size:10px;">${data.desc}</span>
        `;
        achievements_unlocked.queue[cur_achievement].cd--;
    }else{
        $$("achievement").style.display="none";
    }
},10);
function dump_save_data(){
    var dat=[[mapid],all_maps_active_drop,all_maps_active_mobs,
                player_petals,player_petal_lvl,player_petal_hp,player_petal_rad,player_petal_radtgt,player_petal_radvel,player_petal_die_after_rad,player_petal_cd,
                [disp_inventory],inventory_petals,inventory_petal_num,[inventory_select_x,inventory_select_y],
                [petal_rotation,radius,tgt_radius,body_atk,x,y,hp,maxhp,score,achievements_unlocked,lvl,autosave,cur_color_scheme],
                [all_maps_active_projectiles,WATER_triggered,DESTRUCTION321_triggered,HOMO_triggered,forge_score]];
    return dat;
}
function load_save_data(data){
    // if(data.length!=16&&data.length!=0){
    //     if(confirm("存档数据不完整，是否清除存档？")){
    //         localStorage.removeItem("cs_gamesave");
    //         return;
    //     }
    //     return;
    // }
    mapid                      =data[0][0];
    all_maps_active_drop       =data[1];
    all_maps_active_mobs       =data[2];
    player_petals              =data[3];
    player_petal_lvl           =data[4];
    player_petal_hp            =data[5];
    player_petal_rad           =data[6];
    player_petal_radtgt        =data[7];
    player_petal_radvel        =data[8];
    player_petal_die_after_rad =data[9];
    player_petal_cd            =data[10];
    disp_inventory             =data[11][0];
    inventory_petals           =data[12];
    inventory_petal_num        =data[13];
    inventory_select_x         =data[14][0];
    inventory_select_y         =data[14][1];
    petal_rotation             =data[15][0];
    radius                     =data[15][1];
    tgt_radius                 =data[15][2];
    body_atk                   =data[15][3];
    x                          =data[15][4];
    y                          =data[15][5];
    hp                         =data[15][6];
    maxhp                      =data[15][7];
    score                      =data[15][8];
    achievements_unlocked      =data[15][9]||{};
    lvl                        =data[15][10]||player_petals.length;
    autosave                   =data[15][11]||false;
    cur_color_scheme           =data[15][12]||"classic";
    if(!data[16])data[16]=[];
    all_maps_active_projectiles=data[16][0]||{};
    WATER_triggered            =data[16][1]||false;
    DESTRUCTION321_triggered   =data[16][2]||false;
    HOMO_triggered             =data[16][3]||false;
    forge_score                =data[16][4]||false;
    if(!score)score=0;
    for(var map in Object.keys(all_maps_active_mobs)){
        map=Object.keys(all_maps_active_mobs)[map];
        for(var i=0;i<all_maps_active_mobs[map].length;i++){
            all_maps_active_mobs[map][i].template=mobs[all_maps_active_mobs[map][i].name+'-'+all_maps_active_mobs[map][i].lvl];
            if(all_maps_active_mobs[map][i].hp>all_maps_active_mobs[map][i].template.hp)all_maps_active_mobs[map][i].hp=all_maps_active_mobs[map][i].template.hp;
            if(all_maps_active_mobs[map][i].hp!=all_maps_active_mobs[map][i].hp)all_maps_active_mobs[map][i].hp=all_maps_active_mobs[map][i].template.hp;
        }
    }
    lvl_colors=lvl_color_schemes[cur_color_scheme];
}
setInterval(function(){
    if(!all_maps_active_mobs[mapid]){
        all_maps_active_mobs[mapid]=[];
        all_maps_active_drop[mapid]=[];
    }
    if(!all_maps_active_projectiles[mapid])all_maps_active_projectiles[mapid]=[];
    active_mobs=all_maps_active_mobs[mapid];
    active_drop=all_maps_active_drop[mapid];
    active_projectiles=all_maps_active_projectiles[mapid];
},10);
if(localStorage.getItem("cs_gamesave")){
    load_save_data(eval('('+localStorage.getItem("cs_gamesave")+')'));
}
setInterval(function(){
    localStorage.setItem("cs_gamesave",JSON.stringify(dump_save_data()));
},1000);
$$("player").innerHTML+=`
<div id="sprite" style="top:${height/2-20}px;left:${width/2-20}px;"></div>
`;
$$("player").innerHTML+=`
<div id="hp" style="top:${height/2+30}px;left:${width/2-30}px;"></div>
`;
setInterval(function(){
    $$("tip").innerHTML="tip: "+tips[parseInt(Math.random()*tips.length)];
},5000);
setInterval(function(){
    if(hp<0){
        if($$("dead").style.display=="none"){
            lastDeathX=x;
            lastDeathY=y;
            spawn_immune_cd=200;
        }
        x=maps[mapid].spawnX;
        y=maps[mapid].spawnY;
        $$("dead").style.display="block";
    }
    else $$("dead").style.display="none";
},10);
setInterval(function(){
    if(active_mobs.length>350)return;
    if(disp_inventory)return;
    for(var i=0;i<maps[mapid].spawners.length;i++){
        var data=maps[mapid].spawners[i];
        if(Math.random()<data.prob){
            if(data.cond==undefined||data.cond()){
                var sx=0,sy=0;
                while(data.pos[Math.floor(sx/maps[mapid].gridsize)][Math.floor(sy/maps[mapid].gridsize)]!="O"){
                    sx=Math.random()*maps[mapid].width*maps[mapid].gridsize;
                    sy=Math.random()*maps[mapid].height*maps[mapid].gridsize;
                }
                var lvl=data.lvl[Math.floor(Math.random()*data.lvl.length)];
                var mobid="null";
                var cur=Object.keys(mobs);
                while(!mobs[mobid]||mobs[mobid].tag.indexOf(data.tag)==-1||!mobs[mobid+"-"+lvl]){
                    mobid=cur[Math.floor(Math.random()*cur.length)];
                }
                active_mobs.push({
                    "template":mobs[mobid+"-"+lvl],
                    "name":mobid,
                    "lvl":lvl,
                    "x":sx,
                    "y":sy,
                    "hp":mobs[mobid+"-"+lvl].hp
                });
                console.log("spawned",lvl,mobid);
            }
        }
    }
},1000);
var petalrotfactor=1;
var pickupfactor=1;
setInterval(function(){
    if(!disp_inventory)curtick++;
    if(!disp_inventory)petal_rotation+=0.02*petalrotfactor;
    if(spawn_immune_cd)spawn_immune_cd--;
},10);
setInterval(function(){
    if(spawn_immune_cd)$$("sprite").style.borderColor="lightblue";
    else $$("sprite").style.borderColor="yellow";
    var cur="";
    for(var i=0;i<player_petals.length;i++){
        if(player_petal_cd[i]!=0)continue;
        var petalTheta=(petal_rotation+i*(2*Math.PI)/player_petals.length)%(2*Math.PI);
        var petalTop=height/2+Math.sin(petalTheta)*player_petal_rad[i];
        var petalLeft=width/2+Math.cos(petalTheta)*player_petal_rad[i];
        cur+=`
        <div class="petal" style="top:${petalTop}px;left:${petalLeft}px;color:${lvl_colors[player_petal_lvl[i]]}">${disp_inventory?("["+(i+1)%10+"]"+player_petals[i]):player_petals[i]}</div>
        `;
    }
    $$("petals").innerHTML=cur;
    cur="";
    for(var i=0;i<active_mobs.length;i++){
        if(active_mobs[i].x-x<-height/2||active_mobs[i].x-x>height/2)continue;
        if(active_mobs[i].y-y<-width/2||active_mobs[i].y-y>width/2)continue;
        cur+=`
        <div class="mob" style="top:${active_mobs[i].x-x-20+height/2}px;left:${active_mobs[i].y-y-20+width/2}px;color:black;font-size:40px;">
            ${active_mobs[i].template.asset}
        </div>
        <span style="position:absolute;top:${active_mobs[i].x-x+height/2+35}px;left:${active_mobs[i].y-y-20+width/2}px;font-size:10px;color:${lvl_colors[active_mobs[i].lvl]}">${active_mobs[i].name}</span>
        <div class="mobhp" style="top:${active_mobs[i].x-x+50+height/2}px;left:${active_mobs[i].y-y-30+width/2}px;">
            <div class="mobhpsub" style="width:${active_mobs[i].hp/active_mobs[i].template.hp*60}px"></div>
        </div>
        <span style="position:absolute;top:${active_mobs[i].x-x+height/2+60}px;left:${active_mobs[i].y-y-30+width/2}px;font-size:10px;color:black;">
            ${parseInt(active_mobs[i].hp)}/${parseInt(active_mobs[i].template.hp)}
        </span>
        `;
    }
    $$("mobs").innerHTML=cur;
    cur="";
    for(var i=0;i<active_drop.length;i++){
        if(active_drop[i].x-x<-height/2||active_drop[i].x-x>height/2)continue;
        if(active_drop[i].y-y<-width/2||active_drop[i].y-y>width/2)continue;
        cur+=`
        <div class="petal" style="color:${lvl_colors[active_drop[i].lvl]};background-color:lightgray;top:${active_drop[i].x-x-10+height/2}px;left:${active_drop[i].y-y-10+width/2}px;">${active_drop[i].name}</div>
        `;
    }
    $$("drops").innerHTML=cur;
    cur="";
    for(var i=0;i<active_projectiles.length;i++){
        if(active_projectiles[i].x-x<-height/2||active_projectiles[i].x-x>height/2)continue;
        if(active_projectiles[i].y-y<-width/2||active_projectiles[i].y-y>width/2)continue;
        cur+=`
        <div class="projectile" style="color:${lvl_colors[active_projectiles[i].lvl]};top:${active_projectiles[i].x-x-10+height/2}px;left:${active_projectiles[i].y-y-10+width/2}px;">${active_projectiles[i].name}</div>
        `;
    }
    $$("projectiles").innerHTML=cur;
    cur="";
    var mapWidth=maps[mapid].width;
    var mapHeight=maps[mapid].height;
    var gridsize=maps[mapid].gridsize;
    var tileWidth=200/mapWidth;
    var tileHeight=200/mapHeight;
    var tileSize=Math.min(tileWidth,tileHeight);
    for(var i=0;i<mapWidth;i++){
        for(var j=0;j<mapHeight;j++){
            if(maps[mapid].obstacle[i][j]=="X"){
                cur+=`
                <div class="minimap-tile" style="top:${i*tileSize}px;left:${j*tileSize}px;width:${tileSize}px;height:${tileSize}px;"></div>
                `;
            }
        }
    }
    if(lastDeathX&&lastDeathY){
        cur+=`
        <div class="minimap-last-death" style="top:${lastDeathX/gridsize*tileSize-2}px;left:${lastDeathY/gridsize*tileSize-2}px"></div>
        `;
    }
    cur+=`
    <div class="minimap-player" style="top:${x/gridsize*tileSize-2}px;left:${y/gridsize*tileSize-2}px;"></div>
    `;
    $$("minimap").innerHTML=cur;
    cur="";
    for(var i=0;i<mapWidth;i++){
        for(var j=0;j<mapHeight;j++){
            if(maps[mapid].obstacle[i][j]=="X"){
                cur+=`
                <div class="obstacle" style="top:${i*gridsize-x-20+height/2}px;left:${j*gridsize-y-20+width/2}px;width:${gridsize}px;height:${gridsize}px;"></div>
                `;
            }
        }
    }
    $$("obstacles").innerHTML=cur;
    cur="";
    for(var i=0;i<maps[mapid].teleporters.length;i++){
        var data=maps[mapid].teleporters[i];
        if((data.x-x)**2+(data.y-y)**2<=50**2){
            mapid=data.mapid;
            x=maps[mapid].spawnX;
            y=maps[mapid].spawnY;
            lastDeathX=lastDeathY=0;
            curtick=0;
        }
        cur+=`
        <div class="teleporter" style="top:${data.x-x-25+height/2}px;left:${data.y-y-25+width/2}px;"></div>
        `;
    }
    $$("teleporters").innerHTML=cur;
    cur=`
    <div class="mobhp" style="top:5px;left:5px;">
        <div class="mobhpsub" style="width:${score/(5*2**lvl)*60}px"></div>
    </div>
    <p class="level-text">lvl ${lvl-4}</p>
    `;
    $$("level").innerHTML=cur;
},10);
setInterval(function(){
    $$("hp").innerHTML=`
        <div id="hpsub" style="width:${hp/maxhp*60}px;"></div>
    `;
},10);
function die_petal(id){
    player_petal_cd[id]=petals[player_petals[id]+'-'+player_petal_lvl[id]].cd;
    player_petal_radtgt[id]=tgt_radius;
    player_petal_radvel[id]=0.05;
    player_petal_rad[id]=radius;
    player_petal_die_after_rad[id]=false;
    player_petal_hp[id]=petals[player_petals[id]+'-'+player_petal_lvl[id]].hp;
}
function newSlot(){
    player_petals.push("?");
    player_petal_cd.push(0);
    if(Math.random()<0.01)player_petal_lvl.push(0);
    else player_petal_lvl.push(8);
    player_petal_hp.push(0);
    player_petal_radtgt.push(0);
    player_petal_radvel.push(0);
    player_petal_rad.push(0);
    player_petal_die_after_rad.push(0);
}
setInterval(function(){
    if(score>=5*2**lvl){
        score-=5*2**lvl;
        if(player_petals.length<10)newSlot();
        maxhp*=1.5;
        body_atk*=1.5;
        lvl++;
    }
},200);
setInterval(function(){
    if(disp_inventory)return false;
    for(var i=0;i<active_mobs.length;i++){
        var mobx=active_mobs[i].x,moby=active_mobs[i].y;
        if((mobx-x)**2+(moby-y)**2>(width/2)**2)continue;
        var ox=active_mobs[i].x,oy=active_mobs[i].y;
        active_mobs[i].x-=active_mobs[i].template.vel*Math.sin(Math.atan2(mobx-x,moby-y));
        active_mobs[i].y-=active_mobs[i].template.vel*Math.cos(Math.atan2(mobx-x,moby-y));
        // if((mobx-x)**2+(moby-y)**2>()**2)continue;
        for(var j=0;j<active_mobs[i].template.gen.length;j++){
            var dat=active_mobs[i].template.gen[j];
            if(curtick%dat.cd==0){
                active_projectiles.push({
                    "lvl":dat.lvl,
                    "name":dat.name,
                    "atk":dat.atk,
                    "is_player":false,
                    "life":dat.life,
                    "x":active_mobs[i].x,
                    "y":active_mobs[i].y,
                    "vx":-dat.vel*Math.sin(Math.atan2(mobx-x,moby-y)+(dat.delta||0)),
                    "vy":-dat.vel*Math.cos(Math.atan2(mobx-x,moby-y)+(dat.delta||0)),
                    "cust_movement_func":dat.cust_movement_func
                });
            }
        }
        if(maps[mapid].obstacle[Math.floor(active_mobs[i].x/maps[mapid].gridsize)][Math.floor(active_mobs[i].y/maps[mapid].gridsize)]=="X"){
            active_mobs[i].x=ox;
            active_mobs[i].y=oy;
        }
    }
},10);
setInterval(function(){
    if(disp_inventory)return false;
    if(Math.abs(tgt_radius-radius)>0.1){
        radius=radius*0.95+tgt_radius*0.05;
    }
    petalrotfactor=1;
    petaldmgfactor=1;
    petalhpfactor=1;
    movement_speed_factor=1;
    pickupfactor=1;
    hp_factor=1;
    var srad_priority={};
    srad_priority[-1]=[];
    srad_priority[0]=[];
    srad_priority[1]=[];
    var done_srad=[];
    var petal_heal=[];
    for(var i=0;i<player_petals.length;i++)done_srad.push(false);
    for(var i=0;i<player_petals.length;i++)petal_heal.push(0);
    for(var i=0;i<player_petals.length;i++){
        if(player_petal_cd[i]!=0){
            player_petal_cd[i]--;
            continue;
        }
        var dat=petals[player_petals[i]+"-"+player_petal_lvl[i]];
        for(var j=0;j<dat.srad.length;j++){
            var val=dat.srad[j];
            srad_priority[val.priority].push({"petal":i,"srad":j});
        }
    }
    for(var priority=-1;priority<=1;priority++){
        if(!srad_priority[priority])continue;
        for(var i=0;i<srad_priority[priority].length;i++){
            var petal=srad_priority[priority][i].petal;
            var srad=srad_priority[priority][i].srad;
            if(done_srad[petal])continue;
            var dat=petals[player_petals[petal]+"-"+player_petal_lvl[petal]];
            var special_rad=false;
            var heal=0;
            var val=dat.srad[srad];
            if(val.cond()){
                special_rad=true;
                done_srad[petal]=true;
                player_petal_radtgt[petal]=val.rad;
                player_petal_radvel[petal]=val.vel;
                player_petal_die_after_rad[petal]=val.die;
                heal=val.heal;
                petal_heal[petal]=heal;
                break;
            }
            
        }
    }
    for(var i=0;i<player_petals.length;i++){
        if(!done_srad[i]){
            player_petal_radtgt[i]=tgt_radius;
            player_petal_radvel[i]=0.05;
            player_petal_die_after_rad[i]=false;
        }
    }
    for(var i=0;i<player_petals.length;i++){
        if(Math.abs(player_petal_rad[i]-player_petal_radtgt[i])<0.5){
            if(hp>=0)hp+=petal_heal[i];
            if(player_petal_die_after_rad[i]){
                die_petal(i);
                continue;
            }
        }
        var dat=petals[player_petals[i]+"-"+player_petal_lvl[i]];
        player_petal_rad[i]=(player_petal_rad[i]*(1-player_petal_radvel[i])
                            +player_petal_radtgt[i]*player_petal_radvel[i]);
        if(player_petal_cd[i]==0)player_petal_hp[i]=dat.hp;
    }
    if(hp>maxhp)hp=maxhp;
},10);
setInterval(function(){
    for(var i=0;i<active_drop.length;i++){
        try{
            if((active_drop[i].x-x)**2+(active_drop[i].y-y)**2>1600*pickupfactor*pickupfactor)continue;
            var name=active_drop[i].name;
            if(inventory_petals.indexOf(name)==-1){
                inventory_petals.push(name);
                inventory_petal_num.push([0,0,0,0,0,0,0,0,0]);
            }
            inventory_petal_num[inventory_petals.indexOf(name)][active_drop[i].lvl]++;
            active_drop.splice(i,1);
            i--;
        }catch(e){console.log(e);}
    }
    for(var i=0;i<player_petals.length;i++){
        var curhp=player_petal_hp[i];
        if(player_petal_cd[i])continue;
        var atk=petaldmgfactor*petals[player_petals[i]+'-'+player_petal_lvl[i]].atk;
        var petalTheta=(petal_rotation+i*(2*Math.PI)/player_petals.length)%(2*Math.PI);
        var petalx=x+Math.sin(petalTheta)*player_petal_rad[i];
        var petaly=y+Math.cos(petalTheta)*player_petal_rad[i];
        for(var j=0;j<active_mobs.length;j++){
            try{
                if((active_mobs[j].x-petalx)**2+(active_mobs[j].y-petaly)**2>2500)continue;
                active_mobs[j].hp-=atk;
                curhp-=active_mobs[j].template.atk/petalhpfactor;
                if(active_mobs[j].hp<0){
                    var temp=active_mobs[j];
                    active_mobs.splice(j,1);
                    j--;
                    score+=2**temp.lvl;
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
                if(curhp<0){
                    die_petal(i);
                    break;
                }
            }catch(e){}
        }
        if(curhp<0)continue;
        for(var j=0;j<active_projectiles.length;j++){
            try{
                if(active_projectiles[i].is_player)continue;
                if((active_projectiles[j].x-petalx)**2+(active_projectiles[j].y-petaly)**2>2500)continue;
                active_projectiles.splice(i,1);i--;
                curhp-=active_projectiles[j].atk/petalhpfactor;
                if(curhp<0){
                    die_petal(i);
                    break;
                }
            }catch(e){}
        }
    }
},10);
setInterval(function(){
    if(disp_inventory)return;
    for(var i=0;i<active_projectiles.length;i++){
        try{
            if(active_projectiles[i].life){
                active_projectiles[i].life--;
            }else{
                active_projectiles.splice(i,1);
                i--;
                continue;
            }
            if((active_projectiles[i].x-x)**2+(active_projectiles[i].y-y)**2<=1600&&!active_projectiles[i].is_player&&!spawn_immune_cd){
                hp-=active_projectiles[i].atk;
                active_projectiles.splice(i,1);
                i--;
                continue;
            }
            if(active_projectiles[i].is_player){
                var hitEnemy=false;
                for(var j=0;j<active_mobs.length;j++){
                    try{
                        if((active_mobs[j].x-active_projectiles[i].x)**2+(active_mobs[j].y-active_projectiles[i].y)**2>2500)continue;
                        active_mobs[j].hp-=active_projectiles[i].atk;
                        hitEnemy=true;
                        if(active_mobs[j].hp<0){
                            projectile_mob_hit_cnt++;
                            var temp=active_mobs[j];
                            active_mobs.splice(j,1);
                            j--;
                            score+=2**temp.lvl;
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
                        if(hitEnemy)break;
                    }catch(e){}
                }
                if(hitEnemy){
                    active_projectiles.splice(i,1);
                    i--;
                    continue;
                }
            }
            if(active_projectiles[i].cust_movement_func){
                var target=active_projectiles[i].cust_movement_func(active_projectiles[i]);
                console.log(target);
                active_projectiles[i].x=target.x;
                active_projectiles[i].y=target.y;
                active_projectiles[i].vx=target.vx;
                active_projectiles[i].vy=target.vy;
            }else{
                active_projectiles[i].x+=active_projectiles[i].vx;
                active_projectiles[i].y+=active_projectiles[i].vy;
            }
            if(maps[mapid].obstacle[Math.floor(active_projectiles[i].x/maps[mapid].gridsize)][Math.floor(active_projectiles[i].y/maps[mapid].gridsize)]=="X"){
                active_projectiles.splice(i,1);
                i--;
                continue;
            }
        }catch(e){}
    }
},10);
setInterval(function(){
    if(disp_inventory)return false;
    for(var i=0;i<active_mobs.length;i++){
        try{
            if((active_mobs[i].x-x)**2+(active_mobs[i].y-y)**2>1600)continue;
            if(spawn_immune_cd){
            }else hp-=active_mobs[i].template.atk;
            active_mobs[i].hp-=body_atk;
            if(active_mobs[i].hp<0){
                score+=2**active_mobs[i].lvl;
                for(var j=0;j<active_mobs[i].template.drop.length;j++){
                    if(Math.random()<=active_mobs[i].template.drop[j].prob){
                        var temp=active_mobs[i];
                        active_drop.push({
                            "name":temp.template.drop[j].petal,
                            "lvl":temp.template.drop[j].lvl,
                            "x":temp.x+Math.random()*10,
                            "y":temp.y+Math.random()*10
                        });
                    }
                }
                active_mobs.splice(i,1);
                i--;
            }
        }catch(e){console.log(e);}
    }
},250);
setInterval(function(){
    if(!disp_inventory){
        $$("inventory").style.display="none";
        $$("desc").style.display="none";
        return;
    }
    $$("inventory").style.height=Math.max(inventory_petals.length*25+5,height)+'px';
    $$("inventory").style.display="block";
    $$("desc").style.display="block";
    var cur="";
    for(var i=0;i<inventory_petals.length;i++){
        var s="";
        s+=`
        <div style="top:${i*30+5}px;font-size:20px;left:5px;">${inventory_petals[i]}</div>
        `;
        for(var j=0;j<9;j++){
            var bg='lightyellow';
            if(inventory_petal_num[i][j]==0)bg='grey';
            if(i==inventory_select_x&&j==inventory_select_y){
                bg='lightgrey';
                $$("desc").innerHTML=`
                <div class="petal" style="color:${lvl_colors[j]};font-size:auto;">${inventory_petals[i]}</div>
                <br><br><br><br>
                ${petals[inventory_petals[i]+'-'+j].desc}
                <br><br>
                <hr>
                ${inventory_petal_num[i][j]>=5&&j<8?"[Enter]合成":""}<br><hr>
                ${inventory_petal_num[i][j]&&inventory_petals[i]!='?'?`[c]转化为 ${3**j} 经验`:''}<br><hr>
                ${petals[inventory_petals[i]+'-'+j].forge_factor&&inventory_petal_num[i][j]?`[f]熔炼并获得 ${parseInt(petals[inventory_petals[i]+'-'+j].forge_factor*5**j*0.8+0.5)} 碎片`:''}<br>
                ${(petals[inventory_petals[i]+'-'+j].forge_factor&&forge_score>=petals[inventory_petals[i]+'-'+j].forge_factor*20**j)?`[b]锻造（花费 ${parseInt(petals[inventory_petals[i]+'-'+j].forge_factor*10**j+0.5)} 碎片）`:''}
                `;
            }
            s+=`
            <div class="petal" style="color:${lvl_colors[j]};background-color:${bg};top:${i*30+5}px;left:${j*25+105}px;">x${inventory_petal_num[i][j]}</div>
            `;
        }
        cur+=s;
        cur+="<br>";
    }
    $$("inventory").innerHTML=cur;
},10);
key_stat={}
function add_key(key){
    key_stat[key]=1;
}
function del_key(key){
    key_stat[key]=0;
}
document.onkeydown=function(e){
    add_key(e.keyCode);
    e=e.keyCode;
    var chr=String.fromCharCode(e);
    key_history+=chr;
    for(var i=0;i<Object.keys(trigger).length;i++){
        var target=Object.keys(trigger)[i];
        if(key_history.length<target.length)continue;
        if(key_history.substr(key_history.length-target.length,target.length)==target)trigger[target]();
    }
    if(hp<0&&e==13){
        hp=maxhp;
        for(var i=0;i<player_petals.length;i++){
            die_petal(i);
        }
        return;
    }
    if(e==69){
        disp_inventory=!disp_inventory;
        inventory_select_x=inventory_select_y=0;
    }
    if(e==38){
        if(inventory_select_x==0)return;
        inventory_select_x--;
    }
    if(e==40){
        if(inventory_select_x==inventory_petals.length-1)return;
        inventory_select_x++;
    }
    if(e==37){
        if(inventory_select_y==0)return;
        inventory_select_y--;
    }
    if(e==39){
        if(inventory_select_y==8)return;
        inventory_select_y++;
    }
    if(hp>=0&&disp_inventory&&e==13){
        if(inventory_select_y==8)return;
        if(inventory_petal_num[inventory_select_x][inventory_select_y]<5)return;
        craft_history.push(inventory_petals[inventory_select_x]);
        if(Math.random()<0.66*(0.8)**(inventory_select_y)){
            inventory_petal_num[inventory_select_x][inventory_select_y]-=5;
            inventory_petal_num[inventory_select_x][inventory_select_y+1]++;
        }else{
            inventory_petal_num[inventory_select_x][inventory_select_y]-=Math.floor(Math.random()*4)+1;
        }
    }
    if(disp_inventory&&e>=49&&e<=49+player_petals.length){
        if(inventory_petal_num[inventory_select_x][inventory_select_y]==0)return;
        var slot=e-49;
        if(inventory_petals.indexOf(player_petals[slot])==-1){
            inventory_petals.push(player_petals[slot]);
            inventory_petal_num.push([0,0,0,0,0,0,0,0,0]);
        }
        inventory_petal_num[inventory_petals.indexOf(player_petals[slot])][player_petal_lvl[slot]]++;
        inventory_petal_num[inventory_select_x][inventory_select_y]--;
        player_petals[slot]=inventory_petals[inventory_select_x];
        player_petal_lvl[slot]=inventory_select_y;
        die_petal(slot);
    }
    if(disp_inventory&&e==48&&player_petals.length>=10){
        if(inventory_petal_num[inventory_select_x][inventory_select_y]==0)return;
        var slot=9;
        if(inventory_petals.indexOf(player_petals[slot])==-1){
            inventory_petals.push(player_petals[slot]);
            inventory_petal_num.push([0,0,0,0,0,0,0,0,0]);
        }
        inventory_petal_num[inventory_petals.indexOf(player_petals[slot])][player_petal_lvl[slot]]++;
        inventory_petal_num[inventory_select_x][inventory_select_y]--;
        player_petals[slot]=inventory_petals[inventory_select_x];
        player_petal_lvl[slot]=inventory_select_y;
        die_petal(slot);
    }
    if(disp_inventory&&e==67&&inventory_petals[inventory_select_x]!='?'){
        if(inventory_petal_num[inventory_select_x][inventory_select_y]==0)return;
        score+=3**inventory_select_y;
        inventory_petal_num[inventory_select_x][inventory_select_y]--;
    }
    if(disp_inventory&&e==70){
        if(inventory_petal_num[inventory_select_x][inventory_select_y]==0)return;
        var factor=petals[inventory_petals[inventory_select_x]+'-'+inventory_select_y].forge_factor;
        if(!factor)return;
        forge_score+=parseInt(factor*5**inventory_select_y*0.8)
        inventory_petal_num[inventory_select_x][inventory_select_y]--;
    }
    if(disp_inventory&&e==66){
        var factor=petals[inventory_petals[inventory_select_x]+'-'+inventory_select_y].forge_factor;
        if(!factor)return;
        var cost=factor*10**inventory_select_y;
        if(forge_score<cost)return;
        forge_score-=cost;
        inventory_petal_num[inventory_select_x][inventory_select_y]++;
    }
}
document.onkeyup=function(e){
    var e=e.keyCode;
    del_key(e);
    if(e==32)tgt_radius=60;
}
setInterval(function(){
    var keys=Object.keys(key_stat)
    for(var i=0;i<keys.length;i++){
        if(key_stat[keys[i]])keyListener(keys[i]);
    }
},10);
function keyListener(e){
    if(disp_inventory)return;
    if(e==32)tgt_radius=150;
    if(e==65||e==68||e==87||e==83){
        var ox=x,oy=y;
        if(e==65){
            y-=2*movement_speed_factor;
        }
        if(e==68){
            y+=2*movement_speed_factor;
        }
        if(e==87){
            x-=2*movement_speed_factor;
        }
        if(e==83){
            x+=2*movement_speed_factor;
        }
        if(maps[mapid].obstacle[Math.floor(x/maps[mapid].gridsize)][Math.floor(y/maps[mapid].gridsize)]=="X"){
            x=ox;
            y=oy;
        }
        if(maps[mapid].obstacle[Math.floor(x/maps[mapid].gridsize)][Math.floor(y/maps[mapid].gridsize)]=="X"){
            hp*=0.95;
            hp-=10;
        }
    }
}
