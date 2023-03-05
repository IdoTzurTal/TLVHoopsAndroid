import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
// rnfes

const AboutScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.description}>
                    Welcome to TLV Hoops – the easy-to-use platform for setting up and organizing communal basketball games in your area. Whether you're an avid baller or just looking for a fun way to stay active and social, our app makes it simple to find and join pickup games with other players in your community.

                    With TLV Hoops, you can create and manage your own games, or join existing games organized by other players. Our intuitive interface allows you to set up games with details like location, time, and player capacity, and easily invite other players to join through our built-in messaging system.

                    No more back-and-forth texts or Facebook groups – with TLV Hoops, everything you need to organize and participate in pickup basketball games is right at your fingertips.

                    So what are you waiting for? Download TLV Hoops today and start playing basketball with other like-minded individuals in your community.
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    description: {
        fontSize: 18.6,
        textAlign: 'center',
        margin: 10,
        lineHeight: 35
    },
    scrollView: {
        flex: 1,
        marginHorizontal: 20,
    },
})