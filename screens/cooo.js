import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SectionListModule from 'react-native-sectionlist-contacts'

export default function App() {

  //name is required and other params such as id is optional
  const nameData=[
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
  ]
  const Item = ({phone}) => (
    <View >
      <Text>{phone}</Text>
    </View>
  );
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SectionListModule
            sectionListData={nameData}
            sectionHeight={50}
            sectionHeaderHeight={25}
            initialNumToRender={nameData.length}
            showsVerticalScrollIndicator={true}
            highlightAlphabetColor={'blue'}
            // showHighlightAlphabetColor={true}
            SectionListClickCallback={(item,index,section) => {
              console.log('---SectionListClickCallback--:',item,index, section)
            }}
            otherAlphabet="#"
            renderItem={({item}) => (
<Text>{item.phone}</Text>
            )

            }
          
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});