import React from 'react';
import classes from "./Footer.module.css";

const  Footer = () => {
    return (
        <footer className={classes.footer}>
            <h2 className={classes.footer_title}>С уважением. frontend-junior Разина Анна</h2>
            <address className={classes.address}>
                <div className={classes.info}>
                    <a target="_blank" className={classes.telephone} href="tel:+79198187461">+7-4-4-4-4-44-44-44</a>
                    <a className={classes.email} href="mailto:Vega_b@mail.ru">электронная почта</a>
                </div>
                <span className={classes.location}>Тольятти</span>
            </address>
        </footer>
    );
  }
  
  export default Footer;