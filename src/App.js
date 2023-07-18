
import './App.css';
import Details from "./Screen/Details/Details";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import AllComponent from "./Components/AllComponent/AllComponent";


function App() {

  const data = [
    {title : "Etudes et Ingenierie" , image : "https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg?auto=compress&cs=tinysrgb&w=600" , paragraph :`* Etude et ingenierie  • Programme de développement des communes  • Etudes économiques et stratégiques  • Etudes des projets de développement  • Etudes de faisabilité des projets d’investissement  • Etudes d’impact sur l’environnement `},
    {title : "Formation" , image : "https://images.pexels.com/photos/1181529/pexels-photo-1181529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , paragraph :"Formation :  • Management projet  • Informatique de gestion  • Développement personnel – Entrepreneuriat-…  • D’autres modules de formation à votre disposition"},
    {title : "Acompagnement , conseil" , image : "https://images.pexels.com/photos/1228483/pexels-photo-1228483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , paragraph :"Accompagnement  • Accompagnement des porteurs de projets et des investisseurs  • Accompagnement dans la mise en place du système de management qualité  • Accompagnement dans la mise en place des projets de développement et de mise à niveau  • Elaboration et conception des stratégies et document du marketing territorial."},
    {title : "Development informatiques" , image : "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , paragraph :"Solutions Informatiques Sur Mesure pour Votre Entreprise :  Nous sommes fiers de vous présenter notre gamme complète de services de développement informatique sur mesure conçus spécialement pour répondre aux besoins uniques de votre entreprise. Chez [Nom de l'entreprise], notre équipe hautement qualifiée et expérimentée est dévouée à fournir des solutions technologiques innovantes et adaptées à votre secteur d'activité.  Nos services de développement informatique couvrent un large éventail de domaines, allant du développement de logiciels personnalisés à la création d'applications mobiles, en passant par la conception de sites web conviviaux et performants. Quels que soient vos objectifs commerciaux, nous sommes là pour vous accompagner tout au long du processus, de la conception à la mise en œuvre, en veillant à ce que chaque solution soit parfaitement adaptée à vos besoins spécifiques.  Notre approche repose sur une analyse approfondie de vos exigences, de vos processus métier et de vos objectifs à long terme. Cela nous permet de concevoir des solutions innovantes qui optimisent votre efficacité opérationnelle, renforcent votre compétitivité et stimulent votre croissance. Nous mettons un point d'honneur à intégrer les dernières avancées technologiques dans nos développements, afin de vous offrir des solutions à la pointe de l'innovation.  Que vous soyez une start-up en pleine croissance ou une entreprise établie cherchant à se moderniser, notre équipe est prête à relever tous les défis. Nous sommes spécialisés dans la programmation sur mesure, l'intégration de systèmes, la gestion de bases de données, le développement d'applications mobiles multiplateformes, et bien plus encore."}  
  ]
  

  return (
    <div className="App">
            <BrowserRouter>
            <Routes>
                  <Route path="/"  element={<AllComponent />}/>
                  <Route  path="/Etudes" element={ <Details title={data[0].title} image={data[0].image} paragraph={data[0].paragraph} />} />
                  <Route  path="/formation" element={ <Details title={data[1].title} image={data[1].image} paragraph={data[1].paragraph} />} />
                  <Route  path="/Acompagnement" element={ <Details title={data[2].title} image={data[2].image} paragraph={data[2].paragraph} />} />
                  <Route  path="/Development" element={ <Details title={data[3].title} image={data[3].image} paragraph={data[3].paragraph} />} />
            </Routes>
            </BrowserRouter>
          
          
             
            {/* */}
      
          
              
    </div>
  );
}

export default App;
