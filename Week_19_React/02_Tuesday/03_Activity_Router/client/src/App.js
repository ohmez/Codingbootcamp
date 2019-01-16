import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

  renderPage= () => {
    switch(this.state.page) {
      case "/": return <Books />
      case "/books": return <Books />
      default: return <NoMatch />
    }
  };
function App() {
  return (
    <Router>
      <switch>
        {/* The Empty path route is last because <switch> stops on first true */}
        <Route path="/" component={Books} />
        <Route path="/books" component={Books} />
        <Route path="/detail" component={Detail} />
        <Route component={NoMatch} />
      </switch>
    </Router>
  );
}

export default App;
