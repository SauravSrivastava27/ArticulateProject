function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6BOXg1QXBHq":
        Script1();
        break;
      case "6SrGNHCQXf1":
        Script2();
        break;
      case "6Gee1TL6WhC":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  player.once(() => {
const target = object('5wPrXfXzu5V');
const duration = 750;
const easing = 'ease-out';
const id = '6eUvWNJ2LtT';
const floatAmount = 5;
const delay = 500;
addToTimeline(
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6Ct2u0RPdEl');
const duration = 750;
const easing = 'ease-out';
const id = '6i1OnfJYA6z';
const floatAmount = 5;
const delay = 750;
addToTimeline(
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('69Zydp2mFBQ');
const duration = 750;
const easing = 'ease-out';
const id = '6IDSo3UcaAX';
const growAmount = 0.2;
const delay = 3000;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
