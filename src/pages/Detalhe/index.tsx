import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { Container } from './styles';

interface ProfessorRota {
  professor: string;
}

interface DadosCadastrados {
  novaDisciplina: string;
  novoProfessor: string;
  novoDiaSemana: string;
  novoPeriodo: string;
  novoHorario: string;
}

const Detalhe: React.FC = () => {
  const { params } = useRouteMatch<ProfessorRota>();
  let ProfessorDados;

  const storagedRepositories = localStorage.getItem('@Professores');
  const [dados, setDados] = useState<DadosCadastrados>({} as DadosCadastrados);

  if (storagedRepositories) {
    const storagedRepositoriesArray: DadosCadastrados[] = JSON.parse(
      storagedRepositories,
    );

    ProfessorDados = storagedRepositoriesArray.find(
      busca => busca.novoProfessor === params.professor,
    );
  }

  return (
    <Container>
      <h1>EDUCA +</h1>
      <strong>Atividades do Professor:</strong>

      <p>Disciplina: {ProfessorDados?.novaDisciplina}</p>
      <p>Periodo: {ProfessorDados?.novoPeriodo}</p>
      <p>Dia da Semana: {ProfessorDados?.novoDiaSemana}</p>
      <p>Horario: {ProfessorDados?.novoHorario}</p>
      <Link to="/">Voltar ...</Link>
    </Container>
  );
};

export default Detalhe;
