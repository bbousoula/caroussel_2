import Item from "./Item";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Carousel = ({ list }) => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={list.length}
      visibleSlides={5}
      infinite={true}
    >
      <Slider>
        {list.map((items, index) => (
          <Slide index={index} key={index}>
            <Item
              key={index}
              image={items.image}
              alt={items.imageAlt}
              svg={items.svg}
              textLink={items.textLink}
              text={items.text}
            />
          </Slide>
        ))}
      </Slider>

      <ButtonBack>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M3.395 11.14c-.09-.06-.197-.178-.195-.407.002-.082.015-.17.041-.262.136-.492.58-1.088.816-1.238 5.374-3.416 7.682-4.95 12.57-9.059.178-.15.31-.202.418-.16.052.02.12.07.141.203.065.395-.1 1.715-.423 1.988-3.911 3.289-5.232 4.169-9.637 7.124l-1.08.754 1.264.858.553.392c3.077 2.118 6.125 4.334 9.062 6.592.094.072.2.222.163.522-.07.563-.58 1.334-.994 1.513-.179.077-.299.029-.368-.024-3.996-3.071-8.145-6.03-12.331-8.796"
          ></path>
        </svg>
      </ButtonBack>
      <ButtonNext>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <g fill="none" fillRule="evenodd">
            <g fill="#fff">
              <g>
                <g>
                  <g>
                    <g>
                      <path
                        d="M17.005 11.14c.09-.06.197-.178.195-.407-.002-.082-.015-.17-.041-.262-.136-.492-.58-1.088-.816-1.238C10.97 5.817 8.661 4.283 3.773.174c-.178-.15-.31-.202-.418-.16-.052.02-.12.07-.141.203-.065.395.1 1.715.423 1.988 3.911 3.289 5.232 4.169 9.637 7.124l1.08.754-1.264.858-.553.392c-3.077 2.118-6.125 4.334-9.062 6.592-.094.072-.2.222-.163.522.07.563.58 1.334.994 1.513.179.077.299.029.368-.024 3.996-3.071 8.145-6.03 12.331-8.796"
                        transform="translate(-1300 -506) translate(130 356) translate(0 32) translate(1160 108) translate(10 10)"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </ButtonNext>
      <div className="overlay-gradient overlay-gradient-left overlay-gradient-noback"></div>
      <div className="overlay-gradient overlay-gradient-right overlay-gradient-noback"></div>
    </CarouselProvider>
  );
};
export default Carousel;
