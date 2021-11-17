/* eslint-disable jsx-a11y/anchor-is-valid */
import barbeariaAlura from './barbeariaAlura.png'
import mataMosquito from './mataMosquito.png'
import seuZe from './seuZe.png'
import "./style.scss"

const Projetos = () => {
    const listaProjetos = [
        {
            id: 1,
            img: barbeariaAlura,
            nome: "BarbeariaAlura",
            descricao: "Projeto desenvolvido durante o Curso de HTML e CSS",
            linkPagina: "https://dombarbosa8.github.io/Alura---HTML-CSS/",
            linkGitHub: "https://github.com/DomBarbosa8/Alura---HTML-CSS"
        },
        {
            id: 2,
            img: mataMosquito,
            nome: "MataMosquito",
            descricao: "Projeto desenvolvido durante o Curso Desenvolvimento Web 2021",
            linkPagina: "https://dombarbosa8.github.io/Jogo-Mata-Mosquito/",
            linkGitHub: "https://github.com/DomBarbosa8/Jogo-Mata-Mosquito"
        },
        {
            id: 3,
            img: seuZe,
            nome: "SeuZe",
            descricao: "Projeto utilizando React, em homenagem ao senhor José Pelintra",
            linkPagina: "https://zepelintra.netlify.app/",
            linkGitHub: "https://github.com/DomBarbosa8/seuZe"
        }
    ]
    return (
        <div id="projetos">
            <div className="album py-5 bg-light" id="projetos">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            listaProjetos.map(({ id, nome, img, descricao, linkPagina, linkGitHub }) => {
                                return (


                                    <div key={id} className="col">
                                        <div className="card shadow-sm">
                                            <a href={linkPagina}><img className="bd-placeholder-img card-img-top" width="100%" height="225" src={img} aria-label="Placeholder: Thumbnail" alt="imagem" /></a><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">{nome}</text>

                                            <div className="card-body">
                                                <p className="card-text">{descricao}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <a href={linkGitHub}><img width="24" height="24" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="github" /></a>
                                                        <a href={linkPagina}><button type="button" className="btn btn-sm btn-outline-secondary">Página</button></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projetos;
