const dinoArray = [
    {
        image: "./assets/dino-image/Albertosaurus.jpg",
        name: "Albie",
        type: "Albertosaurus",
        age: 76,
        owner: "Wanda",
    },

    {
        image: "./assets/dino-image/Ankylosaurus.jpg",
        name: "Angie",
        type: "Ankylosaurus",
        age: 92,
        owner: "Wanda",
    },

    {
        image: "./assets/dino-image/Archaeopteryx.jpg",
        name: "Archie",
        type: "Archaeopteryx",
        age: 67,
        owner: "Wanda",
    },

    {
        image: "./assets/dino-image/brachiosaurus.png",
        name: "Brock",
        type: "Brachiosaurus",
        age: 123,
        owner: "Wanda",
    },

    {
        image: "./assets/dino-image/Edmontosaurus.jpg",
        name: "Edmond",
        type: "Edmontosaurus",
        age: 98,
        owner: "Wanda",

    },

    {
        image: "./assets/dino-image/Iguanodon.jpg",
        name: "Iggy",
        type: "Iguanodon",
        age: 57,
        owner: "Wanda",
    },

    {
        image: "./assets/dino-image/Pteranadon.jpg",
        name: "Pteri",
        type: "Pteranadon",
        age: 74,
        owner: "Wanda",
    },
];



 

  
 const buildDinoKennel = () => {
        $("#dino-kennel").html(""); 
        dinoArray.forEach((dino) => {
            $("#dino-kennel").append(
            `<div class="dino_card" style="width: 18rem;">
            <div class="card-body">
            <img class="card-img-top" src=${dino.image} alt=${dino.name}>
            <p class="card-title">${dino.name}</p>
            <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
            </div>
            <button type="button" class="btn btn-primary">Profile</button>
            <button type="button" class="btn btn-success">Pet Me!</button>
            <button type="button" class="btn btn-danger">Delete</button>
            <button type="button" class="btn btn-warning">Adventure Time!</button>
            <button type="button" class="btn btn-info">Feed Me!</button>
            </div>
           </div>`
           ) });
       
    }
   
buildDinoKennel();


 const init = () => {
     buildDinoForm();
     buildDinoKennel();
 }
 init();