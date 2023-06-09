const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const output = document.getElementById('outputNum');
const outputLast = document.querySelector('.last');
const conteinerBoxs = document.querySelector('.conteinerBoxs');
daily.addEventListener('click', ()=>{
    fetch("data.json")
    .then((data)=>{
        return data.json()
    })
    .then((item)=>{
        let displayBox = item.map((item)=>{
            output.innerHTML = `${item.timeFrames.daily.current}`
            outputLast.innerHTML = `${item.timeFrames.daily.previous}`
        })
        console.log("wijbfeguywbf")
        // displayBox = displayBox.join('')
        // conteinerBoxs.innerHTML = displayBox
    })
    .catch((error) => console.log('Error' + error))
});
weekly.addEventListener('click', ()=>{

});
monthly.addEventListener('click', ()=>{

});
