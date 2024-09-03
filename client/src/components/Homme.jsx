import  { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";
import './style.css'

const Home = () => {
  const [data, setData] = useState([]);
 

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/")
      .then((res) => {setData(res.data.data); 
    //     console.log('====================================');
    //   console.log(res.data.data);
    //   console.log('====================================');
    })
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <div className="division">
      <div >
        <Header />
        <h1>User</h1>
        <div className="container  tete mb-3">
          <Link to="/create" className="btn btn-success">
            Ajout +
          </Link>

          <form className="d-flex justify-content-end" role="search">
            <input
            //   onChange={(e) => handelSearch(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success">Recherche</button>
          </form>
        </div>
       <div className="affichage container">
       <table className="table  tableau ">
          <thead className="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Last name</th>
              <th scope="col">Description</th>
              {/* <th scope="col">Quantité</th>
              <th scope="col">Montant</th> */}
              <th scope="col" colSpan={2}>
                Action
              </th>
            </tr>
          </thead>
          
          <tbody>
            {data.map((produit, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{produit.id}</th>
                  <td>{produit.name}</td>
                  <td>{produit.description}</td>
                 
                  <td>
                  <Link
                    //   to={`/update/${produit.id}`}
                      className="btn text-white btn-sm bg-primary mx-2"
                    >
                      Modifier
                    </Link><Link
                    //   to={`/update/${produit.id}`}
                      className="btn text-white btn-sm bg-primary mx-2"
                    >
                      Modifier
                    </Link>
                  </td>
                  <td 
                //   onClick={() => click_sup(produit.id)}
                    >
                    <span className="btn text-white btn-sm bg-danger">
                      Supprimer
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
       </div>
      </div>
    </div>
  );
};

export default Home;
