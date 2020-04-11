import * as React from "react";
import "./Select.css";

interface SelectState {
    selectedValue: string;
    isOpenBox: boolean;
}

type SelectProps = {
    items: string[];
    selectProvice?: Function;
}

class Select extends React.Component<SelectProps, SelectState> {
    constructor(props: SelectProps) {
        super(props);

        this.state = {
            selectedValue: "",
            isOpenBox: false,
        }
    }


    openBox = (): void => {
        this.setState({
            isOpenBox: true
        })
    };

    selectItem = (event: any): void => {
        this.setState({
            selectedValue: event.target.value,
            isOpenBox: false
        });
        this.props.selectProvice && this.props.selectProvice(event.target.value);
    };

    showAllOptions = (): JSX.Element[] => {
       return this.props.items.map(element => {
            return <li><input value={element} key={element} onClick={this.selectItem} type="button"/></li>
        })
    };

    render(): JSX.Element {

        return (
         <div className="Select">
             <div onClick={this.openBox} className="selectedItem">{this.state.selectedValue}</div>
             {this.state.isOpenBox&&<ul>{this.showAllOptions()}</ul>}
         </div>
        )
    }
}

export default Select;