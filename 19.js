function learn(time, courses) {
  let selectedCourses = null;
  for (let i = 0; i < courses.length - 1; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      if (courses[i] + courses[j] === time) return [i, j];
      else if (
        courses[i] + courses[j] < time &&
        (!selectedCourses ||
          courses[i] + courses[j] >
            courses[selectedCourses[0]] + courses[selectedCourses[1]])
      ) {
        selectedCourses = [i, j];
      }
    }
  }
  return selectedCourses;
}

const courses = learn(10, [2, 3, 8, 1, 4]); // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.
console.log(courses);
