let mobiltelefon = {
    'producent':'Apple',
    name: 'Iphone',
    farve: 'rosa',
    send_besked(navn) {
        console.log(`Hej ${navn}!`)
    }
};

console.log(mobiltelefon)
// {producent: 'Apple', name: 'Iphone', farve: 'rosa'}

console.log(mobiltelefon.producent) // Apple
console.log(mobiltelefon['producent']) // Apple

let Producent = 'producent'
console.log(mobiltelefon[Producent]) // Apple


mobiltelefon.farve = 'guld'
console.log(mobiltelefon) // {producent: 'Apple', name: 'Iphone', farve: 'guld'}

mobiltelefon.kapacitet = 128
console.log(mobiltelefon) 
// {producent: 'Apple', name: 'Iphone', farve: 'guld',  kapacitet: 128}

delete mobiltelefon.navn
console.log(mobiltelefon) 
// {producent: 'Apple', farve: 'guld',  kapacitet: 128}

console.log(mobiltelefon.send_besked('Ida'))
// Hej Ida!