import React, {useState} from 'react';
import styled from 'styled-components';
import colours from '../components/Colours';
import { ScrollView, View, TouchableOpacity, Button, Input, Text } from 'react-native';
import {  Card, ListItem  } from 'react-native-elements';
import BackButton from '../components/BackButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimeButton from '../components/DateTimeButton';
import { quoteList } from '../components/quotes';



export default class AlarmScreen extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      Alarms: [],
      mode: 'date',
      show: false,
      hour: '00',
      mins: '00',
      month: 'Jan',
      day: '01'
    }
  }

  ComponentWillMount(){
    let Alarms;
  }
  render() {
  const { navigate } = this.props.navigation;


  var tempAlarms = this.state.Alarms;

    const deleteAlarm = (i) => {
      tempAlarms.splice(i, 1);
      this.setState({Alarms: tempAlarms});
      //alert(this.state.Alarms);
      //this.forceUpdate();
    }

  const alarmCheck = () => {
    var alarms = this.state.Alarms;
    for (var i=0; i < alarms.length; i++)
    {
        var hour = alarms[i].Date.split(":")[0];
        var mins = alarms[i].Date.split(':')[1].split(' ')[0];
        var month = alarms[i].Date.split(':')[1].split(' ')[1];
        var day = alarms[i].Date.split(':')[1].split(' ')[2];

        switch(month) {
        case 'Jan':
            month = 1;
            break;
        case 'Feb':
            month = 2;
            break;
        case 'Mar':
            month = 3;
            break;
        case 'Apr':
            month = 4;
            break;
        case 'May':
            month = 5;
            break;
        case 'Jun':
            month = 6;
            break;
        case 'Jul':
            month = 7;
            break;
        case 'Aug':
            month = 8;
            break;
        case 'Sep':
            month = 9;
            break;
        case 'Oct':
            month = 10;
            break;
        case 'Nov':
            month = 11;
            break;
        case 'Dec':
            month = 12;
            break;
          }
          const dateTimeNow = new Date();
          if(month === (dateTimeNow.getMonth() + 1))
          {
            if(day == dateTimeNow.getDate())
            {
              if(hour == dateTimeNow.getHours())
              {
                if(mins == dateTimeNow.getMinutes())
                {
                    var rand = Math.floor(Math.random() * quoteList.length);
                    alert(quoteList[rand].title);
                    deleteAlarm(i);
                    //this.setState({Alarm[i].on: false});
                }
              }
            }
          }
    }



    // alert((dateTimeNow.getDate()) + (''+this.state.day));
    setTimeout(()=>{alarmCheck()}, 10000);
  }

  alarmCheck();

  var date = new Date(1598051730000);
  var pickDate;
  var pickTime;


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    this.setState({show: false});
    date = currentDate;
    pickDate = currentDate.toString();
    pickTime = pickDate.split(" ");
    this.setState({month: pickTime[1]});
    this.setState({day: pickTime[2]});
    this.setState({hour: pickTime[4].split(":")[0]});
    this.setState({mins: pickTime[4].split(":")[1]});
    alert('Alarm set for ' + this.state.month + ' ' + this.state.day + ' ' + this.state.hour + ':' + this.state.mins);
  };

  const showMode = currentMode => {
    this.setState({show: true});
    this.setState({mode: currentMode});
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const addAlarm = () => {
    tempAlarms.push({Date: this.state.hour + ':' + this.state.mins + ' ' + this.state.month + ' ' + this.state.day, on: true});
    this.setState({Alarms: tempAlarms});
    //alert(this.state.Alarms);
    //this.forceUpdate();
  };

  return (
    <Container>
    <ScrollView>
    <Titlebar>
      <TouchableOpacity>
        <BackButton text= "Back" textColor ="#ff3b00" backgroundColor="#FFFFFF" press={() => navigate('Home')} />
      </TouchableOpacity>
      <Title>Alarms</Title>
    </Titlebar>
      <View>
      <Card>
      {
        this.state.Alarms.map((u, i) => {
          return (
            <ListItem key = {i}
            title = {u.Date}
            onLongPress = {() => deleteAlarm(i)}
            bottomDivider
            />
          );
        })
      }
      </Card>

        <ButtonContainer>
          <DateTimeButton text= "Set Alarm Date" textColor ="#ff3b00" backgroundColor="#FFFFFF" press={showDatepicker}/>
        </ButtonContainer>
        <ButtonContainer>
          <DateTimeButton text= "Set Alarm Time" textColor ="#ff3b00" backgroundColor="#FFFFFF" press={showTimepicker}/>
        </ButtonContainer>
        <ButtonContainer>
          <DateTimeButton text= "Add Alarm" textColor ="#ff3b00" backgroundColor="#FFFFFF" press={addAlarm}/>
        </ButtonContainer>

      </View>

            {this.state.show && (
              <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={new Date()}
                mode={this.state.mode}
                is24Hour={true}
                display="spinner"
                minimumDate={Date.now()}
                onChange={onChange}
              />
            )}
    </ScrollView>
    </Container>
  );
};
}

const ButtonContainer = styled.View`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    paddingTop: 10%;
`;

const Container = styled.View`
    flex: 1;
    background-color: ${colours.background};
`;

const ItemsLayout = styled.View`
  flex-direction: column;
  flex: 1;
  flex-wrap: wrap;
  align-items:center;
  justify-content:space-evenly;
  width:90%;
  margin:0;
`;

const Titlebar = styled.View`
    width: 100%;
    margin-top: 50px;
    padding-left: 0px;
`;


const Title = styled.Text`
    font-size: 30px;
    font-weight: 500;
    color: #ff3b00;
    text-align: center;
`;
