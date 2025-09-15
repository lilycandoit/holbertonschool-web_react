// create interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// create students list based on interface
const student1: Student = {
  firstName: 'Lily',
  lastName: 'Smith',
  age: 22,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Bee',
  age: 25,
  location: 'London',
};

const studentsList: Student[] = [student1, student2];

// test in console.log
// studentsList.forEach((student) => {
//     console.log(`Student: ${student.firstName} ${student.lastName}, Age: ${student.age}, Location: ${student.location}`)
// })

// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table

// Reusable function to apply common styles to table elements
function applyTableCellStyle(element: HTMLElement): void {
  element.style.border = '1px solid black';
  element.style.padding = '8px';
  element.style.textAlign = 'center';
}

// create the table
const table = document.createElement('table');
const header = document.createElement('tr');
const nameHeader = document.createElement('th');
nameHeader.textContent = 'First Name';
applyTableCellStyle(nameHeader);

const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
applyTableCellStyle(locationHeader);

header.appendChild(nameHeader);
header.appendChild(locationHeader);
table.appendChild(header);

// create rows
studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;
  applyTableCellStyle(nameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  applyTableCellStyle(locationCell);

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// append table to the document body
document.body.appendChild(table);
