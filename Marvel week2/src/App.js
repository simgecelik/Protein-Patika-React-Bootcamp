import './App.css';
import axios from 'axios';
import React,{useEffect,useState} from 'react'
import logo from './images/marvel2.webp'
import logo2 from './images/marveltext.png'

function App() {

  const publicKey="7fe64e948e3e0f9a53accb819755fa82";
  const hash="c0c45896857fab4c061f3ec32effdce1";
  const [list,setList] = useState([]); 
  const [isLoading,setLoading] = useState(true);
  const [currentPage,setCurrentPage] = useState(0);
  const [offset, setOffset] = useState(0);

  const pageNumbers=[];
  const sessionData = JSON.parse(sessionStorage.getItem('marvellist')) || [];
  
  for(let i=1;i<Math.ceil(180/20);i++){
    pageNumbers.push(i);
  }
 
  useEffect(()=> {
    if(sessionData[currentPage]){
      setList(sessionData[currentPage]);
    }else {
      fetch();
    }
  },[offset]);


  const fetch= async() => { 
    setLoading(true);
    const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}&limit=20&offset=${offset*20}`)
    .then((result) => {
      setList(result.data.data.results);
      sessionStorage.setItem('marvellist', JSON.stringify({...sessionData, [pageNumbers]: [...result.data.data.results]}));
    });
    setLoading(false);
  }
   
  const paginate = (pageNumber) => {   
  setCurrentPage(pageNumber); 
  setOffset(x => pageNumber-1);
}

  return (
    <div className="App">
    <div className="header" >
      <div className="header_background"><img id="headerphoto" src={logo} alt="marvel" /></div>
      <div className="header_logo"><img id="textphoto" src={logo2} alt="marveltext" /></div>
    </div>

    <div className="container">
      <div className="flex-container">
        {
          list.map((item,index) => 

            <div className="box" id="box" key={index}>
            <div><hr></hr><img src={item.thumbnail.path +"/portrait_uncanny.jpg"} alt="" /></div>
            <div><p className ="filmtitle" id="filmtitle"></p>{item.name}</div>
          </div>
          )
        
        }
     </div>
     <div className="pagination">
          <ul style={{listStyle:"none"}} className='pagination'>
          <li style={{color:"white",padding:"5px"}} className="page-item">
            <a onClick={()=> paginate(currentPage-1)} href='!#' className='page-link'>&laquo;</a>
            {isLoading && <div className='loading'><span>Loading</span></div>}
            </li>
            {pageNumbers.map(number=> (
              <li style={{color:"white",padding:"5px"}} key={number} className="page-item">
               <a onClick={()=> paginate(number)} href='!#' className='page-link'>
                 {number}
               </a>
               {isLoading && <div className='loading'><span>Loading</span></div>}
              </li>
            ))}
            <li style={{color:"white",padding:"5px"}} className="page-item">
            <a onClick={()=> paginate(currentPage+1)} href='!#' className='page-link'>&raquo;</a>
            {isLoading && <div className='loading'><span>Loading</span></div>}
            </li>
          </ul>
      </div>
    </div>
    </div>
  );
}

export default App;
