import './App.css';
import ClickBind from './components/ClickBind';
import ArrowBind from './components/ArrowBind';
import Checkbox from './components/checkBox';





function App() {
  return (
    <div>
      <table class='grades'>
        <tr>
          <th>Student name</th>
          <th>Correction Status</th>
          <th>Passed</th>
         
        </tr>
        <tr>
          <td>Maria</td>
          <td><ArrowBind/></td>
          <td><Checkbox/></td>
        </tr>
         
            
          
          
        <tr>
          <td>Francisco</td>
          <td><ArrowBind/></td>
          <td><Checkbox/></td>
          
        </tr>
        <tr>
          <td>Roland</td>
          <td><ClickBind/></td>
          <td><Checkbox/></td>
          
        </tr>
        <tr>
          <td>Helen</td>
          <td><ClickBind/></td>
          <td><Checkbox/></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
