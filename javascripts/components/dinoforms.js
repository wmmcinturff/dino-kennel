$("#dino-button").click(function(){
    $("#dino-form").toggle();
});
const buildDinoForm = () => { 
    $("#dino-form").html( `
     <form>
      <div class="form-group">
        <label for="dino name">Dino Name</label>
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
        <input type="text" class="form-control" id="dinoOwner" placeholder="Sheila">
      </div>
      <div class="form-group">
        <label for="dino image">Image</label>
        <input type="text" class="form-control" id="dinoImage">
      </div>
      <button type="button" class="btn btn-primary" id="addDinoBtn">Add Your Dino</button>
    </form>`
);
};

export { buildDinoForm };