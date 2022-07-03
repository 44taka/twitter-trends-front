import React from 'react'
import Image from 'next/image'


export default function NavBar() {
    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                <Image 
                    src="https://bulma.io/images/bulma-logo-white.png"
                    alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
                    width={112}
                    height={28}
                />
                </a>
            </div>
        </nav>
    )
}
