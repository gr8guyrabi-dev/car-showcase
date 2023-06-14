import Link from 'next/link'
import Image from 'next/image'

import { footerLinks } from '@/constants'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__links-container">
                <div className="footer__rights-reserved">
                    <Image 
                        src="/logo.svg"
                        alt="logo"
                        className="object-contain"
                        width={118}
                        height={18}
                    />
                    <p className="text-base text-gray-700">
                        Carhub 2023 <br />
                        All rights reserved &copy;
                    </p>
                </div>
                <div className="footer__links">
                    {
                        footerLinks.map((footerLink, index) => (
                            <div key={`${footerLink.title}_${index}`} className="footer__link">
                                <h3 className="font-bold">{footerLink.title}</h3>
                                {
                                    footerLink?.links.map((link, index) => (
                                        <Link key={`${link.title}_${index}`}
                                            href={link.url}
                                            className="text-gray-500"
                                        >
                                            {link.title}
                                        </Link>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="footer__copyrights">
                <p>
                    @2023 CarHub. All rights Reserved &copy;
                </p>
                <div className="footer__copyrights-link">
                    <Link
                        href="/"
                        className="text-gray-500"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/"
                        className="text-gray-500"
                    >
                        Terms of Use
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer