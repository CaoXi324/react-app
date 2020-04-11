import React from "react";
import data from "../../../node_modules/china-area-data/data.json";
import Select from "../select/Select";
import "./DynamicDropdown.css";

interface DynamicDropdownState {
    allProvices: any;
    provice: string;
    city: string;
}
class DynamicDropdown extends React.Component<{}, DynamicDropdownState> {
    state: DynamicDropdownState = {
        allProvices: data[86],
        provice: "",
        city: ""
    }

    getAllProvices = (): string[] => {
        return Object.values(this.state.allProvices);
    }

    getCities = (): any  => {
        const allProvices: object = this.state.allProvices;
        const proviceIndex = Object.values(allProvices).indexOf(this.state.provice);
        const proviceCode: any= Object.keys(allProvices)[proviceIndex];
        const proviceCodeIndex = Object.keys(data).indexOf(proviceCode);
        const citys = Object.values(data)[proviceCodeIndex+1];
        console.log(Object.values(citys), '----------all data');
        
         return Object.values(citys);
    }

    selectProvice = (value: any): void => {
        this.setState(
            {
                provice: value
            }
        );
    }

    render() {
        return (
            <React.Fragment>
            <div className="SelectWrapper">
                <span>Provice:</span>
                <Select items={this.getAllProvices()} selectProvice={this.selectProvice}/>
            </div>
            <div className="SelectWrapper">
                <span>City:</span>
                <Select items={this.getCities()}/>
            </div>
            </React.Fragment>
        )
    }
}

export default DynamicDropdown;