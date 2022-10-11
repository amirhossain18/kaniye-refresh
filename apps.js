function btnClick(){
    fetch('https://jsonplaceholder.typicode.com/photos')
.then(res=>res.json())
.then(datas=>showPhoto(datas))

}

function showPhoto(photos){
    const maindiv= document.getElementById('photo-list')
 for (const photo of  photos){
   
    const newdiv= document.createElement('div');
    maindiv.classList.add('listItem')
    newdiv.innerHTML= `
    <h2> ID no ${photo.id} </h2>
    <h4> Title: ${photo.title}</h4>
    <h6>URL ${photo.thumbnailUrl} </h6>
    
    `
    maindiv.appendChild(newdiv);
 
 }
 
}

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name);