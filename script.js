function retrieveCompl(){
    fetch('https://api.adviceslip.com/advice')
        .then(response=>
         {
            if(!response.ok)
                throw new Error('HTTP error: ${response.status}');
            return response.text();
        }).then(text => updateComplDisplay(JSON.parse(text)));
}
function updateComplDisplay(slipObj){
    var complObj = slipObj['slip'];
    var {id, advice} = complObj;
    document.querySelector("#advice-id").textContent = id;
    document.querySelector(".advice-text").textContent = '"'+advice+'"';
}   
document.querySelector('.dice-container')
    .addEventListener('click', retrieveCompl);

retrieveCompl();