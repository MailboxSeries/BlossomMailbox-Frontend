export interface ButtonProps {
  //onClick?(): void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  route?: string;
  children?: React.ReactNode;
  width: number;
  height: number;
  margin?: string;
  padding?: string;
  background?: string;
  disabled?: boolean;
  dark?: boolean;
  type?: string;
  socialType?: string;
  backgroundColor?: string;
  borderRadius?: string;
  color?: string;
  fontSize?: number;
  zIndex?: number;
  position?: string;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  boxShadow?: string;
  fontFamily?: string;
}

export interface LongButtonProps extends Partial<ButtonProps> {}

export interface ShortButtonProps extends Partial<ButtonProps> {}

export interface MediumButtonProps extends Partial<ButtonProps> {}

export interface SocialButtonProps extends Partial<ButtonProps> {}

export interface AnimalButtonProps extends Partial<ButtonProps> {
  animal?: string;
}

export interface BackButtonProps extends Partial<ButtonProps> {}

export interface SexButtonProps extends Partial<ButtonProps> {
  selectedSex: string;
}

export interface MenuButtonProps extends Partial<ButtonProps> {}

export interface SignoutButtonProps extends Partial<ButtonProps> {}

