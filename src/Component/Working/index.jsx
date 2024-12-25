import React from "react";
import { Row, Col } from "antd";
import "./style.scss";

const steps = [
  {
    id: 1,
    title: "Set disbursement Instructions",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 2,
    title: "Assembly retrieves funds from your account",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 3,
    title: "Assembly initiates disbursement",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 4,
    title: "Customer receives funds payment",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
];

const Working = () => {
  return (
    <div className="how-it-works">
      <h5 className="subtitle">WHAT'S THE FUNCTION</h5>
      <h2 className="title">Let’s see how it works</h2>
      <Row gutter={[16, 32]} justify="center">
        {steps.map((step, index) => (
          <Col key={step.id} xs={24} sm={12} md={6}>
            <div className="step-card">
              <div className="step-number">
                {step.id.toString().padStart(2, "0")}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step-connector"></div>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Working;
