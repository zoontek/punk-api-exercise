import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import api from "./api";
import { Beer } from "./types";

const App = () => {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    api<Beer[]>("/random")
      .then(response => setBeers(response))
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      <Text>Random beer:</Text>

      {beers.map(beer => (
        <Text key={`beer-${beer.id}`}>{beer.name}</Text>
      ))}
    </View>
  );
};

export default App;
