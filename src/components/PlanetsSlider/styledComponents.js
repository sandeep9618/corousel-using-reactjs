import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background-image: url('https://assets.ccbp.in/frontend/react-js/planets-app/planets-bg-img.png');
  min-height: 80vh;
  padding: 40px;
  @media screen and (min-width: 768px) {
    padding: 80px;
  }
`

export const Heading = styled.h1`
  color: #05acff;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 600;
  text-align: center;
`
