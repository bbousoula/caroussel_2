import Picture from "../Picture";

const Item = (props) => {
  const { image, imageAlt, svg, svgAlt, textLink, text } = props;
  return (
    <div className="content">
      <div className="content-image">
        <div className="content-image__top">
          <Picture
            mobileSrc={image}
            tabletSrc={image}
            desktopSrc={image}
            alt={imageAlt}
            bannerClass="tools-img"
          />
        </div>
        <div className="content-svg">
          <img src={svg} alt={svgAlt} width="40" height="40" loading="lazy" />
        </div>
      </div>
      <a className="txt" href={textLink}>
        {text}
      </a>
    </div>
  );
};

export default Item;
