import { InfoProps, TwitterScoreProps } from '../../types/Info.props';

type Tier = '1+' | '1' | '2' | '3' | '';


export type StartupState = {
  web: string[];
  action: string[];
  info: InfoProps | null;
  crypto: string;
  twitterScore: TwitterScoreProps | null;
  twitterText: string;
  estimatedCosts: number;
  deadlineText: string;
  statusState: string;
  tierState: Tier;
  html: string;
};

export type Action =
  | { type: 'SET_FIELD'; fieldName: string; value: any }
  | { type: 'SET_INFO'; data: InfoProps }
  | { type: 'SET_TWITTER_SCORE'; data: TwitterScoreProps };

export const initialStartupState: StartupState = {
  web: [],
  action: [],
  info: null,
  crypto: '',
  twitterScore: null,
  twitterText: '',
  estimatedCosts: 0,
  deadlineText: '',
  statusState: '',
  tierState: '',
  html: '',
};

export const reducer = (state: StartupState, action: Action): StartupState => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.fieldName]: action.value };
    case 'SET_INFO':
      return { ...state, info: action.data };
    case 'SET_TWITTER_SCORE':
      return { ...state, twitterScore: action.data };
    default:
      return state;
  }
};