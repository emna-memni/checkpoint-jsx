
import './App.css';
import imageInSrc   from "./imageInSrc.jpg";
function App() {
  return (
    <div className="App">

    <div style={{border:'solid 1px black', max-width:'100vw'}}>

<h1 className='title red'>Your name here</h1>

<br >

<img src={imageInSrc.jpg} alt='myimage' />

<br >

<img src="/imageInPublic.jpg" alt='imageInPublic' />

</div>

<video style={{width="320" height="240" controls}}>

<source src="myVideo.mp4" type="video/mp4" >

</video>
    </div>
  );
}

export default App;
