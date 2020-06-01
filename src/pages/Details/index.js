import React, { useState } from "react";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { View, Text, Dimensions, Image } from "react-native";
import {
	Container,
	Content,
	Header,
	Name,
	ImageContainer,
	ContentImage,
	ContentNivel,
	ContentBord,
	ContentBord_2,
	ContentBord_3,
	NameTop,
	Circulo,
} from "./styles";

import api from "../../services/api";

const Details = () => {
	const route = useRoute();
	const digimon = route.params.digimon;
	const [name, setName] = useState("");
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: "description", title: "descrição" },
		{ key: "status", title: "Status" },
	]);
	/*
    async function loadDigimonDetails(){
        
        try {
        const url = `name/${digimon.name}`;
        const response = await api.get(url);
        let name_1 =  response.data.name;
        
    } catch(error) {
    console.log(error)
 }
}  
      useFocusEffect(
       React.useCallback(()=>{
          loadDigimonDetails();
       },[]) 
    );
    */

	//	const TabDescription = () => (
	//		<View>
	//		<Text>Aba de descrição</Text>
	//	</View>
	//	);

	const TabStatus = () => (
		<View>
			<Text>Aba de status</Text>
		</View>
	);
	//	const renderScene = SceneMap({
	//	description: TabDescription,
	//	status: TabStatus,
	//	});

	const renderTabBar = (props) => (
		<TabBar
			{...props}
			indicatorStyle={{ backgroundColor: "#4b4b57", heigth: 3 }}
			activeColor="#000"
			inactiveColor="#7b7b7b"
			style={{
				backgroundColor: "transparent",
				marginTop: 30,
				shadowOpacity: 0,
				elevation: 0,
			}}
		/>
	);

	return (
		<Container>
			<Header>
				<NameTop>Digimon</NameTop>
			</Header>
			<Content>
				<ContentImage source={{ uri: digimon.img }}></ContentImage>
				<ContentBord>
					<Name>{digimon.name}</Name>
					<ContentBord_2>
						<ContentNivel>Level Do Digimon</ContentNivel>
						<ContentBord_3>
							<ContentNivel>{digimon.level}</ContentNivel>
						</ContentBord_3>
					</ContentBord_2>
				</ContentBord>
			</Content>
		</Container>
	);
};

export default Details;

/*<Header>
				<Name>{digimon.name}</Name>
			</Header>

			<Content>
				<ImageContainer>
					<ContentImage source={{ uri: digimon.img }}></ContentImage>
				</ImageContainer>

				<ContentBord>
					<ContentBord_2>
						<ContentNivel>Level Do Digimon »</ContentNivel>
					</ContentBord_2>
					<ContentBord_3>
						<ContentBord_4>
							<ContentNivel>{digimon.level}</ContentNivel>
						</ContentBord_4>
					</ContentBord_3>
				</ContentBord>
			</Content>










/*	<TabView
					navigationState={{ index, routes }}
					renderScene={renderScene}
					renderTabBar={renderTabBar}
					onIndexChange={setIndex}
					initialLayout={{ width: Dimensions.get("window").width }}
				/>*/
