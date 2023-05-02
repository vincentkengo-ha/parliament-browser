import { View, StyleSheet, FlatList, Alert } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import { ListItem, Avatar, SearchBar } from "@rneui/themed";

import mock from "../mock/organizations.json";

export const Roles = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    axios
      .get("https://api.lagtinget.ax/api/roles.json")
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch((err) => {
        Alert.alert("Network error: " + err, "Please try again later");
      });
  }, []);

  const updateSearch = (newSearch) => {
    setSearch(newSearch);

    if (newSearch === "") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((organization) =>
          organization.title.toLowerCase().match(newSearch.toLowerCase())
        )
      );
    }
  };

  const renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      onPress={() =>
        navigation.navigate("People", { title: item.title, id: item.id })
      }
    >
      <Avatar
        rounded
        size="large"
        source={item.image && { uri: item.image.url }}
        title={item.title}
        overlayContainerStyle={styles.avatar}
      />
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
  // List roles and navigate to page with persons with role

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search by name"
        lightTheme="true"
        inputContainerStyle={styles.searchBar}
        onChangeText={updateSearch}
        value={search}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
