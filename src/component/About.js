import React from 'react'

export default function About() {
  const toggleshow=()=>{
    var collapse1=document.getElementById("collapseOne");
    if(collapse1.className=="collapse show"){
collapse1.className="collapse";
    }
    else{
      collapse1.className="collapse show";
    }
  }
  const toggleshow1=()=>{
    var collapse1=document.getElementById("collapseTwo");
    if(collapse1.className=="collapse show"){
collapse1.className="collapse";
    }
    else{
      collapse1.className="collapse show";
    }
  }
  const toggleshow2=()=>{
    var collapse1=document.getElementById("collapseThree");
    if(collapse1.className=="collapse show"){
collapse1.className="collapse";
    }
    else{
      collapse1.className="collapse show";
    }
  }
    return (
        <div className="about">
        <div className="accordion" id="accordionExample">
<div className="card">
<div className="card-header" id="headingOne">
  <h2 className="mb-0">
    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  onClick={toggleshow}>
      Collapsible Group Item #1
    </button>
  </h2>
</div>

<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
  <div className="card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
  </div>
</div>
</div>
<div className="card">
<div className="card-header" id="headingTwo">
  <h2 className="mb-0">
    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={toggleshow1}>
      Collapsible Group Item #2
    </button>
  </h2>
</div>
<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
  <div className="card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
  </div>
</div>
</div>
<div className="card">
<div className="card-header" id="headingThree">
  <h2 className="mb-0">
    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" onClick={toggleshow2}>
      Collapsible Group Item #3
    </button>
  </h2>
</div>
<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
  <div className="card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
  </div>
</div>
</div>
</div>
    </div>
    )
}
