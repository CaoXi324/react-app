import React from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Radio from "../../components/radio/Radio";
import Select from "../../components/select/Select";
import MultiSelect from "../../components/multiSelect/MultiSelect";
import "./From.css";

interface FormState {
    country: string,
    city: string,
    roles: string[],
    techStack: string[],
}


class Form extends React.Component<{}, FormState> {
          state: FormState = {
            country: "",
            city: "",
            roles: ["Dev", "BA", "QA"],
            techStack: ["Java", "JS", "Mysql", "C++", "Python", "PHP"]
        }
     handleCity = (event: any): void => {
        this.setState({city: event})
};
     handleCountry = (event: any): void => {
        this.setState({country: event})
    };

     handleSubmit = (): void => {
        alert(this.state.country + this.state.city);
};

    render(): JSX.Element {
        return (
            <div className="FromWrapper">
            <form className="Form" onSubmit={this.handleSubmit}>
                <div>
                <span>Country：</span>
                <Input change={this.handleCountry}/>
                </div>
                <div>
                <span>City:</span>
                <Input change={this.handleCity}/>
                </div>
                <div className="RadioWrapper">
                    <span>Gender:</span>
                <Radio/>
                </div>
                <div className="SelectWrapper">
                    <span>Roles:</span>
                <Select items={this.state.roles}/>
                </div>
                <div className="MultiSelectWrapper">
                    <span>Tech Stack:</span>
                <MultiSelect items={this.state.techStack}/>
                </div>
                <Button/>
            </form>
            </div>

        )
    }
}

export default Form;