import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Item{
    id: string;
    nome: string;
    idade: string;
    email: string
}

const dados: Item[] = [
    {id: "1",nome: "Tim", idade: "107 anos",email: "burton@teste.com"},
    {id: "2",nome: "Johnny", idade: "92 anos",email: "depp@teste.com"},
    {id: "3",nome: "Helena", idade: "89 anos",email: "bonham@teste.com"},
    {id: "1",nome: "Emilly", idade: "56 anos",email: "cadaver@teste.com"},
    {id: "2",nome: "Victor", idade: "63 anos",email: "vandort@teste.com"},
    {id: "6",nome: "Sally", idade: "49 anos",email: "estranha@teste.com"},
    {id: "7",nome: "Jack", idade: "406 anos",email: "skellington@teste.com"},
    {id: "2",nome: "Chapeleiro", idade: "79 anos",email: "maluco@teste.com"},
    {id: "9",nome: "Rainha", idade: "67 anos",email: "vermelha@teste.com"},
];

const renderItem = ({item}: {item: Item}) => (
    <View style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.idade}</Text>
        <Text>{item.email}</Text>
    </View>
);

function FlatListExample(): React.JSX.Element{
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#000000' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerText}>Flat List</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('./assets/images/home.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('./assets/images/orders.png')} style={styles.footerIcon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('./assets/images/profile.png')} style={styles.footerIcon}/>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#af99ff',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 20,
        borderWidth: 5,
        borderColor: '#7251b5'
    },
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#7251b5',
        alignItems: 'center',
        paddingVertical: 30
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        width: 30,
        height: 30
    }
});

export default FlatListExample;
