// expected '01.01.1994' format of birth date

export function calculateAge(birthDate) {
  const birth = birthDate.split('.');
  const birthYear = birth[2];
  const birthMonth = birth[1] - 1;
  const birthDay = birth[0];

  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();

  let correction = 0;
  if (todayMonth === birthMonth) {
    correction = todayDay - birthDay < 0 ? -1 : 0;
  } else {
    correction = todayMonth - birthMonth < 0 ? -1 : 0;
  }

  return todayYear - birthYear + correction;
}
