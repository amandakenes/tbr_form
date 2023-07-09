document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('book-form');
    var table = document.getElementById('book-table').getElementsByTagName('tbody')[0];
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var title = document.getElementById('title').value;
      var author = document.getElementById('author').value;
      var genre = document.getElementById('genre').value;
      var year = document.getElementById('year').value;
  
      // cria nova linha do table
      var newRow = table.insertRow(table.rows.length);
  
      // adiciona células na nova linha
      var readCell = newRow.insertCell(0);
      var titleCell = newRow.insertCell(1);
      var authorCell = newRow.insertCell(2);
      var genreCell = newRow.insertCell(3);
      var yearCell = newRow.insertCell(4);
  
      // adiciona o elemento do "checkbox"
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      // configura os valores das células
      readCell.appendChild(checkbox);
      titleCell.innerHTML = title;
      authorCell.innerHTML = author;
      genreCell.innerHTML = genre;
      yearCell.innerHTML = year;
  
      // reseta os inputs
      form.reset();
    });
});  