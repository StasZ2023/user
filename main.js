

let btn = document.querySelector('.get');
let btnOpen = document.querySelector('.open')
let pos = document.querySelector('.post')
btn.addEventListener('click', function(){
    let user = document.querySelector('.user').value;
    if(user.length === 0){
        pos.innerHTML = `<img width="100%" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL3lOfq183-OhJQlBiHAoqIRXsu7jS2cKa4A&s'>`
    }else{
        user = user[0].toUpperCase() + user.slice(1);
        let date = document.querySelector('.date').value;
    let x = Number(date);
     let y = new Date().getFullYear() - x
    
    pos.innerHTML = `<p>Ваше имя: ${user}</p><p>Вам ${date} лет</p> <p>Ваш логин: <span style="color:black">${user.toLowerCase()}_${y}.рф</span></p>`
    
    }
   
    
    console.log(user)
    // console.log(y)
})