declare module "*.svg" {
  /**
   * A path to the SVG file
   */
  const path: `${string}.svg`;
  export = path;
}

declare module "*.module.css" {
  /**
   * A record of class names to their corresponding CSS module classes
   */
  const classes: Readonly<Record<string, string>>;
  export = classes;
}

declare module "*.html" {
  const content: string;
  export default content;
}

declare module "bun" {
  interface Hot {
    data: {
      root?: import("react-dom/client").Root;
    };
  }
}
