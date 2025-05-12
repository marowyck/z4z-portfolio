import '../project/Project.css'
import Image from 'next/image'
import RollYourLife from '../../../public/images/MP8V7k.png'
import HeyBrother from '../../../public/images/kBIyAI.png'
import TheWaveStory from '../../../public/images/header (1).jpg'

export default function Project() {
    return (
        <div className='projects-section' id='projects'>
            <h1>PROJECTS</h1>
            <h3>you can find me <span>itch.io</span> :)</h3>
            <div className='projects'>
                <div className="card">
                    <a href="https://bob-the-game-dev.itch.io/roll-your-life" target='_blank'>
                        <div className="card-image"><Image src={RollYourLife} alt={'Roll Your Life'} className='ryl' /></div>
                        <p className="card-title">Roll your life</p>
                        <p className="card-body">
                            Play as Peter Die, a die working at the greatest "Las Pegas" Casino. Make your choices to reach the multiple endings of the game.
                        </p>
                        <p className="footer">Posted by <span className="by-name">Z4Z</span> on <span className="date">18/07/22</span></p>
                    </a>
                </div>
                <div className="card">
                    <a href="https://bob-the-game-dev.itch.io/hey-brother" target='_blank'>
                        <div className="card-image"><Image src={HeyBrother} alt={'Hey Brother'} className='hb' /></div>
                        <p className="card-title">Hey Brother!</p>
                        <p className="card-body">
                            2 brothers fight each other in a conventional boxing match, what could possibly go wrong? (4 minigames collection)
                        </p>
                        <p className="footer">Posted by <span className="by-name">Z4Z</span> on <span className="date">11/03/22</span></p>
                    </a>
                </div>
            </div>
            <h3 className='steam'>but you can find me at <span>steam</span> too :p</h3>
            <div className='steam-card'>
                <div className="temporary__storage">
                    <div className="cartao">
                        <div className="image"><a href="https://store.steampowered.com/app/1590920/The_Wave_Story/?l=brazilian" target='_blank'><Image src={TheWaveStory} alt={'The Wave Story'} className='tws'/></a></div>
                        <div className="image__overlay"></div>
                        <div className="content">
                            <div className="avatar"></div>
                            <div className="content__text">
                                <span className="stream__title">Puzzle games are fun! :)</span>
                                <div className="content__body">
                                    <span className="streamer__name">Z4Z</span>
                                    <span className="event">The Wave Story</span>
                                </div>

                                <span className="categories">
                                    <a className="categories__btn" href="#">Portuguese</a>
                                    <a className="categories__btn" href="#">TheWaveStory</a>
                                    <a className="categories__btn" href="#">Puzzle</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}