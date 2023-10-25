export default function Movie(props) {
    return (
        <article>
            <h3>{props.title}</h3>
            <p>{props.year}</p>
            <ul>
                <li>{props.cast[0]}</li>
                <li>{props.cast[1]}</li>
            </ul>
        </article>
    );
}