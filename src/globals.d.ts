// Needed to silence .scss warnings
declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module 'lost';
declare module 'postcss-pxtorem';
