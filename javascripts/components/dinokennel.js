import { buildDinoCard } from "./dinocard";
import { buildDinoForm } from "./dinoforms";
import { feedDino, petDino, deleteDino } from './dinoActions.js';

const renderDinoCards = (array) => {
    $('#kennel').html('')
    $('#hospital').html('')
    $('#graveyard').html('')
    array.forEach((dinoObj, index) => {
      if (dinoObj.health >= 50) {
        $('#kennel').append(buildDinoCard(dinoObj, index));
      } else if (dinoObj.health < 50 && dinoObj.health > 0) {
        $('#hospital').append(buildDinoCard(dinoObj, index));
      } else {
        $('#graveyard').append(buildDinoCard(dinoObj, index));
      }
      feedDino(index, dinoObj, array)
      petDino(index, dinoObj, array)
      adventureTime(index, dinoObj, array)
      adventureModal(dinoObj, index)
      deleteDino(array, index)
      buildDinoForm();
    });
  };
  



export { renderDinoCards }

