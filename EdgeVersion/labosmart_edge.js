/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'hondai3',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'time3',
            type:'rect',
            rect:['676','1','auto','auto','auto','auto']
         },
         {
            id:'Title3',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'hondai2',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'time2',
            type:'rect',
            rect:['536','14','auto','auto','auto','auto']
         },
         {
            id:'Title2',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'hondai',
            type:'rect',
            rect:['2','-2','auto','auto','auto','auto']
         },
         {
            id:'time',
            type:'rect',
            rect:['529px','14px','auto','auto','auto','auto']
         },
         {
            id:'Title',
            type:'group',
            rect:['0px','0px','0','0','auto','auto'],
            c:[
            {
               id:'Rectangle2',
               type:'rect',
               rect:['0px','0px','600px','400px','auto','auto'],
               fill:["rgba(241,255,109,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Group',
               type:'group',
               rect:['129','227','317','99','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'RoundRect',
                  type:'rect',
                  rect:['0px','0px','317px','99px','auto','auto'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(241,255,109,1)"],
                  stroke:[0,"rgb(0, 0, 0)","none"],
                  boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65)"]
               },
               {
                  id:'star',
                  type:'text',
                  rect:['63px','22px','201px','56px','auto','auto'],
                  text:"スタート",
                  align:"left",
                  font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',50,"rgba(0,0,0,1)","normal","none","normal"]
               }]
            },
            {
               id:'title',
               type:'text',
               rect:['102px','27px','400px','118px','auto','auto'],
               text:"レベル１",
               align:"center",
               font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',100,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'norma',
               type:'text',
               rect:['199px','188px','201px','37px','auto','auto'],
               text:"ノルマ　７個",
               align:"left",
               font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'MainTitle',
            type:'group',
            rect:['0','1','629','399','auto','auto'],
            c:[
            {
               id:'store2',
               type:'image',
               rect:['0px','0px','629px','399px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"store2.jpg",'0px','0px','99.9%','99.9%'],
               filter:[0,-1,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0]
            },
            {
               id:'smako_52',
               type:'image',
               rect:['315px','199px','200px','200px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"smako%205.png",'0px','0px']
            },
            {
               id:'smao',
               type:'image',
               rect:['19px','199px','200px','200px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"smao.png",'0px','0px']
            },
            {
               id:'Gname',
               type:'group',
               rect:['94px','91px','416','90','auto','auto'],
               c:[
               {
                  id:'RoundRect6',
                  type:'rect',
                  rect:['0px','0px','414px','84px','auto','auto'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(247,255,0,1.00)"],
                  stroke:[1,"rgb(0, 0, 0)","solid"],
                  boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65)"]
               },
               {
                  id:'title2',
                  type:'image',
                  rect:['8px','17px','400px','73px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"title.png",'0px','0px']
               }]
            },
            {
               id:'play',
               type:'group',
               rect:['213','276px','134','89','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'Ellipse',
                  type:'ellipse',
                  rect:['0px','0px','132px','87px','auto','auto'],
                  borderRadius:["50%","50%","50%","50%"],
                  fill:["rgba(0,255,239,1.00)"],
                  stroke:[1,"rgb(0, 0, 0)","solid"],
                  boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65)"]
               },
               {
                  id:'Text8',
                  type:'text',
                  rect:['20px','23px','134px','43px','auto','auto'],
                  text:"プレイ",
                  align:"left",
                  font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',30,"rgba(18,18,18,1.00)","normal","none","normal"]
               }]
            }]
         }],
         symbolInstances: [
         {
            id:'hondai',
            symbolName:'hondai1'
         },
         {
            id:'time',
            symbolName:'time'
         },
         {
            id:'hondai2',
            symbolName:'hondai2'
         },
         {
            id:'Title2',
            symbolName:'Title2'
         },
         {
            id:'Title3',
            symbolName:'Title3'
         },
         {
            id:'time3',
            symbolName:'time3'
         },
         {
            id:'hondai3',
            symbolName:'hondai3'
         },
         {
            id:'time2',
            symbolName:'time2'
         }
         ]
      },
   states: {
      "Base State": {
         "${_MainTitle}": [
            ["style", "display", 'block']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(241,255,109,1)'],
            ["subproperty", "filter.contrast", '1'],
            ["style", "display", 'block'],
            ["subproperty", "filter.blur", '0px'],
            ["gradient", "background-image", [270,[['rgba(255,231,0,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
         ],
         "${_time}": [
            ["style", "left", '529px'],
            ["style", "top", '14px']
         ],
         "${_store2}": [
            ["style", "top", '0px'],
            ["style", "height", '399px'],
            ["subproperty", "filter.hue-rotate", '-1deg'],
            ["subproperty", "filter.invert", '0'],
            ["style", "background-size", [99.9,99.9], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0px'],
            ["style", "width", '629px']
         ],
         "${_Text8}": [
            ["style", "top", '23px'],
            ["style", "width", '134px'],
            ["color", "color", 'rgba(18,18,18,1.00)'],
            ["style", "height", '43px'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif'],
            ["style", "left", '20px'],
            ["style", "font-size", '30px']
         ],
         "${_smako_52}": [
            ["style", "height", '200px'],
            ["style", "top", '199px'],
            ["style", "left", '315px'],
            ["style", "width", '200px']
         ],
         "${_Gname}": [
            ["style", "top", '91px'],
            ["style", "left", '94px']
         ],
         "${_RoundRect6}": [
            ["color", "background-color", 'rgba(247,255,0,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '414px'],
            ["style", "top", '0px'],
            ["style", "height", '84px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_star}": [
            ["style", "top", '22px'],
            ["style", "width", '250px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '63px'],
            ["style", "font-size", '50px']
         ],
         "${_norma}": [
            ["style", "top", '162px'],
            ["style", "width", '253px'],
            ["style", "height", '63px'],
            ["style", "display", 'block'],
            ["style", "left", '213px'],
            ["style", "font-size", '30px']
         ],
         "${_title}": [
            ["style", "top", '27px'],
            ["style", "text-align", 'center'],
            ["style", "height", '118px'],
            ["style", "font-size", '100px'],
            ["style", "left", '102px'],
            ["style", "width", '400px']
         ],
         "${_hondai}": [
            ["style", "left", '0px'],
            ["style", "top", '1px']
         ],
         "${_play}": [
            ["style", "top", '276px'],
            ["style", "cursor", 'pointer']
         ],
         "${_time3}": [
            ["style", "left", '529px'],
            ["style", "top", '14px']
         ],
         "${_Group}": [
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer']
         ],
         "${_Title}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_smao}": [
            ["style", "top", '199px'],
            ["style", "height", '200px'],
            ["style", "left", '19px'],
            ["style", "width", '200px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(0,255,239,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '0px'],
            ["style", "width", '132px'],
            ["style", "top", '0px'],
            ["style", "height", '87px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '600px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,30,30,1)'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '0px'],
            ["style", "display", 'block'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_time2}": [
            ["style", "left", '529px']
         ],
         "${_title2}": [
            ["style", "height", '73px'],
            ["style", "top", '17px'],
            ["style", "left", '8px'],
            ["style", "width", '400px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 61500,
         autoPlay: true,
         timeline: [
            { id: "eid580", tween: [ "style", "${_norma}", "left", '213px', { fromValue: '213px'}], position: 0, duration: 0 },
            { id: "eid577", tween: [ "gradient", "${_Rectangle2}", "background-image", [270,[['rgba(255,231,0,1.00)',0],['rgba(255,255,255,1.00)',100]]], { fromValue: [270,[['rgba(255,231,0,1.00)',0],['rgba(255,255,255,1.00)',100]]]}], position: 0, duration: 0 },
            { id: "eid586", tween: [ "color", "${_star}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid599", tween: [ "style", "${_norma}", "width", '253px', { fromValue: '253px'}], position: 0, duration: 0 },
            { id: "eid281", tween: [ "style", "${_Title}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid261", tween: [ "style", "${_Title}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid551", tween: [ "style", "${_time3}", "top", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
            { id: "eid550", tween: [ "style", "${_time3}", "left", '529px', { fromValue: '529px'}], position: 0, duration: 0 },
            { id: "eid442", tween: [ "style", "${_MainTitle}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid572", tween: [ "subproperty", "${_Rectangle2}", "filter.blur", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid522", tween: [ "style", "${_hondai}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid578", tween: [ "style", "${_norma}", "height", '63px', { fromValue: '63px'}], position: 0, duration: 0 },
            { id: "eid265", tween: [ "style", "${_norma}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid160", tween: [ "style", "${_norma}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid255", tween: [ "style", "${_norma}", "display", 'block', { fromValue: 'block'}], position: 61500, duration: 0 },
            { id: "eid602", tween: [ "style", "${_star}", "width", '250px', { fromValue: '250px'}], position: 0, duration: 0 },
            { id: "eid576", tween: [ "subproperty", "${_Rectangle2}", "filter.contrast", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid269", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid125", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid258", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'block'}], position: 61500, duration: 0 },
            { id: "eid267", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid263", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid579", tween: [ "style", "${_norma}", "top", '162px', { fromValue: '162px'}], position: 0, duration: 0 },
            { id: "eid582", tween: [ "style", "${_norma}", "font-size", '30px', { fromValue: '30px'}], position: 0, duration: 0 },
            { id: "eid268", tween: [ "style", "${_star}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid127", tween: [ "style", "${_star}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid257", tween: [ "style", "${_star}", "display", 'block', { fromValue: 'block'}], position: 61500, duration: 0 },
            { id: "eid270", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid124", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid259", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'block'}], position: 61500, duration: 0 },
            { id: "eid335", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_hondai}', [] ], ""], position: 0 },
            { id: "eid552", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_time3}', [] ], ""], position: 0 },
            { id: "eid593", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Title2}', [] ], ""], position: 0 },
            { id: "eid444", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_time2}', [] ], ""], position: 0 },
            { id: "eid445", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_time}', [] ], ""], position: 0 },
            { id: "eid553", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_hondai3}', [] ], ""], position: 0 },
            { id: "eid443", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_hondai2}', [] ], ""], position: 0 },
            { id: "eid446", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_time2}', [] ], ""], position: 61500 }         ]
      }
   }
},
"time": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'text',
      id: 'time_txt',
      rect: ['10px','28px','auto','auto','auto','auto'],
      align: 'right',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',32,'rgba(1,1,1,1.00)','normal','none','']
   },
   {
      type: 'text',
      rect: ['0px','0px','auto','auto','auto','auto'],
      id: 'Text2',
      text: 'TIME',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(249,249,249,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_time_txt}": [
            ["style", "top", '28px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(1,1,1,1.00)'],
            ["style", "left", '10px'],
            ["style", "font-size", '32px']
         ],
         "${_Text2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18352,
         autoPlay: true,
         labels: {
            "start": 0
         },
         timeline: [
            { id: "eid115", tween: [ "color", "${_Text2}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 18352, duration: 0 }         ]
      }
   }
},
"hondai1": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'haikei',
      type: 'image',
      rect: ['0px','-2px','601px','404px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/haikei.jpg','0px','0px']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',50,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'buysum',
      text: '0',
      align: 'center',
      rect: ['25px','55px','75px','57px','auto','auto']
   },
   {
      id: 'saifu',
      type: 'image',
      rect: ['132px','4px','413px','139px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/saifu.gif','0px','0px']
   },
   {
      id: 'Amedog',
      type: 'rect',
      rect: ['439','152','auto','auto','auto','auto']
   },
   {
      id: 'Potato',
      type: 'rect',
      rect: ['429','142','auto','auto','auto','auto']
   },
   {
      id: 'Hotdog',
      type: 'rect',
      rect: ['377','171','auto','auto','auto','auto']
   },
   {
      id: 'Noodle',
      type: 'rect',
      rect: ['496','145','auto','auto','auto','auto']
   },
   {
      id: 'Ice',
      type: 'rect',
      rect: ['542','139','auto','auto','auto','auto']
   },
   {
      id: 'Hambarger',
      type: 'rect',
      rect: ['375px','151px','auto','auto','auto','auto']
   },
   {
      id: 'orange',
      type: 'rect',
      rect: ['601px','163px','auto','auto','auto','auto']
   },
   {
      id: 'umai',
      type: 'rect',
      rect: ['598px','171px','auto','auto','auto','auto']
   },
   {
      id: 'Apple',
      type: 'rect',
      rect: ['598','159','auto','auto','auto','auto']
   },
   {
      id: 'kyabekaba',
      type: 'rect',
      rect: ['598','157','auto','auto','auto','auto']
   },
   {
      id: 'Batu',
      type: 'rect',
      rect: ['140','157','auto','auto','auto','auto']
   },
   {
      id: 'Maido',
      type: 'rect',
      rect: ['198','171','auto','auto','auto','auto']
   },
   {
      id: 'okanjo',
      type: 'group',
      rect: ['445px','285px','135','42','auto','auto'],
      c: [
      {
         fill: ['rgba(255,231,0,1.00)'],
         rect: ['0px','0px','135px','42px','auto','auto'],
         borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
         type: 'rect',
         id: 'Rectangle2',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         cursor: ['pointer'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         type: 'text',
         align: 'center',
         id: 'Text',
         text: 'はらう',
         cursor: ['pointer'],
         rect: ['14px','7px','108px','28px','auto','auto']
      }]
   },
   {
      id: 'yarinaoshi',
      type: 'group',
      rect: ['445px','337px','135','42','auto','auto'],
      c: [
      {
         fill: ['rgba(44,255,202,1.00)'],
         rect: ['0px','0px','135px','42px','auto','auto'],
         borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
         type: 'rect',
         id: 'Rectangle3',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         cursor: ['pointer'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',20,'rgba(0,0,0,1)','normal','none',''],
         type: 'text',
         id: 'TextCopy',
         text: 'やりなおし',
         cursor: ['pointer'],
         rect: ['14px','7px','108px','28px','auto','auto']
      }]
   },
   {
      id: 'selectYen',
      type: 'group',
      rect: ['67px','297px','330px','75px','auto','auto'],
      c: [
      {
         rect: ['0px','0px','378px','83px','auto','auto'],
         borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
         fill: ['rgba(0,212,105,1.00)'],
         id: 'yenRect',
         stroke: [1,'rgba(0,0,0,1)','solid'],
         type: 'rect',
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         type: 'image',
         id: 's10yen',
         rect: ['26px','0px','75px','75px','auto','auto'],
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/10yen.png','0px','0px']
      },
      {
         type: 'image',
         id: 's50yen',
         rect: ['139px','-1px','75px','75px','auto','auto'],
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/yen50.png','0px','0px']
      },
      {
         type: 'image',
         id: 's100yen',
         rect: ['246px','-1px','75px','75px','auto','auto'],
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/100yen1.png','0px','0px']
      }]
   },
   {
      id: 'hart',
      type: 'image',
      rect: ['1px','308px','58px','57px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hart.gif','0px','0px']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Ki',
      text: '×3<br>',
      align: 'left',
      rect: ['9px','314px','39px','37px','auto','auto']
   },
   {
      type: 'image',
      id: 'yen1',
      tag: 'img',
      rect: ['192px','56px','60px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px']
   },
   {
      type: 'image',
      id: 'yen2',
      tag: 'img',
      rect: ['266px','56px','60px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px']
   },
   {
      type: 'image',
      id: 'yen3',
      tag: 'img',
      rect: ['337px','56px','60px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px']
   },
   {
      type: 'image',
      id: 'yen4',
      tag: 'img',
      rect: ['404px','55px','60px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'timecount',
      text: ' ',
      align: 'left',
      rect: ['478px','62px','102px','60px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'cntBuy',
      text: '購入数',
      align: 'left',
      rect: ['9px','14px','108px','42px','auto','auto']
   },
   {
      type: 'group',
      display: 'none',
      id: 'B',
      rect: ['102','62','416','261','auto','auto'],
      c: [
      {
         rect: ['16px','0px','398px','259px','auto','auto'],
         borderRadius: ['50px 50px','50px 50px','50px 50px','50px 50px'],
         fill: ['rgba(0,151,255,1.00)'],
         id: 'RECT5Copy',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         type: 'rect',
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         id: 'devil',
         type: 'image',
         rect: ['285px','97px','119px','142px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/devil.png','0px','0px']
      },
      {
         type: 'group',
         id: 'back',
         cursor: ['pointer'],
         rect: ['29px','159px','135','80','auto','auto'],
         c: [
         {
            fill: ['rgba(254,254,13,1.00)'],
            rect: ['0px','0px','206px','78px','auto','auto'],
            borderRadius: ['50%','50%','50%','50%'],
            filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
            id: 'EllipseCopy',
            stroke: [1,'rgb(0, 0, 0)','solid'],
            type: 'ellipse',
            boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
         },
         {
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,'rgba(10,0,0,1.00)','normal','none','normal'],
            type: 'text',
            id: 'Text3Copy',
            text: 'タイトルへ戻る',
            align: 'left',
            rect: ['29px','24px','170px','42px','auto','auto']
         }]
      },
      {
         id: 'HUKICopy',
         type: 'group',
         rect: ['0px','12px','299','180','auto','auto'],
         c: [
         {
            transform: [[0,0],[],[],['-1']],
            id: 'HUKI_4Copy',
            type: 'image',
            rect: ['0px','0px','299px','180px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/HUKI_4.png','0px','0px']
         },
         {
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(0,15,255,1.00)','normal','none','normal'],
            type: 'text',
            id: 'Text8Copy',
            text: 'ざんねん...<br>',
            align: 'left',
            rect: ['57px','23px','137px','42px','auto','auto']
         },
         {
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(0,15,255,1)','normal','none','normal'],
            id: 'Nokori',
            type: 'text',
            align: 'left',
            rect: ['58px','58px','215px','51px','auto','auto']
         }]
      }]
   },
   {
      type: 'group',
      display: 'none',
      id: 'C',
      rect: ['102','62px','416','261','auto','auto'],
      c: [
      {
         rect: ['16px','0px','398px','259px','auto','auto'],
         borderRadius: ['50px 50px','50px 50px','50px 50px','50px 50px'],
         fill: ['rgba(255,255,118,1.00)'],
         id: 'RECT5',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         type: 'rect',
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         id: 'Ctime',
         type: 'group',
         rect: ['51','249','330','70','auto','auto'],
         c: [
         {
            rect: ['0px','0px','328px','68px','auto','auto'],
            borderRadius: ['10px','10px','10px','10px'],
            fill: ['rgba(255,255,255,1.00)'],
            id: 'RECT',
            stroke: [1,'rgb(0, 0, 0)','solid'],
            type: 'rect',
            boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
         },
         {
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,'rgba(255,0,255,1.00)','normal','none','normal'],
            type: 'text',
            id: 'test',
            text: 'a',
            align: 'left',
            rect: ['120px','26px','45px','43px','auto','auto']
         },
         {
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,'rgba(0,15,255,1)','normal','none','normal'],
            type: 'text',
            id: 'Text7',
            text: 'レベル１　クリアタイム<br>　　　　　　秒',
            align: 'left',
            rect: ['47px','4px','226px','57px','auto','auto']
         }]
      },
      {
         type: 'group',
         id: 'next',
         cursor: ['pointer'],
         rect: ['29px','159px','135','80','auto','auto'],
         c: [
         {
            rect: ['0px','0px','133px','78px','auto','auto'],
            borderRadius: ['50%','50%','50%','50%'],
            fill: ['rgba(255,0,0,1.00)'],
            id: 'Ellipse',
            stroke: [1,'rgb(0, 0, 0)','solid'],
            type: 'ellipse',
            boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
         },
         {
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(31,255,0,1.00)','normal','none','normal'],
            type: 'text',
            id: 'Text3',
            text: '次へ',
            align: 'left',
            rect: ['30px','17px','75px','42px','auto','auto']
         }]
      },
      {
         id: 'smako',
         type: 'image',
         rect: ['224px','69px','180px','180px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/smako.png','0px','0px']
      },
      {
         id: 'HUKI',
         type: 'group',
         rect: ['0px','12px','299','180','auto','auto'],
         c: [
         {
            transform: [[0,0],[],[],['-1']],
            id: 'HUKI_4',
            type: 'image',
            rect: ['0px','0px','299px','180px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/HUKI_4.png','0px','0px']
         },
         {
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(0,15,255,1.00)','normal','none','normal'],
            type: 'text',
            id: 'Text8',
            text: 'おめでとう！<br>レベル１ クリア！<br>',
            align: 'left',
            rect: ['57px','23px','222px','81px','auto','auto']
         }]
      }]
   }],
   symbolInstances: [
   {
      id: 'kyabekaba',
      symbolName: 'kyabekaba'
   },
   {
      id: 'Noodle',
      symbolName: 'Noodle'
   },
   {
      id: 'umai',
      symbolName: 'umai'
   },
   {
      id: 'Apple',
      symbolName: 'Apple'
   },
   {
      id: 'Hambarger',
      symbolName: 'Hambarger'
   },
   {
      id: 'Batu',
      symbolName: 'batu'
   },
   {
      id: 'Maido',
      symbolName: 'Maido'
   },
   {
      id: 'orange',
      symbolName: 'orange'
   },
   {
      id: 'Hotdog',
      symbolName: 'hotdog'
   },
   {
      id: 'Ice',
      symbolName: 'Ice'
   },
   {
      id: 'Potato',
      symbolName: 'Potato'
   },
   {
      id: 'Amedog',
      symbolName: 'Amedog'
   }   ]
   },
   states: {
      "Base State": {
         "${_devil}": [
            ["style", "height", '142px'],
            ["style", "top", '97px'],
            ["style", "left", '285px'],
            ["style", "width", '119px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,231,0,1.00)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-width", '1px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "cursor", 'pointer']
         ],
         "${_yen2}": [
            ["style", "top", '56px'],
            ["style", "height", '60px'],
            ["style", "display", 'block'],
            ["style", "left", '266px'],
            ["style", "width", '60px']
         ],
         "${_Apple}": [
            ["style", "left", '601px']
         ],
         "${_Text8}": [
            ["style", "top", '23px'],
            ["color", "color", 'rgba(0,15,255,1.00)'],
            ["style", "width", '222px'],
            ["style", "left", '57px'],
            ["style", "font-size", '25px']
         ],
         "${_okanjo}": [
            ["style", "left", '445px'],
            ["style", "top", '285px']
         ],
         "${_B}": [
            ["style", "display", 'none']
         ],
         "${_timecount}": [
            ["style", "top", '62px'],
            ["style", "left", '478px']
         ],
         "${_Hotdog}": [
            ["style", "top", '130px'],
            ["transform", "scaleY", '0.86302'],
            ["style", "left", '596px'],
            ["transform", "scaleX", '0.90868']
         ],
         "${_Text8Copy}": [
            ["style", "top", '23px'],
            ["style", "font-size", '25px'],
            ["color", "color", 'rgba(0,15,255,1)'],
            ["style", "height", '42px'],
            ["style", "left", '57px'],
            ["style", "width", '137px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(44,255,202,1.00)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-width", '1px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Amedog}": [
            ["style", "left", '601px'],
            ["style", "top", '148px']
         ],
         "${_RECT5Copy}": [
            ["color", "background-color", 'rgba(0,151,255,1.00)'],
            ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '16px'],
            ["style", "width", '398px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '259px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_test}": [
            ["style", "top", '26px'],
            ["color", "color", 'rgba(255,0,255,1.00)'],
            ["style", "height", '43px'],
            ["style", "left", '120px'],
            ["style", "width", '45px']
         ],
         "${_next}": [
            ["style", "top", '159px'],
            ["style", "left", '29px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Hambarger}": [
            ["style", "top", '149px'],
            ["style", "left", '602px'],
            ["style", "display", 'block']
         ],
         "${_HUKI_4Copy}": [
            ["style", "height", '180px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '-1']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(255,0,0,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '0px'],
            ["style", "width", '133px'],
            ["style", "top", '0px'],
            ["style", "height", '78px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_Ki}": [
            ["style", "top", '314px'],
            ["style", "height", '37px'],
            ["style", "display", 'block'],
            ["style", "left", '9px'],
            ["style", "width", '39px']
         ],
         "${_saifu}": [
            ["style", "top", '4px'],
            ["style", "height", '139px'],
            ["style", "left", '132px'],
            ["style", "width", '413px']
         ],
         "${_hart}": [
            ["style", "height", '57px'],
            ["style", "top", '308px'],
            ["style", "left", '1px'],
            ["style", "width", '58px']
         ],
         "${_yarinaoshi}": [
            ["style", "left", '445px'],
            ["style", "top", '337px']
         ],
         "${_yen1}": [
            ["style", "top", '56px'],
            ["style", "display", 'block'],
            ["style", "height", '60px'],
            ["style", "left", '192px'],
            ["style", "width", '60px']
         ],
         "${_orange}": [
            ["style", "top", '167px'],
            ["transform", "scaleX", '0.97'],
            ["style", "left", '603px'],
            ["transform", "scaleY", '1.155']
         ],
         "${_buysum}": [
            ["style", "top", '55px'],
            ["style", "text-align", 'center'],
            ["style", "left", '25px'],
            ["style", "font-size", '50px']
         ],
         "${_Nokori}": [
            ["style", "top", '58px'],
            ["style", "left", '58px'],
            ["style", "width", '215px']
         ],
         "${_Potato}": [
            ["style", "left", '600px'],
            ["style", "top", '143px']
         ],
         "${_kyabekaba}": [
            ["style", "display", 'block'],
            ["style", "left", '601px']
         ],
         "${_s100yen}": [
            ["style", "top", '-1px'],
            ["style", "height", '75px'],
            ["style", "left", '246px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '75px']
         ],
         "${_Ice}": [
            ["style", "left", '601px']
         ],
         "${_haikei}": [
            ["style", "height", '404px'],
            ["style", "top", '-2px'],
            ["style", "left", '0px'],
            ["style", "width", '601px']
         ],
         "${_umai}": [
            ["style", "top", '157px'],
            ["transform", "scaleY", '0.98271'],
            ["style", "left", '601px']
         ],
         "${_HUKICopy}": [
            ["style", "left", '0px'],
            ["style", "top", '12px']
         ],
         "${_yen4}": [
            ["style", "top", '55px'],
            ["style", "height", '60px'],
            ["style", "display", 'block'],
            ["style", "left", '404px'],
            ["style", "width", '60px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '750px']
         ],
         "${_yen3}": [
            ["style", "top", '56px'],
            ["style", "height", '60px'],
            ["style", "display", 'block'],
            ["style", "left", '337px'],
            ["style", "width", '60px']
         ],
         "${_EllipseCopy}": [
            ["color", "background-color", 'rgba(254,254,13,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "filter.hue-rotate", '0deg'],
            ["style", "left", '0px'],
            ["style", "width", '206px'],
            ["style", "top", '0px'],
            ["style", "height", '78px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_HUKI}": [
            ["style", "left", '0px'],
            ["style", "top", '12px']
         ],
         "${_RECT}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '0px'],
            ["style", "width", '328px'],
            ["style", "top", '0px'],
            ["style", "height", '68px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_HUKI_4}": [
            ["transform", "scaleX", '-1'],
            ["style", "height", '180px'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_s50yen}": [
            ["style", "top", '-1px'],
            ["style", "height", '75px'],
            ["style", "left", '139px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '75px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '24px'],
            ["color", "color", 'rgba(10,0,0,1.00)'],
            ["style", "font-size", '20px'],
            ["style", "left", '29px'],
            ["style", "width", '170px']
         ],
         "${_smako}": [
            ["style", "top", '69px'],
            ["style", "height", '180px'],
            ["style", "left", '224px'],
            ["style", "width", '180px']
         ],
         "${_C}": [
            ["style", "display", 'none']
         ],
         "${_s10yen}": [
            ["style", "top", '0px'],
            ["style", "height", '75px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '26px'],
            ["style", "width", '75px']
         ],
         "${_RECT5}": [
            ["color", "background-color", 'rgba(255,255,0,1.00)'],
            ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '16px'],
            ["style", "width", '398px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "height", '329px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_selectYen}": [
            ["style", "top", '297px'],
            ["style", "height", '75px'],
            ["style", "left", '67px'],
            ["style", "width", '330px']
         ],
         "${_back}": [
            ["style", "top", '159px'],
            ["style", "left", '29px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text3}": [
            ["color", "color", 'rgba(31,255,0,1.00)'],
            ["style", "top", '17px'],
            ["style", "left", '30px'],
            ["style", "width", '75px']
         ],
         "${_Text}": [
            ["style", "top", '7px'],
            ["style", "left", '14px'],
            ["style", "text-align", 'center'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text7}": [
            ["style", "top", '4px'],
            ["style", "font-size", '20px'],
            ["style", "height", '57px'],
            ["color", "color", 'rgba(0,15,255,1)'],
            ["style", "left", '47px'],
            ["style", "width", '226px']
         ],
         "${_cntBuy}": [
            ["style", "left", '9px'],
            ["style", "top", '14px']
         ],
         "${_yenRect}": [
            ["color", "background-color", 'rgba(0,212,105,1.00)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '353px'],
            ["style", "top", '-9px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-width", '1px'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '92px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_TextCopy}": [
            ["style", "top", '7px'],
            ["style", "left", '14px'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '20px']
         ],
         "${_Noodle}": [
            ["style", "left", '601px'],
            ["style", "top", '149px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid307", tween: [ "style", "${_Apple}", "left", '601px', { fromValue: '601px'}], position: 0, duration: 0 },
            { id: "eid592", tween: [ "style", "${_umai}", "top", '157px', { fromValue: '157px'}], position: 0, duration: 0 },
            { id: "eid289", tween: [ "style", "${_orange}", "top", '167px', { fromValue: '167px'}], position: 0, duration: 0 },
            { id: "eid425", tween: [ "style", "${_Noodle}", "top", '149px', { fromValue: '149px'}], position: 0, duration: 0 },
            { id: "eid276", tween: [ "style", "${_yen1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid595", tween: [ "style", "${_RECT5}", "height", '329px', { fromValue: '329px'}], position: 0, duration: 0 },
            { id: "eid506", tween: [ "style", "${_Potato}", "top", '143px', { fromValue: '143px'}], position: 0, duration: 0 },
            { id: "eid518", tween: [ "color", "${_Rectangle3}", "background-color", 'rgba(44,255,202,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(44,255,202,1.00)'}], position: 0, duration: 0 },
            { id: "eid400", tween: [ "style", "${_Hambarger}", "left", '602px', { fromValue: '602px'}], position: 0, duration: 0 },
            { id: "eid305", tween: [ "style", "${_kyabekaba}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid279", tween: [ "style", "${_yen4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid502", tween: [ "style", "${_Amedog}", "top", '148px', { fromValue: '148px'}], position: 0, duration: 0 },
            { id: "eid591", tween: [ "transform", "${_umai}", "scaleY", '0.98271', { fromValue: '0.98271'}], position: 0, duration: 0 },
            { id: "eid422", tween: [ "style", "${_Noodle}", "left", '601px', { fromValue: '601px'}], position: 0, duration: 0 },
            { id: "eid494", tween: [ "style", "${_Hotdog}", "top", '130px', { fromValue: '130px'}], position: 0, duration: 0 },
            { id: "eid431", tween: [ "transform", "${_orange}", "scaleX", '0.97', { fromValue: '0.97'}], position: 0, duration: 0 },
            { id: "eid278", tween: [ "style", "${_yen3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid472", tween: [ "transform", "${_Hotdog}", "scaleX", '0.90868', { fromValue: '0.90868'}], position: 0, duration: 0 },
            { id: "eid517", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,231,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,231,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid505", tween: [ "style", "${_Potato}", "left", '600px', { fromValue: '600px'}], position: 0, duration: 0 },
            { id: "eid399", tween: [ "style", "${_B}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid491", tween: [ "style", "${_Hotdog}", "left", '596px', { fromValue: '596px'}], position: 0, duration: 0 },
            { id: "eid493", tween: [ "transform", "${_Hotdog}", "scaleY", '0.86302', { fromValue: '0.86302'}], position: 0, duration: 0 },
            { id: "eid353", tween: [ "gradient", "${_RECT5}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 0, duration: 0 },
            { id: "eid398", tween: [ "style", "${_C}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid308", tween: [ "style", "${_umai}", "left", '601px', { fromValue: '601px'}], position: 0, duration: 0 },
            { id: "eid401", tween: [ "style", "${_Hambarger}", "top", '149px', { fromValue: '149px'}], position: 0, duration: 0 },
            { id: "eid501", tween: [ "style", "${_Amedog}", "left", '601px', { fromValue: '601px'}], position: 0, duration: 0 },
            { id: "eid277", tween: [ "style", "${_yen2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid519", tween: [ "color", "${_yenRect}", "background-color", 'rgba(0,212,105,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,212,105,1.00)'}], position: 0, duration: 0 },
            { id: "eid395", tween: [ "color", "${_RECT5}", "background-color", 'rgba(255,255,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid288", tween: [ "transform", "${_orange}", "scaleY", '1.155', { fromValue: '1.155'}], position: 0, duration: 0 },
            { id: "eid309", tween: [ "style", "${_orange}", "left", '603px', { fromValue: '603px'}], position: 0, duration: 0 },
            { id: "eid306", tween: [ "style", "${_kyabekaba}", "left", '601px', { fromValue: '601px'}], position: 0, duration: 0 },
            { id: "eid403", tween: [ "style", "${_Hambarger}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid301", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_kyabekaba}', [] ], ""], position: 0 },
            { id: "eid511", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Potato}', [] ], ""], position: 0 },
            { id: "eid304", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_orange}', [] ], ""], position: 0 },
            { id: "eid303", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Apple}', [] ], ""], position: 0 },
            { id: "eid437", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Ice}', [] ], ""], position: 0 },
            { id: "eid512", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Amedog}', [] ], ""], position: 0 },
            { id: "eid429", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Noodle}', [] ], ""], position: 0 },
            { id: "eid331", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Batu}', [] ], ""], position: 0 },
            { id: "eid435", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Maido}', [] ], ""], position: 0 },
            { id: "eid302", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_umai}', [] ], ""], position: 0 },
            { id: "eid404", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Hambarger}', [] ], ""], position: 0 },
            { id: "eid513", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Hotdog}', [] ], ""], position: 0 }         ]
      }
   }
},
"hondai4": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'haikei',
      type: 'image',
      rect: ['0px','7px','600px','400px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/haikei.jpg','0px','0px']
   },
   {
      id: 'KyabeKaba',
      type: 'group',
      rect: ['598px','157px','150','100','auto','auto'],
      c: [
      {
         id: 'kabayaki',
         type: 'image',
         rect: ['0px','0px','110px','100px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/kabayaki.png','0px','0px']
      },
      {
         id: 'kyabetu',
         type: 'image',
         rect: ['70px','10px','80px','80px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/kyabetu.jpg','0px','0px']
      },
      {
         rect: ['96px','82px','55px','35px','auto','auto'],
         id: 'Text2',
         text: '20円',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         type: 'text'
      },
      {
         rect: ['13px','73px','60px','34px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text3',
         text: '10円',
         align: 'left',
         type: 'text'
      }]
   },
   {
      rect: ['428px','281px','135px','42px','auto','auto'],
      borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['428px','341px','135px','42px','auto','auto'],
      borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['437px','343px','108px','28px','auto','auto'],
      id: 'TextCopy',
      text: 'やりなおし',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',20,'rgba(0,0,0,1)','normal','none',''],
      type: 'text'
   },
   {
      id: 'selectYen',
      type: 'group',
      rect: ['64px','292px','322px','73px','auto','auto'],
      c: [
      {
         rect: ['0px','0px','378px','83px','auto','auto'],
         borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'yenRect',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(192,192,192,1)']
      },
      {
         id: '_100yen13',
         type: 'image',
         rect: ['273px','4px','75px','74px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/100yen1.png','0px','0px']
      },
      {
         id: 's10yen',
         type: 'image',
         rect: ['188px','4px','75px','74px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/10yen.png','0px','0px']
      },
      {
         id: 's5yen',
         type: 'image',
         rect: ['102px','4px','75px','74px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/5yen.png','0px','0px']
      },
      {
         id: 's1yen',
         type: 'image',
         rect: ['11px','8px','75px','74px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/1yen.png','0px','0px']
      }]
   },
   {
      id: 'hart',
      type: 'image',
      rect: ['1px','308px','58px','57px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hart.gif','0px','0px']
   },
   {
      id: 'saifu',
      type: 'image',
      rect: ['132px','4px','413px','139px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/saifu.gif','0px','0px']
   },
   {
      id: 'yen1',
      type: 'image',
      rect: ['192px','56px','60px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px']
   },
   {
      id: 'Orange1',
      type: 'group',
      rect: ['598px','163px','120','100','auto','auto'],
      c: [
      {
         id: 'orange',
         type: 'image',
         rect: ['0px','0px','120px','100px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/orange.jpg','0px','0px']
      },
      {
         rect: ['14px','22px','91px','56px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'orangeYen',
         text: '30円',
         align: 'center',
         type: 'text'
      }]
   },
   {
      id: 'Fanta',
      type: 'group',
      rect: ['600px','152px','182','120','auto','auto'],
      c: [
      {
         id: 'fanta',
         type: 'image',
         rect: ['0px','0px','110px','110px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/fanta.jpg','0px','0px']
      },
      {
         id: 'kyabetu2',
         type: 'image',
         rect: ['92px','24px','85px','75px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/kyabetu.jpg','0px','0px']
      },
      {
         rect: ['3px','63px','179px','57px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text8',
         text: '120円  30円',
         align: 'center',
         type: 'text'
      }]
   },
   {
      id: 'yen2',
      type: 'image',
      rect: ['266px','56px','60px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px']
   },
   {
      id: 'yen3',
      type: 'image',
      rect: ['337px','56px','60px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px']
   },
   {
      id: 'yen4',
      type: 'image',
      rect: ['404px','55px','60px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px']
   },
   {
      id: 'Apple',
      type: 'group',
      rect: ['598px','159px','130','100','auto','auto'],
      c: [
      {
         id: 'apple2',
         type: 'image',
         rect: ['0px','0px','130px','100px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/apple.jpg','0px','0px']
      },
      {
         rect: ['11px','33px','98px','43px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'appleYen',
         text: '15円',
         align: 'left',
         type: 'text'
      }]
   },
   {
      rect: ['266px','56px','60px','60px','auto','auto'],
      id: '_10yen3Copy',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/10yen.png','0px','0px']
   },
   {
      rect: ['478px','62px','102px','60px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'timecount',
      text: ' ',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['9px','14px','108px','42px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'cntBuy',
      text: '購入数',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['437px','290px','108px','28px','auto','auto'],
      id: 'Text',
      text: 'お勘定',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      type: 'text'
   },
   {
      rect: ['9px','314px','39px','37px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Ki',
      text: '×3',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['9px','314px','39px','37px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'KiCopy',
      text: '×2',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['192px','56px','60px','60px','auto','auto'],
      id: 'in5yen',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/5yen.png','0px','0px']
   },
   {
      rect: ['192px','56px','60px','60px','auto','auto'],
      id: '_5yen',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/5yen.png','0px','0px']
   },
   {
      rect: ['266px','56px','60px','60px','auto','auto'],
      id: '_5yen2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/5yen.png','0px','0px']
   },
   {
      rect: ['192px','56px','60px','60px','auto','auto'],
      id: '_10yen3',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/10yen.png','0px','0px']
   },
   {
      rect: ['266px','56px','60px','60px','auto','auto'],
      id: '_10yen2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/10yen.png','0px','0px']
   },
   {
      rect: ['266px','56px','60px','60px','auto','auto'],
      id: '_10yen4',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/10yen.png','0px','0px']
   },
   {
      rect: ['404px','56px','60px','60px','auto','auto'],
      id: '_10yen',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/10yen.png','0px','0px']
   },
   {
      rect: ['192px','56px','60px','60px','auto','auto'],
      id: '_100yen14',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/100yen1.png','0px','0px']
   },
   {
      rect: ['19px','56px','90px','43px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'center',
      id: 'one',
      text: '1',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['19px','56px','90px','43px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'zero',
      text: '0',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['19px','56px','90px','43px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'center',
      id: 'two',
      text: '2',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['19px','56px','90px','43px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'center',
      id: 'four',
      text: '4',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['19px','56px','90px','43px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'center',
      id: 'five',
      text: '5',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['132px','132px','356','81','auto','auto'],
      id: 'Batu',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['0px','0px','356px','81px','auto','auto'],
         borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
         stroke: [0,'rgb(0, 0, 0)','none'],
         id: 'batu',
         opacity: 0.703125,
         type: 'rect',
         fill: ['rgba(192,192,192,1)']
      },
      {
         rect: ['42px','11px','277px','60px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'batuText',
         text: '間違っています',
         align: 'center',
         type: 'text'
      }]
   },
   {
      id: 'Coke',
      type: 'group',
      rect: ['598px','166px','100','90','auto','auto'],
      c: [
      {
         id: 'coke',
         type: 'image',
         rect: ['2px','-10px','110px','110px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coke.jpg','0px','0px']
      },
      {
         rect: ['6px','24px','111px','53px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text4',
         text: '120円',
         align: 'left',
         type: 'text'
      }]
   },
   {
      rect: ['-54px','187px','0px','0px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['178','158','268','80','auto','auto'],
      id: 'end3',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['0px','0px','266px','78px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         stroke: [1,'rgb(0, 0, 0)','solid'],
         id: 'RoundRect4Copy',
         opacity: 0.6953125,
         type: 'rect',
         fill: ['rgba(19,132,184,1.00)']
      },
      {
         rect: ['89px','18px','90px','44px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(248,248,248,1)','normal','none','normal'],
         id: 'Text7Copy',
         text: '終了',
         align: 'left',
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '281px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "left", '428px']
         ],
         "${_yen2}": [
            ["style", "top", '56px'],
            ["style", "height", '60px'],
            ["style", "left", '266px'],
            ["style", "width", '60px']
         ],
         "${_Apple}": [
            ["style", "display", 'block'],
            ["style", "left", '598px'],
            ["style", "top", '159px']
         ],
         "${_Text2}": [
            ["style", "top", '82px'],
            ["style", "height", '35px'],
            ["style", "left", '96px'],
            ["style", "width", '55px']
         ],
         "${_KiCopy}": [
            ["style", "top", '314px'],
            ["style", "height", '37px'],
            ["style", "display", 'none'],
            ["style", "left", '9px'],
            ["style", "width", '39px']
         ],
         "${_four}": [
            ["style", "top", '56px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '19px'],
            ["style", "font-size", '40px']
         ],
         "${__10yen3Copy}": [
            ["style", "top", '56px'],
            ["style", "display", 'none'],
            ["style", "height", '60px'],
            ["style", "left", '266px'],
            ["style", "width", '60px']
         ],
         "${_yenRect}": [
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '353px'],
            ["style", "top", '-9px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "height", '92px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_s5yen}": [
            ["style", "top", '4px'],
            ["style", "height", '74px'],
            ["style", "left", '102px'],
            ["style", "width", '75px']
         ],
         "${_timecount}": [
            ["style", "top", '62px'],
            ["style", "left", '478px']
         ],
         "${_Orange1}": [
            ["style", "display", 'block'],
            ["style", "left", '601px'],
            ["style", "top", '163px']
         ],
         "${_Text4}": [
            ["style", "height", '53px'],
            ["style", "top", '24px'],
            ["style", "left", '6px'],
            ["style", "width", '111px']
         ],
         "${_kyabetu}": [
            ["style", "top", '10px'],
            ["style", "left", '70px']
         ],
         "${_Text7Copy}": [
            ["style", "top", '18px'],
            ["style", "width", '90px'],
            ["style", "left", '89px'],
            ["style", "font-size", '40px']
         ],
         "${__5yen}": [
            ["style", "top", '56px'],
            ["style", "display", 'none'],
            ["style", "height", '60px'],
            ["style", "left", '192px'],
            ["style", "width", '60px']
         ],
         "${_coke}": [
            ["style", "height", '110px'],
            ["style", "top", '-10px'],
            ["style", "left", '2px'],
            ["style", "width", '110px']
         ],
         "${__10yen3}": [
            ["style", "top", '56px'],
            ["style", "height", '60px'],
            ["style", "display", 'none'],
            ["style", "left", '192px'],
            ["style", "width", '60px']
         ],
         "${_Fanta}": [
            ["style", "left", '600px'],
            ["style", "top", '152px']
         ],
         "${__100yen14}": [
            ["style", "top", '56px'],
            ["style", "display", 'none'],
            ["style", "height", '60px'],
            ["style", "left", '192px'],
            ["style", "width", '60px']
         ],
         "${__10yen2}": [
            ["style", "top", '56px'],
            ["style", "height", '60px'],
            ["style", "display", 'none'],
            ["style", "left", '266px'],
            ["style", "width", '60px']
         ],
         "${_end3}": [
            ["style", "display", 'none']
         ],
         "${_Rectangle3}": [
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '341px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "left", '428px']
         ],
         "${_RoundRect4Copy}": [
            ["color", "background-color", 'rgba(19,132,184,1)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "opacity", '0.6953125']
         ],
         "${_in5yen}": [
            ["style", "top", '56px'],
            ["style", "height", '60px'],
            ["style", "display", 'none'],
            ["style", "left", '192px'],
            ["style", "width", '60px']
         ],
         "${_appleYen}": [
            ["style", "left", '11px'],
            ["style", "top", '33px']
         ],
         "${_batuText}": [
            ["style", "top", '11px'],
            ["style", "left", '42px'],
            ["style", "font-size", '35px']
         ],
         "${_TextCopy}": [
            ["style", "top", '343px'],
            ["style", "left", '437px'],
            ["style", "font-size", '20px']
         ],
         "${_yen1}": [
            ["style", "top", '56px'],
            ["style", "height", '60px'],
            ["style", "display", 'block'],
            ["style", "left", '192px'],
            ["style", "width", '60px']
         ],
         "${_batu}": [
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '81px'],
            ["style", "opacity", '0.703125'],
            ["style", "left", '0px'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text8}": [
            ["style", "top", '63px'],
            ["style", "font-size", '30px'],
            ["style", "left", '3px'],
            ["style", "width", '179px']
         ],
         "${_hart}": [
            ["style", "top", '308px'],
            ["style", "height", '57px'],
            ["style", "left", '1px'],
            ["style", "width", '58px']
         ],
         "${_orange}": [
            ["style", "top", '0px'],
            ["style", "height", '100px'],
            ["style", "left", '0px'],
            ["style", "width", '120px']
         ],
         "${_Text3}": [
            ["style", "top", '73px'],
            ["style", "left", '13px'],
            ["style", "width", '60px']
         ],
         "${_s10yen}": [
            ["style", "height", '74px'],
            ["style", "top", '4px'],
            ["style", "left", '188px'],
            ["style", "width", '75px']
         ],
         "${__10yen}": [
            ["style", "top", '56px'],
            ["style", "height", '60px'],
            ["style", "display", 'none'],
            ["style", "left", '404px'],
            ["style", "width", '60px']
         ],
         "${_haikei}": [
            ["style", "top", '7px'],
            ["style", "height", '400px'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ],
         "${_Ki}": [
            ["style", "top", '314px'],
            ["style", "height", '37px'],
            ["style", "display", 'block'],
            ["style", "left", '9px'],
            ["style", "width", '39px']
         ],
         "${_saifu}": [
            ["style", "height", '139px'],
            ["style", "top", '4px'],
            ["style", "left", '132px'],
            ["style", "width", '413px']
         ],
         "${_yen4}": [
            ["style", "top", '55px'],
            ["style", "height", '60px'],
            ["style", "left", '404px'],
            ["style", "width", '60px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '749px']
         ],
         "${_yen3}": [
            ["style", "height", '60px'],
            ["style", "top", '56px'],
            ["style", "left", '337px'],
            ["style", "width", '60px']
         ],
         "${_orangeYen}": [
            ["style", "left", '14px'],
            ["style", "top", '22px']
         ],
         "${_fanta}": [
            ["style", "top", '0px'],
            ["style", "height", '110px'],
            ["style", "left", '0px'],
            ["style", "width", '110px']
         ],
         "${_KyabeKaba}": [
            ["style", "top", '157px'],
            ["style", "left", '598px'],
            ["style", "display", 'block']
         ],
         "${_five}": [
            ["style", "top", '56px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '19px'],
            ["style", "font-size", '40px']
         ],
         "${_Coke}": [
            ["style", "top", '166px'],
            ["style", "left", '598px'],
            ["style", "display", 'block']
         ],
         "${_apple2}": [
            ["style", "top", '0px'],
            ["style", "height", '100px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${_kabayaki}": [
            ["style", "height", '100px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '110px']
         ],
         "${_one}": [
            ["style", "top", '56px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '19px'],
            ["style", "font-size", '40px']
         ],
         "${_zero}": [
            ["style", "top", '56px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["style", "left", '19px'],
            ["style", "font-size", '40px']
         ],
         "${__5yen2}": [
            ["style", "top", '56px'],
            ["style", "height", '60px'],
            ["style", "display", 'none'],
            ["style", "left", '266px'],
            ["style", "width", '60px']
         ],
         "${_selectYen}": [
            ["style", "height", '73px'],
            ["style", "top", '292px'],
            ["style", "left", '64px'],
            ["style", "width", '322px']
         ],
         "${__10yen4}": [
            ["style", "top", '56px'],
            ["style", "display", 'none'],
            ["style", "height", '60px'],
            ["style", "left", '337px'],
            ["style", "width", '60px']
         ],
         "${_kyabetu2}": [
            ["style", "height", '75px'],
            ["style", "top", '24px'],
            ["style", "left", '92px'],
            ["style", "width", '85px']
         ],
         "${_Text}": [
            ["style", "left", '437px'],
            ["style", "top", '290px']
         ],
         "${_two}": [
            ["style", "top", '56px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "left", '19px'],
            ["style", "font-size", '40px']
         ],
         "${_cntBuy}": [
            ["style", "left", '9px'],
            ["style", "top", '14px']
         ],
         "${_s1yen}": [
            ["style", "top", '8px'],
            ["style", "height", '74px'],
            ["style", "left", '11px'],
            ["style", "width", '75px']
         ],
         "${_Batu}": [
            ["style", "display", 'none'],
            ["style", "left", '132px'],
            ["style", "top", '132px']
         ],
         "${__100yen13}": [
            ["style", "height", '74px'],
            ["style", "top", '4px'],
            ["style", "left", '273px'],
            ["style", "width", '75px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 32500,
         autoPlay: true,
         timeline: [
            { id: "eid22", tween: [ "style", "${_Apple}", "left", '-132px', { fromValue: '598px'}], position: 0, duration: 10000 },
            { id: "eid106", tween: [ "style", "${_KyabeKaba}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
            { id: "eid66", tween: [ "style", "${__10yen4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid67", tween: [ "style", "${__10yen4}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid74", tween: [ "style", "${__10yen4}", "display", 'none', { fromValue: 'block'}], position: 13250, duration: 0 },
            { id: "eid98", tween: [ "style", "${__10yen4}", "display", 'block', { fromValue: 'none'}], position: 15750, duration: 0 },
            { id: "eid112", tween: [ "style", "${__10yen4}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
            { id: "eid238", tween: [ "style", "${__10yen4}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
            { id: "eid242", tween: [ "style", "${__10yen4}", "display", 'none', { fromValue: 'block'}], position: 22500, duration: 0 },
            { id: "eid20", tween: [ "style", "${_yen1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid42", tween: [ "style", "${_yen1}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid77", tween: [ "style", "${_Orange1}", "display", 'none', { fromValue: 'block'}], position: 13250, duration: 0 },
            { id: "eid233", tween: [ "style", "${__100yen14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid234", tween: [ "style", "${__100yen14}", "display", 'block', { fromValue: 'none'}], position: 19500, duration: 0 },
            { id: "eid244", tween: [ "style", "${__100yen14}", "display", 'none', { fromValue: 'block'}], position: 22500, duration: 0 },
            { id: "eid89", tween: [ "style", "${__5yen}", "display", 'block', { fromValue: 'none'}], position: 14250, duration: 0 },
            { id: "eid110", tween: [ "style", "${__5yen}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
            { id: "eid81", tween: [ "style", "${_yenRect}", "top", '-2px', { fromValue: '-9px'}], position: 0, duration: 15000 },
            { id: "eid161", tween: [ "style", "${_Ki}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
            { id: "eid14", tween: [ "style", "${_yenRect}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid46", tween: [ "style", "${__10yen3}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
            { id: "eid55", tween: [ "style", "${__10yen3}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
            { id: "eid60", tween: [ "style", "${__10yen3}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
            { id: "eid76", tween: [ "style", "${__10yen3}", "display", 'none', { fromValue: 'block'}], position: 13250, duration: 0 },
            { id: "eid23", tween: [ "style", "${_Apple}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid245", tween: [ "style", "${_five}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid246", tween: [ "style", "${_five}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
            { id: "eid10", tween: [ "style", "${_yenRect}", "border-top-left-radius", [20,20], { valueTemplate: '@@0@@px @@1@@px', fromValue: [20,20]}], position: 0, duration: 0 },
            { id: "eid117", tween: [ "style", "${_Coke}", "left", '-102px', { fromValue: '598px'}], position: 17500, duration: 10000 },
            { id: "eid11", tween: [ "style", "${_yenRect}", "border-top-right-radius", [20,20], { valueTemplate: '@@0@@px @@1@@px', fromValue: [20,20]}], position: 0, duration: 0 },
            { id: "eid82", tween: [ "style", "${_yenRect}", "width", '353px', { fromValue: '353px'}], position: 15000, duration: 0 },
            { id: "eid9", tween: [ "style", "${_yenRect}", "border-bottom-left-radius", [20,20], { valueTemplate: '@@0@@px @@1@@px', fromValue: [20,20]}], position: 0, duration: 0 },
            { id: "eid80", tween: [ "style", "${_yenRect}", "height", '85px', { fromValue: '92px'}], position: 0, duration: 15000 },
            { id: "eid27", tween: [ "style", "${_zero}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid100", tween: [ "style", "${__10yen}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid101", tween: [ "style", "${__10yen}", "display", 'block', { fromValue: 'none'}], position: 16000, duration: 0 },
            { id: "eid113", tween: [ "style", "${__10yen}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
            { id: "eid86", tween: [ "style", "${_KyabeKaba}", "left", '-152px', { fromValue: '598px'}], position: 13250, duration: 10000 },
            { id: "eid19", tween: [ "style", "${_in5yen}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid39", tween: [ "style", "${_in5yen}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid62", tween: [ "style", "${__10yen4}", "left", '337px', { fromValue: '337px'}], position: 11500, duration: 0 },
            { id: "eid250", tween: [ "style", "${_end3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid251", tween: [ "style", "${_end3}", "display", 'block', { fromValue: 'none'}], position: 30250, duration: 0 },
            { id: "eid248", tween: [ "style", "${_Fanta}", "left", '-182px', { fromValue: '600px'}], position: 22500, duration: 10000 },
            { id: "eid163", tween: [ "style", "${_KiCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid164", tween: [ "style", "${_KiCopy}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
            { id: "eid52", tween: [ "style", "${_Batu}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
            { id: "eid54", tween: [ "style", "${_Batu}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
            { id: "eid47", tween: [ "style", "${__10yen3Copy}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
            { id: "eid56", tween: [ "style", "${__10yen3Copy}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
            { id: "eid107", tween: [ "style", "${_four}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid109", tween: [ "style", "${_four}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
            { id: "eid247", tween: [ "style", "${_four}", "display", 'none', { fromValue: 'block'}], position: 22500, duration: 0 },
            { id: "eid116", tween: [ "style", "${_Orange1}", "left", '598px', { fromValue: '601px'}], position: 0, duration: 5000 },
            { id: "eid45", tween: [ "style", "${_Orange1}", "left", '-122px', { fromValue: '598px'}], position: 5000, duration: 10000 },
            { id: "eid78", tween: [ "style", "${_two}", "display", 'block', { fromValue: 'none'}], position: 13250, duration: 0 },
            { id: "eid108", tween: [ "style", "${_two}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
            { id: "eid12", tween: [ "style", "${_yenRect}", "border-bottom-right-radius", [20,20], { valueTemplate: '@@0@@px @@1@@px', fromValue: [20,20]}], position: 0, duration: 0 },
            { id: "eid94", tween: [ "style", "${__5yen2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid95", tween: [ "style", "${__5yen2}", "display", 'block', { fromValue: 'none'}], position: 14500, duration: 0 },
            { id: "eid111", tween: [ "style", "${__5yen2}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
            { id: "eid21", tween: [ "style", "${__10yen2}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid40", tween: [ "style", "${__10yen2}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid59", tween: [ "style", "${__10yen2}", "display", 'none', { fromValue: 'none'}], position: 11000, duration: 0 },
            { id: "eid61", tween: [ "style", "${__10yen2}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0 },
            { id: "eid75", tween: [ "style", "${__10yen2}", "display", 'none', { fromValue: 'block'}], position: 13250, duration: 0 },
            { id: "eid237", tween: [ "style", "${__10yen2}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
            { id: "eid243", tween: [ "style", "${__10yen2}", "display", 'none', { fromValue: 'block'}], position: 22500, duration: 0 },
            { id: "eid24", tween: [ "style", "${_one}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid79", tween: [ "style", "${_one}", "display", 'none', { fromValue: 'block'}], position: 13250, duration: 0 },
            { id: "eid241", tween: [ "style", "${_Coke}", "display", 'none', { fromValue: 'block'}], position: 22500, duration: 0 }         ]
      }
   }
},
"time2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'text',
      align: 'right',
      rect: ['10px','28px','auto','auto','auto','auto'],
      id: 'time_txt',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',32,'rgba(1,1,1,1.00)','normal','none','']
   },
   {
      type: 'text',
      rect: ['0px','0px','auto','auto','auto','auto'],
      id: 'Text2',
      text: 'TIME',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(249,249,249,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_time_txt}": [
            ["style", "top", '28px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(1,1,1,1.00)'],
            ["style", "left", '10px'],
            ["style", "font-size", '32px']
         ],
         "${_Text2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18352,
         autoPlay: true,
         labels: {
            "start": 0
         },
         timeline: [
            { id: "eid115", tween: [ "color", "${_Text2}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 18352, duration: 0 }         ]
      }
   }
},
"umai": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group5',
      type: 'group',
      rect: ['0','0','100','90','auto','auto'],
      c: [
      {
         id: 'ume',
         type: 'image',
         rect: ['0px','0px','100px','90px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/ume.jpg','0px','0px']
      },
      {
         type: 'text',
         rect: ['7px','80px','87px','53px','auto','auto'],
         id: 'Text4',
         text: '10円',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(0,0,0,1)','normal','none','normal']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text4}": [
            ["style", "height", '53px'],
            ["style", "top", '80px'],
            ["style", "left", '7px'],
            ["style", "width", '87px']
         ],
         "${_ume}": [
            ["style", "height", '90px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${_Group5}": [
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '100px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid298", tween: [ "style", "${_Group5}", "left", '-700px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"orange": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group6',
      type: 'group',
      rect: ['0','0','120','100','auto','auto'],
      c: [
      {
         id: 'orange',
         type: 'image',
         rect: ['0px','0px','120px','100px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/orange.jpg','0px','0px']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'orangeYen',
         text: '160円',
         align: 'center',
         rect: ['0px','22px','120px','56px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_orangeYen}": [
            ["style", "top", '22px'],
            ["style", "left", '0px'],
            ["style", "width", '120px']
         ],
         "${_Group6}": [
            ["style", "left", '0px']
         ],
         "${_orange}": [
            ["style", "top", '0px'],
            ["style", "height", '100px'],
            ["style", "left", '0px'],
            ["style", "width", '120px']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '120px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid338", tween: [ "style", "${_Group6}", "left", '-731px', { fromValue: '0px'}], position: 250, duration: 9750 },
            { id: "eid339", tween: [ "style", "${_Group6}", "left", '-746px', { fromValue: '-731px'}], position: 10000, duration: 0 }         ]
      }
   }
},
"Apple": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group4',
      type: 'group',
      rect: ['0','0','130','117','auto','auto'],
      c: [
      {
         id: 'apple2',
         type: 'image',
         rect: ['0px','0px','130px','117px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/apple.jpg','0px','0px']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'appleYen',
         text: '200円',
         align: 'left',
         rect: ['11px','33px','108px','50px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_appleYen}": [
            ["style", "height", '50px'],
            ["style", "top", '33px'],
            ["style", "left", '11px'],
            ["style", "width", '108px']
         ],
         "${_apple2}": [
            ["style", "top", '0px'],
            ["style", "height", '117px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${_Group4}": [
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '130px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid299", tween: [ "style", "${_Group4}", "left", '-731px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"kyabekaba": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group3',
      type: 'group',
      rect: ['0','0','151','117','auto','auto'],
      c: [
      {
         id: 'candy',
         type: 'image',
         rect: ['1px','0px','148px','117px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/candy.png','0px','0px']
      },
      {
         type: 'text',
         rect: ['50px','83px','60px','34px','auto','auto'],
         id: 'Text3',
         text: '30円',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_candy}": [
            ["style", "top", '0px'],
            ["style", "height", '117px'],
            ["style", "left", '1px'],
            ["style", "width", '148px']
         ],
         "${_Group3}": [
            ["style", "left", '0px']
         ],
         "${_Text3}": [
            ["style", "top", '83px'],
            ["style", "left", '50px'],
            ["style", "width", '60px']
         ],
         "${symbolSelector}": [
            ["style", "height", '117px'],
            ["style", "width", '151px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid300", tween: [ "style", "${_Group3}", "left", '-752px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"Batu": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Batu',
      type: 'group',
      rect: ['0px','0px','356','81','auto','auto'],
      c: [
      {
         rect: ['0px','0px','356px','81px','auto','auto'],
         borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
         opacity: 0.703125,
         id: 'batu',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(192,192,192,1)']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'batuText',
         text: '間違っています',
         align: 'center',
         rect: ['42px','11px','277px','60px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_batu}": [
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '81px'],
            ["style", "opacity", '0.703125'],
            ["style", "left", '0px'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_batuText}": [
            ["style", "top", '11px'],
            ["style", "left", '42px'],
            ["style", "font-size", '35px']
         ],
         "${_Batu}": [
            ["style", "display", 'block'],
            ["style", "left", '140px'],
            ["style", "top", '157px']
         ],
         "${symbolSelector}": [
            ["style", "height", '147px'],
            ["style", "width", '356px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid311", tween: [ "style", "${_Batu}", "left", '140px', { fromValue: '140px'}], position: 0, duration: 0 },
            { id: "eid275", tween: [ "style", "${_Batu}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid313", tween: [ "style", "${_Batu}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid312", tween: [ "style", "${_Batu}", "top", '157px', { fromValue: '157px'}], position: 0, duration: 0 }         ]
      }
   }
},
"batu": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'group',
      display: 'none',
      id: 'batu',
      rect: ['0px','0px','356','81','auto','auto'],
      c: [
      {
         rect: ['0px','0px','356px','81px','auto','auto'],
         borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
         opacity: 0.703125,
         id: 'batuCopy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(192,192,192,1)']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'batuTextCopy',
         text: '間違っています',
         align: 'center',
         rect: ['42px','11px','277px','60px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_batu}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_batuTextCopy}": [
            ["style", "top", '11px'],
            ["style", "left", '42px'],
            ["style", "font-size", '35px']
         ],
         "${_batuCopy}": [
            ["style", "top", '0px'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '81px'],
            ["style", "opacity", '0.703125'],
            ["style", "left", '0px'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '81px'],
            ["style", "width", '356px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid320", tween: [ "style", "${_batu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid332", tween: [ "style", "${_batu}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid333", tween: [ "style", "${_batu}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }         ]
      }
   }
},
"Hambarger": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Bager',
      type: 'group',
      rect: ['0px','0px','121','126','auto','auto'],
      c: [
      {
         id: 'bager',
         type: 'image',
         rect: ['0px','0px','121px','94px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/bager.png','0px','0px']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text10',
         text: '250円',
         align: 'left',
         rect: ['38px','89px','75px','37px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Bager}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '126px'],
            ["style", "width", '121px']
         ],
         "${_bager}": [
            ["style", "top", '0px'],
            ["style", "height", '94px'],
            ["style", "left", '0px'],
            ["style", "width", '121px']
         ],
         "${_Text10}": [
            ["style", "height", '37px'],
            ["style", "left", '38px'],
            ["style", "top", '89px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid402", tween: [ "style", "${_Bager}", "left", '-724px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"Ice3": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '135px'],
            ["style", "width", '75px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Noodle": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'CupNoodlle',
      type: 'group',
      rect: ['0px','0px','90','135','auto','auto'],
      c: [
      {
         id: 'noodle',
         type: 'image',
         rect: ['0px','0px','90px','105px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Noodle.png','0px','0px']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text15',
         text: '150円',
         align: 'left',
         rect: ['9px','102px','75px','33px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_noodle}": [
            ["style", "top", '0px'],
            ["style", "height", '105px'],
            ["style", "left", '0px'],
            ["style", "width", '90px']
         ],
         "${_CupNoodlle}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text15}": [
            ["style", "height", '33px'],
            ["style", "left", '9px'],
            ["style", "top", '102px']
         ],
         "${symbolSelector}": [
            ["style", "height", '135px'],
            ["style", "width", '90px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid426", tween: [ "style", "${_CupNoodlle}", "left", '-692px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"Maido": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','278px','58px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',40,'rgba(255,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'maido',
      text: 'へい　まいど!!',
      display: 'none',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_maido}": [
            ["style", "top", '0px'],
            ["style", "font-size", '40px'],
            ["style", "height", '58px'],
            ["color", "color", 'rgba(255,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '278px']
         ],
         "${symbolSelector}": [
            ["style", "height", '58px'],
            ["style", "width", '278px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid432", tween: [ "style", "${_maido}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid433", tween: [ "style", "${_maido}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid434", tween: [ "style", "${_maido}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }         ]
      }
   }
},
"Ice": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'icecream',
      type: 'group',
      rect: ['0px','0px','75','135','auto','auto'],
      c: [
      {
         id: 'ice',
         type: 'image',
         rect: ['-101px','64px','789px','1600px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/ice.png','0px','0px']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text11',
         text: '120円<br>',
         align: 'left',
         rect: ['0px','114px','75px','42px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ice}": [
            ["style", "top", '0px'],
            ["style", "height", '122px'],
            ["style", "display", 'block'],
            ["style", "left", '3px'],
            ["style", "width", '60px']
         ],
         "${_icecream}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '135px'],
            ["style", "width", '75px']
         ],
         "${_Text11}": [
            ["style", "left", '0px'],
            ["style", "top", '114px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid416", tween: [ "style", "${_ice}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
            { id: "eid405", tween: [ "style", "${_ice}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid414", tween: [ "style", "${_ice}", "height", '122px', { fromValue: '122px'}], position: 0, duration: 0 },
            { id: "eid417", tween: [ "style", "${_ice}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid415", tween: [ "style", "${_ice}", "width", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid419", tween: [ "style", "${_icecream}", "left", '-676px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"fanta": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Fanta',
      type: 'group',
      rect: ['0px','0px','182','120','auto','auto'],
      c: [
      {
         id: 'fanta',
         type: 'image',
         rect: ['0px','0px','110px','110px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/fanta.jpg','0px','0px']
      },
      {
         id: 'kyabetu2',
         type: 'image',
         rect: ['92px','24px','85px','75px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/kyabetu.jpg','0px','0px']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text8',
         text: '120円  30円',
         align: 'center',
         rect: ['3px','63px','179px','57px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_kyabetu2}": [
            ["style", "height", '75px'],
            ["style", "top", '24px'],
            ["style", "left", '92px'],
            ["style", "width", '85px']
         ],
         "${_Fanta}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '120px'],
            ["style", "width", '182px']
         ],
         "${_fanta}": [
            ["style", "top", '0px'],
            ["style", "height", '110px'],
            ["style", "left", '0px'],
            ["style", "width", '110px']
         ],
         "${_Text8}": [
            ["style", "top", '63px'],
            ["style", "font-size", '30px'],
            ["style", "left", '3px'],
            ["style", "width", '179px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid456", tween: [ "style", "${_Fanta}", "top", '0px', { fromValue: '0px'}], position: 250, duration: 0 },
            { id: "eid457", tween: [ "style", "${_Fanta}", "top", '0px', { fromValue: '0px'}], position: 10000, duration: 0 },
            { id: "eid454", tween: [ "style", "${_Fanta}", "left", '-786px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"Coke": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Coke',
      type: 'group',
      rect: ['0px','10px','100','90','auto','auto'],
      c: [
      {
         id: 'coke',
         type: 'image',
         rect: ['2px','-10px','110px','110px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coke.jpg','0px','0px']
      },
      {
         rect: ['6px','24px','111px','53px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text4',
         text: '120円',
         align: 'left',
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_coke}": [
            ["style", "height", '110px'],
            ["style", "top", '-10px'],
            ["style", "left", '2px'],
            ["style", "width", '110px']
         ],
         "${_Coke}": [
            ["style", "top", '10px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '110px'],
            ["style", "width", '117px']
         ],
         "${_Text4}": [
            ["style", "height", '53px'],
            ["style", "top", '24px'],
            ["style", "left", '6px'],
            ["style", "width", '111px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid460", tween: [ "style", "${_Coke}", "left", '-717px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"hondai2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'haikei',
      type: 'image',
      rect: ['0px','-2px','601px','404px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/haikei.jpg','0px','0px']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',50,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'buysum',
      text: '0',
      align: 'center',
      rect: ['25px','55px','75px','57px','auto','auto']
   },
   {
      id: 'Nikuman2',
      type: 'rect',
      rect: ['599','145','auto','auto','auto','auto']
   },
   {
      id: 'Crape2',
      type: 'rect',
      rect: ['599','145','auto','auto','auto','auto']
   },
   {
      id: 'Fchicken2',
      type: 'rect',
      rect: ['599','148','auto','auto','auto','auto']
   },
   {
      id: 'Amedog2',
      type: 'rect',
      rect: ['646','179','auto','auto','auto','auto']
   },
   {
      id: 'Hotdog2',
      type: 'rect',
      rect: ['621','186','auto','auto','auto','auto']
   },
   {
      id: 'Potato2',
      type: 'rect',
      rect: ['633','191','auto','auto','auto','auto']
   },
   {
      id: 'Noodle2',
      type: 'rect',
      rect: ['601','163','auto','auto','auto','auto']
   },
   {
      id: 'Ice2',
      type: 'rect',
      rect: ['608','149','auto','auto','auto','auto']
   },
   {
      id: 'Hambarger2',
      type: 'rect',
      rect: ['601','163','auto','auto','auto','auto']
   },
   {
      id: 'orange2',
      type: 'rect',
      rect: ['601','163','auto','auto','auto','auto']
   },
   {
      id: 'umai2',
      type: 'rect',
      rect: ['601','163','auto','auto','auto','auto']
   },
   {
      id: 'Apple2',
      type: 'rect',
      rect: ['601','163','auto','auto','auto','auto']
   },
   {
      id: 'kyabekaba2',
      type: 'rect',
      rect: ['601','163','auto','auto','auto','auto']
   },
   {
      id: 'Batu',
      type: 'rect',
      rect: ['140','157','auto','auto','auto','auto']
   },
   {
      id: 'Maido',
      type: 'rect',
      rect: ['198','171','auto','auto','auto','auto']
   },
   {
      id: 'okanjo',
      type: 'group',
      rect: ['445px','285px','135','42','auto','auto'],
      c: [
      {
         fill: ['rgba(255,231,0,1.00)'],
         rect: ['0px','0px','135px','42px','auto','auto'],
         borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
         type: 'rect',
         id: 'Rectangle2',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         cursor: ['pointer'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         type: 'text',
         align: 'center',
         id: 'Text',
         text: 'はらう',
         cursor: ['pointer'],
         rect: ['14px','7px','108px','28px','auto','auto']
      }]
   },
   {
      id: 'yarinaoshi',
      type: 'group',
      rect: ['445px','337px','135','42','auto','auto'],
      c: [
      {
         fill: ['rgba(44,255,202,1.00)'],
         rect: ['0px','0px','135px','42px','auto','auto'],
         borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
         type: 'rect',
         id: 'Rectangle3',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         cursor: ['pointer'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',20,'rgba(0,0,0,1)','normal','none',''],
         type: 'text',
         id: 'TextCopy',
         text: 'やりなおし',
         cursor: ['pointer'],
         rect: ['14px','7px','108px','28px','auto','auto']
      }]
   },
   {
      id: 'selectYen',
      type: 'group',
      rect: ['67px','295px','330px','75px','auto','auto'],
      c: [
      {
         rect: ['0px','0px','378px','83px','auto','auto'],
         borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
         fill: ['rgba(0,212,105,1.00)'],
         id: 'yenRect',
         stroke: [1,'rgba(0,0,0,1)','solid'],
         type: 'rect',
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         id: 's5yen',
         type: 'image',
         rect: ['12px','-1px','75px','75px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/5yen.png','0px','0px']
      },
      {
         type: 'image',
         id: 's10yen',
         rect: ['93px','-1px','75px','75px','auto','auto'],
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/10yen.png','0px','0px']
      },
      {
         type: 'image',
         id: 's50yen',
         rect: ['180px','-1px','75px','75px','auto','auto'],
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/yen50.png','0px','0px']
      },
      {
         type: 'image',
         id: 's100yen',
         rect: ['262px','-1px','75px','75px','auto','auto'],
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/100yen1.png','0px','0px']
      }]
   },
   {
      id: 'hart',
      type: 'image',
      rect: ['1px','308px','58px','57px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hart.gif','0px','0px']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Ki',
      text: '×3<br>',
      align: 'left',
      rect: ['9px','314px','39px','37px','auto','auto']
   },
   {
      id: 'saifu',
      type: 'image',
      rect: ['100px','4px','438px','139px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/saifu.gif','0px','0px']
   },
   {
      type: 'image',
      id: 'yen5',
      tag: 'img',
      rect: ['411px','55px','60px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px']
   },
   {
      type: 'image',
      id: 'yen4',
      tag: 'img',
      rect: ['345px','55px','60px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px']
   },
   {
      type: 'image',
      id: 'yen3',
      tag: 'img',
      rect: ['281px','55px','60px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px']
   },
   {
      type: 'image',
      id: 'yen2',
      tag: 'img',
      rect: ['217px','55px','60px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px']
   },
   {
      type: 'image',
      id: 'yen1',
      tag: 'img',
      rect: ['149px','55px','60px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'timecount',
      text: ' ',
      align: 'left',
      rect: ['478px','62px','102px','60px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'cntBuy',
      text: '購入数',
      align: 'left',
      rect: ['9px','14px','108px','42px','auto','auto']
   },
   {
      type: 'group',
      display: 'none',
      id: 'B',
      rect: ['102','62','416','261','auto','auto'],
      c: [
      {
         rect: ['16px','0px','398px','259px','auto','auto'],
         borderRadius: ['50px 50px','50px 50px','50px 50px','50px 50px'],
         fill: ['rgba(0,151,255,1.00)'],
         id: 'RECT5Copy',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         type: 'rect',
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         id: 'devil',
         type: 'image',
         rect: ['285px','97px','119px','142px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/devil.png','0px','0px']
      },
      {
         type: 'group',
         id: 'back',
         cursor: ['pointer'],
         rect: ['29px','159px','135','80','auto','auto'],
         c: [
         {
            fill: ['rgba(254,254,13,1.00)'],
            rect: ['0px','0px','206px','78px','auto','auto'],
            borderRadius: ['50%','50%','50%','50%'],
            filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
            id: 'EllipseCopy',
            stroke: [1,'rgb(0, 0, 0)','solid'],
            type: 'ellipse',
            boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
         },
         {
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,'rgba(10,0,0,1.00)','normal','none','normal'],
            type: 'text',
            id: 'Text3Copy',
            text: 'タイトルへ戻る',
            align: 'left',
            rect: ['29px','24px','170px','42px','auto','auto']
         }]
      },
      {
         id: 'HUKICopy',
         type: 'group',
         rect: ['0px','12px','299','180','auto','auto'],
         c: [
         {
            transform: [[0,0],[],[],['-1']],
            id: 'HUKI_4Copy',
            type: 'image',
            rect: ['0px','0px','299px','180px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/HUKI_4.png','0px','0px']
         },
         {
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(0,15,255,1.00)','normal','none','normal'],
            type: 'text',
            id: 'Text8Copy',
            text: 'ざんねん...<br>',
            align: 'left',
            rect: ['57px','23px','137px','42px','auto','auto']
         },
         {
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(0,15,255,1)','normal','none','normal'],
            id: 'Nokori',
            type: 'text',
            align: 'left',
            rect: ['58px','58px','215px','51px','auto','auto']
         }]
      }]
   },
   {
      type: 'group',
      display: 'none',
      id: 'C',
      rect: ['102','62','416','261','auto','auto'],
      c: [
      {
         rect: ['16px','0px','398px','259px','auto','auto'],
         borderRadius: ['50px 50px','50px 50px','50px 50px','50px 50px'],
         fill: ['rgba(255,255,118,1.00)'],
         id: 'RECT5',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         type: 'rect',
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         id: 'Ctime',
         type: 'group',
         rect: ['55px','249px','330','70','auto','auto'],
         c: [
         {
            rect: ['0px','0px','328px','68px','auto','auto'],
            borderRadius: ['10px','10px','10px','10px'],
            fill: ['rgba(255,255,255,1.00)'],
            id: 'RECT',
            stroke: [1,'rgb(0, 0, 0)','solid'],
            type: 'rect',
            boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.648438)']
         },
         {
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,'rgba(255,0,255,1.00)','normal','none','normal'],
            type: 'text',
            id: 'test2',
            text: 'a',
            align: 'left',
            rect: ['120px','26px','45px','43px','auto','auto']
         },
         {
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,'rgba(0,15,255,1)','normal','none','normal'],
            type: 'text',
            id: 'Text7',
            text: 'レベル２　クリアタイム<br>　　　　　　秒',
            align: 'left',
            rect: ['47px','4px','226px','57px','auto','auto']
         }]
      },
      {
         type: 'group',
         id: 'next',
         cursor: ['pointer'],
         rect: ['29px','159px','135','80','auto','auto'],
         c: [
         {
            rect: ['0px','0px','133px','78px','auto','auto'],
            borderRadius: ['50%','50%','50%','50%'],
            fill: ['rgba(255,0,0,1.00)'],
            id: 'Ellipse',
            stroke: [1,'rgb(0, 0, 0)','solid'],
            type: 'ellipse',
            boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
         },
         {
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(31,255,0,1.00)','normal','none','normal'],
            type: 'text',
            id: 'Text3',
            text: '次へ',
            align: 'left',
            rect: ['30px','17px','75px','42px','auto','auto']
         }]
      },
      {
         id: 'smako',
         type: 'image',
         rect: ['224px','69px','180px','180px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/smako.png','0px','0px']
      },
      {
         id: 'HUKI',
         type: 'group',
         rect: ['0px','12px','299','180','auto','auto'],
         c: [
         {
            transform: [[0,0],[],[],['-1']],
            id: 'HUKI_4',
            type: 'image',
            rect: ['0px','0px','299px','180px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/HUKI_4.png','0px','0px']
         },
         {
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(0,15,255,1.00)','normal','none','normal'],
            type: 'text',
            id: 'Text8',
            text: 'おめでとう！<br>レベル2 クリア！<br>',
            align: 'left',
            rect: ['57px','23px','222px','81px','auto','auto']
         }]
      }]
   }],
   symbolInstances: [
   {
      id: 'Nikuman2',
      symbolName: 'Nikuman2'
   },
   {
      id: 'Fchicken2',
      symbolName: 'Fchicken'
   },
   {
      id: 'Crape2',
      symbolName: 'Crape2'
   },
   {
      id: 'Ice2',
      symbolName: 'Ice2'
   },
   {
      id: 'umai2',
      symbolName: 'umai2'
   },
   {
      id: 'Amedog2',
      symbolName: 'Amedog2'
   },
   {
      id: 'Apple2',
      symbolName: 'Apple2'
   },
   {
      id: 'orange2',
      symbolName: 'orange2'
   },
   {
      id: 'Batu',
      symbolName: 'batu'
   },
   {
      id: 'Maido',
      symbolName: 'Maido'
   },
   {
      id: 'kyabekaba2',
      symbolName: 'kyabekaba2'
   },
   {
      id: 'Hambarger2',
      symbolName: 'Hambarger2'
   },
   {
      id: 'Potato2',
      symbolName: 'Potato2'
   },
   {
      id: 'Noodle2',
      symbolName: 'Noodle2'
   },
   {
      id: 'Hotdog2',
      symbolName: 'hotdog2'
   }   ]
   },
   states: {
      "Base State": {
         "${_devil}": [
            ["style", "top", '97px'],
            ["style", "height", '142px'],
            ["style", "left", '285px'],
            ["style", "width", '119px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,231,0,1.00)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-width", '1px']
         ],
         "${_yen2}": [
            ["style", "top", '73px'],
            ["style", "display", 'block'],
            ["style", "height", '60px'],
            ["style", "left", '217px'],
            ["style", "width", '60px']
         ],
         "${_Potato2}": [
            ["style", "left", '599px'],
            ["style", "top", '148px']
         ],
         "${_Hotdog2}": [
            ["style", "left", '601px'],
            ["style", "top", '149px']
         ],
         "${_Text8}": [
            ["style", "top", '23px'],
            ["color", "color", 'rgba(0,15,255,1.00)'],
            ["style", "font-size", '25px'],
            ["style", "left", '57px'],
            ["style", "width", '222px']
         ],
         "${_s10yen}": [
            ["style", "top", '-1px'],
            ["style", "height", '75px'],
            ["style", "left", '93px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '75px']
         ],
         "${_Ice2}": [
            ["style", "top", '139px']
         ],
         "${_B}": [
            ["style", "display", 'none']
         ],
         "${_timecount}": [
            ["style", "top", '62px'],
            ["style", "left", '478px']
         ],
         "${_Amedog2}": [
            ["style", "left", '601px'],
            ["style", "top", '148px']
         ],
         "${_Hambarger2}": [
            ["style", "top", '149px']
         ],
         "${_Noodle2}": [
            ["style", "top", '149px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(44,255,202,1.00)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-width", '1px']
         ],
         "${_umai2}": [
            ["style", "top", '158px']
         ],
         "${_yarinaoshi}": [
            ["style", "left", '445px'],
            ["style", "top", '337px']
         ],
         "${_Text8Copy}": [
            ["style", "top", '23px'],
            ["style", "width", '137px'],
            ["color", "color", 'rgba(0,15,255,1)'],
            ["style", "height", '42px'],
            ["style", "left", '57px'],
            ["style", "font-size", '25px']
         ],
         "${_next}": [
            ["style", "top", '159px'],
            ["style", "left", '29px'],
            ["style", "cursor", 'pointer']
         ],
         "${_hart}": [
            ["style", "top", '308px'],
            ["style", "height", '57px'],
            ["style", "left", '1px'],
            ["style", "width", '58px']
         ],
         "${_HUKI_4Copy}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '0px'],
            ["style", "height", '180px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(255,0,0,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '0px'],
            ["style", "width", '133px'],
            ["style", "top", '0px'],
            ["style", "height", '78px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_Nokori}": [
            ["style", "top", '58px'],
            ["style", "left", '58px'],
            ["style", "width", '215px']
         ],
         "${_okanjo}": [
            ["style", "left", '445px'],
            ["style", "top", '285px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '24px'],
            ["color", "color", 'rgba(10,0,0,1.00)'],
            ["style", "width", '170px'],
            ["style", "left", '29px'],
            ["style", "font-size", '20px']
         ],
         "${_TextCopy}": [
            ["style", "top", '7px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '14px'],
            ["style", "font-size", '20px']
         ],
         "${_yen1}": [
            ["style", "top", '73px'],
            ["style", "display", 'block'],
            ["style", "height", '60px'],
            ["style", "left", '149px'],
            ["style", "width", '60px']
         ],
         "${_Apple2}": [
            ["style", "top", '159px']
         ],
         "${_selectYen}": [
            ["style", "height", '75px'],
            ["style", "top", '295px'],
            ["style", "left", '67px'],
            ["style", "width", '330px']
         ],
         "${_Text7}": [
            ["style", "top", '4px'],
            ["style", "width", '226px'],
            ["style", "height", '57px'],
            ["color", "color", 'rgba(0,15,255,1)'],
            ["style", "left", '47px'],
            ["style", "font-size", '20px']
         ],
         "${_C}": [
            ["style", "display", 'none']
         ],
         "${_Text3}": [
            ["style", "top", '17px'],
            ["color", "color", 'rgba(31,255,0,1.00)'],
            ["style", "left", '30px'],
            ["style", "width", '75px']
         ],
         "${_RECT5}": [
            ["color", "background-color", 'rgba(255,255,0,1.00)'],
            ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '16px'],
            ["style", "width", '398px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '325px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_saifu}": [
            ["style", "height", '139px'],
            ["style", "top", '4px'],
            ["style", "left", '100px'],
            ["style", "width", '438px']
         ],
         "${_haikei}": [
            ["style", "top", '-2px'],
            ["style", "height", '404px'],
            ["style", "left", '0px'],
            ["style", "width", '601px']
         ],
         "${_Ki}": [
            ["style", "top", '314px'],
            ["style", "display", 'block'],
            ["style", "height", '37px'],
            ["style", "left", '9px'],
            ["style", "width", '39px']
         ],
         "${_kyabekaba2}": [
            ["style", "top", '157px']
         ],
         "${_yen4}": [
            ["style", "top", '73px'],
            ["style", "display", 'block'],
            ["style", "height", '60px'],
            ["style", "left", '345px'],
            ["style", "width", '60px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '750px']
         ],
         "${_yen3}": [
            ["style", "top", '73px'],
            ["style", "display", 'block'],
            ["style", "height", '60px'],
            ["style", "left", '281px'],
            ["style", "width", '60px']
         ],
         "${_EllipseCopy}": [
            ["color", "background-color", 'rgba(254,254,13,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "filter.hue-rotate", '0deg'],
            ["style", "left", '0px'],
            ["style", "width", '206px'],
            ["style", "top", '0px'],
            ["style", "height", '78px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_HUKI}": [
            ["style", "left", '0px'],
            ["style", "top", '12px']
         ],
         "${_RECT}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '0px'],
            ["style", "width", '328px'],
            ["style", "top", '0px'],
            ["style", "height", '68px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_HUKI_4}": [
            ["style", "height", '180px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '-1']
         ],
         "${_s50yen}": [
            ["style", "top", '-1px'],
            ["style", "height", '75px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '180px'],
            ["style", "width", '75px']
         ],
         "${_HUKICopy}": [
            ["style", "left", '0px'],
            ["style", "top", '12px']
         ],
         "${_smako}": [
            ["style", "height", '180px'],
            ["style", "top", '69px'],
            ["style", "left", '224px'],
            ["style", "width", '180px']
         ],
         "${_RECT5Copy}": [
            ["color", "background-color", 'rgba(0,151,255,1.00)'],
            ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '16px'],
            ["style", "width", '398px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "height", '259px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_buysum}": [
            ["style", "top", '55px'],
            ["style", "left", '25px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '50px']
         ],
         "${_test2}": [
            ["style", "top", '26px'],
            ["style", "height", '43px'],
            ["color", "color", 'rgba(255,0,255,1)'],
            ["style", "left", '120px'],
            ["style", "width", '45px']
         ],
         "${_yen5}": [
            ["style", "top", '73px'],
            ["style", "height", '60px'],
            ["style", "display", 'block'],
            ["style", "left", '411px'],
            ["style", "width", '60px']
         ],
         "${_back}": [
            ["style", "top", '159px'],
            ["style", "left", '29px'],
            ["style", "cursor", 'pointer']
         ],
         "${_s100yen}": [
            ["style", "top", '-1px'],
            ["style", "height", '75px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '262px'],
            ["style", "width", '75px']
         ],
         "${_Text}": [
            ["style", "top", '7px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '14px'],
            ["style", "text-align", 'center']
         ],
         "${_orange2}": [
            ["style", "top", '159px']
         ],
         "${_cntBuy}": [
            ["style", "left", '9px'],
            ["style", "top", '14px']
         ],
         "${_Ctime}": [
            ["style", "left", '55px'],
            ["style", "top", '249px']
         ],
         "${_s5yen}": [
            ["style", "top", '-1px'],
            ["style", "height", '75px'],
            ["style", "left", '12px'],
            ["style", "width", '75px']
         ],
         "${_yenRect}": [
            ["color", "background-color", 'rgba(0,212,105,1.00)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '353px'],
            ["style", "top", '-9px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '92px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-width", '1px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid459", tween: [ "style", "${_umai2}", "top", '158px', { fromValue: '158px'}], position: 0, duration: 0 },
            { id: "eid353", tween: [ "gradient", "${_RECT5}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 0, duration: 0 },
            { id: "eid458", tween: [ "style", "${_Apple2}", "top", '159px', { fromValue: '159px'}], position: 0, duration: 0 },
            { id: "eid465", tween: [ "style", "${_Ice2}", "top", '139px', { fromValue: '139px'}], position: 0, duration: 0 },
            { id: "eid529", tween: [ "style", "${_Potato2}", "left", '599px', { fromValue: '599px'}], position: 0, duration: 0 },
            { id: "eid528", tween: [ "style", "${_Hotdog2}", "top", '149px', { fromValue: '149px'}], position: 0, duration: 0 },
            { id: "eid565", tween: [ "style", "${_Amedog2}", "left", '601px', { fromValue: '601px'}], position: 0, duration: 0 },
            { id: "eid399", tween: [ "style", "${_B}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid464", tween: [ "style", "${_Noodle2}", "top", '149px', { fromValue: '149px'}], position: 0, duration: 0 },
            { id: "eid455", tween: [ "style", "${_kyabekaba2}", "top", '157px', { fromValue: '157px'}], position: 0, duration: 0 },
            { id: "eid526", tween: [ "style", "${_Amedog2}", "top", '148px', { fromValue: '148px'}], position: 0, duration: 0 },
            { id: "eid462", tween: [ "style", "${_Hambarger2}", "top", '149px', { fromValue: '149px'}], position: 0, duration: 0 },
            { id: "eid527", tween: [ "style", "${_Hotdog2}", "left", '601px', { fromValue: '601px'}], position: 0, duration: 0 },
            { id: "eid395", tween: [ "color", "${_RECT5}", "background-color", 'rgba(255,255,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid398", tween: [ "style", "${_C}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid461", tween: [ "style", "${_orange2}", "top", '159px', { fromValue: '159px'}], position: 0, duration: 0 },
            { id: "eid530", tween: [ "style", "${_Potato2}", "top", '148px', { fromValue: '148px'}], position: 0, duration: 0 },
            { id: "eid597", tween: [ "style", "${_RECT5}", "height", '325px', { fromValue: '325px'}], position: 0, duration: 0 },
            { id: "eid331", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Batu}', [] ], ""], position: 0 },
            { id: "eid448", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_umai2}', [] ], ""], position: 0 },
            { id: "eid453", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_kyabekaba2}', [] ], ""], position: 0 },
            { id: "eid450", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Hambarger2}', [] ], ""], position: 0 },
            { id: "eid568", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Fchicken2}', [] ], ""], position: 0 },
            { id: "eid532", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Hotdog2}', [] ], ""], position: 0 },
            { id: "eid569", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Nikuman2}', [] ], ""], position: 0 },
            { id: "eid447", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_orange2}', [] ], ""], position: 0 },
            { id: "eid533", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Potato2}', [] ], ""], position: 0 },
            { id: "eid531", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Amedog2}', [] ], ""], position: 0 },
            { id: "eid449", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Apple2}', [] ], ""], position: 0 },
            { id: "eid435", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Maido}', [] ], ""], position: 0 },
            { id: "eid466", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Ice2}', [] ], ""], position: 0 },
            { id: "eid451", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Noodle2}', [] ], ""], position: 0 },
            { id: "eid570", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Crape2}', [] ], ""], position: 0 }         ]
      }
   }
},
"kyabekaba2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group3',
      type: 'group',
      rect: ['0','0','151','117','auto','auto'],
      c: [
      {
         id: 'candy2',
         type: 'image',
         rect: ['0px','2px','149px','113px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/candy.png','0px','0px']
      },
      {
         type: 'text',
         rect: ['51px','81px','60px','34px','auto','auto'],
         id: 'Text3',
         text: '25円',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_candy2}": [
            ["style", "height", '113px'],
            ["style", "top", '2px'],
            ["style", "left", '0px'],
            ["style", "width", '149px']
         ],
         "${_Group3}": [
            ["style", "left", '0px']
         ],
         "${_Text3}": [
            ["style", "top", '81px'],
            ["style", "left", '51px'],
            ["style", "width", '60px']
         ],
         "${symbolSelector}": [
            ["style", "height", '117px'],
            ["style", "width", '151px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid300", tween: [ "style", "${_Group3}", "left", '-752px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"Apple2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group4',
      type: 'group',
      rect: ['0','0','130','117','auto','auto'],
      c: [
      {
         id: 'apple2',
         type: 'image',
         rect: ['0px','0px','130px','117px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/apple.jpg','0px','0px']
      },
      {
         rect: ['11px','33px','108px','50px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'appleYen',
         text: '260円',
         align: 'left',
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_appleYen}": [
            ["style", "top", '33px'],
            ["style", "height", '50px'],
            ["style", "left", '11px'],
            ["style", "width", '108px']
         ],
         "${_apple2}": [
            ["style", "height", '117px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '130px']
         ],
         "${_Group4}": [
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid299", tween: [ "style", "${_Group4}", "left", '-731px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"Hambarger2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Bager',
      type: 'group',
      rect: ['0px','0px','121','126','auto','auto'],
      c: [
      {
         id: 'bager',
         type: 'image',
         rect: ['0px','0px','121px','94px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/bager.png','0px','0px']
      },
      {
         rect: ['38px','89px','75px','37px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text10',
         text: '315円',
         align: 'left',
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Bager}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '126px'],
            ["style", "width", '121px']
         ],
         "${_bager}": [
            ["style", "height", '94px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '121px']
         ],
         "${_Text10}": [
            ["style", "height", '37px'],
            ["style", "left", '38px'],
            ["style", "top", '89px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid402", tween: [ "style", "${_Bager}", "left", '-724px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"Noodle2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'CupNoodlle',
      type: 'group',
      rect: ['0px','0px','90','135','auto','auto'],
      c: [
      {
         id: 'noodle',
         type: 'image',
         rect: ['0px','0px','90px','105px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Noodle.png','0px','0px']
      },
      {
         rect: ['9px','102px','75px','33px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text15',
         text: '130円',
         align: 'left',
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_noodle}": [
            ["style", "height", '105px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '90px']
         ],
         "${_CupNoodlle}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text15}": [
            ["style", "height", '33px'],
            ["style", "left", '9px'],
            ["style", "top", '102px']
         ],
         "${symbolSelector}": [
            ["style", "height", '135px'],
            ["style", "width", '90px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid426", tween: [ "style", "${_CupNoodlle}", "left", '-692px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"orange2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group6',
      type: 'group',
      rect: ['0','0','120','100','auto','auto'],
      c: [
      {
         id: 'orange',
         type: 'image',
         rect: ['0px','0px','120px','100px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/orange.jpg','0px','0px']
      },
      {
         rect: ['0px','22px','120px','56px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'orangeYen',
         text: '160円',
         align: 'center',
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_orangeYen}": [
            ["style", "top", '22px'],
            ["style", "left", '0px'],
            ["style", "width", '120px']
         ],
         "${_Group6}": [
            ["style", "left", '0px']
         ],
         "${_orange}": [
            ["style", "height", '100px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '120px']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '120px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid338", tween: [ "style", "${_Group6}", "left", '-731px', { fromValue: '0px'}], position: 250, duration: 9750 },
            { id: "eid339", tween: [ "style", "${_Group6}", "left", '-746px', { fromValue: '-731px'}], position: 10000, duration: 0 }         ]
      }
   }
},
"umai2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group5',
      type: 'group',
      rect: ['0','0','100','90','auto','auto'],
      c: [
      {
         id: 'ume2',
         type: 'image',
         rect: ['0px','0px','95px','90px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/ume.jpg','0px','0px']
      },
      {
         type: 'text',
         rect: ['13px','83px','87px','53px','auto','auto'],
         id: 'Text4',
         text: '35円',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,'rgba(0,0,0,1)','normal','none','normal']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ume2}": [
            ["style", "height", '90px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '95px']
         ],
         "${_Group5}": [
            ["style", "left", '0px']
         ],
         "${_Text4}": [
            ["style", "top", '83px'],
            ["style", "height", '53px'],
            ["style", "width", '87px'],
            ["style", "left", '13px'],
            ["style", "font-size", '30px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '100px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid298", tween: [ "style", "${_Group5}", "left", '-700px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"Ice2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'icecream',
      type: 'group',
      rect: ['0px','0px','75','135','auto','auto'],
      c: [
      {
         id: 'ice',
         type: 'image',
         rect: ['-101px','64px','789px','1600px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/ice.png','0px','0px']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text11',
         text: '115円<br>',
         align: 'left',
         rect: ['0px','122px','75px','42px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ice}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '122px'],
            ["style", "left", '3px'],
            ["style", "width", '60px']
         ],
         "${_icecream}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text11}": [
            ["style", "left", '0px'],
            ["style", "top", '122px']
         ],
         "${symbolSelector}": [
            ["style", "height", '135px'],
            ["style", "width", '75px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid416", tween: [ "style", "${_ice}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
            { id: "eid419", tween: [ "style", "${_icecream}", "left", '-676px', { fromValue: '0px'}], position: 250, duration: 9750 },
            { id: "eid414", tween: [ "style", "${_ice}", "height", '122px', { fromValue: '122px'}], position: 0, duration: 0 },
            { id: "eid417", tween: [ "style", "${_ice}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid415", tween: [ "style", "${_ice}", "width", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid405", tween: [ "style", "${_ice}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }         ]
      }
   }
},
"Title2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Title2',
      type: 'group',
      rect: ['-219px','-78px','0','0','auto','auto'],
      c: [
      {
         type: 'rect',
         id: 'Rectangle2Copy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         rect: ['0px','0px','600px','400px','auto','auto'],
         fill: ['rgba(109,241,255,1.00)',[270,[['rgba(0,255,190,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
      },
      {
         type: 'group',
         id: 'Group4',
         cursor: ['pointer'],
         rect: ['129','227','317','99','auto','auto'],
         c: [
         {
            rect: ['0px','0px','317px','99px','auto','auto'],
            borderRadius: ['10px','10px','10px','10px'],
            fill: ['rgba(241,255,109,1)'],
            id: 'RoundRectCopy',
            stroke: [0,'rgb(0, 0, 0)','none'],
            type: 'rect',
            boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
         },
         {
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',50,'rgba(248,248,248,1.00)','normal','none','normal'],
            type: 'text',
            id: 'starCopy',
            text: 'スタート',
            align: 'left',
            rect: ['63px','22px','249px','56px','auto','auto']
         }]
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',100,'rgba(31,0,255,1.00)','normal','none','normal'],
         type: 'text',
         id: 'titleCopy',
         text: 'レベル２',
         align: 'left',
         rect: ['96px','24px','408px','118px','auto','auto']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,'rgba(0,15,255,1.00)','normal','none','normal'],
         type: 'text',
         id: 'normaCopy',
         text: 'ノルマ　9個',
         align: 'left',
         rect: ['206px','162px','189px','46px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(255,30,30,1)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '600px']
         ],
         "${_Title2}": [
            ["style", "display", 'block'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'auto']
         ],
         "${_titleCopy}": [
            ["style", "top", '24px'],
            ["style", "font-size", '100px'],
            ["style", "height", '118px'],
            ["color", "color", 'rgba(31,0,255,1.00)'],
            ["style", "left", '96px'],
            ["style", "width", '408px']
         ],
         "${_normaCopy}": [
            ["style", "top", '162px'],
            ["style", "width", '189px'],
            ["style", "height", '46px'],
            ["color", "color", 'rgba(0,15,255,1.00)'],
            ["style", "left", '206px'],
            ["style", "font-size", '30px']
         ],
         "${_starCopy}": [
            ["style", "top", '22px'],
            ["style", "width", '249px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(248,248,248,1.00)'],
            ["style", "left", '63px'],
            ["style", "font-size", '50px']
         ],
         "${_Rectangle2Copy}": [
            ["color", "background-color", 'rgba(109,241,255,1.00)'],
            ["gradient", "background-image", [270,[['rgba(0,255,190,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
         ],
         "${_Group4}": [
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 28000,
         autoPlay: true,
         timeline: [
            { id: "eid350", tween: [ "style", "${_Title2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid192", tween: [ "style", "${_Title2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid193", tween: [ "style", "${_Title2}", "display", 'block', { fromValue: 'block'}], position: 28000, duration: 0 },
            { id: "eid351", tween: [ "style", "${_Title2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }         ]
      }
   }
},
"hotdog": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group4',
      type: 'group',
      rect: ['0','0','135','146','auto','auto'],
      c: [
      {
         id: 'hotdog',
         type: 'image',
         rect: ['0px','0px','135px','135px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/hotdog.jpg','0px','0px']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text4',
         text: '300円',
         align: 'left',
         rect: ['27px','100px','100px','46px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hotdog}": [
            ["style", "height", '135px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '135px']
         ],
         "${_Text4}": [
            ["style", "top", '100px'],
            ["style", "height", '46px'],
            ["style", "font-size", '30px'],
            ["style", "left", '27px'],
            ["style", "width", '100px']
         ],
         "${symbolSelector}": [
            ["style", "height", '146px'],
            ["style", "width", '135px']
         ],
         "${_Group4}": [
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid514", tween: [ "style", "${_Group4}", "left", '-812px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"Amedog": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'amedog',
      type: 'image',
      rect: ['0px','0px','114px','102px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/amedog.jpg','0px','0px']
   },
   {
      rect: ['14px','79px','93px','44px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text5',
      text: '220円',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_amedog}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text5}": [
            ["style", "top", '79px'],
            ["style", "height", '44px'],
            ["style", "left", '14px'],
            ["style", "width", '93px']
         ],
         "${symbolSelector}": [
            ["style", "height", '123px'],
            ["style", "width", '114px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid503", tween: [ "style", "${_amedog}", "left", '-716px', { fromValue: '0px'}], position: 250, duration: 9750 },
            { id: "eid504", tween: [ "style", "${_Text5}", "left", '-702px', { fromValue: '14px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"Potato": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group3',
      type: 'group',
      rect: ['0','0','116','138','auto','auto'],
      c: [
      {
         id: 'potato',
         type: 'image',
         rect: ['0px','0px','116px','129px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/5167dba1eb582-1.png','0px','0px']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text6',
         text: '80円',
         align: 'left',
         rect: ['27px','94px','106px','44px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '94px'],
            ["style", "left", '27px'],
            ["style", "width", '106px']
         ],
         "${_Group3}": [
            ["style", "left", '0px']
         ],
         "${_potato}": [
            ["style", "height", '129px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '116px']
         ],
         "${symbolSelector}": [
            ["style", "height", '138px'],
            ["style", "width", '116px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid510", tween: [ "style", "${_Group3}", "left", '-718px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"hotdog2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group4',
      type: 'group',
      rect: ['0','0','135','146','auto','auto'],
      c: [
      {
         id: 'hotdog',
         type: 'image',
         rect: ['0px','0px','135px','135px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/hotdog.jpg','0px','0px']
      },
      {
         rect: ['27px','100px','100px','46px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text4',
         text: '350円',
         align: 'left',
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hotdog}": [
            ["style", "top", '0px'],
            ["style", "height", '135px'],
            ["style", "left", '0px'],
            ["style", "width", '135px']
         ],
         "${symbolSelector}": [
            ["style", "height", '146px'],
            ["style", "width", '135px']
         ],
         "${_Group4}": [
            ["style", "left", '0px']
         ],
         "${_Text4}": [
            ["style", "top", '100px'],
            ["style", "height", '46px'],
            ["style", "width", '100px'],
            ["style", "left", '27px'],
            ["style", "font-size", '30px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid514", tween: [ "style", "${_Group4}", "left", '-812px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"Potato2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group3',
      type: 'group',
      rect: ['0','0','116','138','auto','auto'],
      c: [
      {
         id: 'potato',
         type: 'image',
         rect: ['0px','0px','116px','129px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/5167dba1eb582-1.png','0px','0px']
      },
      {
         type: 'text',
         rect: ['18px','94px','116px','44px','auto','auto'],
         id: 'Text6',
         text: '110円',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,'rgba(0,0,0,1)','normal','none','normal']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '94px'],
            ["style", "left", '18px'],
            ["style", "width", '116px']
         ],
         "${_Group3}": [
            ["style", "left", '0px']
         ],
         "${_potato}": [
            ["style", "top", '0px'],
            ["style", "height", '129px'],
            ["style", "left", '0px'],
            ["style", "width", '116px']
         ],
         "${symbolSelector}": [
            ["style", "height", '138px'],
            ["style", "width", '116px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid600", tween: [ "style", "${_Group3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 250 },
            { id: "eid510", tween: [ "style", "${_Group3}", "left", '-718px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"Amedog2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'amedog',
      type: 'image',
      rect: ['0px','0px','114px','102px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/amedog.jpg','0px','0px']
   },
   {
      type: 'text',
      rect: ['14px','79px','93px','44px','auto','auto'],
      id: 'Text5',
      text: '170円',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_amedog}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text5}": [
            ["style", "height", '44px'],
            ["style", "top", '79px'],
            ["style", "left", '14px'],
            ["style", "width", '93px']
         ],
         "${symbolSelector}": [
            ["style", "height", '123px'],
            ["style", "width", '114px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid503", tween: [ "style", "${_amedog}", "left", '-716px', { fromValue: '0px'}], position: 250, duration: 9750 },
            { id: "eid504", tween: [ "style", "${_Text5}", "left", '-702px', { fromValue: '14px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"Title3": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-219px','-78px','0','0','auto','auto'],
      id: 'Title2',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','600px','400px','auto','auto'],
         id: 'Rectangle2Copy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,45,163,1.00)',[270,[['rgba(247,25,255,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
      },
      {
         id: 'Group4',
         type: 'group',
         rect: ['129','227','317','99','auto','auto'],
         c: [
         {
            rect: ['0px','0px','317px','99px','auto','auto'],
            borderRadius: ['10px','10px','10px','10px'],
            boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
            id: 'RoundRectCopy',
            stroke: [0,'rgb(0, 0, 0)','none'],
            type: 'rect',
            fill: ['rgba(241,255,109,1)']
         },
         {
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',50,'rgba(248,248,248,1.00)','normal','none','normal'],
            type: 'text',
            id: 'starCopy',
            text: 'スタート',
            align: 'left',
            rect: ['63px','22px','201px','56px','auto','auto']
         }]
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',100,'rgba(255,223,89,1.00)','normal','none','normal'],
         type: 'text',
         id: 'titleCopy',
         text: 'レベル３',
         align: 'left',
         rect: ['94px','22px','412px','118px','auto','auto']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,'rgba(255,243,68,1.00)','normal','none','normal'],
         type: 'text',
         id: 'normaCopy',
         text: 'ノルマ　11個',
         align: 'left',
         rect: ['210px','149px','191px','44px','auto','auto']
      }]
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(0,39,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: 'がめんに表示された数のお金ではらってね<br>',
      align: 'left',
      rect: ['81px','193px','481px','44px','auto','auto']
   },
   {
      rect: ['32px','16px','536','367','auto','auto'],
      id: 'koujityu',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['0px','0px','534px','365px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'Rect4',
         stroke: [1,'rgba(0,255,126,1.00)','solid'],
         type: 'rect',
         fill: ['rgba(255,244,244,1.00)',[270,[['rgba(182,254,100,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,'rgba(0,15,255,1)','normal','none','normal'],
         type: 'text',
         id: 'Text9',
         text: 'ごめんさない<br>レベル３は、せいさくちゅうです。<br>もう少し待ってね<br>',
         align: 'center',
         rect: ['73px','130px','391px','139px','auto','auto']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(255,0,0,1.00)','normal','none','normal'],
         type: 'text',
         id: 'test3',
         text: 'a',
         align: 'left',
         rect: ['213px','71px','46px','44px','auto','auto']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(0,15,255,1)','normal','none','normal'],
         type: 'text',
         id: 'Text10',
         text: 'トータルクリアタイム<br>　　　　　秒',
         align: 'left',
         rect: ['133px','34px','253px','74px','auto','auto']
      },
      {
         rect: ['155px','249px','135','80','auto','auto'],
         id: 'back',
         cursor: ['pointer'],
         type: 'group',
         c: [
         {
            boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
            rect: ['0px','0px','206px','78px','auto','auto'],
            borderRadius: ['50%','50%','50%','50%'],
            filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
            id: 'EllipseCopy',
            stroke: [1,'rgb(0, 0, 0)','solid'],
            type: 'ellipse',
            fill: ['rgba(254,254,13,1.00)']
         },
         {
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,'rgba(10,0,0,1.00)','normal','none','normal'],
            type: 'text',
            id: 'Text3Copy',
            text: 'タイトルへ戻る',
            align: 'left',
            rect: ['29px','24px','170px','42px','auto','auto']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Title2}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_Text3}": [
            ["style", "top", '193px'],
            ["style", "font-size", '25px'],
            ["style", "height", '44px'],
            ["color", "color", 'rgba(0,39,255,1.00)'],
            ["style", "left", '81px'],
            ["style", "width", '481px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '24px'],
            ["color", "color", 'rgba(10,0,0,1)'],
            ["style", "width", '170px'],
            ["style", "left", '29px'],
            ["style", "font-size", '20px']
         ],
         "${_titleCopy}": [
            ["style", "top", '22px'],
            ["style", "font-size", '100px'],
            ["style", "height", '118px'],
            ["color", "color", 'rgba(255,223,89,1.00)'],
            ["style", "left", '94px'],
            ["style", "width", '412px']
         ],
         "${_normaCopy}": [
            ["style", "top", '149px'],
            ["style", "width", '191px'],
            ["style", "height", '44px'],
            ["color", "color", 'rgba(255,243,68,1.00)'],
            ["style", "left", '210px'],
            ["style", "font-size", '30px']
         ],
         "${_EllipseCopy}": [
            ["color", "background-color", 'rgba(254,254,13,1)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "filter.hue-rotate", '0deg'],
            ["style", "left", '0px'],
            ["style", "width", '206px'],
            ["style", "top", '0px'],
            ["style", "height", '78px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_Rectangle2Copy}": [
            ["color", "background-color", 'rgba(255,45,163,1.00)'],
            ["gradient", "background-image", [270,[['rgba(247,25,255,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
         ],
         "${_Text10}": [
            ["style", "top", '34px'],
            ["style", "height", '74px'],
            ["style", "width", '253px'],
            ["style", "left", '133px'],
            ["style", "font-size", '25px']
         ],
         "${_RoundRectCopy}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(255,30,30,1)']
         ],
         "${_koujityu}": [
            ["style", "top", '16px'],
            ["style", "left", '32px'],
            ["style", "display", 'none']
         ],
         "${_Rect4}": [
            ["color", "background-color", 'rgba(255,244,244,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["gradient", "background-image", [270,[['rgba(182,254,100,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["color", "border-color", 'rgba(0,255,126,1.00)']
         ],
         "${_test3}": [
            ["style", "top", '71px'],
            ["color", "color", 'rgba(255,0,0,1.00)'],
            ["style", "height", '44px'],
            ["style", "left", '213px'],
            ["style", "width", '46px']
         ],
         "${_starCopy}": [
            ["style", "top", '22px'],
            ["style", "font-size", '50px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(248,248,248,1.00)'],
            ["style", "left", '63px'],
            ["style", "width", '201px']
         ],
         "${_Text9}": [
            ["style", "top", '130px'],
            ["style", "left", '73px'],
            ["style", "text-align", 'center']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '600px']
         ],
         "${_back}": [
            ["style", "top", '249px'],
            ["style", "left", '155px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 28000,
         autoPlay: true,
         timeline: [
            { id: "eid351", tween: [ "style", "${_Title2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid601", tween: [ "style", "${_koujityu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid192", tween: [ "style", "${_Title2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid193", tween: [ "style", "${_Title2}", "display", 'block', { fromValue: 'block'}], position: 28000, duration: 0 },
            { id: "eid350", tween: [ "style", "${_Title2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }         ]
      }
   }
},
"hondai3": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'haikei',
      type: 'image',
      rect: ['0px','-2px','601px','404px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/haikei.jpg','0px','0px']
   },
   {
      type: 'text',
      rect: ['25px','55px','75px','57px','auto','auto'],
      id: 'buysum',
      text: '0',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',50,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      id: 'Batu',
      type: 'rect',
      rect: ['140','157','auto','auto','auto','auto']
   },
   {
      id: 'Maido',
      type: 'rect',
      rect: ['198','171','auto','auto','auto','auto']
   },
   {
      id: 'okanjo',
      type: 'group',
      rect: ['445px','280px','135','42','auto','auto'],
      c: [
      {
         fill: ['rgba(255,231,0,1.00)'],
         rect: ['0px','0px','135px','42px','auto','auto'],
         borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
         type: 'rect',
         id: 'Rectangle2',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         cursor: ['pointer'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         type: 'text',
         rect: ['14px','7px','108px','28px','auto','auto'],
         align: 'center',
         id: 'Text',
         text: 'はらう',
         cursor: ['pointer'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none','']
      }]
   },
   {
      id: 'yarinaoshi',
      type: 'group',
      rect: ['445px','337px','135','42','auto','auto'],
      c: [
      {
         fill: ['rgba(44,255,202,1.00)'],
         rect: ['0px','0px','135px','42px','auto','auto'],
         borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
         type: 'rect',
         id: 'Rectangle3',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         cursor: ['pointer'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         type: 'text',
         rect: ['14px','7px','108px','28px','auto','auto'],
         id: 'TextCopy',
         text: 'やりなおし',
         cursor: ['pointer'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',20,'rgba(0,0,0,1)','normal','none','']
      }]
   },
   {
      id: 'selectYen',
      type: 'group',
      rect: ['67px','295px','330px','75px','auto','auto'],
      c: [
      {
         rect: ['0px','0px','378px','83px','auto','auto'],
         borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
         fill: ['rgba(0,212,105,1.00)'],
         id: 'yenRect',
         stroke: [1,'rgba(0,0,0,1)','solid'],
         type: 'rect',
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         id: 's5yen',
         type: 'image',
         rect: ['12px','-1px','75px','75px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/5yen.png','0px','0px']
      },
      {
         type: 'image',
         id: 's10yen',
         rect: ['93px','-1px','75px','75px','auto','auto'],
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/10yen.png','0px','0px']
      },
      {
         type: 'image',
         id: 's50yen',
         rect: ['180px','-1px','75px','75px','auto','auto'],
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/yen50.png','0px','0px']
      },
      {
         type: 'image',
         id: 's100yen',
         rect: ['262px','-1px','75px','75px','auto','auto'],
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/100yen1.png','0px','0px']
      }]
   },
   {
      id: 'hart',
      type: 'image',
      rect: ['1px','308px','58px','57px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hart.gif','0px','0px']
   },
   {
      type: 'text',
      rect: ['9px','314px','39px','37px','auto','auto'],
      id: 'Ki',
      text: '×3<br>',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      id: 'saifu',
      type: 'image',
      rect: ['100px','4px','438px','139px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/saifu.gif','0px','0px']
   },
   {
      type: 'image',
      id: 'yen5',
      tag: 'img',
      rect: ['411px','55px','60px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px']
   },
   {
      type: 'image',
      id: 'yen4',
      tag: 'img',
      rect: ['345px','55px','60px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px']
   },
   {
      type: 'image',
      id: 'yen3',
      tag: 'img',
      rect: ['281px','55px','60px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px']
   },
   {
      type: 'image',
      id: 'yen2',
      tag: 'img',
      rect: ['217px','55px','60px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px']
   },
   {
      type: 'image',
      id: 'yen1',
      tag: 'img',
      rect: ['149px','55px','60px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['478px','62px','102px','60px','auto','auto'],
      id: 'timecount',
      text: ' ',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['9px','14px','108px','42px','auto','auto'],
      id: 'cntBuy',
      text: '購入数',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      type: 'group',
      display: 'none',
      id: 'B',
      rect: ['102','62','416','261','auto','auto'],
      c: [
      {
         rect: ['16px','0px','398px','259px','auto','auto'],
         borderRadius: ['50px 50px','50px 50px','50px 50px','50px 50px'],
         fill: ['rgba(0,151,255,1.00)'],
         id: 'RECT5Copy',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         type: 'rect',
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         id: 'devil',
         type: 'image',
         rect: ['285px','97px','119px','142px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/devil.png','0px','0px']
      },
      {
         type: 'group',
         id: 'back',
         cursor: ['pointer'],
         rect: ['29px','159px','135','80','auto','auto'],
         c: [
         {
            fill: ['rgba(254,254,13,1.00)'],
            rect: ['0px','0px','206px','78px','auto','auto'],
            borderRadius: ['50%','50%','50%','50%'],
            filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
            id: 'EllipseCopy',
            stroke: [1,'rgb(0, 0, 0)','solid'],
            type: 'ellipse',
            boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
         },
         {
            type: 'text',
            rect: ['29px','24px','170px','42px','auto','auto'],
            id: 'Text3Copy',
            text: 'タイトルへ戻る',
            align: 'left',
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,'rgba(10,0,0,1.00)','normal','none','normal']
         }]
      },
      {
         id: 'HUKICopy',
         type: 'group',
         rect: ['0px','12px','299','180','auto','auto'],
         c: [
         {
            type: 'image',
            id: 'HUKI_4Copy',
            rect: ['0px','0px','299px','180px','auto','auto'],
            transform: [[0,0],[],[],['-1']],
            fill: ['rgba(0,0,0,0)','images/HUKI_4.png','0px','0px']
         },
         {
            type: 'text',
            rect: ['57px','23px','137px','42px','auto','auto'],
            id: 'Text8Copy',
            text: 'ざんねん...<br>',
            align: 'left',
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(0,15,255,1.00)','normal','none','normal']
         },
         {
            type: 'text',
            id: 'Nokori',
            rect: ['58px','58px','215px','51px','auto','auto'],
            align: 'left',
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(0,15,255,1)','normal','none','normal']
         }]
      }]
   },
   {
      type: 'group',
      display: 'none',
      id: 'C',
      rect: ['102','62','416','261','auto','auto'],
      c: [
      {
         rect: ['16px','0px','398px','259px','auto','auto'],
         borderRadius: ['50px 50px','50px 50px','50px 50px','50px 50px'],
         fill: ['rgba(255,255,118,1.00)'],
         id: 'RECT5',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         type: 'rect',
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         type: 'group',
         id: 'next',
         cursor: ['pointer'],
         rect: ['29px','159px','135','80','auto','auto'],
         c: [
         {
            rect: ['0px','0px','133px','78px','auto','auto'],
            borderRadius: ['50%','50%','50%','50%'],
            fill: ['rgba(255,0,0,1.00)'],
            id: 'Ellipse',
            stroke: [1,'rgb(0, 0, 0)','solid'],
            type: 'ellipse',
            boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
         },
         {
            type: 'text',
            rect: ['30px','17px','75px','42px','auto','auto'],
            id: 'Text3',
            text: '次へ',
            align: 'left',
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(31,255,0,1.00)','normal','none','normal']
         }]
      },
      {
         id: 'smako',
         type: 'image',
         rect: ['224px','69px','180px','180px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/smako.png','0px','0px']
      },
      {
         id: 'HUKI',
         type: 'group',
         rect: ['0px','12px','299','180','auto','auto'],
         c: [
         {
            type: 'image',
            id: 'HUKI_4',
            rect: ['0px','0px','299px','180px','auto','auto'],
            transform: [[0,0],[],[],['-1']],
            fill: ['rgba(0,0,0,0)','images/HUKI_4.png','0px','0px']
         },
         {
            type: 'text',
            rect: ['57px','23px','222px','81px','auto','auto'],
            id: 'Text8',
            text: 'おめでとう！<br>レベル2 クリア！<br>',
            align: 'left',
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(0,15,255,1.00)','normal','none','normal']
         }]
      }]
   },
   {
      type: 'text',
      rect: ['273px','31px','102px','37px','auto','auto'],
      display: 'none',
      id: 'mai5',
      text: '5まい<br>',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(6,0,255,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['273px','31px','102px','37px','auto','auto'],
      display: 'none',
      id: 'mai4',
      text: '4まい<br>',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(6,0,255,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['273px','31px','102px','37px','auto','auto'],
      id: 'mai3',
      text: '3まい<br>',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(6,0,255,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   {
      id: 'Maido',
      symbolName: 'Maido'
   },
   {
      id: 'Batu',
      symbolName: 'batu'
   }   ]
   },
   states: {
      "Base State": {
         "${_devil}": [
            ["style", "height", '142px'],
            ["style", "top", '97px'],
            ["style", "left", '285px'],
            ["style", "width", '119px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,231,0,1.00)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-width", '1px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text3Copy}": [
            ["style", "top", '24px'],
            ["color", "color", 'rgba(10,0,0,1.00)'],
            ["style", "font-size", '20px'],
            ["style", "left", '29px'],
            ["style", "width", '170px']
         ],
         "${_mai5}": [
            ["style", "top", '31px'],
            ["style", "width", '102px'],
            ["color", "color", 'rgba(6,0,255,1.00)'],
            ["style", "display", 'none'],
            ["style", "left", '273px'],
            ["style", "font-size", '35px']
         ],
         "${_Text8}": [
            ["style", "top", '23px'],
            ["color", "color", 'rgba(0,15,255,1.00)'],
            ["style", "width", '222px'],
            ["style", "left", '57px'],
            ["style", "font-size", '25px']
         ],
         "${_okanjo}": [
            ["style", "left", '445px'],
            ["style", "top", '280px']
         ],
         "${_mai4}": [
            ["style", "top", '31px'],
            ["style", "font-size", '35px'],
            ["color", "color", 'rgba(6,0,255,1)'],
            ["style", "display", 'none'],
            ["style", "left", '273px'],
            ["style", "width", '102px']
         ],
         "${_B}": [
            ["style", "display", 'none']
         ],
         "${_timecount}": [
            ["style", "top", '62px'],
            ["style", "left", '478px']
         ],
         "${_mai3}": [
            ["style", "top", '31px'],
            ["color", "color", 'rgba(6,0,255,1)'],
            ["style", "width", '102px'],
            ["style", "left", '273px'],
            ["style", "font-size", '35px']
         ],
         "${_next}": [
            ["style", "top", '159px'],
            ["style", "left", '29px'],
            ["style", "cursor", 'pointer']
         ],
         "${_HUKI_4Copy}": [
            ["transform", "scaleX", '-1'],
            ["style", "height", '180px'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_yenRect}": [
            ["color", "background-color", 'rgba(0,212,105,1.00)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '353px'],
            ["style", "top", '-9px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-width", '1px'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '92px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_yarinaoshi}": [
            ["style", "left", '445px'],
            ["style", "top", '337px']
         ],
         "${_yen1}": [
            ["style", "top", '73px'],
            ["style", "height", '60px'],
            ["style", "display", 'block'],
            ["style", "left", '149px'],
            ["style", "width", '60px']
         ],
         "${_Text8Copy}": [
            ["style", "top", '23px'],
            ["style", "font-size", '25px'],
            ["color", "color", 'rgba(0,15,255,1)'],
            ["style", "height", '42px'],
            ["style", "left", '57px'],
            ["style", "width", '137px']
         ],
         "${_RECT5Copy}": [
            ["color", "background-color", 'rgba(0,151,255,1.00)'],
            ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '16px'],
            ["style", "width", '398px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '259px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_Nokori}": [
            ["style", "top", '58px'],
            ["style", "left", '58px'],
            ["style", "width", '215px']
         ],
         "${_buysum}": [
            ["style", "top", '55px'],
            ["style", "text-align", 'center'],
            ["style", "left", '25px'],
            ["style", "font-size", '50px']
         ],
         "${_Text3}": [
            ["color", "color", 'rgba(31,255,0,1.00)'],
            ["style", "top", '17px'],
            ["style", "left", '30px'],
            ["style", "width", '75px']
         ],
         "${_s10yen}": [
            ["style", "top", '-1px'],
            ["style", "height", '75px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '93px'],
            ["style", "width", '75px']
         ],
         "${_saifu}": [
            ["style", "top", '4px'],
            ["style", "height", '139px'],
            ["style", "left", '100px'],
            ["style", "width", '438px']
         ],
         "${_haikei}": [
            ["style", "height", '404px'],
            ["style", "top", '-2px'],
            ["style", "left", '0px'],
            ["style", "width", '601px']
         ],
         "${_Ki}": [
            ["style", "top", '314px'],
            ["style", "height", '37px'],
            ["style", "display", 'block'],
            ["style", "left", '9px'],
            ["style", "width", '39px']
         ],
         "${_HUKICopy}": [
            ["style", "left", '0px'],
            ["style", "top", '12px']
         ],
         "${_yen4}": [
            ["style", "top", '73px'],
            ["style", "height", '60px'],
            ["style", "display", 'block'],
            ["style", "left", '345px'],
            ["style", "width", '60px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '750px']
         ],
         "${_yen3}": [
            ["style", "top", '73px'],
            ["style", "height", '60px'],
            ["style", "display", 'block'],
            ["style", "left", '281px'],
            ["style", "width", '60px']
         ],
         "${_EllipseCopy}": [
            ["color", "background-color", 'rgba(254,254,13,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "filter.hue-rotate", '0deg'],
            ["style", "left", '0px'],
            ["style", "width", '206px'],
            ["style", "top", '0px'],
            ["style", "height", '78px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_HUKI}": [
            ["style", "left", '0px'],
            ["style", "top", '12px']
         ],
         "${_s100yen}": [
            ["style", "top", '-1px'],
            ["style", "height", '75px'],
            ["style", "left", '262px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '75px']
         ],
         "${_HUKI_4}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '0px'],
            ["style", "height", '180px']
         ],
         "${_s50yen}": [
            ["style", "top", '-1px'],
            ["style", "height", '75px'],
            ["style", "left", '180px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '75px']
         ],
         "${_yen2}": [
            ["style", "top", '73px'],
            ["style", "height", '60px'],
            ["style", "display", 'block'],
            ["style", "left", '217px'],
            ["style", "width", '60px']
         ],
         "${_smako}": [
            ["style", "top", '69px'],
            ["style", "height", '180px'],
            ["style", "left", '224px'],
            ["style", "width", '180px']
         ],
         "${_TextCopy}": [
            ["style", "top", '7px'],
            ["style", "left", '14px'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '20px']
         ],
         "${_selectYen}": [
            ["style", "top", '295px'],
            ["style", "height", '75px'],
            ["style", "left", '67px'],
            ["style", "width", '330px']
         ],
         "${_RECT5}": [
            ["color", "background-color", 'rgba(255,255,0,1.00)'],
            ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '16px'],
            ["style", "width", '398px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "height", '259px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_yen5}": [
            ["style", "top", '73px'],
            ["style", "display", 'block'],
            ["style", "height", '60px'],
            ["style", "left", '411px'],
            ["style", "width", '60px']
         ],
         "${_back}": [
            ["style", "top", '159px'],
            ["style", "left", '29px'],
            ["style", "cursor", 'pointer']
         ],
         "${_hart}": [
            ["style", "height", '57px'],
            ["style", "top", '308px'],
            ["style", "left", '1px'],
            ["style", "width", '58px']
         ],
         "${_Text}": [
            ["style", "top", '7px'],
            ["style", "text-align", 'center'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '14px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(44,255,202,1.00)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-width", '1px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "cursor", 'pointer']
         ],
         "${_cntBuy}": [
            ["style", "left", '9px'],
            ["style", "top", '14px']
         ],
         "${_C}": [
            ["style", "display", 'none']
         ],
         "${_s5yen}": [
            ["style", "height", '75px'],
            ["style", "top", '-1px'],
            ["style", "left", '12px'],
            ["style", "width", '75px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(255,0,0,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '0px'],
            ["style", "width", '133px'],
            ["style", "top", '0px'],
            ["style", "height", '78px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid588", tween: [ "style", "${_mai4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid399", tween: [ "style", "${_B}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid398", tween: [ "style", "${_C}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid395", tween: [ "color", "${_RECT5}", "background-color", 'rgba(255,255,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid587", tween: [ "style", "${_mai5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid353", tween: [ "gradient", "${_RECT5}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 0, duration: 0 },
            { id: "eid331", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Batu}', [] ], ""], position: 0 },
            { id: "eid435", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Maido}', [] ], ""], position: 0 }         ]
      }
   }
},
"time3": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'text',
      id: 'time_txt',
      rect: ['10px','28px','auto','auto','auto','auto'],
      align: 'right',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',32,'rgba(1,1,1,1.00)','normal','none','']
   },
   {
      type: 'text',
      rect: ['0px','0px','auto','auto','auto','auto'],
      id: 'Text2',
      text: 'TIME',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(249,249,249,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_time_txt}": [
            ["style", "top", '28px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(1,1,1,1.00)'],
            ["style", "left", '10px'],
            ["style", "font-size", '32px']
         ],
         "${_Text2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18352,
         autoPlay: true,
         labels: {
            "start": 0
         },
         timeline: [
            { id: "eid115", tween: [ "color", "${_Text2}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 18352, duration: 0 }         ]
      }
   }
},
"kyabekaba3": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group3',
      type: 'group',
      rect: ['0','0','151','117','auto','auto'],
      c: [
      {
         id: 'kabayaki',
         type: 'image',
         rect: ['0px','0px','110px','100px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/kabayaki.png','0px','0px']
      },
      {
         id: 'kyabetu',
         type: 'image',
         rect: ['70px','10px','80px','80px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/kyabetu.jpg','0px','0px']
      },
      {
         rect: ['96px','82px','55px','35px','auto','auto'],
         id: 'Text2',
         text: '20円',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         type: 'text'
      },
      {
         rect: ['13px','73px','60px','34px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text3',
         text: '10円',
         align: 'left',
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Group3}": [
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '117px'],
            ["style", "width", '151px']
         ],
         "${_Text3}": [
            ["style", "top", '73px'],
            ["style", "left", '13px'],
            ["style", "width", '60px']
         ],
         "${_kabayaki}": [
            ["style", "height", '100px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '110px']
         ],
         "${_Text2}": [
            ["style", "top", '82px'],
            ["style", "height", '35px'],
            ["style", "left", '96px'],
            ["style", "width", '55px']
         ],
         "${_kyabetu}": [
            ["style", "top", '10px'],
            ["style", "left", '70px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid300", tween: [ "style", "${_Group3}", "left", '-752px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"Fchicken": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Fchicken',
      type: 'group',
      rect: ['0px','0px','118','123','auto','auto'],
      c: [
      {
         id: 'fchicken',
         type: 'image',
         rect: ['0px','0px','118px','118px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Fchicken.jpg','0px','0px']
      },
      {
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text2',
         text: '175円',
         align: 'left',
         rect: ['16px','88px','132px','35px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Fchicken}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_fchicken}": [
            ["style", "height", '118px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '118px']
         ],
         "${_Text2}": [
            ["style", "top", '88px'],
            ["style", "height", '35px'],
            ["style", "width", '132px'],
            ["style", "left", '16px'],
            ["style", "font-size", '30px']
         ],
         "${symbolSelector}": [
            ["style", "height", '123px'],
            ["style", "width", '118px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid563", tween: [ "style", "${_Fchicken}", "left", '-719px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"Crape2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Crape',
      type: 'group',
      rect: ['0px','0px','137','127','auto','auto'],
      c: [
      {
         id: 'creap',
         type: 'image',
         rect: ['0px','0px','137px','103px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/creap.jpg','0px','0px']
      },
      {
         rect: ['26px','91px','91px','36px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text5',
         text: '320円',
         align: 'left',
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Crape}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_creap}": [
            ["style", "height", '103px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '137px']
         ],
         "${_Text5}": [
            ["style", "height", '36px'],
            ["style", "top", '91px'],
            ["style", "left", '26px'],
            ["style", "width", '91px']
         ],
         "${symbolSelector}": [
            ["style", "height", '127px'],
            ["style", "width", '137px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid566", tween: [ "style", "${_Crape}", "left", '-738px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
},
"Nikuman2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Nikuman',
      type: 'group',
      rect: ['0px','0px','116','135','auto','auto'],
      c: [
      {
         id: 'nikuman',
         type: 'image',
         rect: ['0px','0px','116px','100px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/nikuman.jpg','0px','0px']
      },
      {
         rect: ['21px','92px','93px','43px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text4',
         text: '135円<br>',
         align: 'left',
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Nikuman}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_nikuman}": [
            ["style", "height", '100px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '116px']
         ],
         "${symbolSelector}": [
            ["style", "height", '135px'],
            ["style", "width", '116px']
         ],
         "${_Text4}": [
            ["style", "top", '92px'],
            ["style", "height", '43px'],
            ["style", "left", '21px'],
            ["style", "width", '93px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid567", tween: [ "style", "${_Nikuman}", "left", '-718px', { fromValue: '0px'}], position: 250, duration: 9750 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-157784368");
