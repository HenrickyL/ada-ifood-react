import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const TypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
    justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const TypeCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    width: 20rem;
    height: 8rem;
`;

export const TypeName = styled.h3`
  margin-top: 0.5rem;
  font-size: 1.2rem;
`;

export const TypeDescription = styled.p`
  font-size: 1rem;
  text-align: center;
`;