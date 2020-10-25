const dinoArray = [
  {
    id: "dino1",
    image: "./assets/dino-image/Albertosaurus.jpg",
    name: "Albie",
    type: "Albertosaurus",
    age: 76,
    health: 67,
    adventures: [],
    owner: "Alexine",
  },

  {
    id: "dino2",
    image: "./assets/dino-image/Ankylosaurus.jpg",
    name: "Angie",
    type: "Ankylosaurus",
    age: 92,
    health: 98,
    adventures: [],
    owner: "Uriah",
  },

  {
    id: "dino3",
    image: "./assets/dino-image/Archaeopteryx.jpg",
    name: "Archie",
    type: "Archaeopteryx",
    age: 67,
    health: 99,
    adventures: [],
    owner: "Wanda",
  },

  {
    id: "dino4",
    image: "./assets/dino-image/brachiosaurus.png",
    name: "Brock",
    type: "Brachiosaurus",
    age: 123,
    health: 45,
    adventures: [],
    owner: "Elliot",
  },

  {
    id: "dino5",
    image: "./assets/dino-image/Edmontosaurus.jpg",
    name: "Edmond",
    type: "Edmontosaurus",
    age: 98,
    health: 32,
    adventures: [],
    owner: "Wanda",
  },

  {
    id: "dino6",
    image: "./assets/dino-image/Iguanodon.jpg",
    name: "Iggy",
    type: "Iguanodon",
    age: 57,
    health: 74,
    adventures: [],
    owner: "Uriah",
  },

  {
    id: "dino7",
    image: "./assets/dino-image/Pteranadon.jpg",
    name: "Pteri",
    type: "Pteranadon",
    age: 74,
    health: 55,
    adventures: [],
    owner: "Alexine",
  },
  {
    id: "dino8",
    image: "./assets/dino-image/Monolophosaurus.jpg",
    name: "Monica",
    type: "Monolophosaurus",
    age: 113,
    health: 0,
    adventures: [],
    owner: "Wanda",
  },
];

const adventureArray = [
    {
      id: "adventure1",
      title: "Zipline",
      healthHit: 30,
    },
    {
      id: "adventure2",
      title: "Pick Wildflowers",
      healthHit: 8,
    },
    {
      id: "adventure3",
      title: "Go Carts",
      healthHit: 14,
    },
    {
      id: "adventure4",
      title: "Oktoberfest",
      healthHit: 45,
    },
    {
      id: "adventure5",
      title: "Black Friday Shopping",
      healthHit: 60,
    },
    {
      id: "adventure6",
      title: "Wood Burning",
      healthHit: 25,
    },
    {
      id: "adventure7",
      title: "Corn Maze",
      healthHit: 50,
    },
    {
      id: "adventure8",
      title: "Using Chopsticks",
      healthHit: 80,
    },
    {
      id: "adventure9",
      title: "Yahtzee",
      healthHit: 15,
    },
    {
      id: "adventure10",
      title: "Tightrope Walking",
      healthHit: 75,
    },
  ];
  
  const getDinosaurs = () => { 
    return dinoArray;
};


  export { dinoArray, adventureArray, getDinosaurs };
