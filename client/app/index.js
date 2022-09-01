let campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log(campos);

//	é preciso de tbody,	pois é ele que receberá	a tr que será construída

const tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', 
function(ev){
    alert('oi');
});