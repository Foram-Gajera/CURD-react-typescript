import { ErrorMessage, Field, useFormikContext } from 'formik';
import React from 'react'
import { formikProps } from '../interfaces/formikProps.interface'

const InputWithCheck = (props: formikProps) => {
    const formikValues: any = useFormikContext();
    const {label, name} = props;
    return (
        <div>
            <div style={{ width: "40%", marginLeft: "30%", fontSize: "20px" }}>
        <label htmlFor={`${name}_check`}>{label}</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <Field type="checkbox" name={`${name}_check`} />
            </div>
          </div>
          <Field
            type="text"
            name={name}
            disabled={!formikValues.values.mobile_check}
            className="form-control"
          />
        </div>
        <div className="text-danger">
        <ErrorMessage name={name} />
        </div>
      </div>
        </div>
    )
}

export default InputWithCheck
