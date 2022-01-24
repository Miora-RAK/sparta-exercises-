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
const studentsList = personList.filter((person) => person.role === "Student");
const teachersList = personList.filter((person) => person.role === "Teacher");
function filteredRoles(personList, role = "Teacher") {
  console.log(personList);
  console.log(role);
  let emptyArray = [];
  if (personList === "Student") {
    if (personList[0].role === "Student") {
      console.log(emptyArray.push(personList[0]));
    } else if (personList[1].role === "Student") {
      console.log(emptyArray.push(personList[1]));
    } else if (personList[2].role === "Student") {
      console.log(emptyArray.push(personList[2]));
    } else if (personList[3].role === "Student") {
      console.log(emptyArray.push(personList[3]));
    } else {
      console.log(emptyArray);
    }
  } else {
    if (personList[0].role === "Teacher") {
      console.log(emptyArray.push(personList[0]));
    } else if (personList[1].role === "Teacher") {
      console.log(emptyArray.push(personList[1]));
    } else if (personList[2].role === "Teacher") {
      console.log(emptyArray.push(personList[2]));
    } else if (personList[3].role === "Teacher") {
      console.log(emptyArray.push(personList[3]));
    } else {
      console.log(emptyArray);
    }
  }

  // if (personList[0].role === "Student") {
  //   emptyArray.push(personList[0]);
  // } else if (personList[1].role === "Student") {
  //   emptyArray.push(personList[1]);
  // } else if (personList[2].role === "Student") {
  //   emptyArray.push(personList[2]);
  // } else if (personList[3].role === "Student") {
  //   emptyArray.push(personList[3]);
  // } else {
  //   emptyArray;
  // }

  // for (let i = 0; i < personList.length; i++) {
  //   let person = personList[i];
  //   if (personList.role === "Teacher") {
  //     emptyArray.push(person);
  //   }
  // }
  return emptyArray;
}

//arrayTeacher = [ {name : , role:,}, {name: john , role: teacher}]

// Do not remove lines below, it is for tests
module.exports = filteredRoles;
