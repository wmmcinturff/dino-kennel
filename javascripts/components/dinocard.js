const buildDinoCard = (dino, index) => {
  return `<div class="dino_card" style="width: 20rem;">
    <div class="card-body">
      <img class="card-img-top" src=${dino.image} alt=${dino.name}>
      <p class="card-title">${dino.name}</p>
    <div class="progress">
     <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${dino.health}%"></div>
    </div>
     <button type="button" id="pet${index}" class="btn btn-success">Pet Me!</button>
     <button type="button" id="delete${index}" class="btn btn-danger">Delete</button>
     <button type="button" id="adventure${index}" class="btn btn-warning">Adventure Time!</button>
     <button type="button" id="feed${index}" class="btn btn-info">Feed Me!</button>
    </div>
  <div class="d-flex justify-content-center">
   <button class="btn btn-info m-1" style="color: black" id="info${index}" data-toggle="modal" data-target="#modal${index}">Info</button>
</div>  
<div class="d-flex justify-content-center">
  <button class="btn btn-danger btn-lg btn-block" id="delete${index}">Delete</button>
</div>
</div>
</div>
<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="modal${index}">
<div class="modal-dialog modal-lg">
<div class="modal-content">
<div class="modal-header">
  <h5 class="modal-title">Dino Profile</h5>
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body d-flex" id="dinoModal">
  <img class="modal-image" style="width: 25rem" src="${dino.image}">
  <div class="info m-5">
      <h2>${dino.name}</h2>
      <h5>Type: ${dino.type}</h5>
      <h5>Age: ${dino.age}</h5>
      <h5>Owner: ${dino.owner}</h5>
      <div class="progress">
     <div class="progress-bar" style="width: ${dino.health}%" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
  </div>
</div>
<div class="table-container">
  <table class="table">
      <thead>
      <tr>
          <th scope="col">Date</th>
          <th scope="col">Adventure</th>
      </tr>
      </thead>
      <tbody id="adventureInfo${index}"></tbody>
  </table>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>`;
};

export { buildDinoCard };


