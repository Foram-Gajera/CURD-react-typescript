import React, { useEffect, useState } from 'react'
import {Formik, Form} from 'formik';
import { formikProps } from '../interfaces/formikProps.interface';
import * as Yup from 'yup'; 
import FormikControl from '../formik-controls/FormikControl';
import User from '../interfaces/user.interface';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../redux/sagas/userSaga';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions/user';

const UserForm = ({control, type, name, label}: formikProps) => {

    const [user, setUser] = useState();
    const dispatch = useDispatch();
    const history = useHistory();

    interface ParamTypes {
        id: string
      }

    const {id} = useParams<ParamTypes>();
    console.log(id);

    const initialValues: User = {
        id: id?id:'',
        name: '',
        email: '',
        mobile_check: false,
        mobile: '',
        company: '',
    }

    const onSubmit = (values: User) => {
        console.log(values);
        dispatch(addUser(values));
        history.push('/');
    }

  const mobileRegExp = /^[6-9]\d{9}$/;

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is Required!'),
        email: Yup.string().email('Email is Invalid!').required('Email is Required!'),
        mobile_check: Yup.boolean(),
        mobile: Yup.string().when('mobile_check', {
            is: true,
            then: Yup.string().matches(mobileRegExp, "Phone number is not valid").required('Mobile no. is Required!')
        }),
        company: Yup.string().required('Company is Required!'),

    });

    useEffect(() => {
        axios
          .get(apiUrl + `users/${id}.json`)
          .then((res) => {
            setUser(res.data);
          })
          .then((err) => console.log(err));
      }, []);
    

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} enableReinitialize>
                {
                    (formik) => {
                        return (
                            <div>
                                <Form>
                                <h1 className="text-center text-info">
                  {user ? "Update" : "Add"} 
                  User
                </h1>
                <FormikControl
                control='input'
                label='Name'
                name="name"
                type='text'
                />
                  <FormikControl
                control='input'
                label='Email'
                name="email"
                type='text'
                />
                 <FormikControl
                control='input'
                label='Company'
                name="company"
                type='text'
                />

<FormikControl
                control='inputWithCheck'
                label='Mobile No.'
                name="mobile"
                />
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{ marginLeft: "30%", marginTop: "2%" }}
                  disabled={!formik.isValid}
                >
                    submit
                  {/* {user ? "Update" : "Add"} */}
                </button>

                                </Form>
                            </div>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default UserForm
