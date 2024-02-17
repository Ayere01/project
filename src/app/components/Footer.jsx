import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className= {`h-[80vh] bg-gray-200 ${styles.footer}`}>

        <div className= "flex items-start">

            <section>
                <h2>Navigate</h2>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/new_in">New In</Link>
                    </li>
                    <li>
                        <Link href="/store_locator">Store Locator</Link>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Shop</h2>
                <ul>
                    <li>
                        <Link href="/">By Activity</Link>
                    </li>
                    <li>
                        <Link href="/women">Woman</Link>
                    </li>
                    <li>
                        <Link href="/men">Men</Link>
                    </li>
                    <li>
                        <Link href="/rucksacks">Rucksacks</Link>
                    </li>
                    <li>
                        <Link href="/footwear">Footwear</Link>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Account</h2>
                <ul>
                    <li>
                        <Link href="/">Log in</Link>
                    </li>
                    <li>
                        <Link href="/ncreate_account">Create Account</Link>
                    </li>
                    <li>
                        <Link href="/license&assets">License & Assets</Link>
                    </li>
                    <li>
                        <Link href="/styleguide">Styleguide</Link>
                    </li>
                    <li>
                        <Link href="/changelog">Changelog</Link>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Care</h2>
                <ul>
                    <li>
                        <Link href="/">Delivery</Link>
                    </li>
                    <li>
                        <Link href="/return">Returns</Link>
                    </li>
                    <li>
                        <Link href="/size_guide">Size Guide</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Subscribe</h2>
                <p>
                Join our newsletter and get vouchers and exclusive deals straight to your inbox.
                </p> 
                <form id="email-form" name="email-form"><input type="email" placeholder="enter your email"/><button>SUBSCRIBE</button></form>
            </section>
        </div>
        <div className='flex flex-row justify-end gap-2'>
            <a href="https://facebook.com/" target='blank'><FaFacebookF/></a>
            <a href="https://instagram.com/" target='blank'><FaInstagram/></a>
            <a href="https://twitter.com/" target='blank'><FaTwitter/></a>
            <a href="https://www.linkedin.com/" target='blank'><FaLinkedin/></a>
            <a href="https://www.youtube.com/" target='blank'><FaYoutube/></a>
        </div>
    </footer>
  )
}
