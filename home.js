function ageInDays () {
      var age = prompt('Whats your age?');
      var yourAge = (age * 365);
      var h1 = document.getElementById('ageInDays');
      // var answer = document.createTextNode('You are ' + yourAge + 'days old');
      var answer = 'You are ' + yourAge + ' days old';
      // h1.setAttribute('id', 'ageInDays');
      h1.innerHTML = answer;
      // document.getElementById('flex-box-result').appendChild(h1);
      }
function reset () { 
      document.getElementById('ageInDays').innerHTML = '';
}

function catGenerator() { 
      var image = document.createElement('img');
      var div = document.getElementById('flex-box');
      image.src = 'https://thecatapi.com/api/images/get?format=src&type=gif&size=small';
      div.appendChild(image);
}
