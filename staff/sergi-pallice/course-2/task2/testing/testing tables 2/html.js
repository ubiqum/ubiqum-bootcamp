
function addTable() {
    var myElement = document.getElementById("mainDiv");
    var myTable = document.createElement("table");
    myTable.id = "tableId";
    myElement.appendChild(myTable);
}
function addRow() {
    var myElement = document.getElementById("tableId");
    var tr = document.createElement("tr");    // Create table row
    tr.id = "myTr"; // Add id
    var td = document.createElement("td")  // add table cell
    var cell = document.createTextNode("cell element"); // adding text to the cell
    td.appendChild(cell);
    tr.appendChild(td);
    myElement.appendChild(tr);
  }