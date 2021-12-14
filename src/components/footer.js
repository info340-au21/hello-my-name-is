import React from 'react';

export function Footer() {
    return (
        <footer className="footer-flexbox">
            <p><a href="mailto:hello_my_name_is@gmail.com"><span className="material-icons top-padded">email</span> hello_my_name_is@gmail.com</a></p>
            <p><a href="tel:206-512-9261"><span className="material-icons">phone</span> 555-123-4567</a></p>
            <p>&copy; Hello My Name Is</p>
        </footer>
    )
}