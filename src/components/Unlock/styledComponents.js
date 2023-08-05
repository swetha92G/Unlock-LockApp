// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #000000, #090121);
  min-height: 100vh;
`
export const LockImage = styled.img`
  width: 100px;
  margin-top: 20px;
  margin-bottom: 40px;
`
export const Text = styled.p`
  color: #f2f5f4;
  font-size: 32px;
  font-family: 'Roboto';
  line-height: 1.6;
  @media screen and (min-width: 768px) {
    font-size: 24px;

    line-height: 1.5;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
`
export const Button = styled.button`
  text-align: center;
  color: #f2f5f4;
  font-size: 20px;
  font-family: 'Roboto';
  background-color: #42c5ed;
  border-radius: 10px;
  border: none;
  height: 40px;
  width: 130px;
  padding: 7px;
  cursor: pointer;
  outline: none;
`
