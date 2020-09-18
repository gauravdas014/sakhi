import React from "react";

export default function Input(props) {
    const { label, type, placeholder, onChange } = props;
    return (
        <div className="form__element-container">
          <label className="form__label required">{label}</label>
          <input className="form__input-field" type={type} placeholder={placeholder} onChange={onChange} />
        </div>       
    );
}