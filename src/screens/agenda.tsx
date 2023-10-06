import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export function agenda(){
    return (
        <View style={{  flex: 1, backgroundColor: 'gray'}}>
             <Text style={styles.doctor}> Doctor Day</Text>

             <Text style={styles.p1}> Coloque abaixo seu nome completo </Text>
             <TextInput  placeholder=" Ex : Jose Silva Vieira " style={styles.nome}  />

             <Text style={styles.p2}> Coloque abaixo Sua data de nascimento </Text>
             <TextInput  placeholder=" Ex :  21 / 01 / 2005  " style={styles.dtnasc}  />

             <Text style={styles.p3}> Coloque abaixo Seu CPF </Text>
             <TextInput  placeholder=" Ex :  111.666.333-44  " style={styles.cpf}  />

             <Text style={styles.p4}> Coloque abaixo Seu numero de contato </Text>
             <TextInput  placeholder=" Ex :  ( 53 ) 9987424097 " style={styles.number}  />

             <Text style={styles.p5}> Coloque abaixo uma data para sua consulta </Text>
             <TextInput  placeholder=" Ex : 19 / 11 / 2023 " style={styles.data}  />

             <Text style={styles.p6}> Coloque abaixo um horario para a consulta </Text>
             <TextInput  placeholder=" Ex : 08 : 30  " style={styles.horario}  />

             <Text style={styles.p7}> Descreva com detalhes o motivo da consulta </Text>
             <TextInput  placeholder=" Ex : estou com uma dor na coluna.... " style={styles.motivo}  />



             <TouchableOpacity style={styles.buttonveri}><Text style={styles.fontveri}>Verificar</Text></TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    doctor: {
      fontSize: 24,
      textAlign: 'center', 
      marginTop: 24,
      fontWeight: 'bold',
      color: '#ffff',
      
    },

    data:{
        borderWidth: 2,
        justifyContent: 'center',
        alignItems:'center',
        width: 200,
        marginTop: 33,
        marginLeft: 38,
        borderRadius: 6,
        color: "#ffff",
        fontWeight: 'bold',
    }, 

    p1:{
        top: 40,
        fontSize: 13,
        color: '#ffff', 
        left: 30,                   
    },

    p2:{
        top: 25,
        fontSize: 13,
        color: '#ffff', 
        left: 30,          
    },

    p3:{
        top: 20,
        fontSize: 13,
        color: '#ffff', 
        left: 30,          
    },

    p4:{
        top: 20,
        fontSize: 13,
        color: '#ffff', 
        left: 30,          
    },

    p5:{
        top: 20,
        fontSize: 13,
        color: '#ffff', 
        left: 30,          
    },

    p6:{
        top: 20,
        fontSize: 13,
        color: '#ffff', 
        left: 30,          
    },

    p7:{
        top: 20,
        fontSize: 13,
        color: '#ffff', 
        left: 30,          
    },
    
    horario:{
        borderWidth: 2,
        justifyContent: 'center',
        alignItems:'center',
        width: 200,
        marginTop: 30,
        marginLeft: 38,
        borderRadius: 6, 
        color: '#ffff',
        fontWeight: 'bold',                           
    },

    nome:{
        borderWidth: 2,
        justifyContent: 'center',
        alignItems:'center',
        width: 200,
        marginTop: 50,
        marginLeft: 38,
        borderRadius: 6,
        color: "#ffff",
        fontWeight: 'bold',
    },

    dtnasc:{
        borderWidth: 2,
        justifyContent: 'center',
        alignItems:'center',
        width: 200,
        marginTop: 35,
        marginLeft: 38,
        borderRadius: 6,
        color: "#ffff",
        fontWeight: 'bold',
    },

    number:{
        borderWidth: 2,
        justifyContent: 'center',
        alignItems:'center',
        width: 200,
        marginTop: 30,
        marginLeft: 38,
        borderRadius: 6,
        color: "#ffff",
        fontWeight: 'bold',
    },

    cpf:{
        borderWidth: 2,
        justifyContent: 'center',
        alignItems:'center',
        width: 200,
        marginTop: 30,
        marginLeft: 38,
        borderRadius: 6,
        color: "#ffff",
        fontWeight: 'bold',
    },

    motivo:{
        borderWidth: 2,
        justifyContent: 'center',
        alignItems:'center',
        width: 300,
        height: 100,
        marginTop: 30,
        marginLeft: 38,
        borderRadius: 6,
        color: "#ffff",
        fontWeight: 'bold',
    },

    buttonveri:{
        borderWidth: 2,
        alignItems: 'center',
        marginTop: 25, 
        maxWidth: 80,
        height: 25,
        borderRadius: 6,
        backgroundColor: 'black',
        justifyContent: 'center',   
        
        
    },

    fontveri:{
        color: '#ffff',
        fontWeight: 'bold',
    },



})
