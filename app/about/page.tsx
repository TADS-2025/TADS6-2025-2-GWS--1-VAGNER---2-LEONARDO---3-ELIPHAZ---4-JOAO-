"use client";

import Link from "next/link";
import {
  Container,
  Main,
  Title,
  Description,
} from "../_components/sharedstyles"; // Removidos os componentes que não existem

export default function About() {
  return (
    <Container>
      <Main>
        <Title>🚀 Sobre o IF-Investe</Title>
        
        <Description style={{ maxWidth: '800px', lineHeight: '1.6', textAlign: 'center', marginBottom: '40px' }}>
          Bem-vindo ao nosso espaço dedicado a desmistificar o mundo das finanças e investimentos!
        </Description>

        {/* Usando uma div normal e tags <p> e <h2> para o conteúdo */}
        <div style={{ textAlign: 'left', maxWidth: '800px', lineHeight: '1.7', fontSize: '1.1rem' }}>
          
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
            Nossa Missão
          </h2>
          <p>
            O <strong>IF-Investe</strong> nasceu como um projeto da disciplina de GWS no Instituto Federal do Paraná (IFPR) - Campus Telêmaco Borba, com um objetivo claro: tornar a educação financeira acessível a todos. Acreditamos que o conhecimento é a ferramenta mais poderosa para construir um futuro financeiro seguro e independente.
          </p>

          <h2 style={{ fontSize: '2rem', marginTop: '40px', marginBottom: '1rem', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
            O que você vai encontrar aqui?
          </h2>
          <p>
            Navegue por nossos artigos para aprender desde os conceitos mais básicos, como organizar seu orçamento, até estratégias mais avançadas de investimentos em Renda Fixa, Ações e Criptomoedas. Nosso conteúdo é criado por e para jovens que buscam a independência financeira, sempre com uma linguagem clara e direta.
          </p>

          <h2 style={{ fontSize: '2rem', marginTop: '40px', marginBottom: '1rem', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
            Quem Somos
          </h2>
          <p>
            Somos um grupo de estudantes de tecnologia apaixonados por finanças, dedicados a compartilhar conhecimento e crescer junto com nossa comunidade de leitores. Este blog é o resultado prático do nosso aprendizado e um convite para que você inicie sua jornada no mundo dos investimentos conosco.
          </p>
        </div>
        
        <Description style={{ marginTop: '50px' }}>
          <Link href="/">&larr; Voltar para a Home</Link>
        </Description>
      </Main>
    </Container>
  );
}