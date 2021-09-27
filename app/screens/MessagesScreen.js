import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/lists/ListItem';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
{
    id: 1,
    title: 'John Doe',
    description: 'I am interested in the cloud photos!',
    image: require('../assets/mosh.jpg')
},
{
    id: 2,
    title: 'Jane Star',
    description: 'survived not only five centuries, but also the leap into electronic typesettingremaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: require('../assets/jane.jpg')
}
]

function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
    // Delete the message from messages
    const newMessages = messages.filter(m => m.id !== message.id);
    setMessages(newMessages);
    // Call the server
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => 
                    <ListItem 
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                        showChevrons
                        onPress={() => console.log('message selecte', item)}
                        swipeRightActions={() => 
                        <ListItemDeleteAction 
                        onPress={() => handleDelete(item)}
                        />}
                        />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/mosh.jpg')
                        }
                    ])
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;