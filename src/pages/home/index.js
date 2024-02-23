import React, { useState } from 'react';
import Header from '../../components/common/Header/Header';
import TabOption from '../../components/common/tabOptions/tabOption';
import Footer from '../../components/common/Footer/Footer';
import Delivery from '../../components/common/Delivery/Delivery';
import DiningOut from '../../components/common/DiningOut/DiningOut';
import Nightlife from '../../components/common/Nightlife/Nightlife';





const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div className="">
      <Header />
      <TabOption activeTab= {activeTab}  setActiveTab= {setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />

      </div>
    
  );
};
const getCorrectScreen = (tab) => {
  switch (tab) {
    case 'Delivery':
      return <Delivery />;
    case 'Dine Out':
      return <DiningOut />;
    case 'DNightlife':
      return <Nightlife />;
    default:
      return <Delivery />;
  }
};

export default HomePage;