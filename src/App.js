
import './App.css';
import CustomButton from './components/custom-button/custom-button.component';
import ProgressBar from './components/progress-bar/progress-bar.component.jsx';
import BasicCard  from './components/basic-card/basic-card.component.jsx';

function App() {
  return (
    <div className="container">
      <header></header>
      <BasicCard><CustomButton >Bookmark it</CustomButton></BasicCard>
    </div>
  );
}

export default App;
