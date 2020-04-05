import React from "react";
import "./Radio.css";

class Radio extends React.Component<{}, any>{

    render(): JSX.Element {
        return (
            <React.Fragment>
                <div>
            <input type="radio" name="gender" value="Male"/>
            <label htmlFor="Male">
            Male
            </label>
                </div>
                <div>
            <input type="radio" name="gender" value="Female"/>
            <label htmlFor="Female">
            Female
            </label>
                </div>
            </React.Fragment>
        )

    }

}

export default Radio;