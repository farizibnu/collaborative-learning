import React from 'react';
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Upload,
    Row,
    Col,
  } from 'antd';
import { FaPencilAlt } from "react-icons/fa";
import cover1 from '../data/cover2.png';
import avatar from '../data/avatar.jpg';

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const ProfileEdit = () => {
  return (
    <div>
        <div className='flex justify-center'>
            {/* Header Image */}
            <div className='relative flex w-11/12 justify-center'>
                <img className='h-32 w-full object-none rounded-lg relative' src={cover1} alt="cover" />
                <Form.Item className='absolute -bottom-4 right-2 bg-slate-50 hover:bg-slate-200 rounded-full h-8 w-8 items-center flex justify-center border-1 border-slate-300' valuePropName="fileList">
                    <Upload action="/upload.do" >
                        <button type="button">
                            <FaPencilAlt />
                        </button>
                    </Upload>
                </Form.Item>
                <div className='absolute left-10 -bottom-16'>
                    <img className='h-36 rounded-full relative' src={avatar} alt="Avatar" />
                    <Form.Item className='absolute -bottom-4 right-1 bg-slate-50 hover:bg-slate-200 rounded-full h-8 w-8 items-center flex justify-center border-1 border-slate-300' valuePropName="fileList">
                        <Upload action="/upload.do">
                            <button type="button">
                                <FaPencilAlt />
                            </button>
                        </Upload>
                    </Form.Item>
                </div>
            </div>
        </div>
        <div className='text-left mt-6 mx-64'>
            <p className='font-bold text-xl mb-6'>User Profile</p>
            <Form layout="vertical">
                <Row gutter={[16, 16]} >
                    <Col span={12}>
                        <Form.Item label="Nama">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Username">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Bio">
                            <TextArea rows={5} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} >
                    <Col span={12}>
                        <Form.Item label="About">
                            <TextArea rows={5} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Asal Kampus">
                            <Input />
                        </Form.Item>
                        <Row gutter={[16, 16]} >
                            <Col span={16}>
                                <Form.Item label="Jurusan">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="Semester">
                                    <InputNumber className='w-full'/>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
                        <Button type='primary' className='bg-sky-400 hover:bg-sky-500 text-white' htmlType="submit">
                            Save Changes
                        </Button>
                    </Form.Item>
                </Row>
            </Form>
            {/* Continue with the rest of the form items as needed */}
        </div>
    </div>
  );
};

export default ProfileEdit;
