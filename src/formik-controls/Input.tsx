import { ErrorMessage, Field } from 'formik';
import React from 'react'
import { formikProps } from '../interfaces/formikProps.interface'

const Input = (props: formikProps) => {
    const {label, name} = props;
    return (
        <div  style={{ width: "40%", marginLeft: "30%", fontSize: "20px" }}>
            <label htmlFor={name}>{label}</label>
            <Field label={label} name={name} className="form-control" />
            <div className="text-danger">
            <ErrorMessage name={name}/>
            </div>
        </div>
    )
}

export default Input
