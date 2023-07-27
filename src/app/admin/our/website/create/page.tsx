'use client'
import { createOurService } from '@/services/ourService'
import { OurTypeEnum } from '@/types'
import { getBase64 } from '@/utils/funtion'
import { PlusOutlined } from '@ant-design/icons'
import { useMutation } from '@tanstack/react-query'
import { Button, Card, Col, Form, Input, Modal, Row, Upload, UploadFile, UploadProps } from 'antd'
import { RcFile } from 'antd/es/upload'
import React, { useState } from 'react'

const { TextArea } = Input

export default function page() {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const createMutation = useMutation(createOurService, {
    onSuccess: data => {
      console.log('datadata', data)
    },
    onError: err => {
      console.log('err', err)
    },
  })

  const onFinish = (data: any) => {
    const date = new Date()

    createMutation.mutate({
      ...data,
      typeOur: OurTypeEnum.website,
      thumbnailImage: previewImage,
      fileName: date.toISOString() + previewTitle,
    })
  }

  const handleCancel = () => setPreviewOpen(false)

  const handlePreview = async (file: UploadFile) => {
    setPreviewOpen(true)
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1))
  }

  const handleChange: UploadProps['onChange'] = async ({ fileList }) => {
    setFileList(fileList)
    if (fileList.length === 0) return

    const file = fileList[0]

    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1))
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  return (
    <div className='w-full h-full'>
      <Card
        className='w-full h-full'
        title='Our Website'
        extra={
          <Row>
            <Col>
              <Button>Create</Button>
            </Col>
          </Row>
        }>
        <Form name='basic' layout='vertical' onFinish={onFinish} autoComplete='off'>
          <Row gutter={24} className='mt-2 items-center'>
            <Col span={12}>
              <Form.Item
                label='Website Name'
                name='name'
                rules={[{ required: true, message: 'Please input your category!' }]}>
                <Input placeholder='Category....' />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label='Description'
                name='description'
                rules={[{ required: true, message: 'Please input your category!' }]}>
                <TextArea placeholder='Description....' />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Form.Item label='Image' name='name'>
              <Upload
                action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                listType='picture-card'
                onPreview={handlePreview}
                onChange={handleChange}>
                {fileList.length === 0 && uploadButton}
              </Upload>
              <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img alt='example' style={{ width: '100%' }} src={previewImage} />
              </Modal>
            </Form.Item>
          </Row>
          <Row className='flex justify-end'>
            <Button htmlType='submit'>Create New Service </Button>
          </Row>
        </Form>
      </Card>
    </div>
  )
}