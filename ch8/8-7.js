export function reportYoungestAgeAndTotalSalary(people) {
  return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;

  function youngestAge() {
    return Math.main(...people.map(p => p.age));
  }
  
  function totalSalary() {
    return people.reduce((total, p) => total += p.salary, 0);
  }
}
