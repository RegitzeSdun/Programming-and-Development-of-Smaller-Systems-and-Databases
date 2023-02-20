console.log('client-side code running');

const button = document.getElementById('myButton');
button.addEventListener('click', function (e){
    console.log('Knappen blev klikket')
});

fetch('/clicked', {method: 'POST'})
.then(function (response) {
    if (response.ok) {
        console.log('Klik blev gemt.');
        return;
    }
    throw new Error('Request fejlede.');
})
.catch(function (error) {
    console.log(error);
});

setInterval(function () {
    fetch('clicks', {
        method: 'GET'
    }).then(function (response) {
        if (response.ok) return response.json();
        throw new Error('Request fejlede.');
    })
    .then(function(data) {
        document.getElementById('counter').innerHTML = `Der er blevet trykket på knappen ${data.length} gange`;
    })
    .catch(function (error) {
        console.log(error)
    });
}, 1000);