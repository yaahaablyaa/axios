axios.get('https://dummyjson.com/users') 
    .then(res => reload(res.data.users))
    .catch(err => console.log(err))


function reload(data) {
    let box_1 = document.querySelector('.box')
    let box_2 = document.querySelector('.box2')
    let box_3 = document.querySelector('.box3')

    box_1.innerHTML = ''
    box_2.innerHTML = ''
    box_3.innerHTML = ''
    for(let item of data) {
        if(item.age <= 25) {
            box_1.innerHTML += `
            <div class="item" id="${item.id}">
                <h3>${item.firstName}</h3>
                <div class="age">
                    <p>Age</p> 
                    <p>${item.age}</p>
                </div>
                <div class="far">
                    <button>delete</button>
                    <button class="edit">edit</button>
                </div>
            </div>`
        }else if(item.age > 25 && item.age <= 50) {
            box_2.innerHTML += `
            <div class="item" id="${item.id}">
                <h3>${item.firstName}</h3>
                <div class="age">
                    <p>Age</p> 
                    <p>${item.age}</p>
                </div>
                <div class="far">
                    <button>delete</button>
                    <button class="edit">edit</button>
                </div>
            </div>`
        }else if(item.age > 50) {
            box_3.innerHTML += `
            <div class="item" id="${item.id}">
                <h3>${item.firstName}</h3>
                <div class="age">
                    <p>Age</p> 
                    <p>${item.age}</p>
                </div>
                <div class="far">
                    <button>delete</button>
                    <button class="edit">edit</button>
                </div>
            </div>
            `
        }
    }   
}
