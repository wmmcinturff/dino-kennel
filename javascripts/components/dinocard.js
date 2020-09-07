import { dinoArray } from '../helper.js';

const buildDinoCard = () => {
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
};

export { buildDinoCard };