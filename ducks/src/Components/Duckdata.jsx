import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1350,
    marginTop: '4rem',
    padding: theme.spacing(2),
  },
  visible: {
    opacity: 1,
    transition: 'opacity 0.2s',
  },
  hidden: {
    opacity: 0,
    transition: 'opacity 0.2s',
  },
}));

const Duckdata = () => {
  const classes = useStyles();
  const [currentSpan, setCurrentSpan] = useState(0);

  useEffect(() => {
    const spanInterval = setInterval(() => {
      setCurrentSpan((prevSpan) => prevSpan + 1);
    }, 200);
    //200 is used here for 0.2s

    return () => clearInterval(spanInterval);
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h1" className="text-center">
        <div className="mt-[14rem] tight font-ui-sans-serif text-[110px]">
          <span className={`font-extrabold text-[15rem] leading-tight ${currentSpan >= 1 ? classes.visible : classes.hidden}`}>D</span>
          <span className={`font-extrabold text-[15rem] ${currentSpan >= 2 ? classes.visible : classes.hidden}`}>u</span>
          <span className={`font-extrabold text-[15rem] ${currentSpan >= 3 ? classes.visible : classes.hidden}`}>c</span>
          <span className={`font-extrabold text-[15rem] ${currentSpan >= 4 ? classes.visible : classes.hidden}`}>k</span>
          <span className={`font-extrabold text-[15rem] ${currentSpan >= 5 ? classes.visible : classes.hidden}`}>s</span>
        </div>
      </Typography>

      <Typography variant="h2" className="text-center text-green-600 text-xl sm:text-2xl font-semibold">
        FINANCE
      </Typography>
      <div className='mt-[8rem]'>
        <Typography variant="h3" className="text-center" style={{ fontWeight: 'bolder', fontSize:'3rem' }}>
          STAKE.
          <span className="ml-10">EARN. </span>
          <span className="ml-10">GROW.</span>
        </Typography>
      </div>
      <Typography variant="body" className="text-gray-600" style={{ fontSize: '3rem', position: 'relative', left: '2rem', top: '5rem' }}>
        We Work. You Thrive.
      </Typography>
    </div>
  );
};

export default Duckdata;
