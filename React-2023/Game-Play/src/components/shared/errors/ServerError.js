import styles from "./ServerError.module.css";

export default function ServerError({ message }) {

    return (
        <div id={styles.box}  >
            <div className={styles['error-container']}>
                <p> {message}</ p>
            </div>
        </div>
    );
}