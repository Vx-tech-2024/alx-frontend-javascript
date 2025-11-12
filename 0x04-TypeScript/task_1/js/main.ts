// task_1/main.ts

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows adding any other properties like `contract`
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // This works because of [key: string]: any
};

console.log(teacher3);

interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Implement the function
const printTeacher: printTeacherFunction = ({ firstName, lastName }) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));


// Interface for the constructor arguments
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the class methods
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implementing the class
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass({ firstName: 'John', lastName: 'Doe' });
console.log(student.displayName());      // John
console.log(student.workOnHomework());   // Currently working
