import React from "react";
import '../styles/Contact.css';

function Contact() {
    return (
        <div class="container content-area">
            <div class="row">
                <div class="col-md-12">
                    <div class="contact">
                        <h2><a href="mailto:jbensus@gmail.com?Subject=HelloWorld" target="_top">jbensus@gmail.com</a></h2>
                        <div class="email-message">
                            <p class="mzero">Feel free to drop me a note!</p>
                            <p class="mzero">Thanks and have a great day!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
