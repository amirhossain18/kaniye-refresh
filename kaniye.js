const loadData = ()=>{
    fetch('https://api.kanye.rest')
    .then(res=>res.json())
    .then(data=> getData(data))
}

const getData=quota =>{
  
   const blockQuote= document.getElementById('quota');
        blockQuote.innerText= quota.quote
        ;
        console.log(quota)
}