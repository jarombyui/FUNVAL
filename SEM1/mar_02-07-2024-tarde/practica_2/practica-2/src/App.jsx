import "./App.css";

function App () {
  return (
    <>
<div class="container">
        <h1>Reliable, efficient delivery<br/> <span>Powered by Technology</span></h1>
        <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
        <div class="cards">
            <div class="card supervisor">
                <img src="images/icon-supervisor.svg" alt="Supervisor Icon"/>
                <h3>Supervisor</h3>
                <p>Monitors activity to identify project roadblocks</p>
            </div>
            <div class="card team-builder">
                <img src="images/icon-team-builder.svg" alt="Team Builder Icon"/>
                <h3>Team Builder</h3>
                <p>Scans our talent network to create the optimal team for your project</p>
            </div>
            <div class="card calculator">
                <img src="images/icon-calculator.svg" alt="Calculator Icon"/>
                <h3>Calculator</h3>
                <p>Uses data from past projects to provide better delivery estimates</p>
            </div>
            <div class="card karma">
                <img src="images/icon-karma.svg" alt="Karma Icon"/>
                <h3>Karma</h3>
                <p>Regularly evaluates our talent to ensure quality</p>
            </div>
        </div>
    </div>
  </>
  )
}

export default App;
