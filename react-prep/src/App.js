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
import TestWorker from "./testWorker";

import FileExplorer from "./fileExplorer";
import CommentSection from "./commentsSection";
import Pagination from "./pagination";
import StickyNotes from "./stickyNotes";
import PracticeReact from "./PracticeReact";

import TestReact from "./testReact";

import HoverHandler from "./hoverHandler";

import GoogleCalendar from "./googleCalender";

import CursorHover from "./cursorHover";

import ChipsInput from "./chipsInput";

import Practice from "./practice";

import NestedCheckBoxes from "./nestedCheckBoxes";

import Calender from "./Calendar";

import StackableToaster from "./stackableToaster";

import InfiniteScroll from "./infiniteScrollPart";

import PositionBoxes from "./positionBoxes";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PositionBoxes test="hehe" />
      </div>
    </Provider>
  );
}

export default App;
