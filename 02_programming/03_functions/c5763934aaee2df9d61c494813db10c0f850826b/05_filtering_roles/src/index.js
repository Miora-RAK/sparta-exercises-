function filteredRoles(personList,role = "Teacher"){

  console.log(personList);
  console.log(role);
  const studentList = personList.filter(personList => personList.role === "Student");
  const teachersList = personList.filter(personList => personList.role === "Teacher");
  const emptyArray = [{}];
  if (role === "Teacher"){
    console.log(emptyArray) ;
  }else {
    return studentList;
  }

  return teachersList;

}







//arrayTeacher = [ {name : , role:,}, {name: john , role: teacher}]

// Do not remove lines below, it is for tests
module.exports = filteredRoles;
