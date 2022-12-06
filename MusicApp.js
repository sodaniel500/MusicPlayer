import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import songs from './Model/data';

const { width, height } = Dimensions.get('window')

const MusicApp = () => {

    const renderSongs = ({ index, item }) => {
        return (
            <View style={styles.artwork}>
            < Image source={item.image}
                style={styles.img}
            />
        </View>
)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#222831' }}>
            <View style={styles.container}>

                <FlatList 
                renderItem= {renderSongs}
                data= {songs}
                keyExtractor= {(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                />

                <View>
                    <Text style={styles.sName}>Lucid Dreams</Text>
                    <Text style={styles.aName}>Juice WRLD</Text>
                </View>

                <View>
                    <Slider
                        style={styles.slider}
                        value={40}
                        minimumValue={0}
                        maximumValue={100}
                        thumbTintColor="#FFD369"
                        minimumTrackTintColor='#FFD369'
                        maximumTrackTintColor='#FFF'
                        onSlidingComplete={() => { }}
                    />

                    <View style={styles.duration}>
                        <Text style={{ color: '#fff' }}>0.00</Text>
                        <Text style={{ color: '#fff' }}>3.99</Text>
                    </View>
                </View>

                <View style={styles.control}>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name="play-skip-back-circle" size={44} color="#FFD369" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <MaterialIcons name="pause-circle-filled" size={44} color="#FFD369" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name="play-skip-forward-circle" size={44} color="#FFD369" />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.bottomControl}>

                    <TouchableOpacity onPress={() => { }}>
                        <AntDesign name="heart" size={26} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name="repeat" size={26} color="#777777" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name="share-outline" size={26} color="#777777" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name="ellipsis-horizontal" size={26} color="#777777" />
                    </TouchableOpacity>

                </View>
            </View>

        </SafeAreaView>
    )
}

export default MusicApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    artwork: {
        width: 300,
        height: 340,
        marginBottom: 25,
        elevation: 19
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        resizeMode: 'contain'
    },
    sName: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: '#EEEEEE'
    },
    aName: {
        fontSize: 16,
        fontWeight: '300',
        textAlign: 'center',
        color: '#EEEEEE'
    },
    slider: {
        width: 350,
        height: 40,
        marginTop: 25,
        flexDirection: 'row'
    },
    duration: {
        width: 340,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    control: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
        marginTop: 15
    },
    bottomContainer: {
        borderTopColor: '#393E46',
        borderTopWidth: 1,
        width: width,
        alignItems: 'center',
        paddingVertical: 15

    },
    bottomControl: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
})