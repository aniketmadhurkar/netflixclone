import { useState, useEffect } from 'react';
import axios from 'axios';
import './row.css';
import Card from '../card/Card';

export default function row(props) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get(props.url);
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className='row_wrapper'>
    <h3 className='row_title'>{props.title}</h3>
    <div className='row_card'>
     {movies.map((el) => {
        return <Card title={el.title} poster={el.backdrop_path} id={el.id} />;
      })}
    </div>
    </div>
  );
}
