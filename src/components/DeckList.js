import React, {Component} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";
import DeckListItem from "./DeckListItem";
import * as screens from '../consts/screens'
import {grayWeb, lilachLuster} from "../utils/colors";

class DeckList extends Component{

    onPress = (deckId) => () => {
        const { navigation } = this.props;
        navigation.navigate(
            screens.Deck,
            {
                deckId
            }
        );
    }

    render(){

        const { decks } = this.props;

        if ( !decks || decks.length === 0 ){
            return (
                <View style={styles.center}>
                    <Text style={styles.text}>
                        You have no decks for now.{'\n'}Please add some for fun and profit.
                    </Text>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <FlatList
                    data={decks}
                    renderItem={
                        ({ item }) => <DeckListItem name={item.title} count={item.cardCount} onPress={this.onPress(item.key)}/>
                    }
                    ItemSeparatorComponent={props => <View style={styles.separator}/>}
                    keyExtractor={item => item.key}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    center:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30
    },
    text:{
        fontSize: 20,
        paddingTop: 8,
        paddingBottom: 4,
        color: grayWeb,
        textAlign: 'center'
    },
    separator: {
        height:1,
        backgroundColor: lilachLuster,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 2,
        marginBottom: 2,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
    },
})

function mapStateToProps({decks}){
    return {
        decks: Object.keys(decks).filter(key => key !== "_persist").sort().map( key => {
          return {
              title: decks[key].title,
              cardCount: decks[key].questions.length,
              key
          }
        })
    }
}

export default connect(mapStateToProps)(DeckList)
