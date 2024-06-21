// useStartupState.ts
import { useReducer } from 'react';
import { initialStartupState, reducer } from '../reducers/startup/startupReducer';
import { cryptoFetch, twitterFetch } from '../api/api';

const useStartupState = () => {
  const [startupState, dispatch] = useReducer(reducer, initialStartupState);

  const handleChange = (name: string, value: any) => {
    dispatch({ type: 'SET_FIELD', fieldName: name, value });
  };

  const handleFieldChange = (fieldName: string) => (value: any) => {
    handleChange(fieldName, value);
  };

  const handleCrypto = async () => {
    const data = await cryptoFetch(startupState.crypto);
    dispatch({ type: 'SET_INFO', data });
  };

  const handleTwitterScore = async () => {
    const data = await twitterFetch(startupState.twitterText);
    dispatch({ type: 'SET_TWITTER_SCORE', data });
  };

  const handleWeb = (webList: string[]) => {
    handleChange('web', webList);
  };

  const handleAction = (actionList: string[]) => {
    handleChange('action', actionList);
  };

  return {
    startupState,
    handleFieldChange,
    handleCrypto,
    handleTwitterScore,
    handleWeb,
    handleAction,
  };
};

export default useStartupState;