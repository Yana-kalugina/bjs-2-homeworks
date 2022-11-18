
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  
  //let student1 = new Student("Ivan", "male", 22);
  //let student2 = new Student("Masha", "female", 21);
  //let student3 = new Student("Dima", "male", 23);
  //let student4 = new Student("Dasha", "female", 20);
}

Student.prototype.setSubject = function (subjectName) {
  this.subjectName = subjectName;
}

Student.prototype.addMark = function (mark) {
  this.mark = mark;

  if(this.marks === undefined){ 
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (mark1,mark2,mark3, ...other) {
  this.subjectName = subjectName;
  if (this.marks === undefined) {
    this.marks = [mark1,mark2,mark3, ...other];
  } else {
    this.marks.push(mark1,mark2,mark3, ...other);
  }
};

//Student.prototype.getAverage = function () {
  //this.marks / addMarks = ;
//}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}