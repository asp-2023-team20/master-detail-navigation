import './App.css';
import { Routes, Route, useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


// generate 100 recipes
const recipes = Array.from(Array(100).keys());

const RecipeIndex = () => {
  let params = useParams();

  return <div className='relative flex flex-col block h-screen w-screen overflow-clip'>
    <h1 className='text-xl font-bold leading-8'>Recipe</h1>
    <div className='overflow-auto'>
      <ul key='abc'>
        {recipes.map(r => <li key={`r{r}`} ><Link to={`${r}`}>Recipe {r}</Link></li>)}
      </ul >
    </div >

    {params.id && <RecipeDetail id={params.id} />}

  </div >;
}

const RecipeDetail = ({ id }) => {
  let navigate = useNavigate();

  const handleBack = () => {
    navigate('/recipe');
  };

  return <div className='absolute left-0 top-0 z-10 h-screen w-screen block bg-white'>
    <div className="flex flex-col ">
      <div>
        <button onClick={handleBack}>Back</button>
      </div>
      <div>
        <h1 className='text-xl font-bold'>Detail {id}</h1>
      </div>
    </div>
  </div>;
}

function App() {
  return <Routes>
    <Route path="/recipe" name="home" element={<RecipeIndex />} />
    <Route path="/recipe/:id" element={<RecipeIndex />} />
  </Routes>
}

export default App;