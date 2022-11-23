import './content.css';
import rowData from '../../constants/URLS';
import row from '../row/row';

export default function content() {
  return (
    <div className='content-wrapper'>

      {rowData.map((el) => {
        return <row title={el.title} url={el.url} />;
      })}

      
    </div>
  );
}
