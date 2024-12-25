import React from "react";
import "./style.scss";
import { Rate } from "antd";
import { EyeOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";

const SecondSection = () => {
  const tutorials = [
    {
      id: 1,
      title: "How to work with prototype design with adobe xd featuring tools",
      image: "leptop.jpg",
      reviews: 392,
      rating: 5,
      students: "2,538 students watched",
    },
    {
      id: 2,
      title:
        "Create multiple artboard by using figma prototyping tools development",
      image: "leptop&men.jpg",
      reviews: 524,
      rating: 4.5,
      students: "3,532 students watched",
    },
    {
      id: 3,
      title: "Convert your web layout easily with sketch zeplin extension",
      image: "leptop3.jpg",
      reviews: 392,
      rating: 2.5,
      students: "1,037 students watched",
    },
    {
      id: 4,
      title: "Master the basics of graphic design using Canva",
      image: "leptop4.jpg",
      reviews: 450,
      rating: 4,
      students: "2,120 students watched",
    },
    {
      id: 5,
      title: "Learn advanced animation techniques with Adobe After Effects",
      image: "leptop5.jpg",
      reviews: 310,
      rating: 3.5,
      students: "1,890 students watched",
    },
    {
      id: 6,
      title: "Build responsive layouts with modern CSS and Flexbox",
      image: "leptop6.jpg",
      reviews: 478,
      rating: 4.8,
      students: "3,410 students watched",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % tutorials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? tutorials.length - 3 : prevIndex - 3
    );
  };

  return (
    <div className="tutorials">
      <div className="header">
        <h2 className="subheading">QUALITY FEATURES</h2>
        <h1 className="title">Tutorials that people love most</h1>
      </div>
      <div className="slider-controls">
        <LeftOutlined className="arrow prev-arrow" onClick={handlePrev} />
        <div className="cards">
          {tutorials.slice(currentIndex, currentIndex + 3).map((tutorial) => (
            <div key={tutorial.id} className="card">
              <div className="image-container">
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="image"
                />
                <div className="overlay">
                  <i className="fas fa-play-circle play-icon"></i>
                </div>
              </div>
              <div className="content">
                <div className="rating">
                  <Rate allowHalf defaultValue={tutorial.rating} disabled />
                  <span className="reviews">
                    {tutorial.rating} ({tutorial.reviews} reviews)
                  </span>
                </div>
                <h3 className="card-title">{tutorial.title}</h3>
                <div className="students">
                  <EyeOutlined /> {tutorial.students}
                </div>
              </div>
            </div>
          ))}
        </div>
        <RightOutlined className="arrow next-arrow" onClick={handleNext} />
      </div>
    </div>
  );
};

export default SecondSection;
