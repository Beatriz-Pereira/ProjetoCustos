import styles from './Container.module.css'

function Container (propos){
    return(
        <div className= {`${styles.container} ${styles[propos.customClass]}`}>
            {propos.children}
        </div>
    )
}

export default Container