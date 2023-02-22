
    exports.message="Calculator";
    exports.add=function(a,b){return a+b;}
    exports.sub=function(a,b){return a-b;}
    exports.mul=function(a,b){return a*b;}
    exports.div=function(a,b){
                if(b==0){
                        return "Divisor should not be 0";
                }
                else{
                        return a/b;
                }
    };
    
  
  
    