import React from "react";

function Jumbotron({ children }) {
  return (
    <div>
    <div class="jumbotron jumbotron-fluid text-white">
    <div class="container text-center">
      <h2 class="display-4 pt-5 pb-3 animated fadeInLeftBig">
        Find the <strong>Music</strong> and the <strong>Video</strong> you're looking for! 
      </h2>
      <a href="#1"><button class="btn btn-primary">Artist</button></a> <a href="/post"><button class="btn btn-primary">Song</button></a>
    </div>
    <div class="container text-center pt-5">
      <i class="fas fa-angle-double-down fa-3x animated swing delay-1s"></i>
    </div>
  
  </div>
  <section style={{background: '#EBF8FD',  'min-height' : '500px'}}>
    {/* <h3 class="text-center pt-3">Categories</h3>
    <div class="container">
      <div class="row pt-3">
        <div class="col-2">
          <a href="">
            <div class="circle" style={{background: 'orange'}}><i class="fas fa-3x fa-home"></i></div>
          </a>
  
        </div>
        <div class="col-2">
          <a href=""> 
            <div class="circle" style={{background: '#20C3F3'}}><i class="fas fa-3x fa-mobile-alt"></i></div>
          </a>
        </div>
        <div class="col-2">
          <a href="">
            <div class="circle" style={{background: '#A175D9'}}><i class="fas fa-3x fa-football-ball"></i></div>
          </a>
        </div>
        <div class="col-2">
          <a href="">
            <div class="circle" style={{background: '#A3CE71'}}><i class="fas fa-3x fa-seedling"></i></div>
          </a>
        </div>
        <div class="col-2">
          <a href="">
            <div class="circle" style={{background: '#FF3F55'}}><i class="fas fa-3x fa-tshirt"></i></div>
          </a>
        </div>
        <div class="col-2">
          <a href="">
            <div class="circle" style={{background: '#E1C340'}}><i class="fas fa-3x fa-hand-point-right"></i></div>
          </a>
        </div>
      </div>
    </div> */}
  
    <div class="container">
      <div class="row">
        <div class="col-12 text-center pt-3">
          <h3  id="1">MELODY Music App</h3>
        </div>
      </div>
  
  
 
    </div>
    </section>
</div>
  );
}

export default Jumbotron; 

