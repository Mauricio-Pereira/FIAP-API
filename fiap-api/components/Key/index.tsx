import "./styles.css";
import React from "react";
import KeyProps from "./interface";

const Key: React.FC<KeyProps> = ({ campo, valor}) => {
    return (
        <div className="key">
        <label >{campo}:</label>
        <div>{valor}</div>  
        </div>
    );
}

export default Key;