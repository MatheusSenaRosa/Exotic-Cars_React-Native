import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

import {
  CarsText,
  Container,
  ExoticText,
  LogoArea,
  BottomArea,
  InputArea,
  InputLocal,
  TextDate,
  IconSearch,
  TopArea,
  AccountArea,
  SignButton,
} from "./styles";

const Header = () => {
  const [initialDate, setInitialDate] = useState(new Date());
  const [showInitialDate, setShowInitialDate] = useState(false);
  const [finalDate, setFinalDate] = useState(
    new Date(initialDate.getTime() + 86400000)
  );
  const [showFinalDate, setShowFinalDate] = useState(false);

  const onChangeInitialDateHandler = (e: any, date: any) => {
    setShowInitialDate(false);
    setInitialDate(date || initialDate);

    if (date) {
      if (
        date.getTime() === finalDate.getTime() ||
        date.getTime() > finalDate.getTime()
      ) {
        setFinalDate(new Date(date.getTime() + 86400000) || finalDate);
      }
    }
  };

  const onChangeFinalDateHandler = (e: any, date: any) => {
    setShowFinalDate(false);
    setFinalDate(date || finalDate);
  };

  const dateToString = (date: any) => {
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let month =
      date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    let year = date.getYear() - 100;
    return `${day}/${month}/${year}`;
  };

  return (
    <Container
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
      }}
    >
      <TopArea>
        <LogoArea>
          <ExoticText>EXOTIC</ExoticText>
          <CarsText>CARS</CarsText>
        </LogoArea>
        <AccountArea>
          <TouchableOpacity>
            <SignButton border={false}>Sign up</SignButton>
          </TouchableOpacity>
          <TouchableOpacity>
            <SignButton border={true}>Sign in</SignButton>
          </TouchableOpacity>
        </AccountArea>
      </TopArea>
      <BottomArea>
        <InputArea>
          <Ionicons
            name="location-sharp"
            size={20}
            color={"#C4C4C4"}
            style={{ marginLeft: 10 }}
          />
          <InputLocal placeholder="Type your address" />
          <Ionicons name="calendar" color={"#C4C4C4"} size={18} />
          <TextDate onPress={() => setShowInitialDate(true)}>
            {dateToString(initialDate)}
          </TextDate>
          <Ionicons
            name="calendar"
            color={"#C4C4C4"}
            size={18}
            style={{ marginLeft: 10 }}
          />
          <TextDate onPress={() => setShowFinalDate(true)}>
            {dateToString(finalDate)}
          </TextDate>
          <IconSearch>
            <TouchableOpacity>
              <Ionicons name="search-outline" size={18} color={"#7B89F4"} />
            </TouchableOpacity>
          </IconSearch>
        </InputArea>
      </BottomArea>
      {showInitialDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={initialDate}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onChangeInitialDateHandler}
          minimumDate={new Date()}
          maximumDate={new Date(new Date().getTime() + 86400000 * 90)}
        />
      )}
      {showFinalDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={finalDate}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onChangeFinalDateHandler}
          minimumDate={new Date(initialDate.getTime() + 86400000)}
          maximumDate={new Date(initialDate.getTime() + 86400000 * 7)}
        />
      )}
    </Container>
  );
};

export default Header;
