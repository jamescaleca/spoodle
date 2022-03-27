import React from "react"

export default function Footer() {
    return (
        <>
            <footer>
                <ul class="footer-social">
                    <a href="https://www.facebook.com/">
                        <img alt="facebook-footer "id="facebook-footer" src="../assets/Facebook.svg" />
                    </a>
                    <a href="https://www.twitter.com/">
                        <img alt="twitter-footer" id="twitter-footer" src="../assets/twitter.jpg" />
                    </a>                
                    <a href="https://www.instagram.com/">
                        <img alt="insta-footer" id="insta-footer" src="../assets/instagram.png" />
                    </a>
                    <li id="phone-number-footer">+1 (555) 555-5555</li>
                    <li>
                        <ul id="address-footer">
                            <li>555 Spoodle Way</li>
                            <li>San Diego, CA 90127</li>
                        </ul>
                    </li>
                </ul>
                Copyright &copy; Spoodle 2021
            </footer>
        </>
    )
}