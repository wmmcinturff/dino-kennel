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
        name: "Edmund",
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

const buildDinoForm = () => { $("#dino-form").html( `
     <form>
      <div class="form-group">
      <label for="bear name">Dino Name</label>
      <input type="text" class="form-control" id="dinoName" placeholder="Dino Bob">
      </div>
      <div class="form-group">
      <label for="dino type">Type</label>
      <input type="text" class="form-control" id="dinoType" placeholder="t-rex">
      </div>
      <div class="form-group">
      <label for="dino age">Age</label>
      <input type="text" class="form-control" id="dinoAge" placeholder="55">
      </div>
      <div class="form-group">
      <label for="dino owner">Owner</label>
      <input type="text" class="form-control" id="dinoOwner" placeholder="Bob">
      </div>
      <button type="button" class="btn btn-primary" id="addDinoBtn">Add Your Dino</button>
    </form>`
);
};
     
  buildDinoForm();
             
               
 const buildDinoKennel = () => {
        $("#dino-kennel").html(""); 
        dinoArray.forEach((dino) => {
            $("#dino-kennel").append(
            `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <img class="card-img-top" src=${dino.image} alt=${dino.name}>
            <p class="card-title">${dino.name}</p>
            <p class="owner">${dino.type}</p>
            <p class="owner">${dino.owner}</p>
            <p class="age">${dino.age}</p>
            </div>
           </div>`
           ) });
       
    }
   
buildDinoKennel();
  

 