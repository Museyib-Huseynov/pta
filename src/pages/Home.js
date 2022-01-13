import { Input } from '../components'
import styled from 'styled-components'

const Home = () => {
  return (
    <HomeWrapper>
      <Input />
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 350px auto;
  // align-items: center;
`
export default Home
