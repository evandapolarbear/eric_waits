import React from 'react';

import Layout from './components/Layout/';
import Header from './components/Header/';
import Banner from './components/Banner/';
import PhoneButton from './components/PhoneButton/';
import InfoSection from './components/InfoSection/';
import About from './components/About/';

import texts from './constants';

// import logo from './logo.svg';

class App extends React.Component {
  render() {
    const {
      centralText,
      cosmeticInfo,
      generalInfo,
      headerTexts,
      implantInfo,
      loremText,
      subTitleOne,
      subTitleTwo,
      title,
    } = texts;

    return (
      <Layout
        header={
          <Header
            headers={headerTexts}
            {...{
              title,
              subTitleOne,
              subTitleTwo
            }}
          >
            <PhoneButton/>
          </Header>
        }
        banner={ <Banner/> }
        firstInfo={
          <InfoSection
            infoTitle='Implants'
            text={implantInfo}
            image={loremText}
          >
            <PhoneButton/>
          </InfoSection>
        }
        secondInfo={
          <InfoSection
            reverse={true}
            infoTitle='Cosmetic'
            text={cosmeticInfo}
            image={loremText}
          >
            <PhoneButton/>
          </InfoSection>
        }
        thirdInfo={
          <InfoSection
            infoTitle='General'
            text={generalInfo}
            image={loremText}
          >
            <PhoneButton/>
          </InfoSection>
        }
        fourthInfo={ <About {...{ centralText }} /> }
      />
    );
  }
}

export default App;
