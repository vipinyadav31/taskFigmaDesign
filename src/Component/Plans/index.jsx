import { Row, Col, Button, Card,  Radio } from "antd";
import "./style.scss";

const plansJson = [
  {
    title: "Free Plan",
    subtitle: "For small teams or office",
    features: [
      {
        text: "Ultimate access to all course, exercises and assessments",
        available: true,
      },
      {
        text: "Free access for all kind of exercise corrections with downloads.",
        available: true,
      },
      {
        text: "Total assessment corrections with free download access system",
        available: true,
      },
      {
        text: "Unlimited download of courses on the mobile app contents",
        available: false,
      },
      {
        text: "Download and print courses and exercises in PDF",
        available: false,
      },
    ],
    button: { text: "Start free trial", type: "default" },
  },
  {
    title: "Premium",
    subtitle: "For startup enterprise",
    price: "49.99/mo",
    features: [
      {
        text: "Ultimate access to all course, exercises and assessments",
        available: true,
      },
      {
        text: "Free access for all kind of exercise corrections with downloads.",
        available: true,
      },
      {
        text: "Total assessment corrections with free download access system",
        available: true,
      },
      {
        text: "Unlimited download of courses on the mobile app contents",
        available: true,
      },
      {
        text: "Download and print courses and exercises in PDF",
        available: true,
      },
    ],
    recommended: true,
    button: { text: "Subscribe Now", type: "primary" },
  },
];

const Plans = () => {
  return (
    <div className="pricing-plans">
      <div className="header">
        <h5 className="subtitle">PRICING PLAN</h5>
        <h2 className="title">Choose your pricing policy</h2>
        <div className="toggle">
          <Radio.Group style={{ marginBottom: 8 }}>
            <Radio.Button value="top">Monthly Plan</Radio.Button>
            <Radio.Button value="left">Annual Plan</Radio.Button>
          </Radio.Group>
        </div>
      </div>

      <Row gutter={[16, 32]} justify="center">
        {plansJson.map((plan, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
              className={`plan-card ${plan.recommended ? "recommended" : ""}`}
              bordered={false}
              hoverable
            >
              {plan.recommended && <span className="badge">Recommended</span>}
              <h3 className="plan-title">{plan.title}</h3>
              <p className="plan-subtitle">{plan.subtitle}</p>
              {plan.price && (
                <p className="plan-price">
                  Starting from <strong>{plan.price}</strong>
                </p>
              )}
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={feature.available ? "available" : "unavailable"}
                  >
                    {feature.text}
                  </li>
                ))}
              </ul>
              <Button type={plan.button.type} className="default-btn">
                {plan.button.text}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Plans;
