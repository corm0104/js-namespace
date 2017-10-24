var CORM0104 = {
    init: function(){
        var div= document.createElement("div");
        document.getElementById("div").className="box";
        
        div.textContent="CORM0104";
        
        document.getElementById("boxes").appendChild(div);
        
        
        
        
        div.addEventListener("click", myFunction);
        div.addEventListener("mouseover", aFunction);
        div.addEventListener("mouseout", myThirdFunction);
        
        
        
        function myFunction(ev) {
            ev.currentTarget.style.borderColor='blue';
            ev.currentTarget.style.backgroundColor='yellow';
            
        }
        
        function aFunction(ev){
            ev.currentTarget.classList.toggle('highlight');
        
        }    
        
        function myThirdFunction(ev){
            ev.currentTarget.classList.toggle('highlight');
        }  
        
    }
                                  
                                
}; 









