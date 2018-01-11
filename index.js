let store ={ customers: [], employers: [] };
let customerId = 0;

class Customer {

  constructor(name, employer) {
    this.name = name;
    this.employer = employer;
    this.id = ++customerId;
    if(employer) {
      this.employerId = employer.id;
    }
    store.customers.push(this);
  }

  setEmployer() {
    this.employerId = employer.id
  }

  meals() {

  }

  deliveries() {

  }

  totalSpent() {

  }

}
let employerId = 0;
class Employer {
  constructor(name) {
    this.name = name;
    this.id = ++employerId;
    store.employers.push(this);
  }


  employees() {
    
  }

  deliveries() {
    
  }

  meals() {
    
  }

  mealTotals() {
    
  }
  
}

class Meal() {
  
}