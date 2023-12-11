import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuthContext } from "../../../core/hooks/useAuthContext";
import Loading from "../../../shared/loader/Loading";
import { useForm } from "../../../core/hooks/useForm";
import { userLogin } from "../../../core/services/user-services/userService";
import { userValidationService } from "../usersValidation.service";
import styles from "./Login.module.css";

export default function Login() {
    const [serverErrorMsg, setServerErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({
        hasErrors: true,
        verifiedData: {}
    });
    const [formValues, onChangeHandler] = useForm({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const context = useAuthContext();

    const onSubmit = (event) => {
        event.preventDefault();

        const userInputCheck = userValidationService(formValues, setErrors);
        if (userInputCheck.hasErrors === false) {
            setIsLoading(true);
            userLogin(userInputCheck.verifiedData, context)
                .then(userData => {
                    setIsLoading(false);
                    context.addUserSession(userData);
                    navigate('/games', { replace: true });
                })
                .catch(errorMsgJsx => {
                    setIsLoading(false);
                    setServerErrorMsg(errorMsgJsx);
                })
        }
    };

    return (
        <section id="login-page" className="auth">
            {
                isLoading
                    ? <Loading />
                    : <form id="login" onSubmit={onSubmit} method="POST">
                        {serverErrorMsg && serverErrorMsg}
                        <div className="container">
                            <div className="brand-logo"></div>
                            <h1>Login</h1>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Sokka@gmail.com"
                                value={formValues.email}
                                onChange={(e) => onChangeHandler(e, userValidationService, setErrors)}
                            />
                            {
                                formValues.email.length > 0
                                    ? errors.email
                                        ? <p className={styles.error}>{errors.email}</p>
                                        : <p className={styles.valid}>The field is correct</p>
                                    : null
                            }

                            <label htmlFor="login-pass">Password:</label>
                            <input
                                type="password"
                                id="login-password"
                                name="password"
                                value={formValues.password}
                                onChange={(e) => onChangeHandler(e, userValidationService, setErrors)}
                            />
                            {
                                formValues.password.length > 0
                                    ? errors.password
                                        ? <p className={styles.error}>{errors.password}</p>
                                        : <p className={styles.valid}>The field is correct</p>
                                    : null
                            }

                            <input
                                type="submit"
                                className="btn submit"
                                value="Login"
                                disabled={errors.hasErrors}
                            />
                            <p className="field">
                                <span>If you don't have profile click <Link to="/users/register">here</Link></span>
                            </p>
                        </div>

                    </form>
            }
        </section>
    );
}