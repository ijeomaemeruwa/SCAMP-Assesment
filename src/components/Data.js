import axios from 'axios';
import React, { Component } from 'react'
import GlobalData from '././GlobalData'
import Search from '././Search';

class Data extends Component {
    state = {
        global: [],
        countries: [],
        liveDate: null
    }

    async componentDidMount() {
        const response = await axios.get('https://api.covid19api.com/summary');
        console.log(response);
        this.setState({global: response.data.Global});
        this.setState({countries: response.data.Countries});
        this.setState({liveDate: response.data.Date});
    }

    render() {
        return (
            <div>
            <GlobalData globalData = {this.state.global} liveDate = {this.state.liveDate}/>
            <table>
            <thead>
            <tr>
            <th>COUNTRY</th>
            <th>NEW CONFIRMED</th>
            <th>TOTAL CONFIRMED</th>
            <th>TOTAL DEATHS</th>
            <th>TOTAL RECOVERED</th>
            </tr>
            </thead>
            <tbody>
            {this.state.countries.map(search => 
              <Search search = {search} key={search.Country}/>  
            )}
            </tbody>
            </table>
            </div>
        )
    }
}


export default Data;