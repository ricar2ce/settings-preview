import React from 'react';
import ReactDOM from 'react-dom';

import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import "@fontsource/fira-sans";
import './index.css'

import Preview from "./components/Preview/Preview";
import SettingsForm from "./components/SettingsForm/SettingsForm";

ReactDOM.render(
  <React.StrictMode>
      <Row justify="space-between" align="top" className="characters-style">
          <Col  xs={24} sm={24} md={12} lg={12} xl={12}>
              <SettingsForm/>
          </Col>
          <Col className="preview-col" xs={0} sm={0} md={12} lg={12} xl={12}>
              <Preview url="http://direccion.dominio.com" color="blue" name="dartesoft" />
          </Col>
      </Row>
  </React.StrictMode>,
  document.getElementById('root')
);

