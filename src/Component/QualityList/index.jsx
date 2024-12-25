import React from "react";
import { Card, List, Rate, Button } from "antd";
import "./style.scss";

const courses = [
  {
    id: 1,
    title:
      "Professional graphic design tutorial full course with exercise file",
    rating: 5,
    reviews: 392,
    students: 2538,
    duration: "4 hrs",
    videoCount: 7,
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments.",
  },
  {
    id: 2,
    title: "Become ultimate photoshop expert within 30 days",
    rating: 4,
    reviews: 392,
    students: 2538,
    duration: "4 hrs",
    videoCount: 7,
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    features: [
      "How to reduce file pixel dimensions without losing quality",
      "Create vector file from rasterize layer styles",
      "How to make logo pixel perfects with different extension",
      "Make color gradient with photoshop built-in tools",
    ],
  },
  {
    id: 3,
    title: "After effects animation tutorial with photoshop documents",
    rating: 1.5,
    reviews: 392,
    students: 2538,
    duration: "4 hrs",
    videoCount: 7,
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments.",
  },
  {
    id: 4,
    title: "Adobe illustrator vector art design mockup",
    rating: 2.5,
    reviews: 392,
    students: 2538,
    duration: "4 hrs",
    videoCount: 7,
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments.",
  },
];

const QualityList = () => {
  return (
    <div className="course-list">
      <h4 style={{ color: "#ef9e48" }}>Quality features</h4>
      <h2>Popular Designing Course</h2>
      <List
        align="center"
        dataSource={courses}
        renderItem={(course) => (
          <Card className="course-card">
            <div className="course-header">
              <Rate disabled defaultValue={course.rating} />
              <span>{`${course.reviews} reviews`}</span>
              <span className="students">{`${course.students} students watched`}</span>
            </div>
            <h3>{course.title}</h3>
            <div className="course-footer">
              <Button type="primary" className="default-btn">
                {course.videoCount} Video Classes | {course.duration}
              </Button>
            </div>
            <p>{course.description}</p>
            {course.features && (
              <ul className="course-features">
                {course.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}
          </Card>
        )}
      />
    </div>
  );
};

export default QualityList;
