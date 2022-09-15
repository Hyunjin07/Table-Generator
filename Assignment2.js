document.querySelector("h3").addEventListener("click", drawTable)

function drawTable() {
  let generatedTable = document.querySelector("#generatedTable"); 
 
  let tableEl = document.createElement("table"); 
 
  for (let j = 0; j < 15; j++) {
  
    let elForRow = document.createElement("tr"); 
    
    for (let k = 0; k < 15; k++) {
      
      let elForCell = document.createElement("td");       
      elForCell.innerHTML = `${j + 1}, ${k + 1} `;
      elForRow.appendChild(elForCell); 
    }
    
    tableEl.appendChild(elForRow); 
  }
  generatedTable.innerHTML = tableEl.outerHTML;
  document.getElementById("input").innerHTML = `<b>Number of rows:</b> <input type="number" id="rowinput">
  <b> Number of columns: </b><input type="number" id="columninput">
  <input type="button" value="Generate New Table" class="inputsubmit">`;

}
window.addEventListener('click', function(e) {

  if(e.target.className.includes("inputsubmit")) {
  
    drawNewTable();
  }
});

function drawNewTable() {

  let generatedTable = document.querySelector("#generatedTable"); 

  let tableEl = document.createElement("table"); 

  let numRows = document.getElementById("rowinput").value;
 
  let numCols = document.getElementById("columninput").value;
 
  for (let j = 0; j < numRows; j++) {
  
    let elForRow = document.createElement("tr"); 
   
    for (let k = 0; k < numCols; k++) {
      let elForCell = document.createElement("td"); 
      elForCell.innerHTML = `${j + 1}, ${k + 1} `;
      elForRow.appendChild(elForCell); 
    }
    tableEl.appendChild(elForRow);
  }
  generatedTable.innerHTML = tableEl.outerHTML;
}