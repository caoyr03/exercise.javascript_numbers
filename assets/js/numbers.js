function compute(expression) {
    var flag = -1; //keep track of */ operations
    var result = 0;
    var op = new Array();
    var val = new Array();
    var num = "";
    for(var i = 0; i <= expression.length; i++){
      if(i == expression.length){
        if(flag == 1) {
          var o = op.pop();
          if(o == "*"){
            val.push(parseInt(num) * val.pop());
          }
          else if(o == "/"){
            val.push( val.pop() / parseInt(num));
          }
          flag = -1;
        }
      }
      if(expression[i] == "+" || expression[i] == "-"){
        if(flag == 1) {
          var o = op.pop();
          if(o == "*"){
            val.push(parseInt(num) * val.pop());
          }
          else if(o == "/"){
            val.push(val.pop() / parseInt(num));
          }
          flag = -1;
        }
      else {
        val.push(parseInt(num));
      }
        op.push(expression[i]);
        num = "";
      }
      else if(expression[i] == "*" || expression[i] == "/"){
        if (flag == 1){
          var o = op.pop();
          if(o == "*"){
            val.push(parseInt(num) * val.pop());
          }
          if(o == "/"){
            val.push(val.pop() / parseInt(num));
          }
        }
        else {flag = 1;
              val.push(parseInt(num));
        }
        op.push(expression[i]);
        num = "";
      }
      else {
        num = num + expression[i];
      }
    }
    val.push(parseInt(num));

    num = val[0];
    for(var index = 0; index < op.length; index ++){
      if(op[index] == "+") 
        num = num + val[index+1];
      else num = num - val[index+1];
    }
    return num;
}

