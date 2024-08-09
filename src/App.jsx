import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Router from "./config/router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router />
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/cari" element={<div>sewa</div>} />
    //   </Routes>
    // </Router>
  );
}

export default App;
