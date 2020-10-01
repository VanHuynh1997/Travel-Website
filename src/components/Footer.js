import React from 'react'
import { Button } from './Button'
import './Footer.css'
function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-sub">
                <p className="footer-sub-heading">
                    Join the Advanture newslertter to reive our best vacation deal
                </p>
                <p className="footer-sub-text">
                    You can unsubcride at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input className="footer-input" name="email" type="email" placeholder="Your Email"/>
                        <Button buttonStyle="btn--outline">Subscride</Button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Footer
