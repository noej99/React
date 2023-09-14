import React, { useState } from "react";

const NewInput = () => {
  const [student, setStudent] = useState({ n: "", a: "" });
  const changeStudentInfo = (e) => {
    alert(e.target.name); // input name -> "n"
    alert(e.target.value); // input에 쓴 내용 -> "홍길동"
    //                                "n" : "홍길동" - x
    //                                n : "홍길동"
    const newStudent = {...student, [e.target.name]:e.target.value };
    setStudent(newStudent);
  };
  return (
    <div>
      이름 : <input name="n" onKeyUp={changeStudentInfo} />
      <p />
      나이 : <input name="a" onKeyUp={changeStudentInfo}/>
      <p />
      <h1>
        {student.n} {student.a}
      </h1>
    </div>
  );
};

export default NewInput;
