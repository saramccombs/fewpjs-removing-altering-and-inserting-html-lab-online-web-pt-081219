//Remove main#main
document.querySelector('main#main').remove();

//Create new element
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Sara is the champion';