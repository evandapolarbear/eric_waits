import React from 'react';

import About from './components/About/';
import Banner from './components/Banner/';
import Header from './components/Header/';
import InfoSection from './components/InfoSection/';
import Layout from './components/Layout/';
import LocationSection from './components/Location/';
import PhoneButton from './components/PhoneButton/';
import RateFooter from './components/RateFooter/';

import texts from './constants';

class App extends React.Component {
  render() {
    const {
      aboutTitle,
      centralText,
      cosmeticInfo,
      generalInfo,
      google,
      headerTexts,
      implantInfo,
      mapUrl,
      rateUs,
      subTitleOne,
      subTitleTwo,
      title,
      yelp,
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
        banner={ <Banner /> }
        firstInfo={
          <InfoSection
            sectionNum={1}
            infoTitle='Implants'
            text={implantInfo}
          >
            <PhoneButton/>
          </InfoSection>
        }
        secondInfo={
          <InfoSection
            reverse={true}
            sectionNum={2}
            infoTitle='Cosmetic Dentistry'
            text={cosmeticInfo}
          >
            <PhoneButton/>
          </InfoSection>
        }
        thirdInfo={
          <InfoSection
            sectionNum={3}
            infoTitle='General Dentistry'
            text={generalInfo}
          >
            <PhoneButton/>
          </InfoSection>
        }
        fourthInfo={ <About {...{ centralText, title: aboutTitle }} /> }
        fifthInfo={
          <LocationSection
            {...{
              mapUrl,
              subTitleOne,
              subTitleTwo,
              title,
            }}
          >
            <PhoneButton/>
          </LocationSection>
        }
        rateFooter={ <RateFooter {...{ rateUs, yelp, google }}/>}
      />
    );
  }
}

export default App;
