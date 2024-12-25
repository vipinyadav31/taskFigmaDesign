import React from "react";
import { Card, Row, Col, Button } from "antd";
import "./style.scss";

const CoreFeatures = () => {
  return (
    <div className="features-container">
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Card
            hoverable
            style={{
              width: 200,
            }}
            className="feature-card"
          >
            <h1 className="feature-card-title">80K+</h1>

            <p className="feature-card-description">
              We have more than students
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Card hoverable className="feature-card">
            <h1 className="feature-card-title">150+</h1>
            <p className="feature-card-description">
              Free online tutorials videos available
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={12}>
          <div className="core-features">
            <h2 className="core-features-title">CORE FEATURES</h2>
            <h1 className="core-features-subtitle">
              Smart Jackpots that you may love this anytime & anywhere
            </h1>
            <p className="core-features-description">
              Our platform offers a variety of smart jackpots that are
              accessible from any device, ensuring you never miss out on the
              excitement.
            </p>
            <Button type="primary" className="default-btn">
              Explore More
            </Button>
          </div>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Card hoverable className="feature-card">
            <h1 className="feature-card-title">90+</h1>
            <p className="feature-card-description">
              Daily updated blog post maintain
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Card hoverable className="feature-card">
            <h2 className="feature-card-title">& 3M</h2>
            <p className="feature-card-description">
              Job posted everydays with qualification
            </p>
          </Card>
        </Col>
        {/* <Col xs={24} sm={12} md={8} lg={8}>
          <div className="core-features">
            <h2 className="core-features-title">CORE FEATURES</h2>
            <h1 className="core-features-subtitle">
              Smart Jackpots that you may love this anytime & anywhere
            </h1>
            <p className="core-features-description">
              Our platform offers a variety of smart jackpots that are
              accessible from any device, ensuring you never miss out on the
              excitement.
            </p>
            <Button type="primary" className="default-btn">
              Explore More
            </Button>
          </div>
        </Col> */}
      </Row>
    </div>
  );
};

export default CoreFeatures;
