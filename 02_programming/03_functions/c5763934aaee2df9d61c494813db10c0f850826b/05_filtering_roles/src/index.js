const personList = [
  {
    name: "Frieda",
    role: "Teacher",
  },
  {
    name: "John",
    role: "Teacher",
  },
  {
    name: "Francis",
    role: "Student",
  },
  {
    name: "Jane",
    role: "Student",
  },
];

function filteredRoles(personList, role = "Teacher") {
  let emptyArray = [];
  const teachersList = personList.filter((person) => person.role === role);
  console.log(teachersList);
  return teachersList;
}

//arrayTeacher = [ {name : , role:,}, {name: john , role: teacher}]

// Do not remove lines below, it is for tests
module.exports = filteredRoles;
