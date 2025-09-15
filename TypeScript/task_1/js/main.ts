// create Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// extend interface
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher('John', 'Doe'));

// create interface to describe instances
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// interface describe constructor
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// write a class
class StudentClass implements StudentClassInterface {
  firstName: string; // declare the properties first
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName; // then assign to the params
    this.lastName = lastName;
  }
  // shortcut (no need to declare properties)
  // TS automatically creates this.firstName and this.lastName
  // constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }
}

// === test===
const createStudent = (
  Ctor: StudentClassConstructor,
  firstName: string,
  lastName: string
): StudentClassInterface => new Ctor(firstName, lastName);

// ===== Test it =====
const s1 = createStudent(StudentClass, 'Lily', 'Han');
console.log(s1.displayName());      // Lily
console.log(s1.workOnHomework());
