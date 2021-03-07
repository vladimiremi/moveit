import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';
export function Countdown () {
    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    //padStar recebe dois parâmetro, adiciona o segundo parâmetro no início caso não exista a quantidade especificada
    //split divide, no cado divide cada caractere, retorna um array passibilitando a desestruturação dos dois caracteres
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    function startCountDown() {
        setActive(true);
    }

    useEffect(() => {
        if (active && time > 0) {
            setTimeout( () => {
                setTime( time - 1 );
            }, 1000)
        }
    }, [active, time])

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>
            <button 
                type="button" 
                className={styles.startCountdownButton}
                onClick={startCountDown}
            >
                Iniciar um ciclo
            </button>
        </div>
    );
}