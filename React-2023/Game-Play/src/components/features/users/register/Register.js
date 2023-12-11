import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Register.module.css';

import { useAuthContext } from '../../../core/hooks/useAuthContext';
import { userValidationService } from '../usersValidation.service';

export default function Register() {
    const [serverErrorMsg, setServerErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({
        hasErrors: true,
        verifiedData: {}
    });
    
    const navigate = useNavigate();
    const context = useAuthContext();

    const onSubmit = (e) => {
        e.preventDefault();


    };

    return (
        <section id="register-page" className="content auth">
            <form onSubmit={onSubmit} id="register" method="POST">
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                    />

                    <label htmlFor="rePassword">Confirm Password:</label>
                    <input
                        type="password"
                        name="rePassword"
                        id="rePassword"
                    />

                    <input
                        className="btn submit"
                        type="submit"
                        value="Register"
                    />

                    <p className="field">
                        <span>If you already have profile click <Link to="/users/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}