import React from 'react'
import { formikProps } from '../interfaces/formikProps.interface'
import Input from './Input';
import InputWithCheck from './InputWithCheck';

const FormikControl = (props: formikProps) => {
    const {control, ...rest} = props;
   switch(control){
    case "input":
        return <Input {...rest} />

        case "inputWithCheck":
            return <InputWithCheck {...rest} />

    default:
        return null;
   }
   
}

export default FormikControl
