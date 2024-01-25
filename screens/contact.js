import React, { useState, useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import SectionListModule from 'react-native-sectionlist-contacts'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Image,
    SectionList,
    FlatList
} from 'react-native';

const CONTACTS = [
    {
        name: 'Abbey Longton',
        phone: '+44 7867 123987',
        logo: 'INVITE',
    },
    {

        name: 'Abbot Jones',
        phone: '+44 7867 489411',
        logo: 'INVITE',

    },
    {

        name: 'Abdulla Sule',
        phone: '+44 7861 498474',
        logo: 'INVITE',

    },
    {
        name: 'Adele Parker',
        phone: '+44 7861 498474',
        logo: 'INVITE',

    },
    {

        name: 'Adrian Thom',
        phone: '+44 7861 498474',
        logo: 'INVITE',

    },
    {

        name: 'Adriana',
        phone: '+44 7861 498474',
        logo: 'INVITE',

    },
    {

        name: 'Ben Davies',
        phone: '+44 7861 498474',
        logo: 'INVITE',

    },
    {

        name: 'Bill Lomas',
        phone: '+44 7861 498474',
        logo: 'INVITE',

    },
    {

        name: 'Bob Dillan',
        phone: '+44 7861 498474',
        logo: 'INVITE',

    },
    {
        name: 'Brian Swift',
        phone: '+44 7861 498474',
        logo: 'INVITE',

    },
    {

        name: 'Charlie',
        phone: '+1 (951) 472-2967',
        logo: 'INVITE',

    },
    {

        name: 'Bell Burgess',
        phone: '+1 (887) 478-2693',
        logo: 'INVITE',

    },

    {


        name: 'Frankie',
        phone: '+1 (862) 581-3022',
        logo: 'INVITE',

    },
    {


        name: 'Farah',
        phone: '+1 (862) 581-3022',
        logo: 'INVITE',

    },
    {


        name: 'Katherin',
        phone: '+1 (862) 581-3022',
        logo: 'INVITE',

    },
    {


        name: 'Bernard Baker',
        phone: '+1 (862) 581-3022',
        logo: 'INVITE',

    },


];

export default function Contact() {

    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
    })
        .then((res) => {
            console.log('Permission: ', res);
            Contacts.getAll()
                .then((contacts) => {
                    // work with contacts
                    console.log(contacts);
                })
                .catch((e) => {
                    console.log(e);
                });
        })
        .catch((error) => {
            console.error('Permission error: ', error);
        });
    ///comment
    const sections = React.useMemo(() => {
        const sectionsMap = CONTACTS.reduce((acc, item) => {
            const [firstName] = item.name.split('');

            return Object.assign(acc, {
                [firstName[0]]: [...(acc[firstName[0]] || []), item],
            });
        }, {});

        return Object.entries(sectionsMap)
            .map(([letter, items]) => ({
                letter,
                items,
            }))
            .sort((a, b) => a.letter.localeCompare(b.letter));
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: '#f2f2f2' }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={{ flexDirection: 'row', marginBottom: 5, }}>
                    <Text style={{ marginLeft: 5, marginTop: 6, }}>786 contacts</Text>
                    <Text style={{ marginLeft: 55, color: 'black', fontWeight: 'bold', fontSize: 30 }}>CONTACTS
                    </Text>
                    <Image style={{ height: 25, width: 25, marginLeft: 85, }}
                        source={require('../assets/user.jpg')} />

                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, }}>
                    <Image
                        style={styles.img}
                        source={require('../assets/woman.png')}

                    />
                    <Text style={styles.text}>Edin Adam
                    </Text>
                    <Image style={{ height: 25, width: 25, marginLeft: 135, marginTop: 15 }}
                        source={require('../assets/plus.png')} />

                </View>
                <View style={{ flex: 1, height: 1, marginTop: 10, marginLeft: 25, marginRight: 25, backgroundColor: 'black' }} >
                </View>

                {sections.map(({ letter, items }) => (
                    <View style={styles.section} key={letter}>
                        <Text style={styles.sectionTitle}>{letter}</Text>
                        <View style={styles.sectionItems}>
                            {items.map(({ name, phone, logo, }, index) => {
                                return (
                                    <View key={index} style={styles.cardWrapper}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                // handle onPress
                                            }}>
                                            <View style={styles.card}>
                                                <View style={styles.cardBody}>
                                                    <Text style={styles.cardTitle}>{name}</Text>
                                                    <Text style={styles.cardPhone}>{phone}</Text>
                                                    <Text style={styles.cardlogo}>{logo}</Text>
                                                </View>

                                            </View>
                                        

                                        </TouchableOpacity>
                                    </View>
                                    
                                );
                            })}
                           
                        </View>

                        {/* <TouchableOpacity>
<Text style={styles.sectionTitle}>{letter}</Text>

</TouchableOpacity> */}
                    </View >
                ))


                }
            </ScrollView >
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
        paddingHorizontal: 0,
    },
    header: {
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
        marginBottom: 12,
    },
    /** Section */
    section: {
        // flexDirection:'row',
        marginTop: 12,
        paddingLeft: 24,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
    },
    sectionItems: {
        // flexDirection:'row',
        marginTop: 8,
    },
    /** Card */
    card: {
        paddingVertical: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    cardWrapper: {
        borderBottomWidth: 1,
        borderColor: '#d6d6d6',
    },
    cardAvatarText: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#fff',
    },
    cardBody: {
        flex: 1,
        flexDirection: "row",
        marginRight: 'auto',
        marginLeft: 12,
        justifyContent: 'space-between'

    },
    cardTitle: {
        // alignItems:'flex-start',
        fontSize: 16,
        fontWeight: '700',
        color: '#000',
    },
    cardPhone: {
        fontSize: 15,
        lineHeight: 20,
        fontWeight: '500',
        color: '#616d79',
        marginTop: 3,
    },
    cardlogo: {
        fontSize: 20,
    },


    img: {
        height: 40,
        width: 40,
        resizeMode: "contain",
        marginLeft: 20,
        marginTop: 5,
    },
    text: {
        fontSize: 30,
        marginLeft: 5,
        marginTop: 10,


    },
});