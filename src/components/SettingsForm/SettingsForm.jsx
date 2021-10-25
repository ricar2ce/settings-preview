import React, {useCallback} from 'react'
import {Button, Form} from 'antd'
import FormBuilder from 'antd-form-builder'
import './SettingsForm.css'

import InfoNote from "./components/InfoNote/InfoNote";
import AvatarView from "./components/AvatarView/AvatarView";
import RadioColorGroup from "./components/RadioColorGroup/RadioColorGroup";

export default function SettingsForm () {
    const [form] = Form.useForm()
    const handleFinish = useCallback(values => console.log('Submit: ', values), [])

    const getMeta = () => {
        return {
            columns: 1,
            initialValues: {obj: {input: 12}},
            fields: [
                {
                    key: 'logo',
                    name: 'logo',
                    label: 'Logo del espacio',
                    widget: AvatarView,
                    forwardRef: true,
                    colSpan: 24,
                },
                {
                    key: 'note1',
                    render() {
                        return (
                            <fieldset>
                                <InfoNote
                                    title="Este logo identificará tu espacio entre el resto."
                                    info="Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con fondo transparente."
                                />
                            </fieldset>
                        )
                    },
                },
                {
                    key: 'name',
                    label: 'Nombre del espacio',
                    placeholder: "Ep: Mi espacio de trabajo",
                    colSpan: 24,
                },
                {
                    key: 'url',
                    label: 'URL del espacio (dirección web)',
                    placeholder: "Ep: mi.dominio",
                    initialValues: { suffix: ".dofleini.com" },
                    colSpan: 24,
                },
                {
                    key: 'note2',
                    render() {
                        return (
                            <fieldset>
                                <InfoNote
                                    title="Puedes cambiar la URL de tu espacio (dirección web) en cualquier momento, pero por cortesía hacia tus compañeros de trabajo y otros usuarios de Plankton, porfavor no lo hagas muy seguido :)"
                                    info="Nota: Si cambias la URL de tu espacio, Plankton automáticamente redireccionará desde la antigua dirección hacia la nueva. En cualquier caso, deberías asegurarte que tus compañeros sepan acerca del cambio porque la dirección anterior pasará a estar libre y puede ser usada por otro espacio en el futuro."
                                />
                            </fieldset>
                        )
                    }
                },
                {
                    key: 'quantity',
                    label: '¿Cuántas personas trabajarán contigo, incluyéndote a ti?',
                    widget: 'radio-group',
                    buttonGroup: true,
                    forwardRef: true,
                    options: ['Sólo yo', '2 - 10', '11 - 25', '26 - 50', '51 - 100', '500 +'],
                    colSpan: 24,
                },
                {
                    key: 'note3',
                    render() {
                        return (
                            <fieldset>
                                <InfoNote
                                    title="Selecciona el tamaño de tu equipo."
                                    info="Confirma el rango de tu equipo de trabajo incluyendote a tí."
                                />
                            </fieldset>
                        )
                    }
                },
                {
                    key: 'color',
                    label: 'Color del tema',
                    widget: RadioColorGroup,
                    widgetProps:{
                        name: 'color',
                        initialValue: "#48B5FE",
                        colors: ["#39B0FF", "#04B58B", "#3E9C4B", "#B6BC00", "#E59100", "#E55C00", "#EE1F50", "#D6198A", "#B321F1", "#48B5FE"]
                    },
                    // getValueFromEvent: setValue(),
                    forwardRef: true,
                    colSpan: 24,
                },
                {
                    key: 'privacy',
                    label: 'Privacidad del espacio',
                    widget: 'radio-group',
                    buttonGroup: true,
                    className: 'radio-options-card',
                    forwardRef: true,
                    options: [
                        {
                            value: 'Privado',
                            label: (
                                <span>
                                    Privado
                                    <p style={{color: "#00000080"}}>El contenido será visible sólo para tí y los miembros de tu Organización.</p>
                                </span>
                            )
                        },
                        {
                            value: 'Público',
                            label: (
                                <>
                                    <span>Público</span>
                                    <p style={{color: "#00000080"}}>Cualquiera con el vínculo podrá ver la actividad de tu Organización.</p>
                                </>
                            )
                        }
                    ],
                    colSpan: 24,
                },
            ],
        }
    }

    return (
        <>
            <Form
                className="settings-form characters-styled"
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                // onValuesChange={forceUpdate}
            >
                <Form.Item className="form-header">
                    <span className="font-title">Configuración</span>
                </Form.Item>
                <FormBuilder meta={getMeta()} form={form} />
                <Form.Item className="form-footer">
                    <Button htmlType="submit" type="primary">
                        Guardar cambios
                    </Button>
                    <Button className="ml-md" htmlType="reset" type="default">
                        Descartar
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}