import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorDarkFontGithub = '#4FS65E';
const colorFontGithub = '#C9D1D9';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/98889563?v=4';

const urlToMyGithub = 'https://github.com/izabella-araujo'

const app = () => {
    const handlePressGoToGithub = async () => {
        console.log('Verificando Link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res) {
            console.log('Link aprovado');
            console.log('Abrindo link');
            await Linking.openURL(urlToMyGithub);
        }
    };
    return (
        <SafeAreaView style = {style.continer}>
            <StatusBar backgroundColor={colorGithub} barStyle = "light-content"/>
            <View style = {style.content}>
                <image
                    accessibilitylabel = "Izabela no quarto com o fundo claro"
                    style = {style.avatar}
                    source = {{uri: imageProfileGithub}}
                />
                <Text 
                    accessibilitylabel = "Nome Izabella Araujo"
                    style = {[style.defaulttext, style.name]}>
                    Izabella Araujo
                </Text>
                <Text 
                    accessibilitylabel = "Nickname Izabella Araujo"
                    style = {[style.defaulttext, style.nickname]}>
                    izabella-araujo
                </Text>
                <Text 
                    accessibilitylabel = "Descrição Izabella Araujo"
                    style= {[style.defaulttext, style.description]}>
                    Estudante de Engenharia da Computação | HTML e CSS | JavaScript e React Native
                </Text>
                <Pressable onPress={() => console.log('github')}>
                    <View style = {[style.button]}>
                        <Text style = {[style.defaulttext, style.textButton]}>
                            Open in Github
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default app;

const style = StyleSheet.create ({
        container: {
            backgroundColor: colorGithub,
            flex: 1,
            justifyContent: 'center',
        },
        content: {
            alignItems: 'center',
            padding: 20,
        },
        avatar: {
            height: 200,
            width: 200,
            borderRadius:100,
            borderWidth: 2,
        },
        defaulttext: {
            color: 'white',
        },
        nome: {
            fontSize: 24,
            fontWeight: 'bold',
        },
        nickname: {
            fontSize: 18,
            color: colorDarkFontGithub,
        },
        description: {
            fontSize: 14,
            fontWeight: 'bold',
        },
        button: {
            marginTop: 20,
            backgroundColor: colorDarkFontGithub,
            borderRadius: 10,
            padding: 20,
        },
        textButton: {
            fontSize: 14,
            fontWeight: 'bold', 
        },
});