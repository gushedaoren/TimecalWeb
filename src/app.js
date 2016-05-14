

var QuadraticCalculator = React.createClass({


  getInitialState: function() {
    return {
      times: 1,
      offset: 35,
      before: true,
      result:''
    };
  },

  handleChecked: function(event) {
    console.log(event.target.checked);
    this.setState({before: event.target.checked});
  },

  handleInputChange: function(key, event) {
    var partialState = {};
    partialState[key] = event.target.value;
    this.setState(partialState);
  },

  handleClick: function () {
    console.log('handleClick');
    console.log(this.state.startTime);
    console.log(this.state.offset);
    console.log(this.state.times);
    console.log(this.state.before);

    

  },


  componentWillMount:function(){


     var dateTime=new Date();
     var hour = dateTime.getHours();
     var minutes = dateTime.getMinutes();
     if(hour <10){
       hour = "0" + hour;
     }
     if(minutes <10){
        minutes = "0" + minutes;
      }
      this.state.startTime=hour+":"+minutes;
  },


  render: function() {




    return (
     <div>
      <div >

        <p>
          起始时间：<input type="text" name="startTime" value={this.state.startTime} onChange={this.handleInputChange.bind(null, 'startTime')}></input>
        </p>

        <p>
          时间差  ：<input type="number" name="times" value={this.state.times} onChange={this.handleInputChange.bind(null, 'times')}></input>*<input type="text" name="offset" value={this.state.offset} onChange={this.handleInputChange.bind(null, 'offset')}></input>
        </p>

        <p>
          往前 <input type="checkbox" name="checkbox"  onChange={this.handleChecked}></input>
        </p>


         <p id='last_container'></p>


         <button  onClick={this.handleClick}>
           计算
         </button>
         <div>
            结果:<div id='result'>{this.state.result}</div>
         </div>

      </div>

      </div>
    );
  }
});

ReactDOM.render(
  <QuadraticCalculator />,
  document.getElementById('container')
);
