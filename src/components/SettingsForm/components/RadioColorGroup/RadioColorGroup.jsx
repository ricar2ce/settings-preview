import React, {useMemo, useState, useCallback} from 'react';
import RadioColor from "./RadioColor";

const RadioColorGroup =  ({value, onChange, colors}) => {
    const [selected, setSelected] = useState(value);

    const handleChange = useCallback(selected => {
        setSelected(selected);
        onChange(selected)
    },[onChange])

    const listOptions = useMemo(() => colors.map((color,index) => {
        return <RadioColor
                    key={index}
                    value={color}
                    selected={selected}
                    onChange={handleChange}
                />;
    }),[colors, selected, handleChange])

    return (
        <div className="radio-color-group">
            {listOptions}
        </div>
    );
}

RadioColorGroup.defaultProps = {
    value: "#48B5FE",
    colors: ["#39B0FF", "#04B58B", "#3E9C4B", "#B6BC00", "#E59100", "#E55C00", "#EE1F50", "#D6198A", "#B321F1", "#48B5FE"]
}

export default RadioColorGroup;