import terminal6 from '../img/terminal6.jpg'
import terminal7 from '../img/terminal7.jpg'
import terminal8 from '../img/terminal8.jpg'

import '../styles/components/projectscontainer.sass'

const ProjectsContainer = () => {
    return <section className="projects-container">
        <h2>Principais Projetos </h2>
        <p>Aqui é uma sessão de alguns de meus principais projetos, para mais informações podem seguir meu GitHub.</p>
        <h2>CRUD_WAMP</h2>
        <p>Nesse projeto eu utilizei o WAMP, Windows, Apache, Mysql e PHP para fazer CRUD com uma interface. Foi bem difícil esse projeto para mim, demorei em torno de uma semana, esrudando e vendo videos, para alcançar meu objetivo e ao mesmo tempo fazer um projeto com a minha identidade. Não dominei, por completo as ferramentas, porém me identifiquei bastante com MSQL, realmente foi muito divetido, e gratificante no final. Mas segue os estudos para mais implementos e desenvolvimento.</p>
        <img src={terminal6} alt="" />
        <h2>Shodo_Automatic</h2>
        <p>Este projeto foi um desafio, Tinha acabado de entrar na empresa Andrade Maia Advogados, e eles precisavam acessar o Shodô nos servidores, porém o acesso tinha que ser limitado, já que outras pessoas precisavam acessar o assinador. Então o pessoal queria contratar uma empresa para fazer o trabalho, e eu como um bom Dev, me interei no assunto e decidi desenvolver o Shodo Automatic, um mês de testes nos servidores e algumas versões que eu lancei. E consegui chegar no resultado que queria, com uma interface de fácil entendimento e com um tutorial, de como utilizar em vídeo.</p>
        <img src={terminal7} alt="" />
        <h2>AM_Audience</h2>
        <p>Um projeto feito com Java, Spring Boot para o Back-end  e Angular para o front end, utilizando o bucket da google e a API Speech to text, um projeto bastante ousado onde eu e mais um Dev conseguimos um resultado bastante satisfatório. </p>
        <img src={terminal8} alt="" />
        <br />
        <br />
        <a href="https://github.com/VonDerLitch?tab=repositories" target="_blanc" className="btn">Ver Projetos</a>
    </section>
};

export default ProjectsContainer;