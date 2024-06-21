export interface InfoProps {
  name: string;
  image: Image;
  category: string;
  links: Link[];
  valuation: number;
  raise: number;
  investors: Investors;
}

export interface Image {
  x60: string;
  x150: string;
  icon: string;
  native: string;
}

export interface Investors {
  'SERIES B': Seed[];
  'SERIES A': Seed[];
  SEED: Seed[];
}

export interface Seed {
  name: string;
  url: string;
  logo: string;
  tier: number;
}

export interface Link {
  type: string;
  value: string;
}

export interface TwitterScoreProps {
  score: number;
  followers: number;
}