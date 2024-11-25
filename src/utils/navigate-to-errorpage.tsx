import { NavigateFunction } from 'react-router-dom';

export const navigateToErrorPage = (navigate: NavigateFunction, errorCode: number) => {
  switch (errorCode) {
    case 403:
      navigate('/forbidden');
      break;
    case 404:
      navigate('*'); 
      break;
    case 500:
      navigate('/server-error');
      break;
    default:
      navigate('/server-error'); 
  }
};
