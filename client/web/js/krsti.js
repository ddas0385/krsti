$(document).ready(function(){
       
       $('#spanToggleControls').click(function(){
           $(this).toggleClass('active');
           $('#divControls').animate({ width: 'toggle' });
       });
       
});

var toolGroup = new function(name){
    
    this.name = name;
}

var toolGroupList = [];

var tool = new function(name, groupName){
    
    this.name = name;
    this.toolGroup = new toolGroup(groupName);
}

var toolList = [];

var inputsGroup = new toolGroup('Inputs');
var mediaGroup = new toolGroup('Media');

toolGroupList.push(inputsGroup);
toolGroupList.push(mediaGroup);

var checkBoxList = new tool('CheckBox', 'Inputs');
var radioButtonList = new tool('RadioButton', 'Inputs');

var audioFile = new tool('Audio', 'Media');
var videoFile = new tool('Video', 'Media');

toolList.push(checkBoxList);
toolList.push(radioButtonList);
toolList.push(audioFile);
toolList.push(videoFile);


