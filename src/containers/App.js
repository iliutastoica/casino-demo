import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { games } from '../games';

class App extends Component {
    constructor() {
        super()
        this.state = {
            // robots: [],
            searchfield: '',
            games: []
        }
    }
    componentWillMount() {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => { this.setState({ robots: users }) });
        this.setState({ games: games });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { games, searchfield } = this.state;
        const filteredGames = games.filter(game => {
            return game.title.toLowerCase().includes(searchfield.toLowerCase());
        });
        let vendors = games.map(game => {
            return game.vendorID.toLowerCase();
        });
        vendors = [...new Set(vendors)];
        console.log('vendors =', vendors);
        // let vendorslist = vendors.map(vendor => `<span class="pa1 bg-blue white no-underline mh1">` + vendor + `</span>`);
        // vendorslist = vendorslist.join().replace(/,/g, '');
        // console.log(vendorslist);
        return !games.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>Casino Demo</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    {/* <div className="vendors cf pa1" dangerouslySetInnerHTML={{ __html: vendorslist }}>
                    </div> */}
                    <Scroll>
                        <CardList games={filteredGames} />
                    </Scroll>
                </div>
            );
    }
}

export default App;