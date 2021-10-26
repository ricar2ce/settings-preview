import React, {memo} from 'react';
import {Col, Row} from "antd";
import SettingsForm from "./components/SettingsForm/SettingsForm";
import Preview from "./components/Preview/Preview";

function App() {
    return (
        <Row justify="space-between" align="top" className="characters-style">
            <Col  xs={24} sm={24} md={13} lg={13} xl={13}>
                <SettingsForm/>
            </Col>
            <Col className="preview-col" xs={0} sm={0} md={11} lg={11} xl={11}>
                <Preview />
            </Col>
        </Row>
    );
}

export default memo(App);