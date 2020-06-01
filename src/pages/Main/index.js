import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import api from "../../services/api";

export default function Main({ navigation }) {
  const [digimons, setDigimons] = useState([]);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadDigimons();
  }, []);

  async function loadDigimons() {
    //const totalDigimons = 209;
    if (loading) {
      return;
    }
    // if(total > 0 && digimons.length == totalDigimons){
    //   return;
    // }
    setLoading(true);
    // let limit = 20;

    const response = await api.get(``, {
      //     params: {offset, limit}
    });

    setDigimons([...digimons, ...response.data]);
    //setOffset(offset + 20);
    setLoading(false);
  }

  return (
    <View>
      <FlatList
        data={digimons}
        keyExtractor={(digimon) => String(digimon.name)}
        renderItem={({ item: digimon }) => (
          <Button
            title={digimon.name}
            onPress={() => navigation.navigate("Details", { digimon })}
          />
        )}
      />
    </View>
  );
}
