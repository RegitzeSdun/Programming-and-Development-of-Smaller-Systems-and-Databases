const købBønner = () => {
    return new Promise((resolve,reject) => {
        const bønneTyper = ['kidney','fava','pinto','sorte','garbanzo'];
        setTimeOut(() => {
            let randomIndex = Math.floor(Math.random()*4);
            let bønneType = bønneTyper[randomIndex];
            console.log(`2. Jeg købte ${bønneType} bønner fordi de var på tilbud.`);
            resolve(bønneType);
        },1000);
    })
}

async function hentBønner() {
    console.log(`1. På vej til butikken for at købe bønner..`);
    //let værdi = await købBønner();
    let værdi = købBønner();
    console.log(`3. Fedt! Jeg laver ${værdi} bønner til aftensmad i aften!`)
}