let defaultOwner = { firstName: '마틴', lastName: '파울러' };

export class Person {
  #firstName;
  #lastName;

  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }
}

export function getDefaultOwner() {
  return {...defaultOwner};
}
