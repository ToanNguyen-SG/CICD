import { PlusOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Modal, Row, Upload } from 'antd'
import { RcFile, UploadFile, UploadProps } from 'antd/es/upload'
import React, { useState } from 'react'

import { useMutation } from '@tanstack/react-query'
import { createOurItemsService } from '@/services/ourService'
import { OurItemsType } from '@/types'

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
  })

type Props = {
  id: string
}

export default function FormCreateItems({ id }: Props) {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>([])

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

  const createMutation = useMutation(createOurItemsService, {
    onSuccess: data => {
      console.log('datadata', data)
    },
    onError: err => {
      console.log('errerrerr', err)
    },
    onSettled: () => {
      setFileList([])
      setPreviewImage('')
      setPreviewTitle('')
    },
  })

  const onFinish = (data: any) => {
    const date = new Date()

    const payload: OurItemsType = {
      name: data.name,
      image: previewImage,
      fileName: date.toISOString() + previewTitle,
      ourId: id,
    }
    createMutation.mutate(payload)
  }

  return (
    <Form name='basic' layout='vertical' onFinish={onFinish} autoComplete='off'>
      <Row gutter={24} className='mt-2 items-center'>
        <Col span={12}>
          <Form.Item
            label='Service Name'
            name='name'
            rules={[{ required: true, message: 'Please input your category!' }]}>
            <Input placeholder='Category....' />
          </Form.Item>
        </Col>

        <Col span={12}>
          {/* <Form.Item
            label='Image'
            name='image'
            rules={[{ required: true, message: 'Please input your category!' }]}> */}
          {/* <input type='file' onChange={handleFileChange} />
            {base64File && <img src={base64File} alt='Uploaded File' />} */}
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
          {/* </Form.Item> */}
        </Col>
      </Row>

      <Row className='flex justify-end'>
        <Button htmlType='submit'>Create New Service </Button>
      </Row>
    </Form>
  )
}
