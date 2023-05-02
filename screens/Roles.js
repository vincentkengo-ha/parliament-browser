import { View, StyleSheet, Text } from "react-native";

export const Roles = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    axios
      .get("https://api.lagtinget.ax/api/organizations.json")
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
        data.filter(
          (organization) =>
            organization.title.toLowerCase().match(newSearch.toLowerCase())
        )
      );
    }
  };

  const renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      onPress={() =>
        navigation.navigate("Role", { name: item.name, id: item.id })
      }
    >
      <Avatar
        rounded
        size="large"
        // source={item.image && { uri: item.image.url }}
        title={item.first_name.charAt(0) + item.last_name.charAt(0)}
        overlayContainerStyle={styles.avatar}
      />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
  // List roles and navigate to page with persons with role

  return (
    <View style={styles.container}>
      <Text>Roles</Text>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
