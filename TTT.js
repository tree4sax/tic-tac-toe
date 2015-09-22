var row1 ['','',''];
var row2 ['','',''];
var row3 ['','',''];

for (i = 0; i <= 2; i++) {
  var space = 0;

  if (row1[space] || row2[space] || row3[space] == 'X') {
    row1.push('O');
  }
    else if (row1[space] || row2[space] || row3[space] == 'O') {
      row1.push('X');
    }
    else
      space++;

  if (row1[space] || row2[space] || row3[space] == 'X') {
      row1.push('O');
  }
      else if (row1[space] || row2[space] || row3[space] == 'O') {
        row1.push('X');
      }
        else
          space++;

  if (row1[space] || row2[space] || row3[space] == 'X') {
      row1.push('O');
  }
      else if (row1[space] || row2[space] || row3[space] == 'O') {
        row1.push('X');
      }
        else
          space++;

}
