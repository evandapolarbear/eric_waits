import React from 'react';
import Layout from './components/Layout/';
import Header from './components/Header/';
import Banner from './components/Banner/';
import PhoneButton from './components/PhoneButton/';
import InfoSection from './components/InfoSection/';

// import logo from './logo.svg';
// import './App.css';

const loremText = 'Lorem ipsum dolor sit amet, ne cum habeo detraxit. Sale omnes sapientem at has. Quo modus soleat definitionem ut, mei enim equidem ut, zril nemore urbanitas ea quo. Id vel reque oblique appellantur, ex duo nulla equidem sanctus, te usu iriure facilis inciderint. Cibo sadipscing mea at, no delenit accusamus nec. No facilis recusabo his, vis no ullum assum. Gloriatur accommodare cum ne. Pri ad postea detracto, ut torquatos assueverit theophrastus duo, in veniam quidam constitutnam. Vis ut elitr omittam, ne ceteros epicurei antiopam ius. Wisi pertinacia contentiones ut sea, mea mundi nobis et. Te eros equidem ius, nam an harum doming legendos. Est fabulas delicatissimi ut, vix albucius incorrupte efficiendi id, eam in case vide solum. Viris consequat duo no. Ea sensibus salutatus duo. Eu ius vero dicunt, sit ne graece nonumes, usu lucilius elaboraret et.Labores appetere qui ex. Iisque aeterno ex qui. Simul putant commune eum in. Vel melius albucius id, eius dolorem intellegebat sit cu. Eu sea laboramus referrentur, sea ferri soluta indoctum eu. Vide atqui posidonium at quo, qui autem mollis cu. Illum idque qui et. Sed te harum accusamus. Et vel sint offendit, vitae accusata perpetua te duo. Ut everti quaerendum definitiones mea, et altera oblique nec.'

class App extends React.Component {
  render() {
    return (
      <Layout
        header={
          <Header>
            <PhoneButton/>
          </Header>
        }
        banner={ <Banner/> }
        implantInfo={
          <InfoSection
            text={loremText}
            image={loremText}
          >
            <PhoneButton/>
          </InfoSection>
        }
        cosmeticInfo={
          <InfoSection
            reverse={true}
            text={loremText}
            image={loremText}
          >
            <PhoneButton/>
          </InfoSection>
        }
        generalInfo={
          <InfoSection
            text={loremText}
            image={loremText}
          >
            <PhoneButton/>
          </InfoSection>
        }
      />
    );
  }
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
