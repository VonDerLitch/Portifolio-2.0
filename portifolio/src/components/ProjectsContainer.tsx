import terminal6 from '../img/terminal6.jpg'
import terminal7 from '../img/terminal7.jpg'
import terminal8 from '../img/terminal8.jpg'
import terminal9 from '../img/terminal9.jpg'


import '../styles/components/projectscontainer.sass'

const ProjectsContainer = () => {
    return <section className="projects-container">
        <h2>Principais Projetos </h2>
        <p>Aqui é uma sessão de alguns de meus principais projetos, para mais informações podem seguir meu GitHub.</p>
        <h2>CRUD_WAMP</h2>
        <p>Nesse projeto eu utilizei o WAMP, Windows, Apache, Mysql e PHP para fazer CRUD com uma interface. Foi bem difícil esse projeto para mim, demorei em torno de uma semana, estudando e vendo vídeos, para alcançar meu objetivo e ao mesmo tempo fazer um projeto com a minha identidade. Não dominei, por completo as ferramentas, porém me identifiquei bastante com MSQL, realmente foi muito divetido, e gratificante no final. Mas segue os estudos para mais implementos e desenvolvimento.</p>
        <img src={terminal6} alt="" />
        <h2>Shodo_Automatic</h2>
        <p>Este projeto foi um desafio, Tinha acabado de entrar na empresa Andrade Maia Advogados, e eles precisavam acessar o Shodô nos servidores, porém o acesso tinha que ser limitado, já que outras pessoas precisavam acessar o assinador. Então o pessoal queria contratar uma empresa para fazer o trabalho, e eu como um bom Dev, me interei no assunto e decidi desenvolver o Shodo Automatic, um mês de testes nos servidores e algumas versões que eu lancei. E consegui chegar no resultado que queria, com uma interface de fácil entendimento e com um tutorial, de como utilizar em vídeo.</p>
        <img src={terminal7} alt="" />
        <h2>AM_Audience</h2>
        <p>Um projeto feito com Java, Spring Boot para o Back-end  e Angular para o front end, utilizando o bucket da google e a API Speech to text, um projeto bastante ousado onde eu e mais um Dev conseguimos um resultado bastante satisfatório. </p>
        <img src={terminal8} alt="" />
        <h2>Project Manager</h2>
        <p>Neste projeto eu tive o prazer de participar e construir um sistema que permite os colaboradores gerenciem projetos e atividades de maneira centralizada, garantindo eficiência e praticidade. Optamos pelo robusto Framework Django para o back-end, proporcionando segurança e integridade aos dados armazenados em um banco relacional, e para o front-end optamos por utilizar HTML, CSS e JavaScript. As principais funcionalidades dele na versão Homologação 1.0 é de Modelagem de Banco de dados, administração do banco via Django, gestão de projetos diretamente no site, inserção automatizada de informações em bancos de dados, dashboard com indicadores para análise de dados, além de um botão de pesquisa inteligente, que não apenas permite procurar pelo nome do projeto, mas também pelo dono do projeto. Temos grandes ideias para esse projeto, vale apena acompanhar.</p>
        <img src={terminal9} alt="" />
        <br />
        <br />
        <a href="https://github.com/VonDerLitch?tab=repositories" target="_blanc" className="btn">Ver Projetos</a>
    </section>
};

export default ProjectsContainer;