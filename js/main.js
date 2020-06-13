var newArray = [];
var ADVERTS = 8;
var AVATARS = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png'];
var TITLES = ['Предложение 1, Предложение 2, Предложение 3, Предложение 4'];
var PRICE_MIN = 1000;
var PRICE_MAX = 10000;
var TYPES = ['palace', 'flat', 'house', 'bungalo'];
var ROOMS = [1, 2, 3, 4];
var GUESTS = [1, 2, 3, 4];
var CHECKIN = ['12:00', '13:00', '14:00'];
var CHECKOUT = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var DESCRIPTIONS = ['Описание 1', 'Описание 2', 'Описание 3'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var MIN_X = 0;
var MAX_X = 1200;
var MIN_Y = 130;
var MAX_Y = 630;
var PIN_WIDTH = 45;
var PIN_HEIGHT = 45;
var TEMPLATES = document.querySelector('#pin').content.querySelector('.map__pin');

  var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };
var getRandomArray = function (arr) {
    var randomArray = [];
    for (var i = 0; i < getRandomNumber(0, arr.length); i++) {
        arr[i] = randomArray[i];
    }
    return randomArray;
  };
  var adverts = function () {
    for (var j = 0; j < ADVERTS; j++) {
      newArray[j] = {
          author: {
            avatar: AVATARS[j]
          },
          offer: {
            title: TITLES[getRandomNumber(0, TITLES.length)],
            address: 'getRandomNumber(MIN_X, MAX_X), getRandomNumber(MIN_Y, MAX_Y)',
            price: getRandomNumber(PRICE_MIN, PRICE_MAX),
            type: TYPES[getRandomNumber(0, TYPES.length)],
            rooms: ROOMS[getRandomNumber(0, ROOMS.length)],
            guests: GUESTS[getRandomNumber(0, GUESTS.length)],
            checkin: CHECKIN[getRandomNumber(0, CHECKIN.length)],
            checkout: CHECKOUT[getRandomNumber(0, CHECKOUT.length)],
            features: getRandomArray(FEATURES),
            description: DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length)],
            photos: getRandomArray(PHOTOS),
          },
          location: {
            x: getRandomNumber(MIN_X, MAX_X),
            y: getRandomNumber(MIN_Y, MAX_Y)
          }
        }
    }
};
adverts();

document.querySelector('.map').classList.remove('map--faded');
var mapPins = document.querySelector('.map__pins');
var renderPin = function (pin) {
  var newPin = TEMPLATES.cloneNode(true);
  newPin.style.left = pin.location.x - PIN_WIDTH / 2 + 'px';
  newPin.style.top = pin.location.y - PIN_HEIGHT + 'px';
  newPin.querySelector('img').src = pin.author.avatar;
  newPin.querySelector('img').alt = pin.offer.title;
  return newPin;
};
var renderFragmentElement = function () {
  var fragment = document.createDocumentFragment();

  for (var k = 0; k < newArray.length; k++) {
    fragment.appendChild(renderPin(newArray[k]));
  }

  mapPins.appendChild(fragment);
};

renderFragmentElement();
