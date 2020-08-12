import React, { Component } from 'react';

class Search extends Component {
    render() {
    const {search} = this.props;

    return (
    <tr>
    <td>{search.Country}</td>
    <td>{search.NewConfirmed}</td>
    <td>{search.TotalConfirmed}</td>
    <td>{search.TotalDeaths}</td>
    <td>{search.TotalRecovered}</td>
    </tr>
    )
    }
}


export default Search;
