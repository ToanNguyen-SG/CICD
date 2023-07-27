'use client'
import ItemDetailCard from '@/components/ItemDetailCard'
import { deleteOurServiceItem, getDetailOurService } from '@/services/ourService'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Button, Card, Col, Collapse, Row, Spin, Tabs, TabsProps } from 'antd'
import React from 'react'
import { ItemsType, OurServiceType } from '../type'
import FormCreateItems from './FormCreateItems'
import Table, { ColumnsType } from 'antd/es/table'
import { DeleteOutlined } from '@ant-design/icons'
import { toast } from 'react-toastify'

export default function page({ params }: any) {
  const { id } = params

  const { data, isLoading, refetch } = useQuery(
    ['detailOurService'],
    (): Promise<OurServiceType> => {
      return getDetailOurService(id)
    }
  )

  const deleteMutation = useMutation(deleteOurServiceItem, {
    onError: () => {
      toast.error('Err, Pls try again')
      refetch()
    },
    onSuccess: () => {
      toast.success('Delete Successfully')
    },
  })

  const columns: ColumnsType<ItemsType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: image => {
        return (
          <div className='w-[48px] h-[48px]'>
            <img className='w-[48px] h-[48px]' src={image} />
          </div>
        )
      },
    },
    {
      title: 'Delete',
      dataIndex: 'id',
      key: 'delete',
      render: id => {
        return (
          <Button
            onClick={() => deleteMutation.mutate(id)}
            type='dashed'
            icon={<DeleteOutlined />}
          />
        )
      },
    },
  ]

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Views`,
      children: (
        <div className='w-full h-full'>
          <Spin spinning={isLoading}>
            <Table
              className='w-full h-full'
              scroll={{ x: 'max-content', y: 'max-content' }}
              columns={columns}
              rowKey={record => record.id}
              dataSource={data?.items || []}
              loading={isLoading}
            />
          </Spin>
        </div>
      ),
    },
    {
      key: '2',
      label: `Create New Item`,
      children: <FormCreateItems refetch={refetch} id={id} />,
    },
  ]

  return (
    <div className='w-full h-full'>
      <Card
        className='w-full h-full'
        title='Our Service'
        extra={
          <Row>
            <Col>
              <Button>Create</Button>
            </Col>
          </Row>
        }>
        <Collapse
          defaultActiveKey={['1', '2']}
          expandIconPosition='end'
          items={[
            {
              key: '1',
              label: <b>Information</b>,
              children: (
                <Spin size='small' spinning={isLoading}>
                  <Row gutter={32}>
                    <Col span={12}>
                      <ItemDetailCard title='Name' value={data?.name || '--'} />
                    </Col>
                    <Col span={12}>
                      <ItemDetailCard title='Description' value={data?.description || '--'} />
                    </Col>
                  </Row>
                </Spin>
              ),
            },
            {
              key: '2',
              label: <b>Item</b>,
              children: <Tabs defaultActiveKey='1' items={items} />,
            },
          ]}
        />
      </Card>
    </div>
  )
}
