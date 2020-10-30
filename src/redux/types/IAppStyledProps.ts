interface IAppTheme {
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
  white: string;
}

export interface IAppStyledProps {
  theme: IAppTheme;
}
