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

export interface StyledProps {
  theme: AppTheme;
}
