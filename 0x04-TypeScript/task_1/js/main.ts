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

// Define the interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // John Doe

