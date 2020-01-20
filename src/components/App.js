import React, { Component } from 'react';
import D3Chart from './D3Chart';
import MyReactChart from './MyReactChart';
import ApexChart from './ApexChart';
import { CsvToHtmlTable } from 'react-csv-to-table';

class App extends Component{

    render(){

        const tableData = `
        "START_ID","TYPE","END_ID","link","start_date","end_date","sourceID","valid_until"
        "85004927","registered_address","88000379","registered address","","","Paradise Papers - Aruba corporate registry","Aruba corporate registry data is current through 2016"
        "85004928","registered_address","88016409","registered address","","","Paradise Papers - Aruba corporate registry","Aruba corporate registry data is current through 2016"
        "85004929","registered_address","88005855","registered address","","","Paradise Papers - Aruba corporate registry","Aruba corporate registry data is current through 2016"
        "85004929","connected_to","85008101","connected to","","","Paradise Papers - Aruba corporate registry","Aruba corporate registry data is current through 2016"
        "85004929","connected_to","85021444","connected to","","","Paradise Papers - Aruba corporate registry","Aruba corporate registry data is current through 2016"
        "85004930","registered_address","88000976","registered address","","","Paradise Papers - Aruba corporate registry","Aruba corporate registry data is current through 2016"
        "85008431","registered_address","88004643","registered address","","","Paradise Papers - Aruba corporate registry","Aruba corporate registry data is current through 2016"
        "85008432","registered_address","88004128","registered address","","","Paradise Papers - Aruba corporate registry","Aruba corporate registry data is current through 2016"
        "85008433","registered_address","88002050","registered address","","","Paradise Papers - Aruba corporate registry","Aruba corporate registry data is current through 2016"
        "85008434","registered_address","88012829","registered address","","","Paradise Papers - Aruba corporate registry","Aruba corporate registry data is current through 2016"
        "85008435","registered_address","88016590","registered address","","","Paradise Papers - Aruba corporate registry","Aruba corporate registry data is current through 2016"
        "85008436","registered_address","88004724","registered address","","","Paradise Papers - Aruba corporate registry","Aruba corporate registry data is current through 2016"
        "85008437","registered_address","88010962","registered address","","","Paradise Papers - Aruba corporate registry","Aruba corporate registry data is current through 2016"
        "85008438","registered_address","88006739","registered address","","","Paradise Papers - Aruba corporate registry","Aruba corporate registry data is current through 2016"
        "85008439","registered_address","88009645","registered address","","","Paradise Papers - Aruba corporate registry","Aruba corporate registry data is current through 2016"
        "85008440","registered_address","88011646","registered address","","","Paradise Papers - Aruba corporate registry","Aruba corporate registry data is current through 2016"
        "85008441","registered_address","88004810","registered address","","","Paradise Papers - Aruba corporate registry","Aruba corporate registry data is current through 2016"
        `;

        return(
            <div className="container">
                <h2>React Tabling</h2>
                <CsvToHtmlTable
                  data={tableData}
                  csvDelimiter=","
                />
                <ApexChart />
                <D3Chart />
                <MyReactChart />
            </div>
        );
    }
}

export default App;