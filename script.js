function createTable() {
  const table = document.getElementById("myTable");

  // Clear existing table
  table.innerHTML = "";

  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  // Convert to numbers
  const rows = Number(rn);
  const cols = Number(cn);

  // Validate input
  if (isNaN(rows) || isNaN(cols)) {
    return; // ignore non-numeric input
  }

  if (rows <= 0 || cols <= 0) {
    alert("Rows and columns must be greater than 0");
    return;
  }

  // Create table
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
}

