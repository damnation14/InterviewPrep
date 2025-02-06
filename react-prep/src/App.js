import { Provider } from "react-redux";

// Store
import store from "./store";

// Style
import "./App.css";

// Component
// import TodoList from "./todoList";
// import Counter from "./reactCounter";
// import ReactLifeCycle from "./reactLifeCycle";
// import Flex from "./flex";
// import TicTacToe from "./ticTacToe";
// import DragDrop from "./dragAndDrop";
import ImageGallery from "./imageGallery";
// import Component1 from './contextApi';
// import ThisKeword from "./thisKeyword";
import FetchApiAutoComplete from "./fetchApiAutoComplete";

// import InfiniteScroll from './infiniteScroll';
import ProgressBar from "./ProgressBar";

// import Routing from "./routing";
import { DebitCard } from "./cardPrepInterview/cardPrep";

// import ReduxPractice from "./reduxPractice";

import FileExplorer from "./fileExplorer";
import CommentSection from "./commentsSection";
import Pagination from "./pagination";
import StickyNotes from "./stickyNotes";
import PracticeReact from "./PracticeReact";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PracticeReact test="hehe" />
      </div>
    </Provider>
  );
}

export default App;
