import React, {Component} from "react";
import {FlatList, Text, View} from "react-native";
import {connect} from "react-redux";
import DeckListItem from "./DeckListItem";
import {green} from "react-native-reanimated/src/reanimated2/Colors";
import {gray} from "../utils/colors";
import * as Screens from '../consts/Screens'

class DeckList extends Component{

    onPress = (deckId) => () => {
        const { navigation } = this.props;
        navigation.navigate(
            Screens.Deck,
            {
                deckId
            }
        );
    }

    render(){

        const { decks } = this.props;

        if ( !decks || decks.length === 0 ){
            return (
                <View>
                    <Text>
                        You have no decks for now. Please add one for fun and profit.
                    </Text>
                </View>
            )
        }

        return (
            <View>
                <FlatList
                    data={decks}
                    renderItem={
                        ({ item }) => <DeckListItem name={item.title} count={item.cardCount} onPress={this.onPress(item.key)}/>
                    }
                    ItemSeparatorComponent={props => <View style={{height:1, backgroundColor: gray, marginLeft: 10, marginRight: 10, marginTop: 2, marginBottom: 2}}/>}
                    keyExtractor={item => item.key}
                />
            </View>
        )
    }
}

function mapStateToProps(state){
    return {
        decks: Object.keys(state).map( key => {
          return {
              title: state[key].title,
              cardCount: state[key].questions.length,
              key
          }
        })
    }
}

export default connect(mapStateToProps)(DeckList)
