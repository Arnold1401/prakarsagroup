// DetailScreen.js
import React, { useState } from "react";
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

import { increment, decrement, add } from ".././slice";
import { useSelector, useDispatch } from "react-redux";
const AddStudentScreen = ({ navigation }) => {
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
  const [showPicker, setShowPicker] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  return (
    <SafeAreaView>
      <View>
        <View style={styles.appBar}>
          <TouchableOpacity onPress={handleBackPress}>
            <FontAwesomeIcon icon={faArrowLeft} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.appBarTitle}>Add Student Screen</Text>
        </View>
        <Text>Student Screen</Text>
        <View>
          <Text>Student Name :</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: "black" }}
            onChangeText={(e) => {
              setName(e);
            }}
          />
          <Text>Date Of Birth :</Text>
          <View>
            {showPicker === true ? null : (
              <Button onPress={showDatePicker} title="Select Date"></Button>
            )}
            {showPicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChange}
              />
            )}
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

export default AddStudentScreen;
