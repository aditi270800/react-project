import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModel from '../UI/ErrorModel'

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please Enter Valid Name and Age (non-empty values)'
            });
            return;
        }
        if(+enteredAge < 1){
            setError({
                title: 'Invalid Age',
                message: 'Please Enter Valid Age ( > 0)'
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        //console.log(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            <form onSubmit={addUserHandler} className={classes.input}>
            {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} />}
                <label htmlFor='username'>Username</label>
                <input type='text' id="username" value={enteredUsername} onChange={usernameChangeHandler} />
                <label htmlFor='age'>Age (Years)</label>
                <input type='number' id='age' value={enteredAge} onChange={ageChangeHandler} />
                <Button className="button" type='submit'>Add User</Button>          
            </form>
        </div>
        //<Card classname = {classes.input}>
        //</Card>
    )
}

export default AddUser
