import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import User from '../interfaces/user.interface';
import { deleteUser } from '../redux/actions/user';

const Card: React.FC<User> = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteRecord = (id: string) => {
        dispatch(deleteUser(id));
    }
    const updateRecord = (id: string) => {
      history.push(`/user/${id}`)
      // dispatch(deleteUser(id));
  }

    return (
        <div
      className="card"
      style={{
        width: "60%",
        marginLeft: "20%",
      }}
    >
      <div className="card-body" style={{ display: "flex",
        justifyContent: "space-between",}}>
          <div>
          <h3 className="card-title">{props.name}</h3>
        <p className="card-text">{props.email}</p>

        <h6>
          {props.mobile
            ? props.mobile
            : "Mobile no. is not added"}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">{props.company}</h6>
          </div>
        
        <div style={{ textAlign: "center" }}>
        <button
          className="btn btn-success"
          onClick={() => updateRecord(props.id? props.id:'')}
        >
          Update
        </button>
        <br />

        <button
          className="btn btn-danger"
          style={{ marginTop: "10%" }}
          onClick={() => deleteRecord(props.id?props.id:'')}
        >
          Delete
        </button>
      </div>
      </div>
     
    </div>
    )
}

export default Card


