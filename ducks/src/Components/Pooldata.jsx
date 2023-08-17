import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const poolData = [
  {
    id: 1,
    name: 'Pool 1',
    apy: '7% APY',
    maxDCKS: 'Max 10,000 $DCKS',
    criteria: 'Criteria: One Duck',
    position: 'relative',
    right:'30rem' 
  },
  {
    id: 2,
    name: 'Pool 2',
    apy: '15% APY',
    maxDCKS: 'Max 45,000 $DCKS',
    criteria: 'Criteria: Two Ducks',
  },
  {
    id: 3,
    name: 'Pool 3',
    apy: '35% APY',
    maxDCKS: 'Max 100,000 $DCKS',
    criteria: 'Criteria: Three Ducks',
    position:'relative',
    left:'30rem'
  },
];

const useStyles = makeStyles((theme) => ({
}));

const Pooldata = () => {
  const classes = useStyles();
  const [currentSpan, setCurrentSpan] = useState(0);
  const [isBouncing, setIsBouncing] = useState([]);

  useEffect(() => {
    const spanInterval = setInterval(() => {
      setCurrentSpan((prevSpan) => prevSpan + 1);
    }, 200);

    return () => clearInterval(spanInterval);
  }, []);

  const handleMouseEnter = (index) => {
    setIsBouncing((prevBouncing) => {
      const updatedBouncing = [...prevBouncing];
      updatedBouncing[index] = true;
      return updatedBouncing;
    });
  };

  const handleMouseLeave = (index) => {
    setIsBouncing((prevBouncing) => {
      const updatedBouncing = [...prevBouncing];
      updatedBouncing[index] = false;
      return updatedBouncing;
    });
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid sm:grid-cols-3 mt-56 sm:mt-72 max-w-auto  pool-card">
          {poolData.map((pool, index) => (
            <div className="text-center" key={pool.id}>
              <div key={index} style={poolData[index]}>  {/* to style every column separately */}
                <div className={`w-[13rem] h-[13rem] mx-auto flex items-center justify-center rounded-full bg-yellow-500 ${isBouncing[index] ? 'bounce' : ''}`}>
                  <h2 className="text-white text-[55px] font-bold">Unlock Pool</h2>
                </div>
              <div className="pt-12 pb-24">
                <h2 className="text-green-600 font-bold text-[8rem] mt-4">{pool.name}</h2>
                <div>
                  <h2 className="font-extrabold text-5xl">{pool.apy}</h2>
                  <h1 className="text-center mx-auto text-4xl leading-tight">({pool.maxDCKS})</h1>
                  <h1 className="text-center text-4xl leading-tight">{pool.criteria}</h1>
                  <h1 className="text-center text-4xl leading-tight">Staking NFT</h1>
                </div>
              </div>
              <div className="flex justify-center">
              <button
                  className="text-white text-3xl w-60 h-24 font-extrabold rounded-3xl bg-green-600 hover:bg-green-700 duration-700"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  Stake Now
                </button>
              </div>
            </div>
            </div>
            
          ))}
        </div>
        {/* Vertical Line */}
        <div style={{ borderLeft: '7px solid rgb(234,179,8)',height: '35rem', position:'relative', left:'10rem',bottom:'37rem' }}></div>
          <div style={{ borderLeft: '7px solid rgb(234,179,8)',height: '35rem', position:'relative', left:'70rem', bottom:'72rem'}}></div>
      </div>

      <div className='mt-[-60rem] text-[3rem] text-[#767676]'>
      ©2013 Ducks Finance. Terms and conditions
      </div>
    </>
  );
}
export default Pooldata;