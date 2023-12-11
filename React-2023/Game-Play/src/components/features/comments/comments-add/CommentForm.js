import { useState } from "react";

import { useForm } from "../../../core/hooks/useForm";

import { postComment } from "../../../core/services/data-services/dataService";
import { userCommentValidation } from "../commentValidation.service";
import { useAuthContext } from "../../../core/hooks/useAuthContext";

export default function CommentForm({ gameId, setAllComments }) {
    const [errors, setErrors] = useState({
        hasErrors: true,
        verifiedData: {},
        message: '',
    });
    const [serverErrorMsg, setServerErrorMsg] = useState('');
    const [formValues, onChangeHandler] = useForm({ comment: '' });
    const context = useAuthContext();

    // On Submit
    const onSubmitHandler = (event) => {
        event.preventDefault();
        // Verified user input
        const userCheck = userCommentValidation(formValues, setErrors);

        if (userCheck.hasErrors === false) {
            postComment({ gameId, comment: userCheck.verifiedData.comment }, context)
                .then(currentComment => {
                    setAllComments((oldComments) => [...oldComments, currentComment]);
                })
                .catch(errorMsgJsx => setServerErrorMsg(errorMsgJsx));
        }
    }

    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            {serverErrorMsg && serverErrorMsg}
            <form onSubmit={onSubmitHandler} className="form">
                <textarea
                    onChange={onChangeHandler}
                    value={formValues.comment}
                    name="comment"
                    placeholder="Comment......"
                    required
                    maxLength="200"
                    onBlur={() => userCommentValidation(formValues, setErrors)}
                ></textarea>
                {errors.message && <p>{errors.message}</p>}
                <input
                    className="btn submit"
                    type="submit"
                    value="Add Comment"
                    disabled={errors.hasErrors}
                />
            </form>
        </article>
    );
}