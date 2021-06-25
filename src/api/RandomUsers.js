export async function getData(cantidadDePersonas) {
    try {
        let resultado = await fetch('https://deelay.me/2000/randomuser.me/api?results=' + cantidadDePersonas);
        let json = await resultado.json();
        return json.results;
    } catch(e) {
        console.log('Err: ' + e)
    }
}



