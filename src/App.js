import './App.scss';
import {useState} from 'react'

function App() {
  const data = [
    {
      header: "The WET Codbase",
      description: "October 4th, 2020 11 min read",
      text: "I'm baby ramps kombucha gluten-free ennui swag tattooed street art. Marfa biodiesel letterpress blue bottle subway tile, pop-up pok pok of."
    },
    {
      header: "Goodby, Clean Code",
      description: "November 22nd, 2019 5 min read",
      text: "Biodiesel artisan seitan plaid sriracha copper mug venmo shabby chic. Kickstarter raclette kombucha, yr post-ironic jianbing try-hard flexitarian vaporware normcore."
    },
    {
      header: "My Decade In Review",
      description: "August 11th, 2018 5 min read",
      text: "Direct trade shabby chic four dollar toast, tilde actually try-hard bicycle rights aesthetic forage. Meditation keytar asymmetrical tacos artisan truffaut. Pabst jean shorts roof party scenester."
    },
    {
      header: "What Are The React Team Principles",
      description: "June 4th, 2015 5 min read",
      text: "Selvage street art hammock affogato VHS. Mustache shaman literally wayfarers schlitz. Direct trade four loko narwhal VHS pop-up, chartreuse trust fund typewriter street art swag thundercats art party."
    },
  ]
  const [darkmode,setDarkmode] = useState(false)

  return (
    <div className="App" data-theme={darkmode ? 'dark' : 'light'}>
      <div className='container'>
        <div className='header'>
          <h2 className='headerName'>Overreacted</h2>
          <div className='headerBtn' onClick={() => setDarkmode(!darkmode)}>Toggle</div>
        </div>

        {
          data.map((item,index) => (
            <div className='contentItem' key={index}>
              <h2 className='contentItemHeader'>{item.header}</h2>
              <p className='contentDescription'>{item.description}</p>
              <p className='contentText'>{item.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
