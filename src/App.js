
import './App.css';
import Details from "./Screen/Details/Details";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import AllComponent from "./Components/AllComponent/AllComponent";


function App() {

  const data = [
    {title : "Etudes et Ingenierie" , image : "innov.jpg" , paragraph :"lorem ipsum lorem ipsum lorem ipsum lorem ipsum "},
    {title : "Formation" , image : "https://images.pexels.com/photos/1181529/pexels-photo-1181529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , paragraph :"lorem ipsum"},
    {title : "Acompagnement , conseil" , image : "innov.jpg" , paragraph :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et perferendis quia voluptatibus, consequatur dicta suscipit enim numquam nostrum cupiditate, inventore cumque magnam officiis minima voluptate laboriosam assumenda neque dignissimos natus quo non? Iusto eius mollitia deleniti! Quo hic placeat dolore quae sequi iste, voluptas totam itaqu"},
    {title : "Development informatiques" , image : "innov.jpg" , paragraph :"lorem ipsum"}  
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
