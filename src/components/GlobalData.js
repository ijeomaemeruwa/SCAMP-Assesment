import React from "react";

class GlobalData extends React.Component {

    render() {
        const {globalData, liveDate} = this.props;
        return(
            <div className="container">
            <h2>GLOBAL CASES</h2>
            <div className="row"> 
             <div className="newConfirmed">
             <h4>New Confirmed</h4>
             <p>{globalData.NewConfirmed}</p>
             <small>{new Date(liveDate).toDateString()}</small>
             </div>

             <div className="totalConfirmed">
             <h4>Total Confirmed</h4>
             <p>{globalData.TotalConfirmed}</p>
             <small>{new Date(liveDate).toDateString()}</small>
             </div>

             <div className="totalDeaths">
             <h4>Total Deaths</h4>
             <p>{globalData.TotalDeaths}</p>
             <small>{new Date(liveDate).toDateString()}</small>
             </div>

             <div className="totalRecovered">
             <h4>Total Recovered</h4>
             <p>{globalData.TotalRecovered}</p>
             <small>{new Date(liveDate).toDateString()}</small>
             </div>
            </div>
            </div>
        )
    }
}


export default GlobalData;