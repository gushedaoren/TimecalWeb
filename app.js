
var result;
var QuadraticCalculator = React.createClass({

  hourStr: function(dateTime) {

    var hour = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    if(hour <10){
      hour = "0" + hour;
    }
    if(minutes <10){
       minutes = "0" + minutes;
     }

    return hour+":"+minutes;
  },


  getInitialState: function() {
    return {
      times: 1,
      offset: 35,
      checked: false,
      result:''
    };
  },





  handleChecked: function(event) {

    console.log(event.target.checked);
    this.setState({checked: event.target.checked});
  },

  handleInputChange: function(key, event) {
    var partialState = {};
    partialState[key] = event.target.value;
    this.setState(partialState);
  },

  handleClick: function () {
    console.log('handleClick');
    console.log(new Date);
    console.log(this.state.startTime);
    console.log(this.state.offset);
    console.log(this.state.times);
    console.log(this.state.checked);

    var delta=this.state.times*this.state.offset*(this.state.checked==true?-1:1);
    console.log(delta);

    var dateStr="2011/06/09 "+this.state.startTime+":00";
    console.log(dateStr);
    var startDate=new Date(dateStr);
    console.log(startDate);



    var time=startDate.getTime()+delta*60*1000;
    console.log(time);

    var resultDate=new Date(time);
    console.log(resultDate);


    var myresult=this.hourStr(resultDate);
    console.log(myresult);
    result=myresult;



    this.setState({
      result: myresult,
    });

  },


  componentWillMount:function(){




      this.state.startTime=this.hourStr(new Date());
  },


  render: function() {




    return (
     <div>
      <div >

        <p>
          起始时间：<input type="text" name="startTime" value={this.state.startTime} onChange={this.handleInputChange.bind(null, 'startTime')}></input>
        </p>

        <p>
          次数    ：<input type="number" name="times" value={this.state.times} onChange={this.handleInputChange.bind(null, 'times')}></input>
        </p>

        <p>
          时间差   ：<input type="text" name="offset" value={this.state.offset} onChange={this.handleInputChange.bind(null, 'offset')}></input>
        </p>

        <p>
          往前 <input type="checkbox" name="checkbox" defaultChecked='true'  onChange={this.handleChecked}></input>
        </p>
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
