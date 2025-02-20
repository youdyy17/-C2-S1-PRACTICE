let students = [
  { id: 1, name: "Trang", grade: "A" },
  { id: 2, name: "Hai", grade: "B" },
  { id: 3, name: "Linh", grade: "C" },
];

function updateStudentGrade(studentsArray, idToUpdate, newGrade) {
  // Step 1: Use findIndex to find the index of the student
  let indexToUpdate = studentsArray.findIndex((student) => student.id === idToUpdate);

  if (indexToUpdate !== -1) {
    // Step 2: Create a copy of the original array
    let updatedArray = [...studentsArray];

    // Step 3: Update the grade
    updatedArray[indexToUpdate].grade = newGrade;

    // Step 4: Return the updated array
    return updatedArray;
  } else {
    console.log("Student with ID", idToUpdate, "not found.");
    return studentsArray; // Return the original array unchanged
  }
}

// Original array of students
console.log("Original students array:");
console.log(students);

// Update the grade of the student with ID 2 to "A"
let updatedStudents = updateStudentGrade(students, 2, "A");

// Updated array of students
console.log("\nUpdated students array:");
console.log(updatedStudents);
