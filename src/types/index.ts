export type AppTheme = {
  body: string;
  text: string;
  toggleBorder: string;
  gradient: string;
  accent: string;
  background: string;
  backgroundSecondary: string;
  border: string;
  grey: Object;
  textVers: string;
};

export interface AppStyledProps {
  theme: AppTheme;
}

export interface CardData {
  order: number;
  imgURL: string;
  name: string;
}
