import { CheckOutlined } from '@ant-design/icons'

import React, { useCallback, useEffect, useState } from 'react'
import { QuestionsType } from '@/types'
import { Input } from 'antd'

type Props = {
  questions: QuestionsType[]
  steps: number
  setAllQuestionInCate: (data: QuestionsType[]) => void
}
enum TypeAnswers {
  text = 'text',
  select = 'select',
  radio = 'radio',
}

export default function Questions({ questions, steps, setAllQuestionInCate }: Props) {
  const [questionCurrent, setQuestionCurrent] = useState<QuestionsType>(questions[steps - 3])

  const setValueForAnswers = (value: string, id: string) => {
    if (questionCurrent?.type === TypeAnswers.text) {
      questions.forEach(i => {
        if (i.id === questionCurrent.id) {
          i.answers = [
            { answer: value, content: '', createdAt: '', id: '', parentId: '', isDeleted: false },
          ]
        }
      })
      setAllQuestionInCate([...questions])
    } else if (questionCurrent?.type === TypeAnswers.select) {
      questions
        .find(i => i.id === questionCurrent.id)
        ?.answers.forEach(i => {
          if (i.id === id) {
            i.answer = value
          } else {
            i.answer = undefined
          }
        })
      setAllQuestionInCate([...questions])
    }
  }

  useEffect(() => {
    setQuestionCurrent(questions[steps - 3])
  }, [steps, questions])

  const buttonRender = useCallback(() => {
    return (
      <>
        {questionCurrent?.type === TypeAnswers.text && (
          <>
            <Input
              onChange={e => setValueForAnswers(e.target.value, questionCurrent.id)}
              placeholder='Your Answers'
              value={questionCurrent.answers?.length > 0 ? questionCurrent.answers[0]?.answer : ''}
              className='INPUT_QUOTE'
            />
          </>
        )}

        {(questionCurrent?.type === TypeAnswers.select ||
          questionCurrent?.type === TypeAnswers.radio) &&
          questionCurrent?.answers?.map(i => {
            return (
              <span
                onClick={(e: any) => setValueForAnswers(i.content, i.id)}
                key={i.id}
                style={{
                  border: '2px solid #17C5C5',
                  borderRadius: 8,
                  backgroundColor: i?.answer ? '#146464' : 'black',
                }}
                className='w-[268px] h-[65px] text-[#FFFFFF] text-[25px] flex items-center pl-3 justify-between mb-4 cursor-pointer'>
                A. {i.content}
                {i?.answer && <CheckOutlined className='mr-3' />}
              </span>
            )
          })}
      </>
    )
  }, [questionCurrent])

  return (
    <div className='flex flex-col'>
      <div className='text-[#17C5C5] text-[40px]'> 2. {questionCurrent?.content}</div>
      {buttonRender()}
    </div>
  )
}
