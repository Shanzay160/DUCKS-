  import React from 'react';
  import { makeStyles } from '@material-ui/core/styles';
  import { Typography, Button, Grid, Paper, AppBar, Toolbar } from '@material-ui/core';
  import img from '../assets/img/duck.png';

  const useStyles = makeStyles((theme) => ({
      root: {
        maxWidth: 1350,
        margin: '0 auto',
        padding: theme.spacing(2),
       },
      navbar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        paddingTop: '10px',
        paddingBottom: '10px',
        [theme.breakpoints.up('md')]: {
          paddingTop: '20px',
          paddingBottom: '20px',
        },
        [theme.breakpoints.up('2xl')]: {
          paddingTop: '31px',
          paddingBottom: '31px',
        },
      },
      navbarTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: '70px',
        [theme.breakpoints.up('sm')]: {
          fontSize: '100px',
        },
      },
    
      poolContainer: {
        marginTop: 100, // Adjust this margin to match the original layout
       
        display: 'flex',
        justifyContent: 'center',
        display: 'grid',
        // gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '70rem',
         marginLeft:'-20rem',
      },
//circle
    poolCard: {
      textAlign: 'center',
      padding: theme.spacing(2),
      backgroundColor: '#F59E0B',
      borderRadius: '50%',
      width: 220,
      height: 220,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '10rem',
    },
    poolTitle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: '3.5rem',
      lineHeight: '22px' ,
      marginLeft:'45rem',
      letterSpacing:'-4px',
    },
    poolDetails: {
      marginTop: '60rem',
      marginBottom: 30,
      // borderLeft: '3px solid #F59E0B',
      // borderRight: '3px solid #F59E0B',
      padding: theme.spacing(1),
    },
    poolAPY: {
      fontWeight: 'bolder',
      color:'black',
      fontSize: '2.5rem',
      position:'relative',
      right:'20rem',
      bottom:'8rem'
    },
    poolCriteria: {
      fontSize: '2px',
    },
    poolButton: {
      backgroundColor: '#10B981',
      color: 'white',
      fontWeight: 'bold',
      width: 90,
      height: 35,
      borderRadius: 10,
      '&:hover': {
        backgroundColor: '#059669',
      },
    },
   
  }));

  const pools = [
    {
      title:'Pool 1',
      apy: '7% APY',
      maxAmount: '(Max 10,000 $DCKS)',
      criteria: 'Criteria: One Ducks Staking NFT',

    },
    {
      title: 'Pool 2',
      apy: '15% APY',
      maxAmount: '(Max 45,000 $DCKS)',
      criteria: 'Criteria: Two Ducks Staking NFT',
    },
    {
      title: 'Pool 3',
      apy: '35% APY',
      maxAmount: '(Max 100,000 $DCKS)',
      criteria: 'Criteria: Three Ducks Staking NFT',
    },
  ];

  const Nav = () => {
    const classes = useStyles();

    return (
      <>
      <div className="fixed top-0 left-0 right-0 z-50 py-[10px] md:py-[20px] 2xl:py-[31px] bg-transparent">
        <AppBar position="fixed" className={classes.navbar}>
          <Toolbar>
          <nav className="hidden md:block">
          <div className="flex items-center justify-between">
          <div className="flex gap-[35px] lg:gap-[48px] mt-[3rem]">
          <a className="text-[2rem] lg:text-[3rem] ml-[20rem] mt-8 text-black  font-extrabold">Duck Finance</a>
          <a className="text-[2rem] lg:text-[3rem]  text-black ml-[10rem] mt-8 font-medium">Buy Ducks Token </a>
          <a className="text-[2rem] lg:text-[3rem]  text-black ml-[10rem] mt-8 font-medium">Buy Staking NFT</a>
          </div>
          <div className="flex items-center gap-[10px] lg:gap-[40rem]">
          <div className="flex gap-[15rem] lg:gap-[25rem] ml-sm:[20rem] ml-md:[40rem] ml-[120rem] ">
          <button className="text-white text-[1.5rem] lg:text-[2.5rem] w-[10rem] lg:w-[30rem] h-[8rem] lg:h-[10rem] mt-[5rem] ml-0 lg:ml-[5rem] font-extrabold rounded-[30px] bg-green-600 hover:bg-green-800">
  Connect Wallet
</button>


            </div>
            </div>
            </div>
        <div className="absolute top-0 left-0 right-0 flex justify-center items-center h-full">
        <img src={img} alt="logo" className="w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 2xl:w-[150px]" />
            </div>
          </nav>
          </Toolbar>
        </AppBar>

      {/* duck */}
        <div className={classes.root}>        
          <Typography variant="h1" className=" text-center">
            <div className="mt-[16rem] tight font-[Helvetica Neue] text-[100px]"
            style={{lineHeight:'80px'}}>
            <span className='font-extrabold text-[15rem]'>D</span>
            <span className='font-extrabold text-[15rem]'>u</span>
            <span className='font-extrabold text-[15rem]'>c</span>
            <span className='font-extrabold text-[15rem]'>k</span>
            <span className='font-extrabold text-[15rem]'>s</span>
            </div>
          </Typography>

          <Typography variant="h2" className="text-center text-green-600 text-xl sm:text-2xl font-semibold">
            FINANCE
          </Typography>
          <div className='mt-[8rem]'>
          <Typography variant="h3" className="text-center" style={{ fontWeight: 'bolder' }}>
            STAKE.  
            <span className="ml-10">EARN. </span>
            <span className="ml-10">GROW.</span>
          </Typography>
          </div>
          <Typography variant="body" className="text-gray-600" style={{fontSize:'3rem', position:'relative', left:'28rem', top:'5rem'}}>
            We Work. You Thrive.
          </Typography>
     {/* pool   */}

     <div className={`grid grid-cols-1 gap-8 sm:gap-0 sm:grid-cols-${pools.length} ${classes.poolContainer}`}>
  {pools.map((pool, index) => (
    <Paper key={index} className={`${classes.poolCard} false`}>
      <Typography variant="h5" className={classes.poolTitle}>
     Unlock <br /> <br /> <br />Pool {index + 1}
      </Typography>
      <div className={`pt-2 pb-8 ${classes.poolDetails}`}>
        <Typography variant="h2" className={`${classes.poolAPY} mt-2`}>
          {pool.apy}
        </Typography>
        <div>
          <Typography
            variant="h2"
            className={classes.poolCriteria}
            style={{ fontSize: '7.5rem',letterSpacing:'-4px', color:'#16A34A', marginTop:'-20rem',fontWeight:'bolder', marginLeft:'-40rem' }}
          >
            {pool.title}
          </Typography>
          <Typography variant="body" className="mx-auto text-[30px] text-[black]"
          style={{ position:'relative',top:'4rem',right:'14rem', fontSize:'2.5rem', color:'black',whiteSpace: 'nowrap' }}>
            {pool.maxAmount}
          </Typography>
          <Typography variant="body" className=" text-[2rem] text-black leading-[19px]"
          style={{position:'relative',top:'7rem',right:'17rem', fontSize:'2.5rem' }} >
            {pool.criteria}
          </Typography>
        </div>
      </div>
      <div class="flex justify-center">
        <button class="text-white text-[2rem] w-[240px] h-[95px] font-extrabold rounded-[20px] bg-[rgb(22,163,74)] hover:bg-green-700 duration-700"
        style={{position:'relative', top:'42rem', right:'42rem'}}>
        Stake Now
        </button>
        </div>
    </Paper>
  ))}


          </div>
          {/* Vertical Line */}
          <div style={{ borderLeft: '7px solid rgb(234,179,8)',height: '32rem', position:'relative', left:'5rem' }}></div>
          <div style={{ borderLeft: '7px solid rgb(234,179,8)',height: '32rem', position:'relative', left:'80rem', bottom:'32rem'}}></div>

        </div>
      </div>
      </>
    );
  };

  export default Nav;