import React from "react";
import { Card, Button, Typography, Tag } from "antd";
import { EyeOutlined, StarFilled } from "@ant-design/icons";
import "./style.scss";

const { Title, Text } = Typography;

const TutorialSection = () => {
  return (
    <div className="tutorial-section">
      <div className="card-container">
        <Card className="tutorial-card">
          <img src="leptop3.jpg" alt="Thumbnail" className="card-thumbnail" />
          <div className="card-content">
            <Tag color="green" className="free-tag">
              Free tutorial
            </Tag>
            <Title level={5}>
              Convert your web layout theming easily with sketch zeplin
              extension
            </Title>
            <div className="rating">
              <StarFilled style={{ color: "#FFD700" }} />
              <Text>5.0 (392 reviews)</Text>
            </div>
            <div className="views">
              <EyeOutlined />
              <Text>1,037 students watched</Text>
            </div>
          </div>
        </Card>
      </div>
      <div className="description">
        <Text className="section-tag">FREE TUTORIAL</Text>
        <Title level={2}>
          More than thousand of free tutorial upload every weeks
        </Title>
        <Text className="section-text">
          Get your tests delivered at let home collect sample from the victory
          of the managments that supplies best design system guidelines ever.
          Get your tests delivered at let home collect sample.
        </Text>
        <Button type="primary" className="default-btn">
          Explore details
        </Button>
      </div>
    </div>
  );
};

export default TutorialSection;
