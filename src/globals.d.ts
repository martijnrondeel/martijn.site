// Needed to silence .scss warnings
declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}
