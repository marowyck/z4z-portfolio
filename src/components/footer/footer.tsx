import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../footer/footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} © Z4Z - All rights reserved.</p>
                <div className="social-icons">
                    <a href="https://github.com/matheusnmto" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/matheus-nascimento-b97609279/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://www.instagram.com/matheusnmto/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
