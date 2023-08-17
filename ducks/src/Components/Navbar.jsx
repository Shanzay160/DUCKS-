import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import img from '../assets/img/duck.png';

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    paddingBottom: '10px',
    [theme.breakpoints.up('md')]: {
      paddingTop: '20px',
      paddingBottom: '20px',
    },
    [theme.breakpoints.up('2xl')]: {
      paddingTop: '31px',
      paddingBottom: '31px',
    },
    transition: 'background-color 0.3s ease',
  },
  scrolledNavbar: {
    backgroundColor: 'rgb(241,245,249)',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    // paddingTop: '20px',
    // paddingBottom: '20px',
    height:'19rem'
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 py-[10px] md:py-[20px] 2xl:py-[31px] ${scrolling ? classes.scrolledNavbar : ''}`}>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <nav className="hidden md:block">
            <div className="flex items-center justify-between">
              <div className="flex gap-[35px] lg:gap-[48px] mt-[3rem]">
                <a className="text-[2rem] lg:text-[3rem] ml-[20rem] mt-8 text-black font-extrabold">Duck Finance</a>
                <a className="text-[2rem] lg:text-[3rem] text-black ml-[10rem] mt-8 font-medium">Buy Ducks Token</a>
                <a className="text-[2rem] lg:text-[3rem] text-black ml-[10rem] mt-8 font-medium">Buy Staking NFT</a>
              </div>
            
              <div className="sm-nav flex">
    <button className="text-white text-[2rem] lg:text-2.5rem w-40 lg:w-96 h-20 lg:h-28 mt-20 lg:mt-20
    ml-0 lg:ml-[120rem] md:ml-[50rem] sm:ml-[0]
    font-extrabold rounded-[2rem] bg-green-600 hover:bg-green-800" >
        Connect Wallet
    </button>
</div>


            </div>
            <div className="absolute top-0 left-0 right-0 flex justify-center items-center h-full">
              <img src={img} alt="logo" className="w-[13rem] sm:w-[] md:w-[] lg:w-[] xl:w-[] 2xl:w-[] mt-[6rem]" />
            </div>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;