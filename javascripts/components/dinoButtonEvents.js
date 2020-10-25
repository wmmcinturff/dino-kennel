import { renderDinoCards } from "./dinokennel.js"

const feedDino = (index, dinoObj, array) => {
    $(`#feed${index}`).click(() => {
      dinoObj.health += 10;
      renderDinoCards(array);
    });
  };

  const petDino = (index, dinoObj, array) => {
    $(`#pet${index}`).click(() => {
      dinoObj.health += 10;
      renderDinoCards(array);
    });
  };

const deleteDino = (array, index) => {
    $(`#delete${index}`).click( () => {
        array.splice(index, 1)
        renderDinoCards(array)
    })
}

export { feedDino, petDino, deleteDino }