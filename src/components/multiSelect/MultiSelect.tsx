import React from "react";
import "./MultiSelect.css";

interface MultiSelectState {
    selectedItems: string[],
    isShowItems: boolean
}

interface MultiSelectProps {
    items: string[],
    selectedItems?: string[]
}

class MultiSelect extends React.Component<MultiSelectProps, MultiSelectState>{
    constructor(props: MultiSelectProps) {
        super(props);
        this.state = {
            selectedItems: [],
            isShowItems: false
        };
    }

    selectItem = (event: any):void => {
        this.setState((state) => {
            const selectedItems = state.selectedItems.includes(event.target.value) 
            ? this.deleteFromSelected(state, event)
            : this.addToSelected(state, event);
            return {
                selectedItems
            }
        });
        event.persist()
    };

    getAllOptions = ():JSX.Element[] => {
        return this.props.items.map(element => {
            return <li>
                <input value={element} key={element} onClick={this.selectItem} type="button"/>
                <span className={this.isSelected(element)}></span>
                </li>
        });
    };

    isSelected = (item: string): string => {
        return this.state.selectedItems.includes(item) ? "selected": "" ;
    }

    showItems = ():void => {
        this.setState({
            isShowItems: !this.state.isShowItems
        })
    };

    private addToSelected(state: Readonly<MultiSelectState>, event: any) {
        return state.selectedItems.concat(event.target.value);
    }

    private deleteFromSelected(state: Readonly<MultiSelectState>, event: any) {
        return state.selectedItems.filter(element => element !== event.target.value);
    }

    render() {
        return (
            <div className="MultiSelect">
                <div className="selects" onClick={this.showItems}>{this.state.selectedItems.join(", ")}</div>
                {this.state.isShowItems && <ul>{this.getAllOptions()}</ul>}
            </div>
        )
    }

}

export default MultiSelect;