
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // ייבוא של BrowserRouter
import App from './App'; // ייבוא של רכיב ה-App שלך

// עטוף את רכיב ה-App שלך ב- BrowserRouter
ReactDOM.render(
  <BrowserRouter>
    <App /> {/* כל האפליקציה שלך עכשיו בתוך ה- BrowserRouter */}
  </BrowserRouter>,
  document.getElementById('root') // הנחת שה-root קיים בקובץ ה-HTML שלך
);
