import { dinoArray } from '../helpers/dinoData.js';
import { buildDinoCard } from './dinocard.js';

const addDinoToForm = () => {
    $("#addDinoBtn").click(() => {
      let newDino = {};
      newDino.name = $("#dinoName").val();
      newDino.image = $("#dinoImage").val();
      newDino.owner = $("#dinoOwner").val();
      newDino.type = $("#dinoType").val();
      newDino.age = $("#dinoAge").val();
      dinoArray.push(newDino);
      buildDinoCard();  
      clearForm();
     });
  
    };

    const clearForm = () => {
        $("#dinoName").val('');
        $("#dinoImage").val('');
        $("#dinoOwner").val('');
        $("#dinoType").val('');
        $("#dinoAge").val('');
        
      };

      export { addDinoToForm };