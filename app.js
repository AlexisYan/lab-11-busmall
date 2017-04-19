'use strict';

var app = document.getElementById('app');
var clickRemining = 25;
var photosOnSecondToLastScreen = [];
var photosOnPreviousScreen = [];
var photosOnScreen = [];

function Images (name, filename){
  this.name = name;
  this.src = filename;
  this.clickCount = 0;
  this.displayCount = 0;
};

var bag =  new Images('Bag','img/bag.jpg');
var banana =  new Images('Banana Cutter', 'img/banana.jpg');
var bathroom =  new Images ('Tablet Holder for Bathroom', 'img/bathroom.jpg');
var boots =  new Images('Boots', 'img/boots.jpg');
var breakfast =  new Images('breakfast', 'img/breakfast.jpg');
var bubblegum =  new Images('Bubble Gum', 'img/bubblegum.jpg');
var chair =  new Images ('Comfy Chair', 'img/chair.jpg');
var cthulhu =  new Images('Cthulhu centerpeice', 'img/cthulhu.jpg');
var duckDog =  new Images('duck dog', 'img/dog-duck.jpg');
var dragon =  new Images ('Dragon', 'img/dragon.jpg');
var pen =  new Images('pen', 'img/pen.jpg');
var broomDog =  new Images('Broom Dog', 'img/pet-sweep.jpg');
var scissors =  new Images('scissors', 'img/scissors.jpg');
var shark =  new Images('Shark', 'img/shark.jpg');
var broomBaby =  new Images ('Broom Baby', 'img/sweep.png');
var tauntaun =  new Images ('tauntaun', 'img/tauntaun.jpg');
var unicorn =  new Images ('unicorn', 'img/unicorn.jpg');
var usb =  new Images ('USB', 'img/usb.gif');
var watering =  new Images ('Watering Can', 'img/water-can.jpg');
var wine =  new Images ('Wine Glass', 'img/wine-glass.jpg');

var imageGroup = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, duckDog, dragon, pen, broomDog, scissors, shark, broomBaby, tauntaun, unicorn, usb, watering, wine ];

function getRandomIndex (list){
  return Math.floor(Math.random() * list.length);
};

function getThreeImages (){
  imageGroup = imageGroup.concat(photosOnSecondToLastScreen);
  photosOnSecondToLastScreen = photosOnPreviousScreen;
  photosOnPreviousScreen = photosOnScreen;
  photosOnScreen = [];
  var photo = imageGroup.splice(getRandomIndex(imageGroup), 1);
  photosOnScreen = photosOnScreen.concat(photo);
  var photo = imageGroup.splice(getRandomIndex(imageGroup), 1);
  photosOnScreen = photosOnScreen.concat(photo);
  var photo = imageGroup.splice(getRandomIndex(imageGroup), 1);
  photosOnScreen = photosOnScreen.concat(photo);
  return photosOnScreen;
};

function handlePhotoClick(event){
  var image = event.target;
  photosToRender[image.id].displayCount++;
  clickRemining--;
  if (clickRemining > 0){
    renderPhotoChoise();
  } else {
    renderChart();
  }
}
var photosToRender = getThreeImages();
function renderPhotoChoise(){
  //get three new photos
  photosToRender = getThreeImages();
  app.textContent = '';
  var imageElement;
  for (var i = 0; i < photosToRender.length; i++){
    photosToRender[i].clickCount++;
    imageElement = document.createElement('img');
    imageElement.src = photosToRender[i].src;
    imageElement.id = '' + i;
    imageElement.addEventListener('click', handlePhotoClick);
    app.appendChild(imageElement);
    console.log(photosToRender[i].clickCount);
  }

}

function renderChart() {

 var canvas = document.getElementById('chart-canvas');
  var ctx = canvas.getContext('2d');
  var data = {
    labels: ['bag', 'banana', 'bathroom', 'boots','breakfast', 'bubblegum', 'chair', 'cthulhu', 'duckDog', 'dragon', 'pen', 'broomDog', 'scissors', 'shark', 'broomBaby', 'tauntaun', 'unicorn', 'usb', 'watering', 'wine' ],
    datasets:[{
      label: 'Clicks',
      backgroundColor: [
        '#2F343B',
        '#2F343B',
        '#2F343B',
        '#2F343B',
        '#2F343B',
        '#2F343B',
        '#2F343B',
        '#2F343B',
        '#2F343B',
        '#2F343B',
        '#2F343B',
        '#2F343B',
        '#2F343B',
        '#2F343B',
        '#2F343B',
        '#2F343B',
        '#2F343B',
        '#2F343B',
        '#2F343B',
        '#2F343B'
      ],
      borderWidth: 1,
      data: [bag.clickCount, banana.clickCount, bathroom.clickCount, boots.clickCount, breakfast.clickCount, bubblegum.clickCount, chair.clickCount, cthulhu.clickCount, duckDog.clickCount, dragon.clickCount, pen.clickCount, broomDog.clickCount, scissors.clickCount, shark.clickCount, broomBaby.clickCount, tauntaun.clickCount, unicorn.clickCount, usb.clickCount, watering.clickCount, wine.clickCount ]},
    {
      label: 'Displayed',
      backgroundColor: [
        '#703030',
        '#703030',
        '#703030',
        '#703030',
        '#703030',
        '#703030',
        '#703030',
        '#703030',
        '#703030',
        '#703030',
        '#703030',
        '#703030',
        '#703030',
        '#703030',
        '#703030',
        '#703030',
        '#703030',
        '#703030',
        '#703030',
        '#703030'
      ],
      borderWidth: 1,
      data: [bag.displayCount, banana.displayCount, bathroom.displayCount, boots.displayCount, breakfast.displayCount, bubblegum.displayCount, chair.displayCount, cthulhu.displayCount, duckDog.displayCount, dragon.displayCount, pen.displayCount, broomDog.displayCount, scissors.displayCount, shark.displayCount, broomBaby.displayCount, tauntaun.displayCount, unicorn.displayCount, usb.displayCount, watering.displayCount, wine.displayCount ]}
    ]
  };
  canvas.height = '500px';
  canvas.width = '500px';
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
  });
}

renderPhotoChoise();
