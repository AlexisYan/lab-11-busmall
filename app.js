'use strict';

var photosOnSecondToLastScreen= [];
var photosOnPreviousScreen = [];
var photosOnScreen = [];

function Images (name, src){
  this.name = name;
  this.src = './img/'+filename;
  this.clickCount = 0;
  this.displayCount = 0;
};

var imageGroup = [
  new Images ('R2D2', 'bag.jpg'),
  new Images ('banana', 'banna.jpg'),
  new Images ('tolite paper dispenser', 'bathroom.jpg'),
  new Images ('rain boots', 'boots.jpg'),
  new Images ('coffee maker', 'breakfast.jpg'),
  new Images ('gum', 'bubblegum.jpg'),
  new Images ('chair', 'chair.jpg'),
  new Images ('cthulhu', 'cthulhu.jpg'),
  new Images ('dog duck', 'dog-duck.jpg'),
  new Images ('dragon meat', 'gragon.jpg'),
  new Images ('pen', 'pen.jpg'),
  new Images ('pet sweep', 'pet-sweep.jpg'),
  new Images ('pizza cutter', '.jpg'),
  new Images ('shark blanket', 'shark.jpg'),
  new Images ('baby sweep', 'sweep.jpg'),
  new Images ('tauntaun', 'tauntaun.jpg'),
  new Images ('unicorn meat', 'unicorn.jpg'),
  new Images ('usb', 'usb.gif'),
  new Images ('water-can', 'water-can.jpg'),
  new Images ('wine-glass', 'wine-glass.jpg')
];


function getRandomIndex (list){
  return Math.floor(Math.random()*list.length);
}

function getThreeImages (){
  imageGroup = imageGroup.concat(photosOnSecondToLastScreen);
  photosOnSecondToLastScreen = photosOnPreviousScreen;
  photosOnPreviousScreen = photosOnScreen;
  photosOnScreen = [];
  var photo = imageGroup.splice(getRandomIndex(imageGroup), 1);
  photosOnScreen = photosOnScreen.concat(nextPhoto);
  var photo = imageGroup.splice(getRandomIndex(imageGroup), 1);
  photosOnScreen = photosOnScreen.concat(nextPhoto);
  var photo = imageGroup.splice(getRandomIndex(imageGroup), 1);
  photosOnScreen = photosOnScreen.concat(nextPhoto);
  return photosOnScreen;

}
var createPhotos = document.getElementById('app');
Images.prototype.createImages = function(){
  var imageOne = document.createElement('img');
  
}
