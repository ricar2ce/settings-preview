import React, {useState} from 'react';
import RadioColor from "./RadioColor";

const RadioColorGroup = React.forwardRef(({name, onChange, colors, initialValue}, ref) => {
    const [selected, setSelected] = useState(initialValue);

    const listOptions = colors.map((color) =>
        <RadioColor
            name={name}
            key={color}
            value={color}
            selected={selected}
            onChange={setSelected}
        />
    )

    const handleChange = (event) => {
        this.setState(event.target.value);
    }

    return (
        <div className="radio-color-group" ref={ref}>
            {listOptions}
        </div>
    );
})

RadioColorGroup.defaultProps = {
    initialValue: "#48B5FE",
    colors: ["#39B0FF", "#04B58B", "#3E9C4B", "#B6BC00", "#E59100", "#E55C00", "#EE1F50", "#D6198A", "#B321F1", "#48B5FE"]
}

export default RadioColorGroup;