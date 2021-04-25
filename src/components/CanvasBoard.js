import React from 'react'
import styles from '../components/CanvasBoard.css'

function CanvasBoard(){
    return(
        <div>
            <canvas className={styles.canvas} id='canvas' />
        </div>
    )
}

export default CanvasBoard