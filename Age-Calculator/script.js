function calculateAge() {
  const birthdate = document.getElementById("birthdate").value;
  const result = document.getElementById("result");

  if (!birthdate) {
    result.innerHTML = "⚠️ Please select your birth date!";
    return;
  }

  const birth = new Date(birthdate);
  const today = new Date();

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  // Adjust for negative days/months
  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  result.innerHTML = `🎉 You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.`;
}

