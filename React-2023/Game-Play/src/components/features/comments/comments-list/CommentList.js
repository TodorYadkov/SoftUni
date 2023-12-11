export default function CommentList({ allComments }) {

    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            {
                allComments.length > 0
                    ? <ul>
                        {allComments.map(c => {
                            return (
                                <li key={c._id} className="comment">
                                    <p>Content: {c.comment}</p>
                                </li>
                            );
                        })}
                    </ul>

                    : <p className="no-comment">No comments.</p>
            }

        </div>
    );
}