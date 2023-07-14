// DetailScreen.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Platform,
  Button,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";

import { increment, decrement, add } from "../slice";
import { useSelector, useDispatch } from "react-redux";
const EditStudentScreen = ({ navigation, route }) => {
  const { student } = useSelector((state) => state.student);
  const dispatch = useDispatch();

  const handleBackPress = () => {
    // Implement the logic to navigate back
    navigation.goBack();
  };
  const handleAddStudent = () => {
    // Implement the logic to navigate back
    console.log(name);
    console.log(date.toLocaleDateString());
    dispatch(add({ id: 1, name: name, date: date.toLocaleDateString() }));
    navigation.goBack();
  };

  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(true);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  useEffect(() => {
    const data = route.params;
    setName(data.name);

    const dateParts = data.date.split("/");
    const month = parseInt(dateParts[0], 10);
    const day = parseInt(dateParts[1], 10);
    const year = parseInt(dateParts[2], 10);
    const formattedDate = new Date(year, month - 1, day).toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }
    );

    setDate(formattedDate);
  }, [name]);

  return (
    <SafeAreaView>
      <View>
        <View style={styles.appBar}>
          <TouchableOpacity onPress={handleBackPress}>
            <FontAwesomeIcon icon={faArrowLeft} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.appBarTitle}>Edit Student Screen</Text>
        </View>
        <Text>Student Screen</Text>
        <View>
          <Text>Student Name :</Text>
          <TextInput
            value={name}
            style={{ borderWidth: 1, borderColor: "black" }}
            onChangeText={(e) => {
              setName(e);
            }}
          />
          <Text>Date Of Birth :</Text>
          <View>
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
            />
          </View>
          <Button onPress={handleAddStudent} title="Safe" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  appBarTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  backIcon: {
    fontSize: 18,
    marginRight: 8,
  },
};

export default EditStudentScreen;
