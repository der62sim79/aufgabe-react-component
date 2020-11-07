import React, { Component } from "react";
import styles from './SuperButton.module.css'

export default class SuperButton extends Component{
    render(){
        return (
        <div>
            <button className={styles.btn}>Drück mich</button>
        </div>
        )
    }
}