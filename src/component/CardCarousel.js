// CardCarousel.js
import React, { useState } from "react";
import card1Image from "../assets/card1.jpg";
import card2Image from "../assets/card2.jpg";
import card3Image from "../assets/card3.jpg";
import Card4Image from "../assets/card4.jpg";
import Card5Image from "../assets/card5.jpg";
import Card6Image from "../assets/card6.jpg";
import Card from "./Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../Styles/Carousel.css";

const cards = [
  {
    title: "Post-workout Recipes",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    image: card1Image,
  },
  {
    title: "Snacks for Travel",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    image: card2Image,
  },
  {
    title: "Grilled  Tomatoes at Home",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    image: card3Image,
  },
  {
    title: "How To Grill Corn",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    image: Card4Image,
  },
  {
    title: "Crunchwrap Supreme",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    image: Card5Image,
  },
  {
    title: "Broccoli Cheese Soup",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    image: Card6Image,
  },
];

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;

  const totalSlides = Math.ceil(cards.length / cardsPerPage);
  const currentSlide = Math.floor(currentIndex / cardsPerPage) + 1;

  const handleBack = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - cardsPerPage, 0));
  };

  const handleForward = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + cardsPerPage, cards.length - 1)
    );
  };

  return (
    <div>
      <div className="CardCarouselBox">
        {cards.slice(currentIndex, currentIndex + cardsPerPage).map((card) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            imageSrc={card.image}
          />
        ))}
      </div>
      <div className="carouselButtonDiv">
        <button
          onClick={handleBack}
          disabled={currentIndex === 0}
          className="carouselButton"
        >
          <FaChevronLeft color={currentIndex === 0 ? "#AFAFAF" : "#424961"} />
        </button>
        <span style={{ color: "#424961" }}>{currentSlide}/{totalSlides}</span>
        <button
          onClick={handleForward}
          disabled={currentIndex >= cards.length - cardsPerPage}
          className="carouselButton"
        >
          <FaChevronRight
            color={
              currentIndex >= cards.length - cardsPerPage
                ? "#AFAFAF"
                : "#424961"
            }
          />
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
