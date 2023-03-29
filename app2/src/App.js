import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

import { Admin } from './screens/Admin/Admin'

// import 'bulma/css/bulma.css'
import Dash from './screens/Dash'

// console.log(AlexaImage);        // If image is less than 9.7kb gets inlined in bundle.js
// console.log(CortanaImage);
// console.log(SiriImage);         // if image is more than 9.7kb gets treated as separate file

function App(){
    return(
        <div>
            HI
            <Admin></Admin>
            {/* <Dash/> */}
        </div>
    )
}

export default App;


/*

<div>

            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistants</p>
                </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-3'>
                            <ProfileCard 
                            title = "Alexa" 
                            handle = "@alexa.com" 
                            image = {AlexaImage}
                            description =  'Alexa is created by Amazon and helps you buy things.'  
                        />

                        </div>
                            
                        <div className='column is-3'>
                        <ProfileCard 
                        title = "Cortana" 
                        handle = "@cortana.com" 
                        image = {CortanaImage}
                        description =  'Cortona is created by Amazon and helps you buy things.'  
                        
                        />
                        </div>

                        <div className='column is-3'>
                            <ProfileCard 
                            title = "Siri" 
                            handle = "@siri.com" 
                            image = {SiriImage}
                            description =  'sin is created by Amazon and helps you buy things.'  
                            
                            />
                        </div>
                    </div>
                </section>
            </div>

           


        </div>
*/