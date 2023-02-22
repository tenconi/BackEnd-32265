const socketClient = io(); 

console.log('Hola desde realProds.js');


    socketClient.on('realProds', (realProds) => {
    // console.log(realProds); //ok
   const despliege = realProds.map( P => {
    return  `<div class="card card-update">
                <div class="portaImg">
                <img src=${P.thumbnail[0]} />
                </div>

                <div class="cardInfo">
                    <h2>${P.title}</h2>
                    <p>${P.description}</p>
                    <p><strong>$ ${P.price}</strong></p>
                </div>
            </div>`
   })
   const portaCards = document.querySelector('.portaCards');
    portaCards.innerHTML += despliege
})

