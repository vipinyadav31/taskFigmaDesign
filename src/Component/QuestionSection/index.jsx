import React from "react";
import { Collapse, Typography } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import "./style.scss";

const { Panel } = Collapse;
const { Title, Text } = Typography;

const QuestionSection = () => {
  const faqData = [
    {
      question: "How to contact with riders emergency?",
      answer:
        "You can contact riders emergency by calling the support hotline available on your app or website.",
    },
    {
      question: "App installation failed, how to update system information?",
      answer:
        "Ensure your device has sufficient storage and compatible OS. Update system settings to the latest version.",
    },
    {
      question: "Website response taking time, how to improve?",
      answer:
        "An FAQ is a list of frequently asked questions and answers on a particular topic. The purpose is generally to provide information and resolve common queries.",
    },
    {
      question: "New update fixed all bugs and issues",
      answer:
        "Our latest update addresses all known bugs and improves system performance for better usability.",
    },
  ];

  const renderIcon = (isActive) =>
    isActive ? <MinusOutlined /> : <PlusOutlined />;

  return (
    <div className="faq-section">
      <div className="faq-header">
        <Text className="faq-tag">FREQUENT QUESTION</Text>
        <Title level={2}>Do you have any question</Title>
      </div>
      <Collapse
        accordion
        expandIcon={({ isActive }) => renderIcon(isActive)}
        className="faq-collapse"
      >
        {faqData.map((item, index) => (
          <Panel header={item.question} key={index}>
            <Text>{item.answer}</Text>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default QuestionSection;
