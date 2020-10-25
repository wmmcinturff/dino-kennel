import { buildDinoForm } from './components/dinoforms.js';
import { buildDinoCard } from './components/dinocard.js';
import { addDinoToForm } from './components/newDino.js';

 const init = () => {
     buildDinoForm();
     buildDinoCard();
     addDinoToForm();
 };

 init();
