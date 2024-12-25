import React from "react";
import { Typography, Row, Col, Button } from "antd";
import "./style.scss";

const { Title, Link } = Typography;

const Footer = () => {
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { label: "Support Center", href: "#" },
        { label: "Customer Support", href: "#" },
        { label: "About Us", href: "#" },
        { label: "Copyright", href: "#" },
        { label: "Popular Campaign", href: "#" },
      ],
    },
    {
      title: "Our Information",
      links: [
        { label: "Return Policy", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Site Map", href: "#" },
        { label: "Store Hours", href: "#" },
      ],
    },
    {
      title: "My Account",
      links: [
        { label: "Press inquiries", href: "#" },
        { label: "Social media directories", href: "#" },
        { label: "Images & B-roll", href: "#" },
        { label: "Permissions", href: "#" },
      ],
    },
    {
      title: "Policy",
      links: [
        { label: "Application security", href: "#" },
        { label: "Software principles", href: "#" },
        { label: "Unwanted software policy", href: "#" },
        { label: "Responsible supply chain", href: "#" },
      ],
    },
  ];

  return (
    <div className="footer">
      <div className="footer-content">
        <Title level={2} className="footer-heading">
          Ready to learn design with Nia Matos
        </Title>
        <Button className="default-btn">Start Learning Today</Button>
      </div>
      <hr style={{width:"70%"}}/>
      <Row gutter={24} className="footer-links">

        {footerLinks.map((section, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Title level={5} >
              {section.title}
            </Title>
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Footer;
