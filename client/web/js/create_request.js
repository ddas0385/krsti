window.CreateRequest = Ember.Application.create({
    rootElement: '#divControls'
});

CreateRequest.ApplicationAdapter = DS.FixtureAdapter.extend();

CreateRequest.ToolGroup = DS.Model.extend({
    name : DS.attr('string'),
    tools : DS.hasMany('tool', {async:true})
});

CreateRequest.Tool = DS.Model.extend({
    name : DS.attr('string'),
    toolGroup : DS.belongsTo('toolGroup')
});

CreateRequest.ToolGroup.FIXTURES = [
{
    id: 1,
    name: 'Inputs',
    tools: [1,2]
},
{
    id: 2,
    name: 'Labels',
    tools: [3]   
},
{
    id: 3,
    name: 'Media',
    tools: [4]
},
{
    id: 4,
    name: 'Custom'
}
];

CreateRequest.Tool.FIXTURES = [
{
    id: 1,
    name: 'CheckboxList'
},
{
    id: 2,
    name: 'RadioButtonList'
},
{
    id: 3,
    name: 'Label'
},
{
    id: 4,
    name: 'Audio'
}
];

CreateRequest.Router.map(function(){
  this.resource('toolGroup', {path: '/'}, function() {
  });
});

CreateRequest.ToolGroupRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('toolGroup');
    }
});

CreateRequest.ToggleTool = Ember.View.extend({
   click: function(e){
       var li = e.target.parentElement.parentElement;
       $('.divTool', li).animate({ height: 'toggle' });
   } 
});