import React from 'react';
import { MovieBasic } from '../models/movie';
import { CollectionCard } from './CollectionCard';
import { Row, Col } from 'antd';

type Props = { 
  data?: MovieBasic[],
  isLoading: boolean;
}

export const ResultsList = ({ data, isLoading }: Props) => {
  if (isLoading) {
    return <span>Loading...</span>
  }
  return (
    <Row>
      {data?.map(d =>
        <Col span={8}>
          <CollectionCard title={d.Title} poster={d.Poster} type={d.Type} id={d.imdbID} />  
        </Col>
      )}
    </Row>
  )
}