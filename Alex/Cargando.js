var flag = true;
var i = 1;
var load = document.getElementById('loading');
var funcion = () => {};

var task = setInterval(
    () =>
    {
        if ( flag ){
            load.innerHTML = 'Task completed: ' + Math.ceil( (i/500) * 100)+ "%";
        }
        else
        clearInterval(task);
        i++;
        flag = 1 == 500 ? false : true;
    },
    33
);