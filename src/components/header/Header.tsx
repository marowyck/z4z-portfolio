import '../header/Header.css'
import Image from 'next/image'
import Logo from '../../../public/images/Z4Z-Logo.png'

export default function Header() {
    return (
        <div className="header">
            <Image src={Logo} alt={'Z4Z Logo'} width={125} height={55} className='logo' />
            <div className='navigation'>
                <div className="navigation">
                    <a href="#about"><h1 className="button">ABOUT ME</h1></a>
                    <a href="#technologies"><h1 className="button">TECHNOLOGIES</h1></a>
                    <a href="#projects"><h1 className="button">PROJECTS</h1></a>
                    <a href="#experiences"><h1 className="button">EXPERIENCES</h1></a>
                </div>

            </div>
            <div className="contact-button">
                <a href="#contact">
                    <span
                        className="💀"
                        data-content="📫"
                        data-hover-content="📪"
                        data-active-content="📬"
                    ></span>
                </a>
            </div>
        </div>
    )
}