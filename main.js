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
        image: "./assets/dino-image/brachiosaurus.jpg",
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
      <label for="dino type">Type</label>
      <input type="text" class="form-control" id="dinoType" placeholder="t-rex">
      </div>
      <div class="form-group">
      <label for="dino age">Type</label>
      <input type="text" class="form-control" id="dinoAge" placeholder="55">
      </div>
      <button type="button" class="btn btn-primary" id="addDinoBtn">Add Your Dino</button>
    </form>`
);
};
   
  
  
  buildDinoForm();

  const addTheDino = (e) => {
    const target = e.target.id;
        const newDino = {
      name: document.getElementById("inputDino").value,
      image: document.getElementById("inputImage").value,
    }
  
    if (target === 'form-btn' && newDino.name !== '' && newDino.url !== '') {
    dinoArray.push(newDino);
  }};


  const buildDinoCards = (e) => {
    const target = e.target.id;
    let domString = "";
    const dinoName = document.getElementById('inputDino').value;
    const dinoImage= document.getElementById('inputImage').value;
      
    if (target === 'form-btn') {
        if (dinoName === '' && dinoImage === '') {
            let domString = '';
            domString += `<h2 class="text-center">Enter New Dino Sighting</h2>`;
            domString +=  `<form class="form-inline justify-content-center"     id="whole-form">
                    <div class="form-group mb-2">
                   <input type="text" readonly class="form-control-plaintext" id="staticDino">
                    </div>
                   <div class="form-group mx-sm-3 mb-2">
                   <label for="dinosName">Dino Name</label>
                   <input type="text" class="form-control" id="inputDino" placeholder="Dino Bob">
                    </div>
                   <div class="form-group mb-2">
                   <label for="exampleURL">URL</label>
                   <input type="image" class="form-control" id="inputImage">
                   </div>
                    <button type="submit" class="btn btn-primary mb-2" id="form-btn">Add Dino</button>
                   </form>`;
  
    printToDom("dino-form", domString);
  };

}
else {
    for (let i = 0; i < dinoArray.length; i++) {
      domString += `<div class="card" style="width: 18rem;" id="${i}">
                      <div class="card-body"id="${i}">
                        <h5 class="card-title">${dinoArray[i].name}</h5>
                        <img class="dino-pic">${dinoArray[i].image}</img>
                        </div>
                    </div>`;
    }
      printToDom("dino-kennel", domString);
      document.getElementById('inputDino').value = '';
      document.getElementById('inputImage').value = '';
  }
  };
  buttonEvents();

  buildDinoForm();