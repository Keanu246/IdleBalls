var width = 1200; 
var height = 900; 
var value = 0; 
var context; 
var level = 1; 
var click = {multi: 1.15,rank: 1, bCost: 10,bDamage:100} 
var baseCostMulti = 1.10; 
var baseHealthMulti = 1.85; 
var startingBalls = 26; 
var balls = [ 
  {active:false,x:200,y:200,dx:.707,dy:.707,color:"#5555ff",radius:20,bDamage:10,rank:0,cost:10,id:0,clone:false,speed:5}, 
  {active:false,x:300,y:300,dx:.707,dy:-.707,color:"#00ff00",radius:20,bDamage:300,rank:0,cost:300,id:1,clone:false,speed:5}, 
  {active:false,x:100,y:100,dx:-.707,dy:.707,color:"#ff0000",radius:20,bDamage:900,rank:0,cost:1800,id:2,clone:false,speed:5}, 
  {active:false,x:400,y:400,dx:-.707,dy:-.707,color:"#ffff00",radius:20,bDamage:2700,rank:0,cost:10800,id:3,clone:false,speed:5}, 
  {active:false,x:900,y:300,dx:-.707,dy:.707,color:"#FFA500",radius:25,bDamage:8100,rank:0,cost:64800,id:4,clone:false,speed:6}, 
  {active:false,x:1000,y:200,dx:-.707,dy:-.707,color:"#800080",radius:25,bDamage:24300,rank:0,cost:388000,id:5,clone:false,speed:6}, 
  {active:false,x:1200,y:300,dx:.707,dy:.707,color:"#00C7D1",radius:25,bDamage:72900,rank:0,cost:2330000,id:6,clone:false,speed:6}, 
  {active:false,x:1100,y:400,dx:-.707,dy:-.707,color:"#EE33A1",radius:25,bDamage:218000,rank:0,cost:13900000,id:7,clone:false,speed:6}, 
  {active:false,x:300,y:500,dx:.707,dy:-.707,color:"#2ED371",radius:30,bDamage:656000,rank:0,cost:83900000,id:8,clone:false,speed:7}, 
  {active:false,x:600,y:200,dx:-.707,dy:.707,color:"#800000",radius:30,bDamage:1960000,rank:0,cost:503000000,id:9,clone:false,speed:7},
  {active:false,x:600,y:200,dx:-.707,dy:.707,color:"#000000",radius:30,bDamage:5900000,rank:0,cost:3020000000,id:10,clone:false,speed:7},
  {active:false,x:800,y:300,dx:-.707,dy:.707,color:"#00FFFF",radius:30,bDamage:17700000,rank:0,cost:18100000000,id:11,clone:false,speed:7},
  {active:false,x:500,y:100,dx:-.707,dy:.707,color:"#00FF00",radius:35,bDamage:53100000,rank:0,cost:108000000000,id:12,clone:false,speed:8},
  {active:false,x:700,y:300,dx:-.707,dy:.707,color:"#C0C0C0",radius:35,bDamage:159000000,rank:0,cost:653000000000,id:13,clone:false,speed:8},
  {active:false,x:900,y:200,dx:-.707,dy:.707,color:"#008080",radius:35,bDamage:478000000,rank:0,cost:3910000000000,id:14,clone:false,speed:8},
  {active:false,x:400,y:200,dx:-.707,dy:.707,color:"#DC143C",radius:35,bDamage:1430000000,rank:0,cost:23500000000000,id:15,clone:false,speed:8},
  {active:false,x:600,y:100,dx:-.707,dy:.707,color:"#FFD700",radius:40,bDamage:4300000000,rank:0,cost:141000000000000,id:16,clone:false,speed:9},
  {active:false,x:1000,y:500,dx:-.707,dy:.707,color:"#EE82EE",radius:40,bDamage:12900000000,rank:0,cost:846000000000000,id:17,clone:false,speed:9},
  {active:false,x:900,y:400,dx:-.707,dy:.707,color:"#A52A2A",radius:40,bDamage:38700000000,rank:0,cost:5070000000000000,id:18,clone:false,speed:9},
  {active:false,x:500,y:300,dx:-.707,dy:.707,color:"#4B0082",radius:40,bDamage:116000000000,rank:0,cost:30400000000000000,id:19,clone:false,speed:9},
  {active:false,x:800,y:200,dx:-.707,dy:.707,color:"#e25822",radius:28,bDamage:1e17,rank:0,cost:1e21,id:20,clone:false,speed:6},
  {active:false,x:600,y:400,dx:-.707,dy:.707,color:"#f7a233",radius:32,bDamage:1e24,rank:0,cost:1e28,id:21,clone:false,speed:7},
  {active:false,x:400,y:100,dx:-.707,dy:.707,color:"#A5F2F3",radius:38,bDamage:1e30,rank:0,cost:1e35,id:22,clone:false,speed:5},
  {active:false,x:1000,y:200,dx:-.707,dy:.707,color:"#61de2a",radius:24,bDamage:1e37,rank:0,cost:1e42,id:23,clone:false,speed:8},
  {active:false,x:1000,y:200,dx:-.707,dy:.707,color:"#ff41ca",radius:18,bDamage:1e46,rank:0,cost:1e52,id:24,clone:false,speed:10},
  {active:false,x:900,y:300,dx:-.707,dy:.707,color:"#FA8072",radius:16,bDamage:1e62,rank:0,cost:1e68,id:25,clone:false,speed:12}
];
var clickBalls = [ 
  {active:false,x:300,y:200,dx:-.707,dy:.707,color:"#666666",radius:25,bDamage:100,rank:1,cost:10,id:100,clone:false,speed:4}, 
  {active:false,x:200,y:200,dx:-.707,dy:.707,color:"#666666",radius:25,bDamage:100,rank:1,cost:10,id:101,clone:false,speed:4}, 
  {active:false,x:500,y:200,dx:-.707,dy:.707,color:"#666666",radius:25,bDamage:100,rank:1,cost:10,id:102,clone:false,speed:4}, 
  {active:false,x:700,y:200,dx:-.707,dy:.707,color:"#666666",radius:25,bDamage:100,rank:1,cost:10,id:103,clone:false,speed:4}, 
  {active:false,x:100,y:200,dx:-.707,dy:.707,color:"#666666",radius:25,bDamage:100,rank:1,cost:10,id:104,clone:false,speed:4} 
] 
var enemies = []; 
var shrink = false; 
var nightMode = false; 
var ballPoints = 0; 
var prestiged = 0; 
var normalWidth = 1200; 
var zoomed = false; 
var pUpgrades = [0,0,0,0,0,0,0,0,0,0,0,0]; 
var pCountMulti = 1; 
var strengthBoost = 10; 
var speedMulti = 1; 
var radiusMulti = 1; 
var animationSpeed = 0; 
var strengthBoostReq = 50; 
var cloneReq = 100; 
var enemyRadiusMulti = 1; 
var ballPointMulti = 1; 
var notationScientfic = false; 
var bondRate = 0.001; 
var exciteRate = 0.001; 
var autoBonds; 
var autoExcites; 
var buy1 = 1;
var buy10 = 10;
var buy100 = 100;
var buymax = 999;
//CPS stuff 
var cps = document.getElementById("cps"); 
var count = 0; 
var numSec = 1; 
var start = 0; 
getCPS(); 
function getCPS() { 
  setTimeout(function() { 
    if(count>=20){ 
      clickBalls[0].active = true; 
      clickBalls[1].active = true; 
      clickBalls[2].active = true; 
      clickBalls[3].active = true; 
      clickBalls[4].active = true; 
    } 
    else if(count>=15){ 
      clickBalls[0].active = true; 
      clickBalls[1].active = true; 
      clickBalls[2].active = true; 
      clickBalls[3].active = true; 
      clickBalls[4].active = false; 
    } 
    else if(count>=10){ 
      clickBalls[0].active = true; 
      clickBalls[1].active = true; 
      clickBalls[2].active = true; 
      clickBalls[3].active = false; 
      clickBalls[4].active = false; 
    } 
    else if(count>=5){ 
      clickBalls[0].active = true; 
      clickBalls[1].active = true; 
      clickBalls[2].active = false; 
      clickBalls[3].active = false; 
      clickBalls[4].active = false; 
    } 
    else if(count>=1){ 
      clickBalls[0].active = true; 
      clickBalls[1].active = false; 
      clickBalls[2].active = false; 
      clickBalls[3].active = false; 
      clickBalls[4].active = false; 
    } 
    else{ 
      clickBalls[0].active = false; 
      clickBalls[1].active = false; 
      clickBalls[2].active = false; 
      clickBalls[3].active = false; 
      clickBalls[4].active = false; 
    } 
    cps.innerHTML = count; 
    count = 0; 
    getCPS(); 
  }, numSec*1000); 
} 
function bond(){ 
  count++; 
  start++; 
} 
function excite(){ 
  for(var e = 0; e<balls.length+clickBalls.length; e++){ 
    if(e>(balls.length-1)){ 
      var eBall = clickBalls[e-balls.length]; 
    } 
    else{ 
      var eBall = balls[e]; 
    } 
    if(eBall.active){ 
      if(Math.abs(eBall.dx)<0.05 || Math.abs(eBall.dy)<0.05){ 
        if(rand(1,100)>50){ 
          eBall.dx=.707; 
        } 
        else{ 
          eBall.dx=-.707; 
        } 
        if(rand(1,100)>50){ 
          eBall.dy=.707; 
        } 
        else{ 
          eBall.dy=-.707; 
        } 
      } 
    } 
  } 
} 
function clickLevel(){ 
  if(value>=Math.floor(click.bCost*Math.pow(click.multi,click.rank))){ 
    value-=Math.floor(click.bCost*Math.pow(click.multi,click.rank)); 
    valueSet(); 
    click.rank++; 
    if(click.rank%strengthBoostReq == 0){ 
      click.bDamage *= 5 * strengthBoost; 
    } 
    for(var y = 0; y < 5;y++){ 
      clickBalls[y].rank = click.rank; 
      clickBalls[y].bDamage = click.bDamage;
    } 
    if(notationScientfic){ 
        document.getElementById("CC").innerHTML = numberformat.format(Math.floor(click.bCost*Math.pow(click.multi,click.rank)),{format: 'scientific'}); 
    } 
    else{ 
        document.getElementById("CC").innerHTML = numberformat.format(Math.floor(click.bCost*Math.pow(click.multi,click.rank))); 
    } 
    document.getElementById("CA").innerHTML = click.rank; 
  } 
} 
function levelBall(id){ 
  var tempBall = balls[id]; 
  strengthBoost = 10+pUpgrades[3]; 
  strengthBoostReq = 50-pUpgrades[2]; 
  cloneReq = 100-pUpgrades[7]; 
  if(value>=Math.floor(tempBall.cost*Math.pow(baseCostMulti,tempBall.rank))){ 
    if(tempBall.rank == 0){ 
      tempBall.active = true; 
      document.getElementById(id+"T").innerHTML = "Upgrade"; 
    } 
    value -= Math.floor(tempBall.cost*Math.pow(baseCostMulti,tempBall.rank)); 
    tempBall.rank += 1; 
    if(tempBall.rank%strengthBoostReq == 0){ 
      tempBall.bDamage *= strengthBoost; 
    } 
    if(tempBall.rank%cloneReq == 0){ 
      balls.push({active:true,x:rand(100,width-100),y:rand(100,height-100),dx:.707,dy:-.707,color:tempBall.color, 
        radius:tempBall.radius,id:tempBall.id,clone:true,speed:tempBall.speed}); 
    } 
    if(buymax){
      tempBall.rank += 999;
      click.rank += 999;
      document.getElementById("buymax").innerHTML = buymax;
    }
    if(notationScientfic){ 
        document.getElementById(id+"C").innerHTML = numberformat.format(Math.floor(tempBall.cost*Math.pow(1.10,tempBall.rank)),{format: 'scientific'}); 
    } 
    else{ 
        document.getElementById(id+"C").innerHTML = numberformat.format(Math.floor(tempBall.cost*Math.pow(1.10,tempBall.rank))); 
    } 
    document.getElementById(id+"A").innerHTML = tempBall.rank; 
    valueSet(); 
  } 
  var deactiveBalls = 0; 
  for(var k = 0; k<startingBalls;k++){ 
    if (balls[k].active == false){ 
      deactiveBalls++; 
    } 
  } 
  pCountMulti = (((Math.floor((balls.length-deactiveBalls)/5))*(0.3*pUpgrades[1]))+1); 
} 
function init(){ 
  context= myCanvas.getContext('2d'); 
  document.getElementById("defaultOpen").click(); 
  var savegame = JSON.parse(localStorage.getItem("save")); 
  if(savegame){ 
    if (typeof savegame.pUpgrades !== "undefined"){ 
      pUpgrades = savegame.pUpgrades; 
      var deactiveBalls = 0; 
      for(var k = 0; k<startingBalls;k++){ 
        if (balls[k].active == false){ 
          deactiveBalls++; 
        } 
      } 
      bondRate = pUpgrades[0]; 
      if(bondRate == 0){ 
        bondRate = 0.01; 
      } 
      pCountMulti = (((Math.floor((balls.length-deactiveBalls)/5))*(0.3*pUpgrades[1]))+1); 
      strengthBoostReq = 50-pUpgrades[2]; 
      strengthBoost = 10+pUpgrades[3]; 
      speedMulti = (0.1*pUpgrades[4])+1; 
      radiusMulti = 1 +(0.1*pUpgrades[5]); 
      exciteRate = pUpgrades[6]; 
      if(exciteRate == 0){ 
        exciteRate = 0.01; 
      } 
      cloneReq = 100-pUpgrades[7]; 
      enemyRadiusMulti = 1 + (0.1 * pUpgrades[9]); 
      ballPointMulti = 1 + (0.1 * pUpgrades[11]); 
      document.getElementById("1p").innerHTML = bondRate; 
      document.getElementById("2p").innerHTML = Math.round(((0.3*pUpgrades[1])+1)*100); 
      document.getElementById("3p").innerHTML = strengthBoostReq; 
      document.getElementById("4p").innerHTML = strengthBoost; 
      document.getElementById("5p").innerHTML = Math.round(100*speedMulti); 
      document.getElementById("6p").innerHTML = Math.round(100*radiusMulti); 
      document.getElementById("7p").innerHTML = exciteRate; 
      document.getElementById("8p").innerHTML = cloneReq; 
      document.getElementById("9p").innerHTML = numberformat.format(10*(Math.pow(10,pUpgrades[8]))); 
      document.getElementById("10p").innerHTML = Math.round(100*enemyRadiusMulti); 
      document.getElementById("11p").innerHTML = 5*pUpgrades[10]; 
      document.getElementById("12p").innerHTML = Math.round(100*ballPointMulti); 
    } 
    if (typeof savegame.nightMode !== "undefined" && savegame.nightMode){ 
      toggleNightMode(); 
    } 
    if (typeof savegame.notation !== "undefined" && savegame.notation){ 
      changeNotation(); 
    } 
    if (typeof savegame.value !== "undefined") value = Math.round(savegame.value); 
    if (typeof savegame.level !== "undefined") level = savegame.level; 
    if (typeof savegame.clickObject !== "undefined"){ 
      click.rank = savegame.clickObject.rank; 
      for(var n = 1; n <= (click.rank/strengthBoostReq); n++){ 
        click.bDamage *= 5*strengthBoost; 
      } 
      for(var y = 0; y < 5;y++){ 
        clickBalls[y].rank = click.rank; 
        clickBalls[y].bDamage = click.bDamage; 
      } 
      if(notationScientfic){ 
          document.getElementById("CC").innerHTML = numberformat.format(Math.floor(click.bCost*Math.pow(click.multi,click.rank)),{format: 'scientific'}); 
      } 
      else{ 
          document.getElementById("CC").innerHTML = numberformat.format(Math.floor(click.bCost*Math.pow(click.multi,click.rank))); 
      } 
      document.getElementById("CA").innerHTML = click.rank; 
    } 
    for(var l = 0; l < startingBalls;l++){ 
      if (typeof savegame.ranks[l] !== "undefined"){ 
        var loadBall = balls[l]; 
        var loadData = savegame.ranks[l]; 
        loadBall.rank = loadData; 
        if(loadData > 0){ 
          loadBall.active = true; 
          document.getElementById(loadBall.id+"T").innerHTML = "Upgrade"; 
        } 
        for(var r = 1; r <= (loadData/strengthBoostReq); r++){ 
          loadBall.bDamage *= strengthBoost; 
        } 
        for(var c = 1; c <= (loadData/100); c++){ 
          balls.push({active:true,x:rand(100,width-100),y:rand(100,height-100),dx:.707,dy:-.707,color:loadBall.color, 
            radius:loadBall.radius,id:loadBall.id,clone:true,speed:loadBall.speed}); 
        } 
        if(notationScientfic){ 
            document.getElementById(loadBall.id+"C").innerHTML = numberformat.format(Math.floor(loadBall.cost*Math.pow(1.10,loadBall.rank)),{format: 'scientific'}); 
        } 
        else{ 
            document.getElementById(loadBall.id+"C").innerHTML = numberformat.format(Math.floor(loadBall.cost*Math.pow(1.10,loadBall.rank))); 
        } 
        document.getElementById(loadBall.id+"A").innerHTML = loadBall.rank; 
      } 
    } 
    if (typeof savegame.zoomed !== "undefined"){ 
      zoomed = savegame.zoomed; 
      if(!savegame.zoomed){ 
        alert("Press Ctrl + and Ctrl - until the 'Ball Area' and the menu fit nicely together."); 
        zoomed = true; 
      } 
    } 
    else{ 
        alert("Press Ctrl + and Ctrl - until the 'Ball Area' and the menu fit nicely together."); 
        zoomed = true; 
    } 
    if (typeof savegame.prestiged !== "undefined") prestiged = savegame.prestiged; 
    if (typeof savegame.ballPoints !== "undefined") ballPoints = savegame.ballPoints; 
    if(notationScientfic){ 
      document.getElementById("BP").innerHTML = numberformat.format(ballPoints); 
      document.getElementById("IncomeMulti").innerHTML = numberformat.format(ballPoints*100*ballPointMulti); 
    } 
    else{ 
      document.getElementById("BP").innerHTML = numberformat.format(ballPoints, {format: 'standard'}); 
      document.getElementById("IncomeMulti").innerHTML = numberformat.format(ballPoints*100, {format: 'standard'}); 
    } 
    if(typeof savegame.clicks !== "undefined"){ 
      start = savegame.clicks; 
    } 
    valueSet(); 
  } 
  level--; 
  newLevel(false); 
  spawnEnemies(); 
  autoBonds = setInterval(function(){ bond() },1000/bondRate); 
  autoExcites = setInterval(function(){ excite() },60000/exciteRate); 
  setInterval(function(){ draw() },20); 
  setInterval(function(){ save() },60000); 
} 
function newLevel(prest) { 
  level++; 
  document.getElementById("level").innerHTML = level; 
  enemies = []; 
  if(prest){ 
    if(shrink){ 
      shrink = false; 
    } 
    else{ 
      spawnEnemies(); 
    } 
  } 
  else{ 
      if(level%10 == 0){ 
    shrink = true; 
  } 
  else if(level%10 == 1){ 
    shrink = false; 
  } 
  else{ 
    spawnEnemies(); 
  } 
  } 
} 
function spawnEnemies(){ 
  if(level%10 == 0){ 
    var healthTemp = Math.floor(10000*Math.pow(baseHealthMulti,level-1)); 
    enemies.push({x:width/2,y:height/2,health:healthTemp,sHealth:healthTemp,active:true,radius:(height/2)-100}); 
    var boss = enemies[0]; 
    for(var b = 0; b<balls.length;b++){ 
      if(balls[b].active){ 
        if(rand(0,100)>=50){ 
          balls[b].x = 50; 
        } 
        else{ 
          balls[b].x = width-50; 
        } 
      } 
    } 
  } 
  else{ 
    for(i = 0;i<5;i++){ 
      var healthTemp = Math.floor(100*Math.pow(baseHealthMulti,level-1)); 
      enemies.push({x:rand(100, width-100),y:rand(100, height-100),health:healthTemp,sHealth:healthTemp,active:true,radius:rand(20,60)*enemyRadiusMulti}); 
    } 
  } 
} 
function rand(min,max){ 
  return min + (Math.floor(Math.random() * (max-min))); 
} 
function levelCheck(){ 
  var allDisabled = true; 
  for(var l = 0; l<enemies.length; l++){ 
    enemyCheck = enemies[l]; 
    if(enemyCheck.active){ 
      allDisabled = false; 
    } 
  } 
  if(allDisabled){ 
    newLevel(false); 
  } 
} 
function draw(){ 
  if(shrink == true&&myCanvas.width > height){ 
    myCanvas.width *= 0.995 - (0.05*Math.min(ballPoints/50,1)); 
    width *= 0.995 - (0.05*Math.max(ballPoints/50,1)); 
  } 
  else if(shrink == true&&myCanvas.width < height){ 
    myCanvas.width = height; 
    width = height; 
    spawnEnemies(); 
  } 
  else if(shrink == false&&myCanvas.width < normalWidth){ 
    myCanvas.width *= 1.005 + (0.05*Math.min(ballPoints/50,1)); 
    width *= 1.005 + (0.05*Math.min(ballPoints/50,1)); 
  } 
  else if(shrink == false&&myCanvas.width > normalWidth){ 
    myCanvas.width = normalWidth; 
    width = normalWidth; 
    spawnEnemies(); 
  } 
  context.clearRect(0,0,width,height); 
  for(var i = 0; i<enemies.length; i++){ 
    var enemyDraw = enemies[i]; 
    if(enemyDraw.active){ 
      context.beginPath(); 
      if(nightMode){ 
        context.fillStyle="#ffffff"; 
      } 
      else{ 
        context.fillStyle="#000000"; 
      } 
      context.arc(enemyDraw.x,enemyDraw.y,enemyDraw.radius,0,Math.PI*2,true); 
      context.closePath(); 
      context.fill(); 
      context.font = Math.floor(enemyDraw.radius/1.7)+"px Arial"; 
      context.textAlign="center"; 
      context.textBaseline="middle"; 
      if(nightMode){ 
        context.fillStyle="#000000"; 
      } 
      else{ 
        context.fillStyle="#ffffff"; 
      } 
      context.fillText(Math.ceil((enemyDraw.health/enemyDraw.sHealth)*100)+"%",enemyDraw.x,enemyDraw.y); 
    } 
  } 
  for(var i = 0; i<balls.length+clickBalls.length; i++){ 
    if(i>(balls.length-1)){ 
      var ball = clickBalls[i-balls.length]; 
    } 
    else{ 
      var ball = balls[i]; 
    } 
    if(ball.active){ 
      context.beginPath(); 
      context.fillStyle=ball.color; 
      context.arc(ball.x,ball.y,ball.radius*radiusMulti,0,Math.PI*2,true); 
      context.closePath(); 
      context.fill(); 
      for(var e = 0; e<enemies.length; e++){ 
        var enemy = enemies[e]; 
        if(enemy.active){ 
          if(Math.pow(ball.x-enemy.x,2)+Math.pow(ball.y-enemy.y,2)<=Math.pow(enemy.radius+(ball.radius*radiusMulti),2)){ 
            if(ball.clone){ 
              ball = balls[ball.id]; 
            } 
            if(enemy.health>ball.bDamage*ball.rank*pCountMulti) 
              { 
                enemy.health -= ball.bDamage*ball.rank*pCountMulti; 
              } 
            else 
              { 
                enemy.active = false; 
                value += Math.round(enemy.sHealth * Math.round((ballPoints+1)*ballPointMulti)); 
                valueSet(); 
                levelCheck(); 
              } 
            if(ball.id<100){ 
              var ball = balls[i] 
            } 
            ball.dx = (ball.x - enemy.x)/Math.sqrt(Math.pow(ball.x-enemy.x,2)+Math.pow(ball.y-enemy.y,2)); 
            ball.dy = (ball.y - enemy.y)/Math.sqrt(Math.pow(ball.x-enemy.x,2)+Math.pow(ball.y-enemy.y,2)); 
          } 
        } 
      } 
      if(ball.x<=(ball.radius*radiusMulti) || ball.x>=(width-(ball.radius*radiusMulti))) ball.dx=-ball.dx; 
      if(ball.y<=(ball.radius*radiusMulti) || ball.y>=(height-(ball.radius*radiusMulti))) ball.dy=-ball.dy; 
      if(ball.x<(ball.radius*radiusMulti)){ 
        ball.x = ball.radius*radiusMulti; 
      } 
      else if (ball.x>(width-(ball.radius*radiusMulti))){ 
        ball.x = width-ball.radius*radiusMulti; 
      } 
      if(ball.y<(ball.radius*radiusMulti)){ 
        ball.y = ball.radius*radiusMulti; 
      } 
      else if (ball.y>(height-(ball.radius*radiusMulti))){ 
        ball.y = height-ball.radius*radiusMulti; 
      } 
      ball.x+=ball.dx*ball.speed*speedMulti*2; 
      ball.y+=ball.dy*ball.speed*speedMulti*2; 
    } 
  } 
} 
function save(){ 
  var ranks = []; 
  for(var s = 0; s < startingBalls; s++){ 
    ranks.push(balls[s].rank) 
  } 
  var save = { 
    value: value, 
    level: level, 
    ranks: ranks, 
    nightMode: nightMode, 
    ballPoints: ballPoints, 
    zoomed: zoomed, 
    prestiged: prestiged, 
    pUpgrades: pUpgrades, 
    clickObject: click, 
    clicks: start, 
    notation: notationScientfic 
  } 
  localStorage.setItem("save",JSON.stringify(save)); 
  document.getElementById("save").innerHTML = "Saved!"; 
  window.setTimeout(reAddSave,3000); 
} 
function reAddSave(){ 
  document.getElementById("save").innerHTML = "Save Game"; 
} 
function toggleNightMode(){ 
  if(nightMode){ 
    nightMode = false; 
    document.getElementById("body").style.backgroundColor = "#ffffff"; 
    document.getElementById("p1").style.color = "#000000"; 
    document.getElementById("p2").style.color = "#000000"; 
    document.getElementById("p3").style.color = "#000000"; 
    document.getElementById("p4").style.color = "#000000"; 
    document.getElementById("p5").style.color = "#000000"; 
    document.getElementById("p6").style.color = "#000000"; 
    document.getElementById("p7").style.color = "#000000"; 
    document.getElementById("p8").style.color = "#000000"; 
    document.getElementById("p8").style.color = "#000000"; 
    document.getElementById("myCanvas").style.border = "3px solid #000000"; 
    document.getElementById("Balls").style.border = "1px solid #000000"; 
    document.getElementById("Tutorial").style.border = "1px solid #000000"; 
    document.getElementById("Prestige").style.border = "1px solid #000000"; 
    document.getElementById("Options").style.border = "1px solid #000000"; 
    document.getElementById("Changelog").style.border = "1px solid #000000"; 
    document.getElementById("Special").style.border = "1px solid #000000"; 
    document.getElementById("Buy").style.border = "1px solid #000000"; 
  } 
  else{ 
    nightMode = true; 
    document.getElementById("body").style.backgroundColor = "#000000"; 
    document.getElementById("p1").style.color = "#ffffff"; 
    document.getElementById("p2").style.color = "#ffffff"; 
    document.getElementById("p3").style.color = "#ffffff"; 
    document.getElementById("p4").style.color = "#ffffff"; 
    document.getElementById("p5").style.color = "#ffffff"; 
    document.getElementById("p6").style.color = "#ffffff"; 
    document.getElementById("p7").style.color = "#ffffff"; 
    document.getElementById("p8").style.color = "#ffffff"; 
    document.getElementById("myCanvas").style.border = "3px solid #ffffff"; 
    document.getElementById("Balls").style.border = "1px solid #ffffff"; 
    document.getElementById("Tutorial").style.border = "1px solid #ffffff"; 
    document.getElementById("Prestige").style.border = "1px solid #ffffff"; 
    document.getElementById("Options").style.border = "1px solid #ffffff"; 
    document.getElementById("Changelog").style.border = "1px solid #ffffff"; 
    document.getElementById("Special").style.border = "1px solid #ffffff";
    document.getElementById("Buy").style.border = "1px solid #ffffff";
  }
}
function wipeSave(){ 
  if(confirm("Are you sure you want to wipe your save? THIS WILL RESET EVERYTHING AND YOU WILL HAVE NOTING") == true){ 
    localStorage.setItem("save",null); 
    location.reload(); 
  } 
} 
function prestige(){ 
  if(level >= 50){ 
    if(confirm("Are you sure you want to Prestige? This will get rid of all your numbers, all your levels and all your ball upgrades/clones. It will not get rid of Achievements, Prestige Upgrades or Special balls. By prestiging you will get 1 Ball Point which gives you 100% more income (additive)") == true){ 
      ballPoints += Math.pow(2,(Math.floor((level-50)/25))); 
      prestiged++; 
      level = (5*pUpgrades[10]); 
      click.rank = 1; 
      click.bDamage = 10; 
      value = 10 * Math.pow(10,pUpgrades[8]); 
      balls = [ 
  {active:false,x:200,y:200,dx:.707,dy:.707,color:"#5555ff",radius:20,bDamage:10,rank:0,cost:10,id:0,clone:false,speed:5}, 
  {active:false,x:300,y:300,dx:.707,dy:-.707,color:"#00ff00",radius:20,bDamage:300,rank:0,cost:300,id:1,clone:false,speed:5}, 
  {active:false,x:100,y:100,dx:-.707,dy:.707,color:"#ff0000",radius:20,bDamage:900,rank:0,cost:1800,id:2,clone:false,speed:5}, 
  {active:false,x:400,y:400,dx:-.707,dy:-.707,color:"#ffff00",radius:20,bDamage:2700,rank:0,cost:10800,id:3,clone:false,speed:5}, 
  {active:false,x:900,y:300,dx:-.707,dy:.707,color:"#FFA500",radius:25,bDamage:8100,rank:0,cost:64800,id:4,clone:false,speed:6}, 
  {active:false,x:1000,y:200,dx:-.707,dy:-.707,color:"#800080",radius:25,bDamage:24300,rank:0,cost:388000,id:5,clone:false,speed:6}, 
  {active:false,x:1200,y:300,dx:.707,dy:.707,color:"#00C7D1",radius:25,bDamage:72900,rank:0,cost:2330000,id:6,clone:false,speed:6}, 
  {active:false,x:1100,y:400,dx:-.707,dy:-.707,color:"#EE33A1",radius:25,bDamage:218000,rank:0,cost:13900000,id:7,clone:false,speed:6}, 
  {active:false,x:300,y:500,dx:.707,dy:-.707,color:"#2ED371",radius:30,bDamage:656000,rank:0,cost:83900000,id:8,clone:false,speed:7}, 
  {active:false,x:600,y:200,dx:-.707,dy:.707,color:"#800000",radius:30,bDamage:1960000,rank:0,cost:503000000,id:9,clone:false,speed:7},
  {active:false,x:600,y:200,dx:-.707,dy:.707,color:"#000000",radius:30,bDamage:5900000,rank:0,cost:3020000000,id:10,clone:false,speed:7},
  {active:false,x:800,y:300,dx:-.707,dy:.707,color:"#00FFFF",radius:30,bDamage:17700000,rank:0,cost:18100000000,id:11,clone:false,speed:7},
  {active:false,x:500,y:100,dx:-.707,dy:.707,color:"#00FF00",radius:35,bDamage:53100000,rank:0,cost:108000000000,id:12,clone:false,speed:8},
  {active:false,x:700,y:300,dx:-.707,dy:.707,color:"#C0C0C0",radius:35,bDamage:159000000,rank:0,cost:653000000000,id:13,clone:false,speed:8},
  {active:false,x:900,y:200,dx:-.707,dy:.707,color:"#008080",radius:35,bDamage:478000000,rank:0,cost:3910000000000,id:14,clone:false,speed:8},
  {active:false,x:400,y:200,dx:-.707,dy:.707,color:"#DC143C",radius:35,bDamage:1430000000,rank:0,cost:23500000000000,id:15,clone:false,speed:8},
  {active:false,x:600,y:100,dx:-.707,dy:.707,color:"#FFD700",radius:40,bDamage:4300000000,rank:0,cost:141000000000000,id:16,clone:false,speed:9},
  {active:false,x:1000,y:500,dx:-.707,dy:.707,color:"#EE82EE",radius:40,bDamage:12900000000,rank:0,cost:846000000000000,id:17,clone:false,speed:9},
  {active:false,x:900,y:400,dx:-.707,dy:.707,color:"#A52A2A",radius:40,bDamage:38700000000,rank:0,cost:5070000000000000,id:18,clone:false,speed:9},
  {active:false,x:500,y:300,dx:-.707,dy:.707,color:"#4B0082",radius:40,bDamage:116000000000,rank:0,cost:30400000000000000,id:19,clone:false,speed:9},
  {active:false,x:800,y:200,dx:-.707,dy:.707,color:"#e25822",radius:28,bDamage:1e17,rank:0,cost:1e21,id:20,clone:false,speed:6},
  {active:false,x:600,y:400,dx:-.707,dy:.707,color:"#f7a233",radius:32,bDamage:1e23,rank:0,cost:1e28,id:21,clone:false,speed:7},
  {active:false,x:400,y:100,dx:-.707,dy:.707,color:"#A5F2F3",radius:38,bDamage:1e29,rank:0,cost:1e35,id:22,clone:false,speed:5},
  {active:false,x:1000,y:200,dx:-.707,dy:.707,color:"#61de2a",radius:24,bDamage:1e36,rank:0,cost:1e42,id:23,clone:false,speed:8},
  {active:false,x:1000,y:200,dx:-.707,dy:.707,color:"#ff41ca",radius:18,bDamage:1e45,rank:0,cost:1e52,id:24,clone:false,speed:10},
  {active:false,x:900,y:300,dx:-.707,dy:.707,color:"#FA8072",radius:16,bDamage:1e62,rank:0,cost:1e68,id:25,clone:false,speed:12}
]; 
      if(notationScientfic){ 
          for(var p = 0; p < startingBalls; p++){ 
              document.getElementById(p+"T").innerHTML = "Buy"; 
              document.getElementById(p+"C").innerHTML = numberformat.format((Math.pow(100,p+1))/10,{format: 'scientific'}); 
              document.getElementById(p+"A").innerHTML = 0; 
          } 
      } 
      else{ 
          for(var p = 0; p < startingBalls; p++){ 
              document.getElementById(p+"T").innerHTML = "Buy"; 
              document.getElementById(p+"C").innerHTML = numberformat.format((Math.pow(100,p+1))/10); 
              document.getElementById(p+"A").innerHTML = 0; 
          } 
      } 
      document.getElementById("CC").innerHTML = 10; 
      document.getElementById("CA").innerHTML = 1; 
      document.getElementById("BP").innerHTML = ballPoints; 
      document.getElementById("IncomeMulti").innerHTML = ballPoints*100; 
      document.getElementById("level").innerHTML = 5*pUpgrades[10]; 
      valueSet(); 
      newLevel(true); 
    } 
  } 
  else{ 
    alert("You need to be at level 50 to Prestige.") 
  } 
} 
function switchTab(evt, tabName) { 
    // Declare all variables 
    var i, tabcontent, tablinks; 
 
    // Get all elements with class="tabcontent" and hide them 
    tabcontent = document.getElementsByClassName("tabcontent"); 
    for (i = 0; i < tabcontent.length; i++) { 
        tabcontent[i].style.display = "none"; 
    } 
 
    // Get all elements with class="tablinks" and remove the class "active" 
    tablinks = document.getElementsByClassName("tablinks"); 
    for (i = 0; i < tablinks.length; i++) { 
        tablinks[i].className = tablinks[i].className.replace(" active", ""); 
    } 
 
    // Show the current tab, and add an "active" class to the button that opened the tab 
    document.getElementById(tabName).style.display = "block"; 
    evt.currentTarget.className += " active"; 
} 
function prestigeUpgrade(id){ 
  switch(id){ 
    case 1: 
        if(ballPoints >= 3 && pUpgrades[id-1] < 25){ 
            pUpgrades[id-1]++; 
            ballPoints -= 3; 
            bondRate = pUpgrades[id-1]; 
            clearInterval(autoBonds); 
            autoBonds = 0; 
            autoBonds = setInterval(function(){ bond() },1000/bondRate); 
            document.getElementById(id+"p").innerHTML = bondRate; 
        } 
        break; 
    case 2: 
        if(ballPoints >= 1){ 
            pUpgrades[id-1]++; 
            ballPoints -= 1; 
            var deactiveBalls = 0; 
            for(var k = 0; k<startingBalls;k++){ 
              if (balls[k].active == false){ 
                deactiveBalls++; 
              } 
            } 
            pCountMulti = (((Math.floor((balls.length-deactiveBalls)/5))*(0.3*pUpgrades[id-1]))+1); 
            document.getElementById(id+"p").innerHTML = Math.round(((0.3*pUpgrades[id-1])+1)*100); 
        } 
        break; 
    case 3: 
        if(ballPoints >= 3 && pUpgrades[id-1]<50){ 
            pUpgrades[id-1]++; 
            ballPoints -= 3; 
            strengthBoostReq = 50-pUpgrades[id-1]; 
            document.getElementById(id+"p").innerHTML = strengthBoostReq; 
        } 
        break; 
    case 4: 
        if(ballPoints >= 4){ 
            pUpgrades[id-1]++; 
            ballPoints -= 4; 
            strengthBoost = 10+pUpgrades[id-1]; 
            document.getElementById(id+"p").innerHTML = 10*strengthBoost; 
        } 
        break; 
    case 5: 
        if(ballPoints >= 1 && pUpgrades[id-1]<20){ 
            pUpgrades[id-1]++; 
            ballPoints -= 1; 
            speedMulti = (0.1*pUpgrades[id-1])+1; 
            document.getElementById(id+"p").innerHTML = Math.round(100*speedMulti); 
        } 
        break; 
    case 6: 
        if(ballPoints >= 1 && pUpgrades[id-1]<20){ 
            pUpgrades[id-1]++; 
            ballPoints -= 1; 
            radiusMulti = 1 +(0.1*pUpgrades[id-1]); 
            document.getElementById(id+"p").innerHTML = Math.round(100*radiusMulti); 
        } 
        break; 
    case 7: 
        if(ballPoints >= 2 && pUpgrades[id-1]<60){ 
            pUpgrades[id-1]++; 
            ballPoints -= 2; 
            exciteRate = pUpgrades[id-1]; 
            clearInterval(autoExcites); 
            autoExcites = 0; 
            autoExcites = setInterval(function(){ excite() },60000/exciteRate); 
            document.getElementById(id+"p").innerHTML = exciteRate; 
        } 
        break; 
    case 8: 
        if(ballPoints >= 5 && pUpgrades[id-1]<25){ 
            pUpgrades[id-1]++; 
            ballPoints -= 5; 
            cloneReq = 100-pUpgrades[id-1]; 
            document.getElementById(id+"p").innerHTML = cloneReq; 
        } 
        break; 
    case 9: 
        if(ballPoints >= Math.pow(2,pUpgrades[id-1])){ 
            ballPoints -= Math.pow(2,pUpgrades[id-1]) 
            pUpgrades[id-1]++;; 
            document.getElementById(id+"p").innerHTML = numberformat.format(10*(Math.pow(10,pUpgrades[id-1]))); 
            document.getElementById(id+"b").innerHTML = Math.pow(2,pUpgrades[id-1]); 
        } 
        break; 
    case 10: 
        if(ballPoints >= 1 && pUpgrades[id-1]<10){ 
            pUpgrades[id-1]++; 
            ballPoints -= 1; 
            enemyRadiusMulti = 1 + (0.1 * pUpgrades[id-1]); 
            document.getElementById(id+"p").innerHTML = Math.round(100*enemyRadiusMulti); 
        } 
        break; 
    case 11: 
        if(ballPoints >= 10 + pUpgrades[id-1]){ 
            pUpgrades[id-1]++; 
            ballPoints -=  + pUpgrades[id-1]; 
            document.getElementById(id+"b").innerHTML = 10 + pUpgrades[id-1]; 
            document.getElementById(id+"p").innerHTML = 5*pUpgrades[id-1]; 
        } 
        break; 
    case 12: 
        if(ballPoints >= 5){ 
            pUpgrades[id-1]++; 
            ballPoints -= 5; 
            ballPointMulti = 1 + (0.1 * pUpgrades[id-1]); 
            document.getElementById(id+"p").innerHTML = Math.round(100*ballPointMulti); 
        } 
    } 
    document.getElementById("BP").innerHTML = ballPoints; 
    document.getElementById("IncomeMulti").innerHTML = Math.round(ballPoints*100*ballPointMulti); 
} 
function valueSet(){ 
  if(notationScientfic){ 
      document.getElementById("value").innerHTML = numberformat.format(value, {format: 'scientific'}) 
  } 
  else{ 
      document.getElementById("value").innerHTML = numberformat.format(value); 
  } 
} 
function changeNotation(){ 
  if(notationScientfic){ 
    notationScientfic = false; 
    document.getElementById("notation").innerHTML = "Change Notation to Scientific"; 
  } 
  else{ 
    notationScientfic = true; 
    document.getElementById("notation").innerHTML = "Change Notation to Standard"; 
  } 
}
