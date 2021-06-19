import React, {Component} from "react";
import Food from "./components/Food";
import foods from './data/foods.json'

class App extends Component {
state = {
  searchInput: '',
  foods: [...foods],
  selectedFood : [],
};

handleOnChange = (event) => {
  this.setState({
    searchInput: event.target.value,
  });
};

handleAddFood = () => {
  const {selectedFoods} = this.state;
  const selected = [...selectedFoods];

    const index = selectedFoods.findIndex((ele) => ele.name === food.name )
    
    if (index === -1) {
      selected.push(food);
      this.setState({
        selectedFoods : selected,
      });
    } else {
  selected[index].totalCalories = food.totalCalories + selected[index].totalCalories
  selected[index].qty = food.qty + selected[index].qty
  this.setState({
    selectedFoods: selected,
  });
};

  selected.push(food);
  this.setState ({
    selectedFoods : selected,
  });
};

  render () {

    const {foods, searchInput} = this.state;
    const resultOfFilter = foods.filter((food) => 
      food.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    const total = selectedFoods.reduce((acc,ele) => ele.totalCalories + acc, 0 )

    return (

      <div className="container mx-auto px-4">
        <h1>Iron Nutrition</h1>
        <div className="py-4">
          <input 
          type="text" 
          value = {searchInput}
          onChange={this.handleOnChange}
          className="rounded-md border border-grey-600 py-2 px-3 w-full" 
          placeholder="search"

          />
        
        </div>
        <div className="flex flex-col space-y-4">
        {resultOfFilter.map((food,index) => {
        return (
         <Food 
          key = {index}
          name={food.name} 
          qty = {food.quantity} 
          calories = {food.calories} 
          img = {food.image}
          onAddCart = {this.handleAddFood}

          />
        );
      })}
      <div className="w-1/2"> 
      <h2>Today's Food</h2>
      {selectedFood.map((food) => {
        return 
        <div key = {index}> {
          food.name}
          {food.qty}
          {food.totalCalories} cal
          </div>
      })}
      <div>total: {total}</div>
          </div>
        </div>
      </div>
      
      
    );
  }
}


export default App;

