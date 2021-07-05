const data = document.querySelector(".data");

const sendBtn = document.querySelector("#btn");

const fieldName = document.getElementById("name");
const fieldRa = document.getElementById("ra");
const fieldSubject = document.getElementById("subject");
const fieldScore = document.getElementById("score");

const studentsList = [];

sendBtn.addEventListener("click", handleSubmit);

function handleObjectIterable() {
  data.innerHTML = "";
  studentsList.forEach((aluno) => {
    const newStudentRegister = document.createElement("ul");
    newStudentRegister.classList.add("data-item");
    for (let [key, value] of Object.entries(aluno)) {
      const newStudentInfo = document.createElement("li");
      newStudentInfo.innerText = value;
      newStudentRegister.appendChild(newStudentInfo);
      if (key === "score") {
        const studentStatus = document.createElement("li");
        if (value === "F" || value === "D") {
          console.log(value);
          studentStatus.innerText = "X";
          studentStatus.style.color = "red";
        } else {
          studentStatus.innerText = "Ok";
          studentStatus.style.color = "green";
        }
        newStudentRegister.appendChild(studentStatus);
      }
    }
    data.appendChild(newStudentRegister);
  });
}

function handleScore(studentObj) {
  if (studentObj.score >= 0 && studentObj.score < 60) {
    studentObj.score = "F";
  } else if (studentObj.score >= 60 && studentObj.score <= 69) {
    studentObj.score = "D";
  } else if (studentObj.score >= 70 && studentObj.score <= 79) {
    studentObj.score = "C";
  } else if (studentObj.score >= 80 && studentObj.score <= 89) {
    studentObj.score = "B";
  } else if (studentObj.score >= 90 && studentObj.score <= 100) {
    studentObj.score = "A";
  } else {
    window.alert("Nota inválida! Digite um valor de 0 a 100");
  }
}

function handleSubmit(event) {
  if (
    !fieldName.value ||
    !fieldRa.value ||
    !fieldSubject.value ||
    !fieldScore.value
  ) {
    return;
  }
  event.preventDefault();
  const studentObj = {
    name: fieldName.value,
    ra: fieldRa.value,
    subject: fieldSubject.value,
    score: fieldScore.value,
  };
  handleScore(studentObj);
  studentsList.push(studentObj);
  handleRender();
}

function handleRender() {
  fieldName.value = "";
  fieldRa.value = "";
  fieldSubject.value = "";
  fieldScore.value = "";
  fieldName.focus();
  handleObjectIterable();
}
