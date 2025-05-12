import '../about/About.css'
import Image from 'next/image'
import Formiga from '../../../public/images/About-me-Logo.png'

export default function About() {
    return (
        <div className='about' style={{ height: '100vh' }} id='about'>
            <div className='text'>
                <h1>ABOUT ME</h1>
                <div className='container-text'>
                    <h3>Hello, my name is <span>Matheus Nascimento</span> and I'm passionate about development.</h3>
                    <h3>I'm currently studying Information Systems at the State University of Minas Gerais.</h3>
                    <h3>My greatest talent is developing games, but my curiosity doesn't stop there, 'cause my focus is on <span>Backend Development</span>.</h3>
                    <h3>I love exploring new places and I never tire of learning.</h3>
                    <h3>My main technologies are <span>Nodejs, C#, GML (Game Maker Language), Java and Golang</span>, as well as expanding my knowledge of <span>Nextjs</span>.</h3>
                    <h3>If you're curious about me, feel free to download my CV</h3>
                </div>
                <div className="box-button">
                    <a href="https://drive.google.com/uc?export=download&id=1eZvdQbQmZnHtCBuY_Odt5RUG2rPVcftp"><div className="button"><span>DOWNLOAD CV</span></div></a>
                </div>
            </div>
            <Image src={Formiga} alt='Matheus Nascimento' className='formiga' />
        </div>
    )
}