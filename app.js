let menu = {
  _courses: {
    apperitizers: [],
    mains: [],
    desserts: []
  },
  get apperitizers(){
    return this._course.apperitizers;
  },
  get mains(){
    return this._course.mains;
  },
  get desserts(){
    return this._course.desserts;
  },

  set appetitizers(apperitizers) {
    this._course.apperitizers = apperitizers;
  },
  set mains(mains) {
    this._course.mains = mains;
  },
  set desserts(desserts) {
    this._course.desserts = desserts;
  }, 
  get courses(){
    return {
      apperitizers: this.apperitizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    let rand = Math.floor(Math.random() * dishes.length);
    return dishes[rand];
  },
  generateRandomMeal() {
    const apperitizers = this.getRandomDishFromCourse('apperitizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const total = apperitizers.price + mains.price + desserts.price;

    return `Your meal is ${apperitizers.name}, ${mains.name}, ${desserts.name}. The price is ${total}.`
  }
};

menu.addDishToCourse('mains', 'Fish', 10.25);
menu.addDishToCourse('mains', 'Chicken', 12.25);
menu.addDishToCourse('mains', 'Veg', 4.25);

menu.addDishToCourse('apperitizers', 'Salad', 4.25);
menu.addDishToCourse('apperitizers', 'Chiken Salad', 15.25);
menu.addDishToCourse('apperitizers', 'Fish Salad', 3.25);

menu.addDishToCourse('desserts', 'Chocolate', 6.25);
menu.addDishToCourse('desserts', 'Candies', 4.25);
menu.addDishToCourse('desserts', 'Fruits', 3.25);

const meal = menu.generateRandomMeal();
console.log(meal)

