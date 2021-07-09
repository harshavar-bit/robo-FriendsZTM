import React, { Component } from 'react';
import './App.css'
import Scroll from '../components/Scroll';
import CardList  from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';

class App extends Component  {
    constructor () {
        super();
        this.state = {
            robots : [],
            searchfield : '',
        }
    }

    componentDidMount () {
        //for the sake of updating robots with api
        fetch('https://mysterious-oasis-81751.herokuapp.com/https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({robots : users})})
        // console.log("componentDidMount");
    }

    onSearchChange = (event) => {
        // console.log(event.target.value);
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        // console.log("render");
        // console.log(filteredRobots) 
        //replaced if else with ? : respectively
        return !this.state.robots.length ? (
                <div className='loaderss'>
                </div>
            ): // ":" acts as else statement when "!" if statement part fails.
                (
                <div className='tc'>
                    <h1 className='f1 pa3 ma0'>ROBO FRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            ); 
    }
}

export default App;