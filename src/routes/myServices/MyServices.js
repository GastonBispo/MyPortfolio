import React, { useState, useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import LoaderNude from '../../components/LoaderNude/LoaderNude';

const MyServices = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading && <LoaderNude/>}
      <Helmet>
        <title>Services Title</title>
        <meta name="description" content="Keywords focused on my portfolio and personal name/brand"/>
      </Helmet>
      <div>
        <div> loader </div>
      </div>
    </>
  );
};

export default MyServices;
