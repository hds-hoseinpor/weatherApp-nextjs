import styles from './styleBtn.module.css'
const MainBtn =({label,click})=>{
    return <button className={styles.searchBtn} onClick={click}>{label}</button>
  
}

export default MainBtn;