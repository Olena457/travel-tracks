import { NavLink } from 'react-router-dom';

const CatalogPage = () => {
  const [campers, setCampers] = React.useState(data.items);

  return (
    <div>
      <h1>Catalog</h1>
      {campers.map(camper => (
        <div key={camper.id}>
          <h2>{camper.name}</h2>
          <p>{camper.description}</p>
          <NavLink to={`/campers/${camper.id}`}>Show More</NavLink>
        </div>
      ))}
      <Buttom className={css.loadMore} text="Load more" type="button" />
    </div>
  );
};

export default CatalogPage;

{
  /* ============================ */
}
{
  /* import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CatalogPage = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Виконуємо GET запит до API
    axios.get('https://api.example.com/campers')
      .then(response => {
        setCampers(response.data.items); 
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Catalog</h1>
      {campers.map(camper => (
        <div key={camper.id}>
          <h2>{camper.name}</h2>
          <p>{camper.description}</p>
          <NavLink to={`/campers/${camper.id}`}>Show More</NavLink>
        </div>
      ))}
    </div>
  );
};

export default CatalogPage;
 */
}
{
  /* ============================ */
}
