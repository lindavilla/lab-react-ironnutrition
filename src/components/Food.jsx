import {Component} from 'react';

class Food extends Component {
    state = {
        qty: 0,
    };

    handleClick = () => {
        const {name, calories} = this.props;
        const {qty} =this.state;

        if (qty !== 0) {
            this.props.onAddCart ( {
            name,
            totalCalories: qty * calories,
            qty: parseInt(qty),
            });

        }
    }


    handleInput = (event) => {
        this.setState({
            qty: parseInt(event.target.value),
        });
    };

    render () {
        const{name, img, calories} = this.props;
        const {qty} = this.state;

        return (
            <div className = 'border border-black-400 shadow-md flex rounded-md h-16 z-10'>
            <div className= "w-16">
            <img  className = "w-12" src= {img} alt=''/>
            </div>
            <div className="flex-grow px-4 py-3">
                <h2>{name}</h2>
                <h3 className="text-grey-400">{calories} cal</h3>
            </div>


            <input 
            className="w-10"
            type="number" 
            value = {qty} 
            value={qty}
            onChange={this.handleInput}
            min = {0}
            />
            <button 
            className="w-8 bg-blue-700 text-white" 
            onClick = {this.handleClick}
            >
            +
            </button>

            </div>
        );
    }
}

export default Food;
