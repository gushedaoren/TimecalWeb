
var dateTime,startTime,offset,times,before,result;
var QuadraticCalculator = React.createClass({


  getInitialState: function() {
    return {
      times: 1,
      offset: 35,
      before: true,
      result:''
    };
  },

  handleInputChange: function(key, event) {
    var partialState = {};
    partialState[key] = event.target.value;
    this.setState(partialState);
  },

  handleClick: function () {
    console.log('handleClick');
    console.log(startTime);
    console.log(offset);
    console.log(times);
    console.log(before);

  },


  componentWillMount:function(){
     times = this.state.times;
     offset = this.state.offset;
     result = this.state.result;
     before = this.state.before;

     var dateTime=new Date();
     var hour = dateTime.getHours();
     var minutes = dateTime.getMinutes();
     if(hour <10){
       hour = "0" + hour;
     }
     if(minutes <10){
        minutes = "0" + minutes;
      }
      startTime=hour+":"+minutes;
  },


  render: function() {




    return (
     <div>
      <div >

        <p>
          起始时间：<input type="text" name="startTime" value={startTime} onChange={this.handleInputChange.bind(null, 'startTime')}></input>
        </p>

        <p>
          时间差  ：<input type="number" name="times" value={times} onChange={this.handleInputChange.bind(null, 'times')}></input>*<input type="text" name="offset" value={offset} onChange={this.handleInputChange.bind(null, 'offset')}></input>
        </p>

        <p>
          往前 <input type="checkbox" name="checkbox" defaultChecked='true' value={before} ></input>
        </p>


         <p id='last_container'></p>


         <button  onClick={this.handleClick}>
           计算
         </button>
         <div>
            结果:<div id='result'>{result}</div>
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
