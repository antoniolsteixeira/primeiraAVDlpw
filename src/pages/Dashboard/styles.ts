import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 45px;
  }
`;

export const Conteudo = styled.div`
  h1 {
    font-size: 45px;
  }

  display: flex;
`;

export const Formulario = styled.div`
  width: 500px;
  margin-top: 400px;

  strong {
    margin-left: 98px;

    font-size: 20px;
  }

  form {
    margin-top: 20px;
    display: flex;

    flex-direction: column;

    input {
      width: 400px;
      height: 30px;

      &::placeholder {
        padding: 10px;
      }

      & + input {
        margin-top: 5px;
      }
    }

    button {
      margin-top: 20px;
      margin-left: 90px;

      width: 200px;
      height: 30px;
      background: #04d361;
      border: 1px solid black;
      border-radius: 5px;
      font-weight: bold;
      transition: background-color 0.2s;

      &:hover {
        background: #04d380;
      }
    }
  }
`;

export const Detalhe = styled.div`
  width: 1px;
  height: 300px;

  transform: rotate(5deg);

  margin-top: 380px;

  background: #04d361;
`;

export const Cadastrados = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 400px;
  margin-left: 90px;

  font-size: 22px;

  a {
    font-size: 18px;
    margin-top: 5px;

    p {
      color: black;
    }
  }
`;
