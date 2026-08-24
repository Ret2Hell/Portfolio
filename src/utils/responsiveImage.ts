export const responsiveImage = (src: string) => {
  const extensionIndex = src.lastIndexOf(".");
  const base = extensionIndex === -1 ? src : src.slice(0, extensionIndex);

  return {
    srcSet: `${base}-480w.webp 480w, ${base}-960w.webp 960w, ${src} 1920w`,
  };
};
