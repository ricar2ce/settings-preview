import React from 'react';
import {Col, Row} from "antd";
import './InfoNote.css'

import Icon from "@mdi/react";
import { mdiAlertCircleOutline } from '@mdi/js';

function InfoNote(props) {
    return (
        <div className="info-note-card">
            <Row gutter={8}>
                <Col className="gutter-row" >
                    <Icon path={mdiAlertCircleOutline}
                          size={1}
                          horizontal
                          vertical
                    />
                </Col>
                <Col className="gutter-row" span={22}>
                    <Row>
                        <Col>
                            {props.title}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {props.info}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default InfoNote;