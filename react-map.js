/** @jsx React.DOM */

var width = 480,
    height = 580;

var projection = d3.geo.mercator()
    .scale(2000)
    .center([174.77,-41.28])
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection); 

var NzMap = React.createClass({displayName: 'NzMap',
  render: function() {
    console.log()

    var nz = topojson.feature(this.props.data, this.props.data.objects.subunits);
    return this.transferPropsTo(React.DOM.svg(null, 
      React.DOM.path({d: path(nz)})
    ));
  }
});
 
d3.json("nz.json", function(error, nz) {
    React.renderComponent(NzMap({width: "480", height: "580", data: nz}), 
      document.getElementById('map'));
});
