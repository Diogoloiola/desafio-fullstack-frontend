import styled from 'styled-components';

export const Container = styled.section`
    margin-top: 30px;
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    thead{
        background-color: #dddddd;
    }
    td, th {
        border: 1px solid #dddddd;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }

`
export const Button = styled.button`
    display: block;
    padding: 10px 15px;
    background-color: #1598FA;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 5px;
    margin: auto;
    cursor: pointer;
`