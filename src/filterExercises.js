import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function named getStudentsInCohort
export const getStudentsInCohort = (cohort) => {
  const students = useStudents().filter(student => student.cohort === cohort)
  return students
  // It should accept one integer parameter named `cohort`
  // It should return an array of just the students who are in that cohort
}

export const getFullTimeStudents = () => {
  const students = useStudents().filter(student => student.fullTime === true)
  return students
  // Export a function called getFullTimeStudents
  // It should not accept any parameters
  // It should return an array of only the full time students
}

export const getStudentsByInstructorId = (instructorId) => {
  const students = useStudents().filter(student => student.instructorId === instructorId)
  return students
  // Export a function called getStudentsByInstructorId
  // It should accept one integer parameter name `instructorId`
  // It should return an array of students with that instructor
}

export const getPolyglotStudents = (languageCount) => {
  const students = useStudents().filter(student => student.languages.length >= languageCount)
  return students
  // Export a function called getPolyglotStudents
  // It should accept one integer parameter named `languageCount`
  // It should return an array of students who know as many (or more) languages than `languageCount`
  // Ex: If the number 2 is passed to the function, only the students who know 2 or more languages should be returned
}

export const getAvailableInstructors = () => {
  let studentInstructors = students.map(student => {return student.instructorId})
  const availableInstructors = instructors.filter(instructor => 
    !studentInstructors.includes(instructor.id))
  return availableInstructors
  // Export a function called getAvailableInstructors
  // It should not accept any parameters
  // It should return an array of instructors that don't have any students
}

export const getStudentsByLanguage = (language) => {
  const students = useStudents().filter(student => student.languages.some(student => student === language))
  return students
}
// Export a function called getStudentsByLanguage
// It should accept one string parameter named `language`
// It should return an array of students who know the given language
// HINT: In addition to the `filter` method, you might also look up the `some` method

/******** ADVANCED CHALLENGE ********/
/******** Only do this if all other tests are passing ****/
/******** To test, uncomment the code at the bottom of tests/filter.spec.js  *****/

// Export a function called getStudentsByLanguages
// It should accept an array of strings as a parameter named `languages`
// It should return an array of students who know ALL of the given languages
// Ex: getStudentsByLanguages(["Javascript", "C#"])
