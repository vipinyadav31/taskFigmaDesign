import { Input, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./style.scss";

const HeaderSection = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <a href="#home">Home</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="#advertise">Advertise</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="#supports">Supports</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="#contact">Contact</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="header-section">
      {/* Navigation Menu */}
      <div className="header-nav">
        <div className="logo">
          <img src="header-logo.png" alt="" />
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#advertise">
            Advertise <DownOutlined size="small" />
          </a>
          <a href="#supports">
            Supports <DownOutlined size="small" />
          </a>
          <a href="#contact">Contact</a>
        </div>
        <Button className="default-btn" type="primary">
          Try for Free
        </Button>
        <Dropdown overlay={menu} className="nav-dropdown" trigger={["click"]}>
          <Button type="text" icon={<DownOutlined />} />
        </Dropdown>
      </div>

      <div className="header-content-wrapper">
        <div className="header-content">
          <h4>⭐⭐⭐⭐ Trusted by over 4,332 students</h4>
          <h1>Learn Design with Nia Matos</h1>
          <p>
            Get your blood tests delivered at home collect sample from the
            victory of the managements that supplies best design system
            guidelines ever.
          </p>
          <div className="search-box">
            <Input.Search placeholder="Search Course Name" />
          </div>
          <div className="sponsored-by">
            <span>Sponsored by:</span>
            <img src="paypal.png" alt="Paypal" />
            <img src="google.png" alt="Google" />
            <img src="Dropbox.png" alt="Dropbox" />
          </div>
        </div>
        <div className="header-video">
          <video
            className="header-video "
            height="400px"
            width="500px"
            controls
          >
            <source src="headerVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
