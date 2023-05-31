var myHeaders = new Headers();
myHeaders.append("apikey", "6hpKZxNazavfnQSo2e2pkyEbCFkiZhkQ");

let url, head;


export function checkRadioButtons(have, want, amount, setSecond, api) {
    if (api==='cledara') {
        url = `https://api.apilayer.com/exchangerates_data/convert?to=${want}&from=${have}&amount=${amount}`;
        head = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };
        doRequest(setSecond, api);
        
    } else if (api==='fyhao') {
        url = `https://currency-exchange.p.rapidapi.com/exchange?from=${have}&to=${want}&q=${amount}`;
        head = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '619624cca8msh0c9a9a85b5368a3p137753jsnbf1583a2183a',
                'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
            }
        };
        doRequest(setSecond, api);
        
    } else if (api==='ninjas') {
        url = `https://urrency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${have}&want=${want}&amount=${amount}`;
        head = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '619624cca8msh0c9a9a85b5368a3p137753jsnbf1583a2183a',
                'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
            }
        };
        doRequest(setSecond, api);
    }
}


function doRequest(setSecond, api) {
    fetch(url, head) 
    .then(response => response.json())
    .then(result => {
        switch (api) {
            case 'cledara':
                setSecond(result.result.toFixed(2));
                break;
        
            case 'fyhao':
                setSecond(result.toFixed(2));
                break;
        
            case 'ninjas':
                setSecond(result.new_amount.toFixed(2));
                break;
        
            default:
                break;
        }
    })
    .catch(error => {
        console.log('ERROR ==>', error);
    });
}