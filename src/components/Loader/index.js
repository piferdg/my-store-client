import React from 'react'
import styles from './loader.module.scss'

const Loader = () => {
  return (
    //using the [] here is the same as dot notation, but it allows us to usr the - in 'lds-roller'. Otherwise we'd have to camelcase lds-roller in our scss file
    <div className={styles.container}>
      <div className={styles['lds-roller']}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader