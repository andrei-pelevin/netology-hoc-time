import React, { useState } from 'react';
import { Component } from 'react'
import moment from 'moment'



function DateTimePretty(View) {
  return class extends Component {
    render() {      
      const m = moment(this.props.date).format();
      const m2 = moment();
      let outDate = '';

      const m3 = {
        day: m2.diff(m, 'd'),
        watch: m2.diff(m, 'H'),
        minutes: m2.diff(m, 'm')
      }

      if(m3.minutes < 60){
        if (m3.minutes.toString().slice(-1) === '1') {
          outDate = `${m3.minutes} минуту назад`;
        } else if (m3.day.toString().slice(-1) < 5 && m3.minutes.toString().slice(-1) > 0)  {
          outDate = `${m3.minutes} минуты назад`;
        } else {
          outDate = `${m3.minutes} минут назад`;
        }
      }            

      else if (m3.watch < 24  ) {
        if (m3.watch.toString().slice(-1) === '1') {
          outDate = `${m3.watch} час назад`;
        } else if (m3.day.toString().slice(-1) < 5 && m3.watch.toString().slice(-1) > 0)  {
          outDate = `${m3.watch} часа назад`;
        } else {
          outDate = `${m3.watch} часов назад`;
        }
      }        

      else {
        if (m3.day.toString().slice(-1) === '1') {          
          outDate = `${m3.day} день назад`;
        } else if (m3.day.toString().slice(-1) < 5 
        && m3.day.toString().slice(-1) > 1 
        && m3.day.toString().slice(-2, -1) !== '1' )  {
          outDate = `${m3.day} дня назад`;
        } else {
          outDate = `${m3.day} дней назад`;
        }
      }    

      return <View {...this.props} date={outDate} />;
    }
  }
}


function DateTime(props) {
  return (
    <p className="date">{props.date}</p>
  )
}

const NewDateFormat = DateTimePretty(DateTime)

function Video(props) {
  return (
    <div className="video">
      <iframe title="myTitle" src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <NewDateFormat date={props.date} />
    </div>
  )
}

function VideoList(props) {
  return props.list.map((item, i) => <Video url={item.url} date={item.date} key={i} />);
}

export default function App() {
  const [list,] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-07-31 13:24:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-03-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-02-03 23:16:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:00'
    },
  ]);

  return (
    <VideoList list={list} />
  );
}