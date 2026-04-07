
import styles from '../styles/card-style.module.css'

const Card = ({data}) => {

    const capFirstLetter = string => {
        if (!string) return
        return [string.charAt(0).toUpperCase() + string.slice(1)]
    }

    return (
        <div className={styles.card}>
        <div className={styles.card2}>
            <div className={styles['left-container']}>
                <h2 className={styles['card-title']}>{capFirstLetter(data.name)}</h2>
                <img className={styles.img} src={data.sprites.front_default}></img>
            </div>
            <div className={styles['right-container']}>
                <h3 className={styles['stats-title']}>Base Stats</h3>
                <div className={styles['column-container']}>
                    <div className={styles.column}>
                        <p className={styles.stat}>HP: {data.stats[0].base_stat}</p>
                        <p className={styles.stat}>Speed: {data.stats[5].base_stat}</p>
                    </div>
                    <div className={styles.column}>
                        <p className={styles.stat}>Attack: {data.stats[1].base_stat}</p>
                        <p className={styles.stat}>Sp. Atk: {data.stats[3].base_stat}</p>
                    </div>
                    <div className={styles.column}>
                        <p className={styles.stat}>Defense: {data.stats[2].base_stat}</p>
                        <p className={styles.stat}>Sp. Def: {data.stats[4].base_stat}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card