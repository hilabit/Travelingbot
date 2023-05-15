import styled from 'styled-components'
import { HomeForm } from '@components/HomeForm'

const Title = styled.h1`
  color: purple;
`
const Home = () => {
  return (
    <main>
      <Title>Cool home screen</Title>
      <HomeForm />
    </main>
  )
}

export default Home