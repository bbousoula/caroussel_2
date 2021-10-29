import "./styles.scss";
import Carousel from "./components/Carousel";

export default function App() {
  const items = [
    {
      image: "img/childbirth.jpg",
      imageAlt: "Childbirth education classes",
      svg: "svg/childbirth_education_classes_icon.webp",
      svgAlt: "Childbirth education classes",
      text: "CHILDBIRTH EDUCATION CLASSES",
      textLink: "https://www.pampers.com/en-us/pregnancy/birthing-classes"
    },
    {
      image: "img/childbirth.jpg",
      imageAlt: "Childbirth education classes",
      svg: "svg/childbirth_education_classes_icon.webp",
      svgAlt: "Childbirth education classes",
      text: "CHILDBIRTH EDUCATION CLASSES",
      textLink: "https://www.pampers.com/en-us/pregnancy/birthing-classes"
    },
    {
      image: "img/childbirth.jpg",
      imageAlt: "Childbirth education classes",
      svg: "svg/childbirth_education_classes_icon.webp",
      svgAlt: "Childbirth education classes",
      text: "CHILDBIRTH EDUCATION CLASSES",
      textLink: "https://www.pampers.com/en-us/pregnancy/birthing-classes"
    },
    {
      image: "img/childbirth.jpg",
      imageAlt: "Childbirth education classes",
      svg: "svg/childbirth_education_classes_icon.webp",
      svgAlt: "Childbirth education classes",
      text: "CHILDBIRTH EDUCATION CLASSES",
      textLink: "https://www.pampers.com/en-us/pregnancy/birthing-classes"
    },
    {
      image: "img/childbirth.jpg",
      imageAlt: "Childbirth education classes",
      svg: "svg/childbirth_education_classes_icon.webp",
      svgAlt: "Childbirth education classes",
      text: "CHILDBIRTH EDUCATION CLASSES",
      textLink: "https://www.pampers.com/en-us/pregnancy/birthing-classes"
    },
    {
      image: "img/childbirth.jpg",
      imageAlt: "Childbirth education classes",
      svg: "svg/childbirth_education_classes_icon.webp",
      svgAlt: "Childbirth education classes",
      text: "CHILDBIRTH EDUCATION CLASSES",
      textLink: "https://www.pampers.com/en-us/pregnancy/birthing-classes"
    },
    {
      image: "img/childbirth.jpg",
      imageAlt: "Childbirth education classes",
      svg: "svg/childbirth_education_classes_icon.webp",
      svgAlt: "Childbirth education classes",
      text: "CHILDBIRTH EDUCATION CLASSES",
      textLink: "https://www.pampers.com/en-us/pregnancy/birthing-classes"
    },
    {
      image: "img/childbirth.jpg",
      imageAlt: "Childbirth education classes",
      svg: "svg/childbirth_education_classes_icon.webp",
      svgAlt: "Childbirth education classes",
      text: "CHILDBIRTH EDUCATION CLASSES",
      textLink: "https://www.pampers.com/en-us/pregnancy/birthing-classes"
    },
    {
      image: "img/childbirth.jpg",
      imageAlt: "Childbirth education classes",
      svg: "svg/childbirth_education_classes_icon.webp",
      svgAlt: "Childbirth education classes",
      text: "CHILDBIRTH EDUCATION CLASSES",
      textLink: "https://www.pampers.com/en-us/pregnancy/birthing-classes"
    }
  ];
  return (
    <div className="App">
      <Carousel list={items} />
    </div>
  );
}
