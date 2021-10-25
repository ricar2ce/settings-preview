import React, {useCallback, useState} from 'react';
import {Avatar, Col, message, Modal, Row} from "antd";
import Icon from "@mdi/react";
import {mdiPackageUp} from "@mdi/js";
import './AvatarView.css'

function AvatarView({value, onChange}) {
    const [fileList, setFileList] = useState([]);
    const [{previewVisible,previewImage,previewTitle}, setState] = useState({
        previewVisible: false,
        previewImage: '',
        previewTitle: ''
    });

    const handleChange = useCallback(({target}) => {
        if (target.files && target.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                setFileList( e.target.result)
                onChange(e.target.result)
            };

            reader.readAsDataURL(target.files[0]);
        }
    }, [onChange]);

    const inputCharge = () => {
      document.getElementById('avatar-button-input').click();
    }

    const handlePreview = useCallback(() => {
        if (!Array.isArray(fileList)) {
            setState({
                previewImage: fileList,//file.preview
                previewVisible: true,
                previewTitle: 'Imagen del logo'
            });
        } else {
            message.warning('¡No ha seleccionado un logo aún!');
        }
    },[fileList]);

    const handleCancel = () => setState({previewVisible: false});

    return (
        <>
            <Row  justify="start" align="middle" gutter={16}>
                <Col>
                    <Avatar className="avatar-image pointer" size={67} src={fileList} onClick={handlePreview} > B </Avatar>
                </Col>
                <Col>
                    <input id="avatar-button-input" type='file' onChange={handleChange} className="avatar-button"/>
                    <label form="avatar-button-input" className="ant-btn-lg ant-input around-center pointer button-upload" onClick={inputCharge} >
                        <Icon className="button-upload-icon" path={mdiPackageUp} size={1} />
                        subir logo
                    </label>
                </Col>
            </Row>
            <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="imagen para el logo" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </>
    );
}

export default AvatarView;