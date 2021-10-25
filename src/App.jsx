import React, {memo} from 'react';
import {Col, Row} from "antd";
import SettingsForm from "./components/SettingsForm/SettingsForm";
import Preview from "./components/Preview/Preview";

function App() {
    return (
        <Row justify="space-between" align="top" className="characters-style">
            <Col  xs={24} sm={24} md={12} lg={12} xl={12}>
                <SettingsForm/>
            </Col>
            <Col className="preview-col" xs={0} sm={0} md={12} lg={12} xl={12}>
                <Preview url="http://direccion.dominio.com" color="blue" name="dofleini" />
            </Col>
        </Row>
    );
}

export default memo(App);