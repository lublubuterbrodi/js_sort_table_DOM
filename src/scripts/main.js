'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('th');
  const tableBody = document.querySelector('tbody');

  const rows = Array.from(tableBody.querySelectorAll('tr'));

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const sortedRows = [...rows].sort((a, b) => {
        const aText = a.cells[index].textContent.trim();
        const bText = b.cells[index].textContent.trim();

        if (
          !isNaN(parseFloat(aText.replace(/[^0-9.-]+/g, ''))) &&
          !isNaN(parseFloat(bText.replace(/[^0-9.-]+/g, '')))
        ) {
          const aValue = parseFloat(aText.replace(/[^0-9.-]+/g, ''));
          const bValue = parseFloat(bText.replace(/[^0-9.-]+/g, ''));

          return aValue - bValue;
        } else {
          return aText.localeCompare(bText);
        }
      });

      tableBody.innerHTML = '';

      sortedRows.forEach((row) => tableBody.appendChild(row));
    });
  });
});
