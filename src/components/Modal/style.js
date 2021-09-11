import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  padding-top: 60px;
`

export const Content = styled.div`
    width: 50%;
    height: 500px;
    background-color: #fff;
    margin: auto;
    border-radius: 5px;
    padding: 10px;
    div.content-header{
        margin-top: 100px;
    }
    div.content-footer{
        width: 20%;
        margin-top: 20px;
    }
`

export const Button = styled.div`
    display: block;
    padding: 10px 15px;
    border: none;
    outline: none;
    background-color: #d9534f;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
`
export const ContainerFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 10px;
    position: relative;
`

export const Input = styled.input`
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 10px;

    :focus{
        outline: none;
    }
    :hover{
        cursor: pointer;
    }
`
export const W45 = styled.div`
    width: 49%;
    label{
       display: block;
       margin-bottom: 10px;
       margin-top: 10px;
    }
`

export const W100 = styled.div`
    width: 100%;
`
export const Image = styled.img`
    display: block;
    border-radius: 50%;
    margin: auto;
`
export const ContainerLink = styled.div`
    a{
        text-decoration: none;
    }
`