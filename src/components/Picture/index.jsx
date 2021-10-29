const Picture = (props) => {
  const { mobileSrc, tabletSrc, desktopSrc, imageAlt, bannerClass } = props;

  return (
    <picture>
      <source srcSet={mobileSrc} media="(max-width: 639px)" />
      <source
        srcSet={tabletSrc}
        media="(min-width: 640px) and (max-width: 768px)"
      />
      <source srcSet={desktopSrc} media="(min-width: 769px)" />
      <img className={bannerClass} src={desktopSrc} alt={imageAlt} />
    </picture>
  );
};

export default Picture;
