window.CreateRequest = Ember.Application.create({
    rootElement: '#divControls'
});

CreateRequest.ApplicationAdapter = DS.FixtureAdapter.extend();

CreateRequest.Tool = DS.Model.extend({
    name : DS.attr('string'),
    type : DS.attr('string')
    //tool : DS.hasMany('tool')
});

/*CreateRequest.Tool = DS.Model.extend({
    id : DS.attr(),
    name : DS.attr()
    //toolGroup : DS.belongsTo('toolGroup')
});*/

CreateRequest.Tool.FIXTURES = [
{
    id: '1',
    name: 'Inputs',
    type: 'Type1'
},
{
    id: '2',
    name: 'Labels',
    type: 'Type2'    
},
{
    id: '3',
    name: 'Media',
    type: 'Type3'
},
{
    id: '4',
    name: 'Custom',
    type: 'Type4'
}
];

/*CreateRequest.Tool.FIXTURES = [
{
    id: 1,
    name: 'CheckboxList',
    toolGroup: ToolGroup.find('toolGroup', 1)
},
{
    id: 2,
    name: 'RadioButtonList',
    toolGroup: ToolGroup.find('toolGroup', 1)
},
{
    id: 3,
    name: 'Label',
    toolGroup: ToolGroup.find('toolGroup', 2)
},
{
    id: 4,
    name: 'Audio',
    toolGroup: store.find('toolGroup', 3)
},
];*/

CreateRequest.Router.map(function(){
  this.resource('tool', {path: '/'}, function() {
  });
});


CreateRequest.ToolRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('tool');
    }
});