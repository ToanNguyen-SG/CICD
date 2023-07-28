'use client'
import { createOurService } from '@/services/ourService'
import { OurTypeEnum } from '@/types'
import { getBase64 } from '@/utils/funtion'
import { PlusOutlined } from '@ant-design/icons'
import { useMutation } from '@tanstack/react-query'
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Upload,
  UploadFile,
  UploadProps,
} from 'antd'
import { useForm } from 'antd/es/form/Form'
import { RcFile } from 'antd/es/upload'
import React, { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

const { TextArea } = Input

const selectItems = [
  {
    label: 'Game',
    value: 'game',
  },
  {
    label: 'Service',
    value: 'service',
  },
  {
    label: 'Website',
    value: 'website',
  },
  {
    label: 'Mobile App',
    value: 'mobileApp',
  },
  {
    label: 'Campaigns',
    value: 'campaigns',
  },
  {
    label: 'Films',
    value: 'films',
  },
]

export default function page() {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [ourTypeSelected, setOurTypeSelected] = useState('')

  const [form] = useForm()

  const uploadImageRender = useCallback((): React.ReactNode => {
    return (
      <>
        {[
          OurTypeEnum.game.toString(),
          OurTypeEnum.films,
          OurTypeEnum.campaigns,
          OurTypeEnum.website,
        ].includes(ourTypeSelected) && (
          <Col span={12}>
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
          </Col>
        )}
      </>
    )
  }, [ourTypeSelected])

  const createMutation = useMutation(createOurService, {
    onSuccess: () => {
      toast.success('Create Successfully!!')
      form.resetFields()
      setPreviewTitle('')
      setFileList([])
    },
    onError: () => {
      toast.error('Err,Pls try again!!')
    },
  })

  const onFinish = (data: any) => {
    const date = new Date()

    createMutation.mutate({
      ...data,
      typeOur: ourTypeSelected,
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

  const handelChangeSelect = (value: string) => {
    setOurTypeSelected(value)
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  return (
    <div className='w-full h-full'>
      <Card className='w-full h-full' title='Our Service'>
        <Form form={form} name='basic' layout='vertical' onFinish={onFinish} autoComplete='off'>
          <Row gutter={24} className='mt-2 items-center'>
            <Col span={12}>
              <Form.Item
                label='Our Type'
                name='typeOur'
                rules={[{ required: true, message: 'Please input your type!' }]}>
                <Select
                  onChange={handelChangeSelect}
                  style={{ minWidth: 220 }}
                  options={selectItems}
                  placeholder='Select type'
                />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label='Service Name'
                name='name'
                rules={[{ required: true, message: 'Please input your category!' }]}>
                <Input placeholder='Category....' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label='Description' name='description'>
                <TextArea placeholder='Description....' />
              </Form.Item>
            </Col>

            {uploadImageRender()}
          </Row>
          <Row className='flex justify-end'>
            <Button htmlType='submit'>Create New Service </Button>
          </Row>
        </Form>
      </Card>
    </div>
  )
}
