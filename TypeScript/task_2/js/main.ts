interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot get a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// create function
function createEmployee (salary: number | string) : (Director | Teacher) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// test result
console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director

// === task6 ===
// type predicate
function isDirector(employee: any): employee is Director {
    return employee instanceof Director;
}

// create execute function
function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

// smoke test for task6:
console.log(executeWork(createEmployee(200)));
// Getting to work
console.log(executeWork(createEmployee(1000)));
// Getting to director tasks


// === task7 ===
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else {
        return 'Teaching History';
    }
}

console.log(teachClass('Math'));
// Teaching Math
console.log(teachClass('History'));
// Teaching History)
console.log(teachClass('Musics'));
// Error: Argument of type '"Musics"' is not assignable to parameter of type 'Subjects'.
