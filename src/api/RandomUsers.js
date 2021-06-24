export async function getData() {
    try {
        let resultado = await fetch('https://deelay.me/2000/randomuser.me/api?results=20');
        let json = await resultado.json();
        return json.results;
    } catch(e) {
        console.log('Err: ' + e)
    }
}