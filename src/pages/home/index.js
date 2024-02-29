import React, { useState } from 'react';
import Header from '../../components/common/Header/Header';
import TabOption from '../../components/common/tabOptions/tabOption';
import Footer from '../../components/common/Footer/Footer';
import Delivery from '../../components/common/Delivery/Delivery';
import DiningOut from '../../components/common/DiningOut/DiningOut';
import Nightlife from '../../components/common/Nightlife/Nightlife';





const HomePage = () => {
  const [activeTab, setActiveTab] = useState("");
  return (
    <div className="w-3/4 m-auto">
      <Header />
      <TabOption activeTab = {activeTab}  setActiveTab = {setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />

      </div>
    
  );
};
const getCorrectScreen = (tabs) => {
  switch (tabs) {
    case 'Delivery':
      return <Delivery />;
    case 'DiningOut':
      return <DiningOut/>;
    case 'Nightlife':
      return <Nightlife />;
    default:
      return <DiningOut />;
  }
};

export default HomePage;