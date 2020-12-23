import React from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router'
import { Error } from '../../client/components/Error';
import { Spin } from 'antd';
import { MoviePreview } from '../../client/components/MoviePreview';
import { getMovie } from '../../client/helpers/api';

const Movie = () => {
  const router = useRouter()
  //TODO 
  const { id } = router.query
  const { data, isLoading, error } = useQuery(id, () => getMovie(id as string), {
    retry: false,
  })
  
  if(isLoading) return <Spin size="large" />
  if(!data || error) return <Error />

  return (
    <MoviePreview {...data}/>
  )
}

export default Movie;