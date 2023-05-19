import styled from 'styled-components'
import { useMutation } from 'react-query';
import axios from 'axios';

import { HomeForm } from '@components/HomeForm'

const Title = styled.h1`
  color: purple;
`

const postData = async (data) => {
  const response = await axios.post('/api/hello', data);
  return response.data;
};

const Home = () => {
  const handleSendFormData = (formData) => sendFormDataMutation.mutate(formData)

  const sendFormDataMutation = useMutation(postData, {
    onSuccess: (data) => {
      console.log('Got back:', data);
    },
  });

  return (
    <main>
      <Title>Cool home screen</Title>
      <p>Choose your destination</p>
      <HomeForm sendFormData={handleSendFormData} />
    </main>
  )
}

export default Home