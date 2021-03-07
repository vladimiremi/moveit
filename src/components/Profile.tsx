import styles from '../styles/components/Profile.module.css';

export function Profile () {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/vladimiremi.png" alt=""/>
            <div>
                <strong>Vladimir Costa</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 11
                </p>
            </div>
        </div>
    )
}