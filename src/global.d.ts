import { ChangeEvent, FormEvent, MouseEvent, ReactChildren, ReactNode } from 'react';
import { Theme } from '@emotion/react';

export type UnknownType = string | number | readonly string[] | undefined;

export type UnknownObject = { [x: string]: UnknownType };

export type ChildrenProp = ReactChildren | ReactNode;

export type ChangeEventProp = (e: ChangeEvent<HTMLInputElement>) => void;

export type MouseEventProp = (e: MouseEvent<HTMLButtonElement>) => void;

export type FormEventProp = (e: FormEvent<HTMLFormElement>) => void;

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      heading: string;
      description: string;
      white: string;
    };
    bgColors: {
      primary: string;
      secondary: string;
      light: string;
    };
    fontSizes: UnknownObject;
    lineHeight: UnknownObject;
    fontWeight: UnknownObject;
    borderRadius: UnknownObject;
    boxShadows: UnknownObject;
  }
}

export interface StyledComponentProps {
  children: ChildrenProp;
  theme?: Theme;
  className?: string;
}
