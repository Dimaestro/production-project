declare module '*.scss' {
  type ClassNames = Record<string, string>;
  const classNames: ClassNames; export = classNames;
}

declare module '*.svg' {
  import type React from 'react';

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.jpeg';
declare module '*.jpg';
declare module '*.png';

declare const __IS_DEV__: boolean;
