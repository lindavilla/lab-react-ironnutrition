import React, {Component} from 'react';
import FoodComponent from './components/Food';
import foods from './data/foods.json';


// Tailwind is not showing in browser, so I'm not sure what part of it I haven't implemented correctly.

// My handleOnChange function is causing my app to crash, but I'm not sure what is missing? 

//I'd appreciate any feedback so I can get this to look more decent and get the functions in! 


class App extends Component {
state = {
  searchInput: '',
  listOfFoods: [...foods],
  selectedFoods : [],
};
handleOnChange = (event) => {
  this.setState({
    searchInput: event.target.value,
  });
};
handleAddFood = (food) => {
  const {selectedFoods} = this.state;
  const selected = [...selectedFoods];
  const index = selectedFoods.findIndex((ele) => ele.name === food.name )
  if (index === -1) {
    selected.push(food);
      this.setState({
        selectedFoods: selected,
      });
  } else {
    selected[index].totalCalories = food.calories + selected[index].calories;
    selected[index].quantity = food.quantity + selected[index].quantity;
    this.setState({
      selectedFoods: selected,
    });
  };
  selected.push(food);
  this.setState ({
    selectedFoods: selected,
  });
};
  render () {
    const {listOfFoods, searchInput, selectedFoods} = this.state;
    const resultOfFilter = listOfFoods.filter((food) =>
      food.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    const total = this.state.selectedFoods.reduce((acc,ele) => ele.totalCalories + acc, 0 )
    return (
      <div className= 'container mx-auto px-4'>
        <h1>Iron Nutrition</h1>
        <div className='py-4'>
          <input
          type='text'
          value = {searchInput}
          onChange={this.handleOnChange}
          className='rounded-md border border-grey-600 py-2 px-3 w-full'
          placeholder='search'
          />
        </div>
        <div className='flex flex-col space-y-4'>
        {resultOfFilter.map((food,index) => {
        return (
         <FoodComponent
          key = {index}
          name={food.name}
          qty = {food.quantity}
          calories = {food.calories}
          img = {food.image}
          onAddCart = {this.handleAddFood(food)}
          />
        );
      })}
      <div className='w-1/2'>
      <h2>Today’s Food</h2>
      {this.state.selectedFoods.map((food) => {
        return
        <div key = {food.index}> {
          food.name}
          {food.qty}
          {food.totalCalories} cal
          </div>
      })}
      {<div>total: {total}</div>}
          </div>
        </div>
      </div>
    );
  }
}
export default App;