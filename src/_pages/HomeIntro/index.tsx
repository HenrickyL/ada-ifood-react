import { Description, HomeContainer, Title, TypeCard, TypeDescription, TypeName, TypesContainer } from "./style"

export const HomeIntro = ()=>{
    return(
        <HomeContainer>
            <Title>Bem-vindo ao EcoModa!</Title>
            <Description>
                O EcoModa é um e-commerce dedicado a promover produtos ecológicos e reciclados, fornecendo opções sustentáveis para o seu estilo de vida.
            </Description>
            <TypesContainer>
                <TypeCard>
                    <TypeName>Roupas Ecológicas</TypeName>
                    <TypeDescription>Explore nossa coleção de roupas feitas com materiais orgânicos e sustentáveis.</TypeDescription>
                </TypeCard>
                <TypeCard>
                    <TypeName>Acessórios Reciclados</TypeName>
                    <TypeDescription>Descubra nossos acessórios elegantes e funcionais feitos a partir de materiais reciclados.</TypeDescription>
                </TypeCard>
                <TypeCard>
                    <TypeName>Produtos Veganos</TypeName>
                    <TypeDescription>Conheça nossa linha de produtos veganos, livres de crueldade animal e ambientalmente conscientes.</TypeDescription>
                </TypeCard>
            </TypesContainer>
        </HomeContainer>
    )
}