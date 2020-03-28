import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import "./From.css";

interface FormState {
    country: string,
    city: string
}

class Form extends React.Component<{}, FormState> {
     handleCity(event: any): void {
        this.setState({city: event})
};
     handleCountry(event: any): void {
        this.setState({country: event})
    };

     handleSubmit(): void {
        alert(this.state.country + this.state.city);
};

    render(): JSX.Element {
        return (
            <form className="Form" onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    国家：
                <Input change={this.handleCountry.bind(this)}/>
                </label>
                <br/>
                <label>
                    城市：
                <Input change={this.handleCity.bind(this)}/>
                </label>
                <br/>
                <Button/>
            </form>
        )
    }
}

export default Form;