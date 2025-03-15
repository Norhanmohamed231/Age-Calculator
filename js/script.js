document.querySelector(".arrow").addEventListener("click", () => {
    let birthDay = parseInt(document.getElementById("day").value);
    let birthMonth = parseInt(document.getElementById("month").value);
    let birthYear = parseInt(document.getElementById("year").value);


    let birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    let currentDate = new Date();

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if(birthDay>32 || birthMonth>12 ||birthYear>2025){
        alert("enter avalid input")
        document.querySelector(".calc").style.display="none"
    }
    
    if (days < 0) {
        months--;
        let previousMonthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days += previousMonthDays;
    }

   
    if (months < 0) {
        years--;
        months += 12;
    }

   
    document.querySelector(".calc").innerHTML = `<h1><span class="birth">${years}</span> years </h1>
    <h1><span class="birth">${months}</span> months</h1>
    <h1> <span class="birth">${days}</span> days</h1>`;
});
