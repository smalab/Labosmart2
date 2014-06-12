/***********************
* Adobe Edge Animate コンポジションアクション
*
* このファイルを編集する際には注意が必要です。必ず関数シグニチャと
* 「Edge」で始まるコメントを保持して、 Adobe Edge 内からこれらのアクションを
* 操作可能な状態にしておいてください。 
*
***********************/
(function($, Edge, compId){
var tCounter;
var rum=Math.round (Math.random () * 10 + 0.5);//ランダム変数
var cnt=1;//選択した硬貨の数
var rumcnt=0;
var acnt=0;//正答数
var sum=0;//選択値の合計
var price=0;//価格
var x=0;
var Composition = Edge.Composition, Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス
var hart=3;
var bsum=0;
var noruma=0;
var level1=0;
var level2=0;
var timesum=0;
var timerCount=0; 
var y=0;

var flag=0;

if(navigator.userAgent.indexOf('Android')>0){
	flag=1;
//	alert("android");
}

if(flag==0){
var music = new Howl({
  urls: ['audio/bgm1.mp3'],
  autoplay: true,
  loop: true,
  volume: 0.3
})
};

//sym.$("ki").html(hart);
   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   
      
      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_Group}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         //効果音
         if(flag==0){
         btn2 = new Howl({
           urls: ['audio/btn2.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.3
         })
         };
         
         // タイム
         //sym.getComposition().getStage().getSymbol("time").play();
         sym.$("Title").hide();
               	sym.getSymbol("time").$("time_txt").html(timerCount);
                        tCounter=setInterval(timer, 1000); //1000 will run the timer every 1 second
         
            function timer()
             {
                      timerCount=timerCount+1;
         
             	
         
         
         
                       sym.getSymbol("time").$("time_txt").html(timerCount); // Display the timer value 
         return;
                          }
         sym.getComposition().getStage().getSymbol("hondai").play();	
         //var mySymbolObject = sym.getSymbol("hondai2");
         //ym.play();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.$("#Stage").css({ // Set the transform origin so we always scale to the top left corner of the stage
         "transform-origin":"0 0",
         "-ms-transform-origin":"0 0",
         "-webkit-transform-origin":"0 0",
         "-moz-transform-origin":"0 0",
         "-o-transform-origin":"0 0"
         });
         
         function scaleStage() {
             var stage = sym.$('Stage'); // Set a reusable variable to reference the stage
             var parent = sym.$('Stage').parent(); // Set a reusable variable to reference the parent container of the stage
         
             var parentWidth = stage.parent().width(); // Get the parent of the stage width
             var parentHeight = $(window).height(); // Get the browser window height
         
             var stageWidth = stage.width(); // Get the stage width
             var stageHeight = stage.height(); // Get the stage height
         
             var desiredWidth = Math.round(parentWidth * 1); // Set the new width of the stage as it scales
             var desiredHeight = Math.round(parentHeight * 1); // Set the new height of the stage as it scales
         
             var rescaleWidth = (desiredWidth / stageWidth); // Set a variable to calculate the new width of the stage as it scales
             var rescaleHeight = (desiredHeight / stageHeight); // Set a variable to calculate the new height of the stage as it scales
         
             var rescale = rescaleWidth;
         
             if (stageHeight * rescale > desiredHeight) // Do not scale larger than the height of the browser window
                             rescale = rescaleHeight;
         
         // Rescale the stage!
                    stage.css('transform', 'scale(' + rescale + ')');
              stage.css(  '-o-transform', 'scale(' + rescale + ')');
                    stage.css('-ms-transform', 'scale(' + rescale + ')');
              stage.css('-webkit-transform', 'scale(' + rescale + ')');
                    stage.css('-moz-transform', 'scale(' + rescale + ')');
              stage.css('-o-transform', 'scale(' + rescale + ')');
                    parent.height(stageHeight * rescale); // Reset the height of the parent container so the objects below it will reflow as the height adjusts
         }
         
         // Make it happen when the browser resizes
         $(window).on('resize', function(){
                    scaleStage();
         });
         
         // Make it happen when the page first loads
         $(document).ready(function(){
             scaleStage();
         });
         
         music.onload();// コンポジションを完全にロードした後に実行されるコードを挿入します
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_play}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         // マウスクリックのコードをここに挿入します
         // エレメントを隠します。
         sym.$("MainTitle").hide();
         
         if(flag==0){
         var btn2 = new Howl({
           urls: ['audio/btn2.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.3
         })
         };

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_play}", "touchstart", function(sym, e) {
         
         sym.$("MainTitle").hide();
         
         if(flag==0){
         var btn2 = new Howl({
           urls: ['audio/btn2.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.3
         })
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group}", "touchstart", function(sym, e) {
         
         //効果音
         if(flag==0){
         btn2 = new Howl({
           urls: ['audio/btn2.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.3
         })
         };
         
         // タイム
         //sym.getComposition().getStage().getSymbol("time").play();
         sym.$("Title").hide();
               	sym.getSymbol("time").$("time_txt").html(timerCount);
                         tCounter=setInterval(timer, 1000); //1000 will run the timer every 1 second
         
            function timer()
             {
                      timerCount=timerCount+1;
         
             	
         
                       sym.getSymbol("time").$("time_txt").html(timerCount); 
                       return; 
         
                          }
         sym.getComposition().getStage().getSymbol("hondai").play();	
         //var mySymbolObject = sym.getSymbol("hondai2");
         //ym.play();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'time'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // コードをここに挿入
      });
      //Edge binding end

   })("time");
   //Edge symbol end:'time'

   //=========================================================
   
   //Edge symbol: 'hondai'
   (function(symbolName) {
      
      
	 	
	//	 

    
   		//	if(rum==1){
         //	   sym.getComposition().getStage().getSymbol("Apple2");	
       		//   var mySymbolObject = sym.getSymbol("Apple2");
         	//	sym.play();

         	//	}else if(rum==2){
         //		sym.getComposition().getStage().getSymbol("Apple2");	
       	//	   var mySymbolObject = sym.getSymbol("Apple2");
         //		sym.play();
         	   //sym.getSymbol("orange2").play();
         	//	}else if(rum==3){
         //		sym.getComposition().getStage().getSymbol("Apple2");	
       	//	   var mySymbolObject = sym.getSymbol("Apple2");
         //		sym.play();
         	   //sym.getSymbol("Apple2").play();	
         	//	}else if(rum==4){
         //		sym.getComposition().getStage().getSymbol("Apple2");	
       	//	   var mySymbolObject = sym.getSymbol("Apple2");
         //		sym.play();
               //sym.getSymbol("kyabekaba").play();
              // }
      

      

      Symbol.bindElementAction(compId, symbolName, "${_s10yen}", "click", function(sym, e) {
         // 小銭音
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         if(flag==0){
         var zeni = new Howl({
           urls: ['audio/zeni1.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
           })
           };
         
         if(cnt==1){
         sym.$("yen1").attr('src','images/10yen.png');
         }
         
         if(cnt==2){
         sym.$("yen2").attr('src','images/10yen.png');
         }
         
         if(cnt==3){
         sym.$("yen3").attr('src','images/10yen.png');
         }
         
         if(cnt==4){
         sym.$("yen4").attr('src','images/10yen.png');
         }
         
         if(cnt<5){
         sum=sum+10;
         cnt=cnt+1;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yarinaoshi}", "click", function(sym, e) {
         //やり直し音
         // 正解音
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
      
 				if(flag==0){        
         	var reji = new Howl({
         	urls: ['audio/cancel1.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         // マウスクリックのコードをここに挿入します
         sym.$("yen1").attr('src','images/yen.png');
         sym.$("yen2").attr('src','images/yen.png');
         sym.$("yen3").attr('src','images/yen.png');
         sym.$("yen4").attr('src','images/yen.png');
         cnt=1;
         sum=0;

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_okanjo}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         	console.log(rum);
         	console.log(sum);
         	console.log(cnt);
         	console.log(price);
         if(price==sum){
         // 正解音
         if(flag==0){
         	var reji = new Howl({
         	urls: ['audio/reji1.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         
         	noruma=noruma+1;
         	bsum=bsum+1;//buysum
         // マウスクリックのコードをここに挿入します
         	sym.$("buysum").html(bsum);
         	// エレメントを表示します。
         	//  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         	//  使用できる DOM エレメントに変えます)。
         	sym.$("buysum").show();
         
         
         	sym.$("yen1").attr('src','images/yen.png');
         	sym.$("yen2").attr('src','images/yen.png');
         	sym.$("yen3").attr('src','images/yen.png');
         	sym.$("yen4").attr('src','images/yen.png');
         	cnt=1;
         	sum=0;
         
         	if(rum==1){
         	mySymbolObject = sym.getSymbol("kyabekaba").stop(0);
         	//	sym.$("kyabekaba").hide();
         		//sym.$("kyabekaba").stop();
         	//	price=0;
         	}else if(rum==2){
         	mySymbolObject = sym.getSymbol("Apple").stop(0);
         	//	sym.$("Apple").hide();
         		//sym.$("Apple").stop();
         	//	price=0;
         	}else if(rum==3){
         	mySymbolObject = sym.getSymbol("umai").stop(0);
         	//	sym.$("umai").hide();
         		//sym.$("umai").stop();
         	//	price=0;
         	}else if(rum==4){
         	mySymbolObject = sym.getSymbol("orange").stop(0);
         	//	sym.$("orange").hide();
         	//	sym.$("orange").stop();
         	//	price=0;
         	}else if(rum==5){
         	mySymbolObject = sym.getSymbol("Hambarger").stop(0);
         	}else if(rum==6){
         	mySymbolObject = sym.getSymbol("Ice").stop(0);
         	}else if(rum==7){
         	mySymbolObject = sym.getSymbol("Noodle").stop(0);
         	}else if(rum==8){
         	mySymbolObject = sym.getSymbol("Hotdog").stop(0);
         	}else if(rum==9){
         	mySymbolObject = sym.getSymbol("Potato").stop(0);
         	}else if(rum==10){
         	mySymbolObject = sym.getSymbol("Amedog").stop(0);
         	}
         
         
         
         
         	mySymbolObject = sym.getSymbol("Maido").play();
         
         
         
         
         
         
         	rum=Math.round (Math.random () * 10 + 0.5);
         
         	if(rum==1){
         		//sym.$("kyabekaba").show();
         		//sym.$("kyabekaba").play(0);
         
         		mySymbolObject = sym.getSymbol("kyabekaba").play(0);
         		price=30;
         	}else if(rum==2){
         		//sym.$("Apple").show();
         		//sym.$("Apple").play(0);
         		mySymbolObject = sym.getSymbol("Apple").play(0);
         		price=200;
         	}else if(rum==3){
         		//sym.$("umai").show();
         		//sym.$("umai").play(0);
         		mySymbolObject = sym.getSymbol("umai").play(0);
         		price=10;
         	}else if(rum==4){
         		//sym.$("orange").show();
         		//sym.$("orange").play(0);
         		mySymbolObject = sym.getSymbol("orange").play(0);
         		price=160;
         	}else if(rum==5){
         		mySymbolObject = sym.getSymbol("Hambarger").play(0);
         		price=250;
         	}else if(rum==6){
         		mySymbolObject = sym.getSymbol("Ice").play(0);
         		price=120;
         	}else if(rum==7){
         		mySymbolObject = sym.getSymbol("Noodle").play(0);
         		price=150;
         	}else if(rum==8){
         		mySymbolObject = sym.getSymbol("Hotdog").play(0);
         		price=300;
         	}else if(rum==9){
         		mySymbolObject = sym.getSymbol("Potato").play(0);
         		price=80;
         	}else if(rum==10){
         		mySymbolObject = sym.getSymbol("Amedog").play(0);
         		price=220;
         	}
         
         
         
         
         
         }else {
         //間違い音
         if(flag==0){
         	var bu = new Howl({
         	urls: ['audio/bu1.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         //ハート減らし
          hart=hart-1;
          sym.$("Ki").html("×"+hart);
         	// エレメントを表示します。
         	//  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         	//  使用できる DOM エレメントに変えます)。
         	sym.$("Ki").show();
         
         	mySymbolObject = sym.getSymbol("Batu").play();
         }
         //ノルマ達成
         if(noruma==7){
         noruma=0;
         bsum=0;
         music.stop();
         
         sym.$("okanjo").hide();
         
         sym.$("yarinaoshi").hide();
         
         sym.$("selectYen").hide();
         //クリア画面
         sym.$("C").show();
         // クリア音
         if(flag==0){
         	var fanfare = new Howl({
         	urls: ['audio/fanfare1.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         // シンボルのインスタンスであるエレメントを削除
         // (getSymbol はシンボルインスタンスエレメントのシンボルオブジェクトを検
         clearInterval(tCounter);
         sym.getComposition().getStage().getSymbol("time").deleteSymbol();
         //タイム保存
         level1=timerCount;
         sym.$("test").html(level1);
         sym.$("test").show();
         
         
         //fanction(time)入ってた
         mySymbolObject = sym.getSymbol("kyabekaba").stop(0);
         mySymbolObject = sym.getSymbol("Apple").stop(0);
         mySymbolObject = sym.getSymbol("umai").stop(0);
         mySymbolObject = sym.getSymbol("orange").stop(0);
         mySymbolObject = sym.getSymbol("Hambarger").stop(0);
         mySymbolObject = sym.getSymbol("Ice").stop(0);
         mySymbolObject = sym.getSymbol("Noodle").stop(0);
         mySymbolObject = sym.getSymbol("Hotdog").stop(0);
         mySymbolObject = sym.getSymbol("Potato").stop(0);
         mySymbolObject = sym.getSymbol("Amedog").stop(0);					
         }
         if(hart==0){
         if(flag==0){
         music.stop();
         var zannen = new Howl({
         	urls: ['audio/zannen.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         sym.$("Nokori").html("あと"+(7-bsum)+"個でした...");
         sym.$("Nokori").show();
         sym.$("B").show();
         sym.$("okanjo").hide();
         
         sym.$("yarinaoshi").hide();
         
         sym.$("selectYen").hide();						
         // シンボルのインスタンスであるエレメントを削除
         // (getSymbol はシンボルインスタンスエレメントのシンボルオブジェクトを検
         sym.getComposition().getStage().getSymbol("time").deleteSymbol();
         mySymbolObject = sym.getSymbol("kyabekaba").stop(0);
         mySymbolObject = sym.getSymbol("Apple").stop(0);
         mySymbolObject = sym.getSymbol("umai").stop(0);
         mySymbolObject = sym.getSymbol("orange").stop(0);
         mySymbolObject = sym.getSymbol("Hambarger").stop(0);
         mySymbolObject = sym.getSymbol("Ice").stop(0);
         mySymbolObject = sym.getSymbol("Noodle").stop(0);
         mySymbolObject = sym.getSymbol("Hotdog").stop(0);
         mySymbolObject = sym.getSymbol("Potato").stop(0);
         mySymbolObject = sym.getSymbol("Amedog").stop(0);	
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         
         if(rum==1){
         mySymbolObject = sym.getSymbol("kyabekaba").play();
         price=30;
         }
         
         if(rum==2){
         mySymbolObject = sym.getSymbol("Apple").play();
         price=200;
         }
         
         if(rum==3){
         mySymbolObject = sym.getSymbol("umai").play();
         price=10;
         }
         
         if(rum==4){
         mySymbolObject = sym.getSymbol("orange").play();
         price=160;
         }
         
         if(rum==5){
         mySymbolObject = sym.getSymbol("Hambarger").play();
         price=250;
         }
         
         if(rum==6){
         mySymbolObject = sym.getSymbol("Ice").play();
         price=120;
         }
         
         if(rum==7){
         mySymbolObject = sym.getSymbol("Noodle").play();
         price=150;
         }
         
         if(rum==8){
         mySymbolObject = sym.getSymbol("Hotdog").play();
         price=300;
         }
         
         if(rum==9){
         mySymbolObject = sym.getSymbol("Potato").play();
         price=80;
         }
         
         if(rum==10){
         mySymbolObject = sym.getSymbol("Amedog").play();
         price=220;
         }
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_buysum}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         sym.$("buysum").html();
         	// エレメントを表示します。
         	//  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         	//  使用できる DOM エレメントに変えます)。
         	sym.$("buysum").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s100yen}", "click", function(sym, e) {

         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         // 小銭音
         if(flag==0){         
         var zeni = new Howl({
           urls: ['audio/zeni1.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.0,
           })
           };
         
         if(cnt==1){
         sym.$("yen1").attr('src','images/100yen1.png');
         }
         
         if(cnt==2){
         sym.$("yen2").attr('src','images/100yen1.png');
         }
         
         if(cnt==3){
         sym.$("yen3").attr('src','images/100yen1.png');
         }
         
         if(cnt==4){
         sym.$("yen4").attr('src','images/100yen1.png');
         }
         
         if(cnt<5){
         sum=sum+100;
         cnt=cnt+1;
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s50yen}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         // 小銭音
         if(flag==0){
         var zeni = new Howl({
           urls: ['audio/zeni1.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
           })
           };
         
         if(cnt==1){
         sym.$("yen1").attr('src','images/yen50.png');
         }
         
         if(cnt==2){
         sym.$("yen2").attr('src','images/yen50.png');
         }
         
         if(cnt==3){
         sym.$("yen3").attr('src','images/yen50.png');
         }
         
         if(cnt==4){
         sym.$("yen4").attr('src','images/yen50.png');
         }
         
         if(cnt<5){
         sum=sum+50;
         cnt=cnt+1;
         }

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_next}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         sym.getParentSymbol("hondai")
         sym.getComposition().getStage().getSymbol("hondai").deleteSymbol();
         //効果音
         if(flag==0){
         btn2 = new Howl({
           urls: ['audio/btn2.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.3
         })
         };
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_back}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         document.location.reload(true);

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_next}", "touchstart", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         sym.getParentSymbol("hondai")
         sym.getComposition().getStage().getSymbol("hondai").deleteSymbol();
         //効果音
         if(flag==0){
         btn2 = new Howl({
           urls: ['audio/btn2.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.3
         })
         };
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s100yen}", "touchstart", function(sym, e) {
         // 小銭音
         
         if(flag==0){
         var zeni = new Howl({
           urls: ['audio/zeni1.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.0,
           })
           };
         
         if(cnt==1){
         sym.$("yen1").attr('src','images/100yen1.png');
         }
         
         if(cnt==2){
         sym.$("yen2").attr('src','images/100yen1.png');
         }
         
         if(cnt==3){
         sym.$("yen3").attr('src','images/100yen1.png');
         }
         
         if(cnt==4){
         sym.$("yen4").attr('src','images/100yen1.png');
         }
         
         if(cnt<5){
         sum=sum+100;
         cnt=cnt+1;
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s50yen}", "touchstart", function(sym, e) {
         // 小銭音
         
         if(flag==0){
         var zeni = new Howl({
           urls: ['audio/zeni1.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
           })
           };
         
         if(cnt==1){
         sym.$("yen1").attr('src','images/yen50.png');
         }
         
         if(cnt==2){
         sym.$("yen2").attr('src','images/yen50.png');
         }
         
         if(cnt==3){
         sym.$("yen3").attr('src','images/yen50.png');
         }
         
         if(cnt==4){
         sym.$("yen4").attr('src','images/yen50.png');
         }
         
         if(cnt<5){
         sum=sum+50;
         cnt=cnt+1;
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s10yen}", "touchstart", function(sym, e) {
         // 小銭音
         
         if(flag==0){
         var zeni = new Howl({
           urls: ['audio/zeni1.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
           })
           };
         
         if(cnt==1){
         sym.$("yen1").attr('src','images/10yen.png');
         }
         
         if(cnt==2){
         sym.$("yen2").attr('src','images/10yen.png');
         }
         
         if(cnt==3){
         sym.$("yen3").attr('src','images/10yen.png');
         }
         
         if(cnt==4){
         sym.$("yen4").attr('src','images/10yen.png');
         }
         
         if(cnt<5){
         sum=sum+10;
         cnt=cnt+1;
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yarinaoshi}", "touchstart", function(sym, e) {
         // 小銭音
         	if(flag==0){
         	var reji = new Howl({
         	urls: ['audio/cancel1.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         // マウスクリックのコードをここに挿入します
         sym.$("yen1").attr('src','images/yen.png');
         sym.$("yen2").attr('src','images/yen.png');
         sym.$("yen3").attr('src','images/yen.png');
         sym.$("yen4").attr('src','images/yen.png');
         cnt=1;
         sum=0;
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_okanjo}", "touchstart", function(sym, e) {
         	
         	
         	console.log(rum);
         	console.log(sum);
         	console.log(cnt);
         	console.log(price);
         if(price==sum){
         // 正解音
         if(flag==0){
         	var reji = new Howl({
         	urls: ['audio/reji1.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         
         	noruma=noruma+1;
         	bsum=bsum+1;//buysum
         // マウスクリックのコードをここに挿入します
         	sym.$("buysum").html(bsum);
         	// エレメントを表示します。
         	//  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         	//  使用できる DOM エレメントに変えます)。
         	sym.$("buysum").show();
         
         
         	sym.$("yen1").attr('src','images/yen.png');
         	sym.$("yen2").attr('src','images/yen.png');
         	sym.$("yen3").attr('src','images/yen.png');
         	sym.$("yen4").attr('src','images/yen.png');
         	cnt=1;
         	sum=0;
         
         	if(rum==1){
         	mySymbolObject = sym.getSymbol("kyabekaba").stop(0);
         	//	sym.$("kyabekaba").hide();
         		//sym.$("kyabekaba").stop();
         	//	price=0;
         	}else if(rum==2){
         	mySymbolObject = sym.getSymbol("Apple").stop(0);
         	//	sym.$("Apple").hide();
         		//sym.$("Apple").stop();
         	//	price=0;
         	}else if(rum==3){
         	mySymbolObject = sym.getSymbol("umai").stop(0);
         	//	sym.$("umai").hide();
         		//sym.$("umai").stop();
         	//	price=0;
         	}else if(rum==4){
         	mySymbolObject = sym.getSymbol("orange").stop(0);
         	//	sym.$("orange").hide();
         	//	sym.$("orange").stop();
         	//	price=0;
         	}else if(rum==5){
         	mySymbolObject = sym.getSymbol("Hambarger").stop(0);
         	}else if(rum==6){
         	mySymbolObject = sym.getSymbol("Ice").stop(0);
         	}else if(rum==7){
         	mySymbolObject = sym.getSymbol("Noodle").stop(0);
         	}else if(rum==8){
         	mySymbolObject = sym.getSymbol("Hotdog").stop(0);
         	}else if(rum==9){
         	mySymbolObject = sym.getSymbol("Potato").stop(0);
         	}else if(rum==10){
         	mySymbolObject = sym.getSymbol("Amedog").stop(0);
         	}
         
         
         
         
         	mySymbolObject = sym.getSymbol("Maido").play();
         
         
         
         
         
         
         	rum=Math.round (Math.random () * 10 + 0.5);
         
         	if(rum==1){
         		//sym.$("kyabekaba").show();
         		//sym.$("kyabekaba").play(0);
         
         		mySymbolObject = sym.getSymbol("kyabekaba").play(0);
         		price=30;
         	}else if(rum==2){
         		//sym.$("Apple").show();
         		//sym.$("Apple").play(0);
         		mySymbolObject = sym.getSymbol("Apple").play(0);
         		price=200;
         	}else if(rum==3){
         		//sym.$("umai").show();
         		//sym.$("umai").play(0);
         		mySymbolObject = sym.getSymbol("umai").play(0);
         		price=10;
         	}else if(rum==4){
         		//sym.$("orange").show();
         		//sym.$("orange").play(0);
         		mySymbolObject = sym.getSymbol("orange").play(0);
         		price=160;
         	}else if(rum==5){
         		mySymbolObject = sym.getSymbol("Hambarger").play(0);
         		price=250;
         	}else if(rum==6){
         		mySymbolObject = sym.getSymbol("Ice").play(0);
         		price=120;
         	}else if(rum==7){
         		mySymbolObject = sym.getSymbol("Noodle").play(0);
         		price=150;
         	}else if(rum==8){
         		mySymbolObject = sym.getSymbol("Hotdog").play(0);
         		price=300;
         	}else if(rum==9){
         		mySymbolObject = sym.getSymbol("Potato").play(0);
         		price=80;
         	}else if(rum==10){
         		mySymbolObject = sym.getSymbol("Amedog").play(0);
         		price=220;
         	}
         
         
         
         
         
         }else {
         //間違い音
         if(flag==0){
         	var bu = new Howl({
         	urls: ['audio/bu1.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         //ハート減らし
          hart=hart-1;
          sym.$("Ki").html("×"+hart);
         	// エレメントを表示します。
         	//  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         	//  使用できる DOM エレメントに変えます)。
         	sym.$("Ki").show();
         
         	mySymbolObject = sym.getSymbol("Batu").play();
         }
         //ノルマ達成
         if(noruma==7){
         noruma=0;
         bsum=0;
         
         if(flag==0){
         music.stop();
         };
         
         sym.$("okanjo").hide();
         
         sym.$("yarinaoshi").hide();
         
         sym.$("selectYen").hide();
         //クリア画面
         sym.$("C").show();
         // クリア音
         if(flag==0){
         	var fanfare = new Howl({
         	urls: ['audio/fanfare1.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         // シンボルのインスタンスであるエレメントを削除
         // (getSymbol はシンボルインスタンスエレメントのシンボルオブジェクトを検
         clearInterval(tCounter);
         sym.getComposition().getStage().getSymbol("time").deleteSymbol();
         //タイム保存
         level1=timerCount;
         sym.$("test").html(level1);
         sym.$("test").show();
         
         
         //fanction(time)入ってた
         mySymbolObject = sym.getSymbol("kyabekaba").stop(0);
         mySymbolObject = sym.getSymbol("Apple").stop(0);
         mySymbolObject = sym.getSymbol("umai").stop(0);
         mySymbolObject = sym.getSymbol("orange").stop(0);
         mySymbolObject = sym.getSymbol("Hambarger").stop(0);
         mySymbolObject = sym.getSymbol("Ice").stop(0);
         mySymbolObject = sym.getSymbol("Noodle").stop(0);
         mySymbolObject = sym.getSymbol("Hotdog").stop(0);
         mySymbolObject = sym.getSymbol("Potato").stop(0);
         mySymbolObject = sym.getSymbol("Amedog").stop(0);					
         }
         if(hart==0){
         
         if(flag==0){
         music.stop();
         var zannen = new Howl({
         	urls: ['audio/zannen.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         sym.$("Nokori").html("あと"+(7-bsum)+"個でした...");
         sym.$("Nokori").show();
         sym.$("B").show();
         sym.$("okanjo").hide();
         
         sym.$("yarinaoshi").hide();
         
         sym.$("selectYen").hide();						
         // シンボルのインスタンスであるエレメントを削除
         // (getSymbol はシンボルインスタンスエレメントのシンボルオブジェクトを検
         sym.getComposition().getStage().getSymbol("time").deleteSymbol();
         mySymbolObject = sym.getSymbol("kyabekaba").stop(0);
         mySymbolObject = sym.getSymbol("Apple").stop(0);
         mySymbolObject = sym.getSymbol("umai").stop(0);
         mySymbolObject = sym.getSymbol("orange").stop(0);
         mySymbolObject = sym.getSymbol("Hambarger").stop(0);
         mySymbolObject = sym.getSymbol("Ice").stop(0);
         mySymbolObject = sym.getSymbol("Noodle").stop(0);
         mySymbolObject = sym.getSymbol("Hotdog").stop(0);
         mySymbolObject = sym.getSymbol("Potato").stop(0);
         mySymbolObject = sym.getSymbol("Amedog").stop(0);	
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_buysum}", "touchstart", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         
         
         sym.$("buysum").html();
         	// エレメントを表示します。
         	//  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         	//  使用できる DOM エレメントに変えます)。
         	sym.$("buysum").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_back}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         document.location.reload(true);

      });
      //Edge binding end

   })("hondai1");
   //Edge symbol end:'hondai1'

   //=========================================================
   
   //Edge symbol: 'hondai_1'
   (function(symbolName) {   
   
      })("hondai4");
   //Edge symbol end:'hondai4'

   //=========================================================
   
   //Edge symbol: 'time_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // コードをここに挿入
      });
         //Edge binding end

      })("time2");
   //Edge symbol end:'time2'

   //=========================================================
   
   //Edge symbol: 'umai'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 10 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("kyabekaba").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=30;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Apple").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=200;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("umai").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=10;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("orange").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hambarger").play(0);
         
         
         price=250;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Ice").play(0);
         
         
         price=120;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Noodle").play(0);
         
         
         price=150;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hotdog").play(0);
         
         
         price=300;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Potato").play(0);
         
         
         price=80;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Amedog").play(0);
         
         
         price=220;
         }

      });
      //Edge binding end

   })("umai");
   //Edge symbol end:'umai'

   //=========================================================
   
   //Edge symbol: 'orange'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 10 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("kyabekaba").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=30;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Apple").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=200;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("umai").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=10;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("orange").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hambarger").play(0);
         
         
         price=250;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Ice").play(0);
         
         
         price=120;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Noodle").play(0);
         
         
         price=150;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hotdog").play(0);
         
         
         price=300;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Potato").play(0);
         
         
         price=80;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Amedog").play(0);
         
         
         price=220;
         }

      });
      //Edge binding end

   })("orange");
   //Edge symbol end:'orange'

   //=========================================================
   
   //Edge symbol: 'Apple'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 10 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("kyabekaba").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=30;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Apple").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=200;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("umai").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=10;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("orange").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hambarger").play(0);
         
         
         price=250;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Ice").play(0);
         
         
         price=120;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Noodle").play(0);
         
         
         price=150;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hotdog").play(0);
         
         
         price=300;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Potato").play(0);
         
         
         price=80;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Amedog").play(0);
         
         
         price=220;
         }

      });
      //Edge binding end

   })("Apple");
   //Edge symbol end:'Apple'

   //=========================================================
   
   //Edge symbol: 'kyabekaba'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // コードをここに挿入
         //時間切れの処理
         rum=Math.round (Math.random () * 10 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("kyabekaba").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=30;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Apple").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=200;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("umai").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=10;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("orange").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hambarger").play(0);
         
         
         price=250;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Ice").play(0);
         
         
         price=120;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Noodle").play(0);
         
         
         price=150;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hotdog").play(0);
         
         
         price=300;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Potato").play(0);
         
         
         price=80;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Amedog").play(0);
         
         
         price=220;
         }
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         
         
         
         

      });
      //Edge binding end

   })("kyabekaba");
   //Edge symbol end:'kyabekaba'

   //=========================================================
   
   //Edge symbol: 'Batu'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // コードをここに挿入// シンボルのインスタンスであるエレメントを削除
         // (getSymbol はシンボルインスタンスエレメントのシンボルオブジェクトを検索)
         sym.getSymbol("Batu2").deleteSymbol();

      });
      //Edge binding end

   })("Batu");
   //Edge symbol end:'Batu'

   //=========================================================
   
   //Edge symbol: 'batu'
   (function(symbolName) {   
   
   })("batu");
   //Edge symbol end:'batu'

   //=========================================================
   
   //Edge symbol: 'Hambarger'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 10 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("kyabekaba").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=30;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Apple").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=200;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("umai").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=10;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("orange").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hambarger").play(0);
         
         
         price=250;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Ice").play(0);
         
         
         price=120;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Noodle").play(0);
         
         
         price=150;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hotdog").play(0);
         
         
         price=300;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Potato").play(0);
         
         
         price=80;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Amedog").play(0);
         
         
         price=220;
         }

      });
      //Edge binding end

   })("Hambarger");
   //Edge symbol end:'Hambarger'

   //=========================================================
   
   //Edge symbol: 'Ice'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // コードをここに挿入
         rum=Math.round (Math.random () * 7 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("kyabekaba").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=30;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Apple").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=200;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("umai").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=10;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("orange").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hambager").play(0);
         
         
         price=250;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Ice").play(0);
         
         
         price=120;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Noodle").play(0);
         
         
         price=150;
         }

      });
      //Edge binding end

   })("Ice3");
   //Edge symbol end:'Ice3'

   //=========================================================
   
   //Edge symbol: 'Noodle'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 10 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("kyabekaba").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=30;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Apple").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=200;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("umai").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=10;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("orange").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hambarger").play(0);
         
         
         price=250;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Ice").play(0);
         
         
         price=120;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Noodle").play(0);
         
         
         price=150;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hotdog").play(0);
         
         
         price=300;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Potato").play(0);
         
         
         price=80;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Amedog").play(0);
         
         
         price=220;
         }

      });
      //Edge binding end

   })("Noodle");
   //Edge symbol end:'Noodle'

   //=========================================================
   
   //Edge symbol: 'Maido'
   (function(symbolName) {   
   
   })("Maido");
   //Edge symbol end:'Maido'

   //=========================================================
   
   //Edge symbol: 'Ice_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 10 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("kyabekaba").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=30;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Apple").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=200;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("umai").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=10;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("orange").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hambarger").play(0);
         
         
         price=250;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Ice").play(0);
         
         
         price=120;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Noodle").play(0);
         
         
         price=150;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hotdog").play(0);
         
         
         price=300;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Potato").play(0);
         
         
         price=80;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Amedog").play(0);
         
         
         price=220;
         }

      });
      //Edge binding end

   })("Ice");
   //Edge symbol end:'Ice'

   //=========================================================
   
   //Edge symbol: 'fanta'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // コードをここに挿
         rum=Math.round (Math.random () * 9 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("kyabekaba").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=30;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Apple").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=200;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("umai").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=10;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("orange").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hambager").play(0);
         
         
         price=250;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Ice").play(0);
         
         
         price=120;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Noodle").play(0);
         
         
         price=150;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("fanta").play(0);
         
         
         price=150;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Coke").play(0);
         
         
         price=120;
         }

      });
      //Edge binding end

   })("fanta");
   //Edge symbol end:'fanta'

   //=========================================================
   
   //Edge symbol: 'Coke'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // コードをここに挿入
         rum=Math.round (Math.random () * 9 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("kyabekaba").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=30;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Apple").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=200;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("umai").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=10;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("orange").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hambager").play(0);
         
         
         price=250;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Ice").play(0);
         
         
         price=120;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Noodle").play(0);
         
         
         price=150;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("fanta").play(0);
         
         
         price=150;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Coke").play(0);
         
         
         price=120;
         }

      });
      //Edge binding end

   })("Coke");
   //Edge symbol end:'Coke'

   //=========================================================
   
   //Edge symbol: 'hondai1_1'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         rum=Math.round (Math.random () * 13 + 0.5);
         if(rum==1){
         mySymbolObject = sym.getSymbol("kyabekaba2").play();
         price=25;
         }
         
         if(rum==2){
         mySymbolObject = sym.getSymbol("Apple2").play();
         price=260;
         }
         
         if(rum==3){
         mySymbolObject = sym.getSymbol("umai2").play();
         price=35;
         }
         
         if(rum==4){
         mySymbolObject = sym.getSymbol("orange2").play();
         price=160;
         }
         
         if(rum==5){
         mySymbolObject = sym.getSymbol("Hambarger2").play();
         price=315;
         }
         
         if(rum==6){
         mySymbolObject = sym.getSymbol("Ice2").play();
         price=115;
         }
         
         if(rum==7){
         mySymbolObject = sym.getSymbol("Noodle2").play();
         price=130;
         }
         if(rum==8){
         mySymbolObject = sym.getSymbol("Hotdog2").play();
         price=350;
         }
         
         if(rum==9){
         mySymbolObject = sym.getSymbol("Potato2").play();
         price=110;
         }
         
         if(rum==10){
         mySymbolObject = sym.getSymbol("Amedog2").play();
         price=170;
         }
         
         
         if(rum==11){
         mySymbolObject = sym.getSymbol("Fchicken2").play();
         price=175;
         }
         
         if(rum==12){
         mySymbolObject = sym.getSymbol("Crape2").play();
         price=320;
         }
         
         if(rum==13){
         mySymbolObject = sym.getSymbol("Nikuman2").play();
         price=135;
         }

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s10yen}", "click", function(sym, e) {

         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         // 小銭音
         if(flag==0){
         var zeni = new Howl({
           urls: ['audio/zeni1.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
           })
           };
         
         if(cnt==1){
         sym.$("yen1").attr('src','images/10yen.png');
         }
         
         if(cnt==2){
         sym.$("yen2").attr('src','images/10yen.png');
         }
         
         if(cnt==3){
         sym.$("yen3").attr('src','images/10yen.png');
         }
         
         if(cnt==4){
         sym.$("yen4").attr('src','images/10yen.png');
         }
         
         if(cnt==5){
         sym.$("yen5").attr('src','images/10yen.png');
         }
         
         
         if(cnt<6){
         
         cnt=cnt+1;
         sum=sum+10;
         }

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yarinaoshi}", "click", function(sym, e) {
         //やり直し音
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         // 正解音
         if(flag==0){
         	var reji = new Howl({
         	urls: ['audio/cancel1.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         // マウスクリックのコードをここに挿入します
         sym.$("yen1").attr('src','images/yen.png');
         sym.$("yen2").attr('src','images/yen.png');
         sym.$("yen3").attr('src','images/yen.png');
         sym.$("yen4").attr('src','images/yen.png');
         sym.$("yen5").attr('src','images/yen.png');
         cnt=1;
         sum=0;

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_okanjo}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         	console.log(rum);
         	console.log(sum);
         	console.log(price);
         
         if(price==sum){
         // 正解音
         if(flag==0){
         	var reji = new Howl({
         	urls: ['audio/reji1.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         
         	noruma=noruma+1;
         	bsum=bsum+1;//buysum
         // マウスクリックのコードをここに挿入します
         	sym.$("buysum").html(bsum);
         	// エレメントを表示します。
         	//  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         	//  使用できる DOM エレメントに変えます)。
         	sym.$("buysum").show();
         
         
         	sym.$("yen1").attr('src','images/yen.png');
         	sym.$("yen2").attr('src','images/yen.png');
         	sym.$("yen3").attr('src','images/yen.png');
         	sym.$("yen4").attr('src','images/yen.png');
         	sym.$("yen5").attr('src','images/yen.png');
         	cnt=1;
         	sum=0;
         
         	if(rum==1){
         	mySymbolObject = sym.getSymbol("kyabekaba2").stop(0);
         	//	sym.$("kyabekaba").hide();
         		//sym.$("kyabekaba").stop();
         	//	price=0;
         	}else if(rum==2){
         	mySymbolObject = sym.getSymbol("Apple2").stop(0);
         	//	sym.$("Apple").hide();
         		//sym.$("Apple").stop();
         	//	price=0;
         	}else if(rum==3){
         	mySymbolObject = sym.getSymbol("umai2").stop(0);
         	//	sym.$("umai").hide();
         		//sym.$("umai").stop();
         	//	price=0;
         	}else if(rum==4){
         	mySymbolObject = sym.getSymbol("orange2").stop(0);
         	//	sym.$("orange").hide();
         	//	sym.$("orange").stop();
         	//	price=0;
         	}else if(rum==5){
         	mySymbolObject = sym.getSymbol("Hambarger2").stop(0);
         	}else if(rum==6){
         	mySymbolObject = sym.getSymbol("Ice2").stop(0);
         	}else if(rum==7){
         	mySymbolObject = sym.getSymbol("Noodle2").stop(0);
         	}else if(rum==8){
         	mySymbolObject = sym.getSymbol("Hotdog2").stop(0);
         	}else if(rum==9){
         	mySymbolObject = sym.getSymbol("Potato2").stop(0);
         	}else if(rum==10){
         	mySymbolObject = sym.getSymbol("Amedog2").stop(0);
         	}else if(rum==11){
         	mySymbolObject = sym.getSymbol("Fchicken2").stop(0);
         	}else if(rum==12){
         	mySymbolObject = sym.getSymbol("Crape2").stop(0);
         	}else if(rum==13){
         	mySymbolObject = sym.getSymbol("Nikuman2").stop(0);
         	}
         
         
         
         
         	mySymbolObject = sym.getSymbol("Maido").play();
         
         
         
         
         
         
         	rum=Math.round (Math.random () * 13 + 0.5);
         
         	if(rum==1){
         		//sym.$("kyabekaba").show();
         		//sym.$("kyabekaba").play(0);
         
         		mySymbolObject = sym.getSymbol("kyabekaba2").play(0);
         		price=25;
         	}else if(rum==2){
         		//sym.$("Apple").show();
         		//sym.$("Apple").play(0);
         		mySymbolObject = sym.getSymbol("Apple2").play(0);
         		price=260;
         	}else if(rum==3){
         		//sym.$("umai").show();
         		//sym.$("umai").play(0);
         		mySymbolObject = sym.getSymbol("umai2").play(0);
         		price=35;
         	}else if(rum==4){
         		//sym.$("orange").show();
         		//sym.$("orange").play(0);
         		mySymbolObject = sym.getSymbol("orange2").play(0);
         		price=160;
         	}else if(rum==5){
         		mySymbolObject = sym.getSymbol("Hambarger2").play(0);
         		price=315;
         	}else if(rum==6){
         		mySymbolObject = sym.getSymbol("Ice2").play(0);
         		price=115;
         	}else if(rum==7){
         		mySymbolObject = sym.getSymbol("Noodle2").play(0);
         		price=130;
         	}else if(rum==8){
         		mySymbolObject = sym.getSymbol("Hotdog2").play(0);
         		price=350;
         	}else if(rum==9){
         		mySymbolObject = sym.getSymbol("Potato2").play(0);
         		price=110;
         	}else if(rum==10){
         		mySymbolObject = sym.getSymbol("Amedog2").play(0);
         		price=170;
         	}else if(rum==11){
         		mySymbolObject = sym.getSymbol("Fchicken2").play(0);
         		price=175;
         	}else if(rum==12){
         		mySymbolObject = sym.getSymbol("Crape2").play(0);
         		price=320;
         	}else if(rum==13){
         		mySymbolObject = sym.getSymbol("Nikuman2").play(0);
         		price=135;
         	}
         
         
         
         
         
         
         
         
         }else {
         //間違い音
         if(flag==0){
         	var bu = new Howl({
         	urls: ['audio/bu1.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         //ハート減らし
          hart=hart-1;
          sym.$("Ki").html("×"+hart);
         	// エレメントを表示します。
         	//  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         	//  使用できる DOM エレメントに変えます)。
         	sym.$("Ki").show();
         
         	mySymbolObject = sym.getSymbol("Batu").play();
         }
         if(noruma==9){
         // クリア音
         
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         noruma=0;
         bsum=0;
         if(flag==0){
         music.stop();
         }
         sym.$("okanjo").hide();
         
         sym.$("yarinaoshi").hide();
         
         sym.$("selectYen").hide();					
         //クリア画面
         if(flag==0){
         var fanfare = new Howl({
         	urls: ['audio/fanfare1.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         sym.$("C").show();
         
         // シンボルのインスタンスであるエレメントを削除
         // (getSymbol はシンボルインスタンスエレメントのシンボルオブジェクトを検
         clearInterval(tCounter);
         sym.getComposition().getStage().getSymbol("time2").deleteSymbol();
         //タイム保存
         level2=timerCount;
         sym.$("test2").html(level2);
         sym.$("test2").show();
         timesum=level1+level2;
         sym.getComposition().getStage().getSymbol("Title3").$("test3").html(timesum);
         sym.getComposition().getStage().getSymbol("Title3").$("test3").show();
         
         mySymbolObject = sym.getSymbol("kyabekaba2").stop(0);
         mySymbolObject = sym.getSymbol("Apple2").stop(0);
         mySymbolObject = sym.getSymbol("umai2").stop(0);
         mySymbolObject = sym.getSymbol("orange2").stop(0);
         mySymbolObject = sym.getSymbol("Hambarger2").stop(0);
         mySymbolObject = sym.getSymbol("Ice2").stop(0);
         mySymbolObject = sym.getSymbol("Noodle2").stop(0);
         mySymbolObject = sym.getSymbol("Hotdog2").stop(0);
         mySymbolObject = sym.getSymbol("Potato2").stop(0);
         mySymbolObject = sym.getSymbol("Amedog2").stop(0);	
         mySymbolObject = sym.getSymbol("Fchicken2").stop(0);
         mySymbolObject = sym.getSymbol("Crape2").stop(0);
         mySymbolObject = sym.getSymbol("Nikuman2").stop(0);	
         }
         if(hart==0){
         if(flag==0){
         music.stop();
         var zannen = new Howl({
         	urls: ['audio/zannen.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         sym.$("Nokori").html("あと"+(9-bsum)+"個でした...");
         sym.$("Nokori").show();
         sym.$("B").show();
         sym.$("okanjo").hide();
         
         sym.$("yarinaoshi").hide();
         
         sym.$("selectYen").hide();						
         // シンボルのインスタンスであるエレメントを削除
         // (getSymbol はシンボルインスタンスエレメントのシンボルオブジェクトを検
         sym.getComposition().getStage().getSymbol("time2").deleteSymbol();
         
         mySymbolObject = sym.getSymbol("kyabekaba2").stop(0);
         mySymbolObject = sym.getSymbol("Apple2").stop(0);
         mySymbolObject = sym.getSymbol("umai2").stop(0);
         mySymbolObject = sym.getSymbol("orange2").stop(0);
         mySymbolObject = sym.getSymbol("Hambarger2").stop(0);
         mySymbolObject = sym.getSymbol("Ice2").stop(0);
         mySymbolObject = sym.getSymbol("Noodle2").stop(0);
         mySymbolObject = sym.getSymbol("Hotdog2").stop(0);
         mySymbolObject = sym.getSymbol("Potato2").stop(0);
         mySymbolObject = sym.getSymbol("Amedog2").stop(0);	
         mySymbolObject = sym.getSymbol("Fchicken2").stop(0);
         mySymbolObject = sym.getSymbol("Crape2").stop(0);
         mySymbolObject = sym.getSymbol("Nikuman2").stop(0);	
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         
         }

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_buysum}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         sym.$("buysum").html();
         	// エレメントを表示します。
         	//  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         	//  使用できる DOM エレメントに変えます)。
         	sym.$("buysum").show();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s100yen}", "click", function(sym, e) {
         // 小銭音
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         if(flag==0){
         var zeni = new Howl({
           urls: ['audio/zeni1.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.0,
           })
           };
         
         if(cnt==1){
         sym.$("yen1").attr('src','images/100yen1.png');
         }
         
         if(cnt==2){
         sym.$("yen2").attr('src','images/100yen1.png');
         }
         
         if(cnt==3){
         sym.$("yen3").attr('src','images/100yen1.png');
         }
         
         if(cnt==4){
         sym.$("yen4").attr('src','images/100yen1.png');
         }
         
         if(cnt==5){
         sym.$("yen5").attr('src','images/100yen1.png');
         }
         
         if(cnt<6){
         
         cnt=cnt+1;
         sum=sum+100;
         }

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s50yen}", "click", function(sym, e) {
         // 小銭音
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         if(flag==0){
         var zeni = new Howl({
           urls: ['audio/zeni1.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
           })
           };
         
         if(cnt==1){
         sym.$("yen1").attr('src','images/yen50.png');
         }
         
         if(cnt==2){
         sym.$("yen2").attr('src','images/yen50.png');
         }
         
         if(cnt==3){
         sym.$("yen3").attr('src','images/yen50.png');
         }
         
         if(cnt==4){
         sym.$("yen4").attr('src','images/yen50.png');
         }
         
         if(cnt==5){
         sym.$("yen5").attr('src','images/yen50.png');
         }
         
         if(cnt<6){
         
         cnt=cnt+1;
         sum=sum+50;
         }

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         sym.getComposition().getStage().getSymbol("Title3").$("koujityu").show();
         
         sym.getParentSymbol("hondai2")
         sym.getComposition().getStage().getSymbol("hondai2").deleteSymbol();
         sym.getComposition().getStage().getSymbol("time2").deleteSymbol();
         //効果音
         if(flag==0){
         btn2 = new Howl({
           urls: ['audio/btn2.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.3
         })
         };
         
         

      });
         //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_back}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         
         document.location.reload(true);

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s5yen}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         if(flag==0){
         var zeni = new Howl({
           urls: ['audio/zeni1.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.0,
           })
           };
         
         if(cnt==1){
         sym.$("yen1").attr('src','images/5yen.png');
         }
         
         if(cnt==2){
         sym.$("yen2").attr('src','images/5yen.png');
         }
         
         if(cnt==3){
         sym.$("yen3").attr('src','images/5yen.png');
         }
         
         if(cnt==4){
         sym.$("yen4").attr('src','images/5yen.png');
         }
         
         if(cnt==5){
         sym.$("yen5").attr('src','images/5yen.png');
         }
         
         if(cnt<6){
         
         cnt=cnt+1;
         sum=sum+5;
         }

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_next}", "touchstart", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         
         sym.getComposition().getStage().getSymbol("Title3").$("koujityu").show();
         sym.getParentSymbol("hondai2")
         sym.getComposition().getStage().getSymbol("hondai2").deleteSymbol();
         sym.getComposition().getStage().getSymbol("time2").deleteSymbol();
         //効果音
         if(flag==0){
         btn2 = new Howl({
           urls: ['audio/btn2.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.3
         })
         };
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_back}", "touchstart", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         
         
         document.location.reload(true);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s100yen}", "touchstart", function(sym, e) {
         // 小銭音
         
         if(flag==0){
         var zeni = new Howl({
           urls: ['audio/zeni1.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.0,
           })
           };
         
         if(cnt==1){
         sym.$("yen1").attr('src','images/100yen1.png');
         }
         
         if(cnt==2){
         sym.$("yen2").attr('src','images/100yen1.png');
         }
         
         if(cnt==3){
         sym.$("yen3").attr('src','images/100yen1.png');
         }
         
         if(cnt==4){
         sym.$("yen4").attr('src','images/100yen1.png');
         }
         
         if(cnt==5){
         sym.$("yen5").attr('src','images/100yen1.png');
         }
         
         if(cnt<6){
         
         cnt=cnt+1;
         sum=sum+100;
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s50yen}", "touchstart", function(sym, e) {
         // 小銭音
         
         
         if(flag==0){
         var zeni = new Howl({
           urls: ['audio/zeni1.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
           })
           };
         
         if(cnt==1){
         sym.$("yen1").attr('src','images/yen50.png');
         }
         
         if(cnt==2){
         sym.$("yen2").attr('src','images/yen50.png');
         }
         
         if(cnt==3){
         sym.$("yen3").attr('src','images/yen50.png');
         }
         
         if(cnt==4){
         sym.$("yen4").attr('src','images/yen50.png');
         }
         
         if(cnt==5){
         sym.$("yen5").attr('src','images/yen50.png');
         }
         
         if(cnt<6){
         
         cnt=cnt+1;
         sum=sum+50;
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s10yen}", "touchstart", function(sym, e) {
         // 小銭音
         
         if(flag==0){
         var zeni = new Howl({
           urls: ['audio/zeni1.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
           })
           };
         
         if(cnt==1){
         sym.$("yen1").attr('src','images/10yen.png');
         }
         
         if(cnt==2){
         sym.$("yen2").attr('src','images/10yen.png');
         }
         
         if(cnt==3){
         sym.$("yen3").attr('src','images/10yen.png');
         }
         
         if(cnt==4){
         sym.$("yen4").attr('src','images/10yen.png');
         }
         
         if(cnt==5){
         sym.$("yen5").attr('src','images/10yen.png');
         }
         
         
         if(cnt<6){
         
         cnt=cnt+1;
         sum=sum+10;
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s5yen}", "touchstart", function(sym, e) {
         
         if(flag==0){
         var zeni = new Howl({
           urls: ['audio/zeni1.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.0,
           })
           };
         
         if(cnt==1){
         sym.$("yen1").attr('src','images/5yen.png');
         }
         
         if(cnt==2){
         sym.$("yen2").attr('src','images/5yen.png');
         }
         
         if(cnt==3){
         sym.$("yen3").attr('src','images/5yen.png');
         }
         
         if(cnt==4){
         sym.$("yen4").attr('src','images/5yen.png');
         }
         
         if(cnt==5){
         sym.$("yen5").attr('src','images/5yen.png');
         }
         
         if(cnt<6){
         
         cnt=cnt+1;
         sum=sum+5;
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yarinaoshi}", "touchstart", function(sym, e) {
         //やり直し音
         // 正解音
         
         if(flag==0){
         	var reji = new Howl({
         	urls: ['audio/cancel1.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         // マウスクリックのコードをここに挿入します
         sym.$("yen1").attr('src','images/yen.png');
         sym.$("yen2").attr('src','images/yen.png');
         sym.$("yen3").attr('src','images/yen.png');
         sym.$("yen4").attr('src','images/yen.png');
         sym.$("yen5").attr('src','images/yen.png');
         cnt=1;
         sum=0;
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_okanjo}", "touchstart", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         
         
         	console.log(rum);
         	console.log(sum);
         	console.log(price);
         
         if(price==sum){
         // 正解音
         if(flag==0){
         	var reji = new Howl({
         	urls: ['audio/reji1.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         
         	noruma=noruma+1;
         	bsum=bsum+1;//buysum
         // マウスクリックのコードをここに挿入します
         	sym.$("buysum").html(bsum);
         	// エレメントを表示します。
         	//  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         	//  使用できる DOM エレメントに変えます)。
         	sym.$("buysum").show();
         
         
         	sym.$("yen1").attr('src','images/yen.png');
         	sym.$("yen2").attr('src','images/yen.png');
         	sym.$("yen3").attr('src','images/yen.png');
         	sym.$("yen4").attr('src','images/yen.png');
         	sym.$("yen5").attr('src','images/yen.png');
         	cnt=1;
         	sum=0;
         
         	if(rum==1){
         	mySymbolObject = sym.getSymbol("kyabekaba2").stop(0);
         	//	sym.$("kyabekaba").hide();
         		//sym.$("kyabekaba").stop();
         	//	price=0;
         	}else if(rum==2){
         	mySymbolObject = sym.getSymbol("Apple2").stop(0);
         	//	sym.$("Apple").hide();
         		//sym.$("Apple").stop();
         	//	price=0;
         	}else if(rum==3){
         	mySymbolObject = sym.getSymbol("umai2").stop(0);
         	//	sym.$("umai").hide();
         		//sym.$("umai").stop();
         	//	price=0;
         	}else if(rum==4){
         	mySymbolObject = sym.getSymbol("orange2").stop(0);
         	//	sym.$("orange").hide();
         	//	sym.$("orange").stop();
         	//	price=0;
         	}else if(rum==5){
         	mySymbolObject = sym.getSymbol("Hambarger2").stop(0);
         	}else if(rum==6){
         	mySymbolObject = sym.getSymbol("Ice2").stop(0);
         	}else if(rum==7){
         	mySymbolObject = sym.getSymbol("Noodle2").stop(0);
         	}else if(rum==8){
         	mySymbolObject = sym.getSymbol("Hotdog2").stop(0);
         	}else if(rum==9){
         	mySymbolObject = sym.getSymbol("Potato2").stop(0);
         	}else if(rum==10){
         	mySymbolObject = sym.getSymbol("Amedog2").stop(0);
         	}else if(rum==11){
         	mySymbolObject = sym.getSymbol("Fchicken2").stop(0);
         	}else if(rum==12){
         	mySymbolObject = sym.getSymbol("Crape2").stop(0);
         	}else if(rum==13){
         	mySymbolObject = sym.getSymbol("Nikuman2").stop(0);
         	}
         
         
         
         
         	mySymbolObject = sym.getSymbol("Maido").play();
         
         
         
         
         
         
         	rum=Math.round (Math.random () * 13 + 0.5);
         
         	if(rum==1){
         		//sym.$("kyabekaba").show();
         		//sym.$("kyabekaba").play(0);
         
         		mySymbolObject = sym.getSymbol("kyabekaba2").play(0);
         		price=25;
         	}else if(rum==2){
         		//sym.$("Apple").show();
         		//sym.$("Apple").play(0);
         		mySymbolObject = sym.getSymbol("Apple2").play(0);
         		price=260;
         	}else if(rum==3){
         		//sym.$("umai").show();
         		//sym.$("umai").play(0);
         		mySymbolObject = sym.getSymbol("umai2").play(0);
         		price=35;
         	}else if(rum==4){
         		//sym.$("orange").show();
         		//sym.$("orange").play(0);
         		mySymbolObject = sym.getSymbol("orange2").play(0);
         		price=160;
         	}else if(rum==5){
         		mySymbolObject = sym.getSymbol("Hambarger2").play(0);
         		price=315;
         	}else if(rum==6){
         		mySymbolObject = sym.getSymbol("Ice2").play(0);
         		price=115;
         	}else if(rum==7){
         		mySymbolObject = sym.getSymbol("Noodle2").play(0);
         		price=130;
         	}else if(rum==8){
         		mySymbolObject = sym.getSymbol("Hotdog2").play(0);
         		price=350;
         	}else if(rum==9){
         		mySymbolObject = sym.getSymbol("Potato2").play(0);
         		price=110;
         	}else if(rum==10){
         		mySymbolObject = sym.getSymbol("Amedog2").play(0);
         		price=170;
         	}else if(rum==11){
         		mySymbolObject = sym.getSymbol("Fchicken2").play(0);
         		price=175;
         	}else if(rum==12){
         		mySymbolObject = sym.getSymbol("Crape2").play(0);
         		price=320;
         	}else if(rum==13){
         		mySymbolObject = sym.getSymbol("Nikuman2").play(0);
         		price=135;
         	}
         
         
         
         
         
         
         
         
         }else {
         //間違い音
         if(flag==0){
         	var bu = new Howl({
         	urls: ['audio/bu1.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         	})
         };
         //ハート減らし
          hart=hart-1;
          sym.$("Ki").html("×"+hart);
         	// エレメントを表示します。
         	//  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         	//  使用できる DOM エレメントに変えます)。
         	sym.$("Ki").show();
         
         	mySymbolObject = sym.getSymbol("Batu").play();
         }
         if(noruma==9){
         // クリア音
         
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         noruma=0;
         bsum=0;
         if(flag==0){
         	music.stop();
         }
         sym.$("okanjo").hide();
         
         sym.$("yarinaoshi").hide();
         
         sym.$("selectYen").hide();					
         //クリア画面
         
         sym.$("C").show();
         if(flag==0){
         	var fanfare = new Howl({
         		urls: ['audio/fanfare1.mp3'],
         		autoplay: true,
         		loop: false,
         		volume: 0.5,
         	})
         };
         // シンボルのインスタンスであるエレメントを削除
         // (getSymbol はシンボルインスタンスエレメントのシンボルオブジェクトを検
         clearInterval(tCounter);
         sym.getComposition().getStage().getSymbol("time2").deleteSymbol();
         //タイム保存
         level2=timerCount;
         sym.$("test2").html(level2);
         sym.$("test2").show();
         timesum=level1+level2;
         sym.getComposition().getStage().getSymbol("Title3").$("test3").html(timesum);
         sym.getComposition().getStage().getSymbol("Title3").$("test3").show();
         
         mySymbolObject = sym.getSymbol("kyabekaba2").stop(0);
         mySymbolObject = sym.getSymbol("Apple2").stop(0);
         mySymbolObject = sym.getSymbol("umai2").stop(0);
         mySymbolObject = sym.getSymbol("orange2").stop(0);
         mySymbolObject = sym.getSymbol("Hambarger2").stop(0);
         mySymbolObject = sym.getSymbol("Ice2").stop(0);
         mySymbolObject = sym.getSymbol("Noodle2").stop(0);
         mySymbolObject = sym.getSymbol("Hotdog2").stop(0);
         mySymbolObject = sym.getSymbol("Potato2").stop(0);
         mySymbolObject = sym.getSymbol("Amedog2").stop(0);	
         mySymbolObject = sym.getSymbol("Fchicken2").stop(0);
         mySymbolObject = sym.getSymbol("Crape2").stop(0);
         mySymbolObject = sym.getSymbol("Nikuman2").stop(0);	
         }
         if(hart==0){
         if(flag==0){
         music.stop();
         var zannen = new Howl({
         	urls: ['audio/zannen.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         sym.$("Nokori").html("あと"+(9-bsum)+"個でした...");
         sym.$("Nokori").show();
         sym.$("B").show();
         sym.$("okanjo").hide();
         
         sym.$("yarinaoshi").hide();
         
         sym.$("selectYen").hide();						
         // シンボルのインスタンスであるエレメントを削除
         // (getSymbol はシンボルインスタンスエレメントのシンボルオブジェクトを検
         sym.getComposition().getStage().getSymbol("time2").deleteSymbol();
         
         mySymbolObject = sym.getSymbol("kyabekaba2").stop(0);
         mySymbolObject = sym.getSymbol("Apple2").stop(0);
         mySymbolObject = sym.getSymbol("umai2").stop(0);
         mySymbolObject = sym.getSymbol("orange2").stop(0);
         mySymbolObject = sym.getSymbol("Hambarger2").stop(0);
         mySymbolObject = sym.getSymbol("Ice2").stop(0);
         mySymbolObject = sym.getSymbol("Noodle2").stop(0);
         mySymbolObject = sym.getSymbol("Hotdog2").stop(0);
         mySymbolObject = sym.getSymbol("Potato2").stop(0);
         mySymbolObject = sym.getSymbol("Amedog2").stop(0);	
         mySymbolObject = sym.getSymbol("Fchicken2").stop(0);
         mySymbolObject = sym.getSymbol("Crape2").stop(0);
         mySymbolObject = sym.getSymbol("Nikuman2").stop(0);	
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_buysum}", "touchstart", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         
         
         
         sym.$("buysum").html();
         	// エレメントを表示します。
         	//  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         	//  使用できる DOM エレメントに変えます)。
         	sym.$("buysum").show();
         

      });
      //Edge binding end

      })("hondai2");
   //Edge symbol end:'hondai2'

   //=========================================================
   
   //Edge symbol: 'kyabekaba_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 13 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("kyabekaba2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=25;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Apple2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=260;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("umai2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=35;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("orange2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hambarger2").play(0);
         
         
         price=315;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Ice2").play(0);
         
         
         price=115;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Noodle2").play(0);
         
         
         price=130;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hotdog2").play(0);
         
         
         price=350;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Potato2").play(0);
         
         
         price=110;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Amedog2").play(0);
         
         
         price=170;
         }else if(rum==11){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Fchicken2").play(0);
         
         
         price=175;
         }else if(rum==12){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Crape2").play(0);
         
         
         price=320;
         }else if(rum==13){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Nikuman2").play(0);
         
         
         price=135;
         }
         
         
         

      });
         //Edge binding end

      })("kyabekaba2");
   //Edge symbol end:'kyabekaba2'

   //=========================================================
   
   //Edge symbol: 'Apple2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 13 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("kyabekaba2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=25;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Apple2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=260;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("umai2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=35;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("orange2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hambarger2").play(0);
         
         
         price=315;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Ice2").play(0);
         
         
         price=115;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Noodle2").play(0);
         
         
         price=130;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hotdog2").play(0);
         
         
         price=350;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Potato2").play(0);
         
         
         price=110;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Amedog2").play(0);
         
         
         price=170;
         }else if(rum==11){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Fchicken2").play(0);
         
         
         price=175;
         }else if(rum==12){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Crape2").play(0);
         
         
         price=320;
         }else if(rum==13){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Nikuman2").play(0);
         
         
         price=135;
         }

      });
         //Edge binding end

      })("Apple2");
   //Edge symbol end:'Apple2'

   //=========================================================
   
   //Edge symbol: 'Hambarger_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 13 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("kyabekaba2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=25;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Apple2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=260;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("umai2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=35;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("orange2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hambarger2").play(0);
         
         
         price=315;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Ice2").play(0);
         
         
         price=115;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Noodle2").play(0);
         
         
         price=130;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hotdog2").play(0);
         
         
         price=350;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Potato2").play(0);
         
         
         price=110;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Amedog2").play(0);
         
         
         price=170;
         }else if(rum==11){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Fchicken2").play(0);
         
         
         price=175;
         }else if(rum==12){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Crape2").play(0);
         
         
         price=320;
         }else if(rum==13){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Nikuman2").play(0);
         
         
         price=135;
         }

      });
         //Edge binding end

      })("Hambarger2");
   //Edge symbol end:'Hambarger2'

   //=========================================================
   
   //Edge symbol: 'Noodle_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 13 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("kyabekaba2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=25;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Apple2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=260;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("umai2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=35;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("orange2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hambarger2").play(0);
         
         
         price=315;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Ice2").play(0);
         
         
         price=115;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Noodle2").play(0);
         
         
         price=130;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hotdog2").play(0);
         
         
         price=350;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Potato2").play(0);
         
         
         price=110;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Amedog2").play(0);
         
         
         price=170;
         }else if(rum==11){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Fchicken2").play(0);
         
         
         price=175;
         }else if(rum==12){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Crape2").play(0);
         
         
         price=320;
         }else if(rum==13){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Nikuman2").play(0);
         
         
         price=135;
         }

      });
         //Edge binding end

      })("Noodle2");
   //Edge symbol end:'Noodle2'

   //=========================================================
   
   //Edge symbol: 'orange_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 13 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("kyabekaba2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=25;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Apple2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=260;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("umai2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=35;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("orange2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hambarger2").play(0);
         
         
         price=315;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Ice2").play(0);
         
         
         price=115;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Noodle2").play(0);
         
         
         price=130;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hotdog2").play(0);
         
         
         price=350;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Potato2").play(0);
         
         
         price=110;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Amedog2").play(0);
         
         
         price=170;
         }else if(rum==11){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Fchicken2").play(0);
         
         
         price=175;
         }else if(rum==12){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Crape2").play(0);
         
         
         price=320;
         }else if(rum==13){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Nikuman2").play(0);
         
         
         price=135;
         }

      });
         //Edge binding end

      })("orange2");
   //Edge symbol end:'orange2'

   //=========================================================
   
   //Edge symbol: 'umai_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 13 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("kyabekaba2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=25;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Apple2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=260;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("umai2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=35;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("orange2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hambarger2").play(0);
         
         
         price=315;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Ice2").play(0);
         
         
         price=115;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Noodle2").play(0);
         
         
         price=130;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hotdog2").play(0);
         
         
         price=350;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Potato2").play(0);
         
         
         price=110;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Amedog2").play(0);
         
         
         price=170;
         }else if(rum==11){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Fchicken2").play(0);
         
         
         price=175;
         }else if(rum==12){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Crape2").play(0);
         
         
         price=320;
         }else if(rum==13){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Nikuman2").play(0);
         
         
         price=135;
         }

      });
         //Edge binding end

      })("umai2");
   //Edge symbol end:'umai2'

   //=========================================================
   
   //Edge symbol: 'Ice_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 13 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("kyabekaba2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=25;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Apple2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=260;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("umai2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=35;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("orange2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hambarger2").play(0);
         
         
         price=315;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Ice2").play(0);
         
         
         price=115;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Noodle2").play(0);
         
         
         price=130;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hotdog2").play(0);
         
         
         price=350;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Potato2").play(0);
         
         
         price=110;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Amedog2").play(0);
         
         
         price=170;
         }else if(rum==11){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Fchicken2").play(0);
         
         
         price=175;
         }else if(rum==12){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Crape2").play(0);
         
         
         price=320;
         }else if(rum==13){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Nikuman2").play(0);
         
         
         price=135;
         }

      });
         //Edge binding end

      })("Ice2");
   //Edge symbol end:'Ice2'

   //=========================================================
   
   //Edge symbol: 'Title2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Group4}", "click", function(sym, e) {
         //効果音
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         if(flag==0){
         btn2 = new Howl({
           urls: ['audio/btn2.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.3
         })
         };
         
         console.log(level1);
         //sym.getSymbol("Title2").deleteSymbol();
         if(flag==0){
          music = new Howl({
           urls: ['audio/bgm2.mp3'],
           autoplay: true,
           loop: true,
           volume: 0.3
         })
         };
         sym.getComposition().getStage().getSymbol("hondai2").$("Ki").html("×"+hart);
         	// エレメントを表示します。
         	//  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         	//  使用できる DOM エレメントに変えます)。
         	sym.getComposition().getStage().getSymbol("hondai2").$("Ki").show();
          timerCount=0; 
               	sym.getComposition().getStage().getSymbol("time2").$("time_txt").html(timerCount);
                         tCounter=setInterval(timer, 1000); //1000 will run the timer every 1 second
         
                       function timer()
                       {
                      timerCount=timerCount+1;
             	
         
         
                       sym.getComposition().getStage().getSymbol("time2").$("time_txt").html(timerCount); // Display the timer value 
         
                          }
         sym.getComposition().getStage().getSymbol("hondai2").play();	
         sym.getComposition().getStage().getSymbol("Title2").deleteSymbol();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group4}", "touchstart", function(sym, e) {
         //効果音
         
         if(flag==0){
         btn2 = new Howl({
           urls: ['audio/btn2.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.3
         })
         };
         
         console.log(level1);
         //sym.getSymbol("Title2").deleteSymbol();
         if(flag==0){
          music = new Howl({
           urls: ['audio/bgm2.mp3'],
           autoplay: true,
           loop: true,
           volume: 0.3
         })
         };
         sym.getComposition().getStage().getSymbol("hondai2").$("Ki").html("×"+hart);
         	// エレメントを表示します。
         	//  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         	//  使用できる DOM エレメントに変えます)。
         	sym.getComposition().getStage().getSymbol("hondai2").$("Ki").show();
          timerCount=0; 
               	sym.getComposition().getStage().getSymbol("time2").$("time_txt").html(timerCount);
                         tCounter=setInterval(timer, 1000); //1000 will run the timer every 1 second
         
                       function timer()
                       {
                      timerCount=timerCount+1;
             	
         
         
         
                       sym.getComposition().getStage().getSymbol("time2").$("time_txt").html(timerCount); // Display the timer value 
         
                          }
         sym.getComposition().getStage().getSymbol("hondai2").play();	
         sym.getComposition().getStage().getSymbol("Title2").deleteSymbol();

      });
      //Edge binding end

   })("Title2");
   //Edge symbol end:'Title2'

   //=========================================================
   
   //Edge symbol: 'hotdog'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 10 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("kyabekaba").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=30;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Apple").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=200;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("umai").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=10;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("orange").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hambarger").play(0);
         
         
         price=250;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Ice").play(0);
         
         
         price=120;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Noodle").play(0);
         
         
         price=150;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hotdog").play(0);
         
         
         price=300;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Potato").play(0);
         
         
         price=80;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Amedog").play(0);
         
         
         price=220;
         }

      });
      //Edge binding end

   })("hotdog");
   //Edge symbol end:'hotdog'

   //=========================================================
   
   //Edge symbol: 'Amedog'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 10 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("kyabekaba").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=30;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Apple").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=200;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("umai").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=10;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("orange").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hambarger").play(0);
         
         
         price=250;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Ice").play(0);
         
         
         price=120;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Noodle").play(0);
         
         
         price=150;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hotdog").play(0);
         
         
         price=300;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Potato").play(0);
         
         
         price=80;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Amedog").play(0);
         
         
         price=220;
         }

      });
      //Edge binding end

   })("Amedog");
   //Edge symbol end:'Amedog'

   //=========================================================
   
   //Edge symbol: 'Potato'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 10 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("kyabekaba").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=30;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Apple").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=200;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("umai").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=10;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("orange").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hambarger").play(0);
         
         
         price=250;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Ice").play(0);
         
         
         price=120;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Noodle").play(0);
         
         
         price=150;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Hotdog").play(0);
         
         
         price=300;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Potato").play(0);
         
         
         price=80;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai").getSymbol("Amedog").play(0);
         
         
         price=220;
         }

      });
      //Edge binding end

   })("Potato");
   //Edge symbol end:'Potato'

   //=========================================================
   
   //Edge symbol: 'hotdog_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 13 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("kyabekaba2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=25;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Apple2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=260;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("umai2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=35;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("orange2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hambarger2").play(0);
         
         
         price=315;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Ice2").play(0);
         
         
         price=115;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Noodle2").play(0);
         
         
         price=130;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hotdog2").play(0);
         
         
         price=350;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Potato2").play(0);
         
         
         price=110;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Amedog2").play(0);
         
         
         price=170;
         }else if(rum==11){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Fchicken2").play(0);
         
         
         price=175;
         }else if(rum==12){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Crape2").play(0);
         
         
         price=320;
         }else if(rum==13){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Nikuman2").play(0);
         
         
         price=135;
         }

      });
         //Edge binding end

      })("hotdog2");
   //Edge symbol end:'hotdog2'

   //=========================================================
   
   //Edge symbol: 'Potato_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 13 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("kyabekaba2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=25;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Apple2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=260;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("umai2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=35;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("orange2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hambarger2").play(0);
         
         
         price=315;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Ice2").play(0);
         
         
         price=115;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Noodle2").play(0);
         
         
         price=130;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hotdog2").play(0);
         
         
         price=350;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Potato2").play(0);
         
         
         price=110;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Amedog2").play(0);
         
         
         price=170;
         }else if(rum==11){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Fchicken2").play(0);
         
         
         price=175;
         }else if(rum==12){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Crape2").play(0);
         
         
         price=320;
         }else if(rum==13){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Nikuman2").play(0);
         
         
         price=135;
         }

      });
         //Edge binding end

      })("Potato2");
   //Edge symbol end:'Potato2'

   //=========================================================
   
   //Edge symbol: 'Amedog_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 13 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("kyabekaba2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=25;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Apple2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=260;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("umai2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=35;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("orange2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hambarger2").play(0);
         
         
         price=315;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Ice2").play(0);
         
         
         price=115;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Noodle2").play(0);
         
         
         price=130;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hotdog2").play(0);
         
         
         price=350;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Potato2").play(0);
         
         
         price=110;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Amedog2").play(0);
         
         
         price=170;
         }else if(rum==11){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Fchicken2").play(0);
         
         
         price=175;
         }else if(rum==12){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Crape2").play(0);
         
         
         price=320;
         }else if(rum==13){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Nikuman2").play(0);
         
         
         price=135;
         }

      });
         //Edge binding end

      })("Amedog2");
   //Edge symbol end:'Amedog2'

   //=========================================================
   
   //Edge symbol: 'Title2_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Group4}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         //sym.getSymbol("Title2").deleteSymbol();
         
         sym.getComposition().getStage().getSymbol("hondai3").$("Ki").html("×"+hart);
         	// エレメントを表示します。
         	//  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         	//  使用できる DOM エレメントに変えます)。
         	sym.getComposition().getStage().getSymbol("hondai3").$("Ki").show();
          timerCount=0; 
               	sym.getComposition().getStage().getSymbol("time3").$("time_txt").html(timerCount);
                        var tCounter=setInterval(timer, 1000); //1000 will run the timer every 1 second
         
                       function timer()
                       {
                      timerCount=timerCount;
             	if(timerCount<=-1){
             	// Edge Animate シンボル Javascript オブジェクトであるエレメントの jQuery ハンドルを取得します。
             	// シンボルのインスタンスであるエレメントから Edge Animate シンボルの
             	// Javascript オブジェクトを検索します。シンボルのオブジェクトを使用して、再生、停止などの
             	// シンボル関数を呼び出すことができます。
             	//sym.getSymbol("hondai").$("B").show();
             	//sym.getSymbol("hondai").getSymbol("kyabekaba").stop();
             	//sym.getSymbol("hondai").getSymbol("Apple").stop();
             	//sym.getSymbol("hondai").getSymbol("umai").stop();
             	//sym.getSymbol("hondai").getSymbol("orange").stop();
         		// シンボルのインスタンスであるエレメントを削除
         		// (getSymbol はシンボルインスタンスエレメントのシンボルオブジェクトを検索)
         		sym.getComposition().getStage().getSymbol("time3").deleteSymbol();
         
         // Edge Animate シンボル Javascript オブジェクトであるエレメントの jQuery ハンドルを取得します。
         
         
         
         
               	              return;	
               	              		}
         
         
         
                       sym.getComposition().getStage().getSymbol("time3").$("time_txt").html(timerCount); // Display the timer value 
         
                          }
         sym.getComposition().getStage().getSymbol("hondai3").play();	
         sym.getComposition().getStage().getSymbol("Title3").deleteSymbol();

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_back}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         document.location.reload(true);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_back}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         document.location.reload(true);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group4}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         sym.getComposition().getStage().getSymbol("hondai3").$("Ki").html("×"+hart);
         	// エレメントを表示します。
         	//  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         	//  使用できる DOM エレメントに変えます)。
         	sym.getComposition().getStage().getSymbol("hondai3").$("Ki").show();
          timerCount=0; 
               	sym.getComposition().getStage().getSymbol("time3").$("time_txt").html(timerCount);
                        var tCounter=setInterval(timer, 1000); //1000 will run the timer every 1 second
         
                       function timer()
                       {
                      timerCount=timerCount;
             	if(timerCount<=-1){
             	// Edge Animate シンボル Javascript オブジェクトであるエレメントの jQuery ハンドルを取得します。
             	// シンボルのインスタンスであるエレメントから Edge Animate シンボルの
             	// Javascript オブジェクトを検索します。シンボルのオブジェクトを使用して、再生、停止などの
             	// シンボル関数を呼び出すことができます。
             	//sym.getSymbol("hondai").$("B").show();
             	//sym.getSymbol("hondai").getSymbol("kyabekaba").stop();
             	//sym.getSymbol("hondai").getSymbol("Apple").stop();
             	//sym.getSymbol("hondai").getSymbol("umai").stop();
             	//sym.getSymbol("hondai").getSymbol("orange").stop();
         		// シンボルのインスタンスであるエレメントを削除
         		// (getSymbol はシンボルインスタンスエレメントのシンボルオブジェクトを検索)
         		sym.getComposition().getStage().getSymbol("time3").deleteSymbol();
         
         // Edge Animate シンボル Javascript オブジェクトであるエレメントの jQuery ハンドルを取得します。
         
         
         
         
               	              return;	
               	              		}
         
         
         
                       sym.getComposition().getStage().getSymbol("time3").$("time_txt").html(timerCount); // Display the timer value 
         
                          }
         sym.getComposition().getStage().getSymbol("hondai3").play();	
         sym.getComposition().getStage().getSymbol("Title3").deleteSymbol();

      });
      //Edge binding end

      })("Title3");
   //Edge symbol end:'Title3'

   //=========================================================
   
   //Edge symbol: 'hondai2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s10yen}", "click", function(sym, e) {
         // 小銭音
         if(flag==0){
         var zeni = new Howl({
           urls: ['audio/zeni1.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
           })
           };
         
         if(cnt==1){
         sym.$("yen1").attr('src','images/10yen.png');
         }
         
         if(cnt==2){
         sym.$("yen2").attr('src','images/10yen.png');
         }
         
         if(cnt==3){
         sym.$("yen3").attr('src','images/10yen.png');
         }
         
         if(cnt==4){
         sym.$("yen4").attr('src','images/10yen.png');
         }
         
         if(cnt==5){
         sym.$("yen5").attr('src','images/10yen.png');
         }
         
         
         if(cnt<6){
         }
         cnt=cnt+1;
         sum=sum+10;

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yarinaoshi}", "click", function(sym, e) {
         //やり直し音
         // 正解音
         if(flag==0){
         	var reji = new Howl({
         	urls: ['audio/cancel1.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         // マウスクリックのコードをここに挿入します
         sym.$("yen1").attr('src','images/yen.png');
         sym.$("yen2").attr('src','images/yen.png');
         sym.$("yen3").attr('src','images/yen.png');
         sym.$("yen4").attr('src','images/yen.png');
         sym.$("yen5").attr('src','images/yen.png');
         cnt=1;
         sum=0;

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_okanjo}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         	console.log(rum);
         	console.log(sum);
         	console.log(price);
         
         if(price==sum){
         // 正解音
         if(flag==0){
         	var reji = new Howl({
         	urls: ['audio/reji1.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         
         	noruma=noruma+1;
         	bsum=bsum+1;//buysum
         // マウスクリックのコードをここに挿入します
         	sym.$("buysum").html(bsum);
         	// エレメントを表示します。
         	//  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         	//  使用できる DOM エレメントに変えます)。
         	sym.$("buysum").show();
         
         
         	sym.$("yen1").attr('src','images/yen.png');
         	sym.$("yen2").attr('src','images/yen.png');
         	sym.$("yen3").attr('src','images/yen.png');
         	sym.$("yen4").attr('src','images/yen.png');
         	sym.$("yen5").attr('src','images/yen.png');
         	cnt=1;
         	sum=0;
         
         	if(rum==1){
         	mySymbolObject = sym.getSymbol("kyabekaba2").stop(0);
         	//	sym.$("kyabekaba").hide();
         		//sym.$("kyabekaba").stop();
         	//	price=0;
         	}else if(rum==2){
         	mySymbolObject = sym.getSymbol("Apple2").stop(0);
         	//	sym.$("Apple").hide();
         		//sym.$("Apple").stop();
         	//	price=0;
         	}else if(rum==3){
         	mySymbolObject = sym.getSymbol("umai2").stop(0);
         	//	sym.$("umai").hide();
         		//sym.$("umai").stop();
         	//	price=0;
         	}else if(rum==4){
         	mySymbolObject = sym.getSymbol("orange2").stop(0);
         	//	sym.$("orange").hide();
         	//	sym.$("orange").stop();
         	//	price=0;
         	}else if(rum==5){
         	mySymbolObject = sym.getSymbol("Hambarger2").stop(0);
         	}else if(rum==6){
         	mySymbolObject = sym.getSymbol("Ice2").stop(0);
         	}else if(rum==7){
         	mySymbolObject = sym.getSymbol("Noodle2").stop(0);
         	}else if(rum==8){
         	mySymbolObject = sym.getSymbol("Hotdog2").stop(0);
         	}else if(rum==9){
         	mySymbolObject = sym.getSymbol("Potato2").stop(0);
         	}else if(rum==10){
         	mySymbolObject = sym.getSymbol("Amedog2").stop(0);
         	}
         
         	mySymbolObject = sym.getSymbol("Maido").play();
         
         
         
         
         
         
         	rum=Math.round (Math.random () * 10 + 0.5);
         
         	if(rum==1){
         		//sym.$("kyabekaba").show();
         		//sym.$("kyabekaba").play(0);
         
         		mySymbolObject = sym.getSymbol("kyabekaba2").play(0);
         		price=30;
         	}else if(rum==2){
         		//sym.$("Apple").show();
         		//sym.$("Apple").play(0);
         		mySymbolObject = sym.getSymbol("Apple2").play(0);
         		price=200;
         	}else if(rum==3){
         		//sym.$("umai").show();
         		//sym.$("umai").play(0);
         		mySymbolObject = sym.getSymbol("umai2").play(0);
         		price=10;
         	}else if(rum==4){
         		//sym.$("orange").show();
         		//sym.$("orange").play(0);
         		mySymbolObject = sym.getSymbol("orange2").play(0);
         		price=160;
         	}else if(rum==5){
         		mySymbolObject = sym.getSymbol("Hambarger2").play(0);
         		price=250;
         	}else if(rum==6){
         		mySymbolObject = sym.getSymbol("Ice2").play(0);
         		price=120;
         	}else if(rum==7){
         		mySymbolObject = sym.getSymbol("Noodle2").play(0);
         		price=150;
         	}else if(rum==8){
         		mySymbolObject = sym.getSymbol("Hotdog2").play(0);
         		price=300;
         	}else if(rum==9){
         		mySymbolObject = sym.getSymbol("Potato2").play(0);
         		price=80;
         	}else if(rum==10){
         		mySymbolObject = sym.getSymbol("Amedog2").play(0);
         		price=220;
         	}
         
         
         
         
         

				//間違い音
				if(flag==0){
         	var bu = new Howl({
         	urls: ['audio/bu1.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         //ハート減らし
          hart=hart-1;
          sym.$("Ki").html("×"+hart);
         	// エレメントを表示します。
         	//  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         	//  使用できる DOM エレメントに変えます)。
         	sym.$("Ki").show();
         
         	mySymbolObject = sym.getSymbol("Batu").play();
         }
         if(noruma==10){
         // クリア音
         if(flag==0){
         	var fanfare = new Howl({
         	urls: ['audio/fanfare1.mp3'],
         	autoplay: true,
         	loop: false,
         	volume: 0.5,
         					})
         					};
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         noruma=0;
         bsum=0;
         //クリア画面
         sym.$("C").show();
         
         // シンボルのインスタンスであるエレメントを削除
         // (getSymbol はシンボルインスタンスエレメントのシンボルオブジェクトを検
         sym.getComposition().getStage().getSymbol("time2").deleteSymbol();
         
         mySymbolObject = sym.getSymbol("kyabekaba2").stop(0);
         mySymbolObject = sym.getSymbol("Apple2").stop(0);
         mySymbolObject = sym.getSymbol("umai2").stop(0);
         mySymbolObject = sym.getSymbol("orange2").stop(0);
         mySymbolObject = sym.getSymbol("Hambarger2").stop(0);
         mySymbolObject = sym.getSymbol("Ice2").stop(0);
         mySymbolObject = sym.getSymbol("Noodle2").stop(0);
         mySymbolObject = sym.getSymbol("Hotdog2").stop(0);
         mySymbolObject = sym.getSymbol("Potato2").stop(0);
         mySymbolObject = sym.getSymbol("Amedog2").stop(0);					
         }
         if(hart==0){
         sym.$("Nokori").html("あと"+(3-bsum)+"個でした...");
         sym.$("Nokori").show();
         
         sym.$("B").show();
         // シンボルのインスタンスであるエレメントを削除
         // (getSymbol はシンボルインスタンスエレメントのシンボルオブジェクトを検
         sym.getComposition().getStage().getSymbol("time2").deleteSymbol();
         
         mySymbolObject = sym.getSymbol("kyabekaba2").stop(0);
         mySymbolObject = sym.getSymbol("Apple2").stop(0);
         mySymbolObject = sym.getSymbol("umai2").stop(0);
         mySymbolObject = sym.getSymbol("orange2").stop(0);
         mySymbolObject = sym.getSymbol("Hambarger2").stop(0);
         mySymbolObject = sym.getSymbol("Ice2").stop(0);
         mySymbolObject = sym.getSymbol("Noodle2").stop(0);
         mySymbolObject = sym.getSymbol("Hotdog2").stop(0);
         mySymbolObject = sym.getSymbol("Potato2").stop(0);
         mySymbolObject = sym.getSymbol("Amedog2").stop(0);					// 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         window.open("http://www.adobe.com", "_self");
         
         }

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_buysum}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         sym.$("buysum").html();
         	// エレメントを表示します。
         	//  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         	//  使用できる DOM エレメントに変えます)。
         	sym.$("buysum").show();

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s100yen}", "click", function(sym, e) {
         // 小銭音
         if(flag==0){
         var zeni = new Howl({
           urls: ['audio/zeni1.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.0,
           })
           };
         
         if(cnt==1){
         sym.$("yen1").attr('src','images/100yen1.png');
         }
         
         if(cnt==2){
         sym.$("yen2").attr('src','images/100yen1.png');
         }
         
         if(cnt==3){
         sym.$("yen3").attr('src','images/100yen1.png');
         }
         
         if(cnt==4){
         sym.$("yen4").attr('src','images/100yen1.png');
         }
         
         if(cnt==5){
         sym.$("yen5").attr('src','images/100yen1.png');
         }
         
         if(cnt<6){
         }
         cnt=cnt+1;
         sum=sum+100;

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s50yen}", "click", function(sym, e) {
         // 小銭音
         if(flag==0){
         var zeni = new Howl({
           urls: ['audio/zeni1.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
           })
           };
         
         if(cnt==1){
         sym.$("yen1").attr('src','images/yen50.png');
         }
         
         if(cnt==2){
         sym.$("yen2").attr('src','images/yen50.png');
         }
         
         if(cnt==3){
         sym.$("yen3").attr('src','images/yen50.png');
         }
         
         if(cnt==4){
         sym.$("yen4").attr('src','images/yen50.png');
         }
         
         if(cnt==5){
         sym.$("yen5").attr('src','images/yen50.png');
         }
         
         if(cnt<6){
         }
         cnt=cnt+1;
         sum=sum+50;

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         sym.getParentSymbol("hondai2")
         sym.getComposition().getStage().getSymbol("hondai2").deleteSymbol();
         sym.getComposition().getStage().getSymbol("time2").deleteSymbol();

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_C}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         sym.getParentSymbol("hondai2");
         sym.getComposition().getStage().getSymbol("hondai2").deleteSymbol();
         sym.getComposition().getStage().getSymbol("time2").deleteSymbol();

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_back}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         document.location.reload(true);

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s5yen}", "click", function(sym, e) {
      if(flag==0){
         var zeni = new Howl({
           urls: ['audio/zeni1.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.0,
           })
           };
         
         if(cnt==1){
         sym.$("yen1").attr('src','images/5yen.png');
         }
         
         if(cnt==2){
         sym.$("yen2").attr('src','images/5yen.png');
         }
         
         if(cnt==3){
         sym.$("yen3").attr('src','images/5yen.png');
         }
         
         if(cnt==4){
         sym.$("yen4").attr('src','images/5yen.png');
         }
         
         if(cnt==5){
         sym.$("yen5").attr('src','images/5yen.png');
         }
         
         if(cnt<6){
         }
         cnt=cnt+1;
         sum=sum+5;
         

      });
         //Edge binding end

         })("hondai3");
   //Edge symbol end:'hondai3'

   //=========================================================
   
   //Edge symbol: 'time2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // コードをここに挿入
      });
            //Edge binding end

         })("time3");
   //Edge symbol end:'time3'

   //=========================================================
   
   //Edge symbol: 'kyabekaba2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 10 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("kyabekaba2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=30;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Apple2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=200;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("umai2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=10;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("orange2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hambarger2").play(0);
         
         
         price=250;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Ice2").play(0);
         
         
         price=120;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Noodle2").play(0);
         
         
         price=150;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hotdog2").play(0);
         
         
         price=300;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Potato2").play(0);
         
         
         price=80;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Amedog2").play(0);
         
         
         price=220;
         }

      });
            //Edge binding end

         })("kyabekaba3");
   //Edge symbol end:'kyabekaba3'

   //=========================================================
   
   //Edge symbol: 'Fchicken'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 13 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("kyabekaba2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=25;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Apple2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=260;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("umai2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=35;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("orange2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hambarger2").play(0);
         
         
         price=315;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Ice2").play(0);
         
         
         price=115;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Noodle2").play(0);
         
         
         price=130;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hotdog2").play(0);
         
         
         price=350;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Potato2").play(0);
         
         
         price=110;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Amedog2").play(0);
         
         
         price=170;
         }else if(rum==11){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Fchicken2").play(0);
         
         
         price=175;
         }else if(rum==12){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Crape2").play(0);
         
         
         price=320;
         }else if(rum==13){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Nikuman2").play(0);
         
         
         price=135;
         }

      });
      //Edge binding end

   })("Fchicken");
   //Edge symbol end:'Fchicken'

   //=========================================================
   
   //Edge symbol: 'Crape2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 13 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("kyabekaba2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=25;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Apple2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=260;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("umai2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=35;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("orange2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hambarger2").play(0);
         
         
         price=315;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Ice2").play(0);
         
         
         price=115;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Noodle2").play(0);
         
         
         price=130;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hotdog2").play(0);
         
         
         price=350;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Potato2").play(0);
         
         
         price=110;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Amedog2").play(0);
         
         
         price=170;
         }else if(rum==11){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Fchicken2").play(0);
         
         
         price=175;
         }else if(rum==12){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Crape2").play(0);
         
         
         price=320;
         }else if(rum==13){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Nikuman2").play(0);
         
         
         price=135;
         }

      });
      //Edge binding end

   })("Crape2");
   //Edge symbol end:'Crape2'

   //=========================================================
   
   //Edge symbol: 'Nikuman2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         rum=Math.round (Math.random () * 13 + 0.5);
         
         if(rum==1){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("kyabekaba2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("kyabekaba").play();
         price=25;
         
         }else if(rum==2){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Apple2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("Apple").play();
         price=260;
         
         }else if(rum==3){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("umai2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("umai").play();
         price=35;
         
         }else if(rum==4){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("orange2").play(0);
         
         //var mySymbolObject = sym.getParentSymbol("orange").play();
         price=160;
         
         }else if(rum==5){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hambarger2").play(0);
         
         
         price=315;
         
         }else if(rum==6){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Ice2").play(0);
         
         
         price=115;
         }else if(rum==7){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Noodle2").play(0);
         
         
         price=130;
         }else if(rum==8){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Hotdog2").play(0);
         
         
         price=350;
         }else if(rum==9){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Potato2").play(0);
         
         
         price=110;
         }else if(rum==10){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Amedog2").play(0);
         
         
         price=170;
         }else if(rum==11){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Fchicken2").play(0);
         
         
         price=175;
         }else if(rum==12){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Crape2").play(0);
         
         
         price=320;
         }else if(rum==13){
         sym.getComposition().getStage().getSymbol("hondai2").getSymbol("Nikuman2").play(0);
         
         
         price=135;
         }

      });
      //Edge binding end

   })("Nikuman2");
   //Edge symbol end:'Nikuman2'

})(jQuery, AdobeEdge, "EDGE-157784368");