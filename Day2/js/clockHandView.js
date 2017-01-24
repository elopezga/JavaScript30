const clockHandView = function(element){
    return {
        rotateBy: function(rotateInDeg){
            element.style.transform = 'rotate(' + rotateInDeg + 'deg)';
        }
    };
}