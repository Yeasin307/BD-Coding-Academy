import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Introduction from '../Introduction/Introduction';
import MainSection from '../MainSection/MainSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Introduction></Introduction>
            <MainSection></MainSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;