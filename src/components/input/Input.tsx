import React from "react";
import "./Input.css";

interface InputProps {
    change: Function
}
function Input( Props: InputProps): JSX.Element {
    const handleChange: (event: any) => void =
        function (event: any): void {
            Props.change(event.target.value)
        };

    return (
        <input onChange={handleChange}/>
    )

}

export default Input;