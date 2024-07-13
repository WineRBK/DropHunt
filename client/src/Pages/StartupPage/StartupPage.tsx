import React from 'react';
import { useParams } from 'react-router-dom';

const StartupPage = () => {
  const { id } = useParams();
  return <div>StartupPage {id}</div>;
};

export default StartupPage;
