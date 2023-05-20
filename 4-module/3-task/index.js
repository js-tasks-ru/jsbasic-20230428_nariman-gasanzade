function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {
    const row = table.rows[i];

    const dataAvailableAttr = row.cells[3].getAttribute('data-available');
    const genderValue = row.cells[2].textContent;
    const ageValue = row.cells[1].textContent;

    if (dataAvailableAttr === null) {
      row.hidden = true;
    } else {
      row.classList.add(dataAvailableAttr === 'true' ? 'available' : 'unavailable');
    }

    row.classList.add(genderValue === 'm' ? 'male' : 'female');

    if (ageValue < 18) {
      row.style.textDecoration = 'line-through';
    }
  }// ваш код...
}
