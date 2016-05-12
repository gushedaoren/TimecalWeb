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

  handleClick: function (startTime,offset,times,before) {
    console.log(startTime);
    this.setState({
      result: 'test'
    });
  },

  render: function() {

    var dateTime=new Date();
    var hour = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    if(hour <10){
      hour = "0" + hour;
    }
    if(minutes <10){
       minutes = "0" + minutes;
     }
    var startTime=hour+":"+minutes;
    var times = this.state.times;
    var offset = this.state.offset;
    var result = this.state.result;
    var before = this.state.before;




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
          往前 <input type="checkbox" name="checkbox" value={before}></input>
        </p>


         <p id='last_container'></p>


         <button onClick={this.handleClick(startTime,offset,times,before)}>
           计算
         </button>
         <p>
            结果:<p id='result'>{result}</p>
         </p>

      </div>

      </div>
    );
  }
});

ReactDOM.render(
  <QuadraticCalculator />,
  document.getElementById('container')
);
