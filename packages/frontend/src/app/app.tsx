import './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';
import { Viewer } from './components/pages/Viewer';
import { Editor } from './pages/editor/Editor';

export function App() {
  return (
    <div>
      <nav>
        <Link to="/">Viewer</Link>
        <Link to="/editor">Editor</Link>
      </nav>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <Routes>
        <Route path="/" element={<Viewer />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
