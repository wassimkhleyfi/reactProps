
import './App.css';
import Profile from './profile/Profile'
import Picture from './profile/Picture'
import myphoto from './profile/myphoto.jpg'

function alertName (name) { alert( "My name is " + name)}


function App() {
  const styleObj ={ color :"blue",  fontSize: '25px' ,margin:'20px' ,padding :'20px'  };
  const styleImg ={padding :'20px'}
  return (
    <div style ={styleObj} className="App">
       <div className="data">
         <Profile 
         handleName ={alertName}
         name ="Wassim Khleyfi"
         bio="I am a senior Information Security, Privacy and Risk Management Professional with a solid technical background and a highly analytical mind. I have been involved within the information security .
         I preferably work as the linchpin between business and the technical level using my deep technical knowledge as well as strategic and tactical insights to see multiple steps ahead, oversee consequences and ultimately provide the best solution combining key elements from the information security, privacy and IT risk management fields.
         I am a team player with an open and direct style of communication who uses humor, listening skills, broad knowledge and interests to create a pleasant working environment."
         profession ="Computer and cyber security engineer"  />
      </div>
      <div style ={styleImg} className='photo'>
         <Picture src={myphoto} height="180px" width ="200px">
               this is my photo
         </Picture>
      </div>
       
    </div>
  );
}

export default App;
