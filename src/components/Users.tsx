import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { addUser, getUsers } from '../redux/actions/user';
import { AppState } from '../redux/store';
import Card from './Card';


const Users = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const users = useSelector((state: AppState) => state.users);
    const loading = useSelector((state: AppState) => state.loading);
    const error = useSelector((state: AppState) => state.error);
  
    console.log(users);

    const HandleAddUser = () => {
      history.push('/user');
    }
  
    useEffect(() => {
      dispatch(getUsers());
    }, []);
    return (
        <div>
        <div
          style={{
            marginLeft: "20%",
            width: "60%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="h1 text-info">Users List</div>
          <div>
            <button className="btn btn-primary" onClick={HandleAddUser}>
              Add User
            </button>
          </div>
        </div>
  
        {loading && <p className="text-center">Loading......</p>}
  
        {users.length > 0 &&
          users.map((user) =>
            user !== null ? <Card key={user.id} {...user} /> : null
          )}
        {users.length === 0 && <p>No users avaliable!</p>}
        {error && !loading && <p>{error}</p>}
      </div>
    )
}

export default Users
