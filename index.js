let store = {customers: [], employers: [], meals: [], deliveries: []}

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
    return store.customers.filter(customer => {
      return customer.employerId === this.id
    })
  }

  deliveries() {
    return store.deliveries.filter(delivery => {
      return delivery.employerId === this.id
    })
  }

  meals() {
    return store.meals.filter(meal => {
      return meal.employerId === this.id
    })
  }

  mealTotals() {

  }
}

let mealId = 0;
class Meal {
  constructor(title, price) {
    this.title = title;
    this.price = price;
    this.id = ++mealId;
    store.meals.push(this);
  }

  deliveries() {
    return store.deliveries.filter(delivery => {
      return delivery.mealId === this.id
    })
  }

  customers() {
    return store.customers.filter(customer => {
      return customer.mealId === this.id
    })
  }
}

let deliveryId = 0;
class Delivery {
  constructor(meal, customer) {
    this.meal = meal;
    this.customer = customer;
    this.id = ++deliveryId;
    store.deliveries.push(this);
    if(meal) {
      this.mealId = meal.id;
    }

    if(customer) {
      this.customerId = customer.id;
    }
  }

  setMeal() {
    this.mealId = meal.id
  }

  setCustomer() {
    this.customerId = customer.id;
  }

  meal() {
    return store.meals.find(function(meal){
      return meal.id === this.mealId
    })
  }

  customer() {
    return store.customers.find(function(customer){
      return customer.id === this.customerId
    })
  }
}
