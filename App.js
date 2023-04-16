import { StatusBar, Image } from 'react-native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import { FlatList } from 'react-native';


function HamburgerMenu({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
const [nome, setNome] = useState ('')

const [informacoes, setInformacoes] = useState ([
  {dados: 'Email: franciconfeccoes@gmail.com' , key: 1 },
  {dados: 'Telefone: (81) 98547-8842' , key: 2 },
  {dados: 'Instagram: @franci_confeccoes' , key: 3 },
  {dados: 'Rua Professor José Vincente, 449 ' , key: 4 },
  {dados: 'CNPJ: 04.162.214/0001-15' , key: 5 },
  {dados: 'Trabalhe conosco' , key: 6 },
])

  return (

    <LinearGradient
      colors={['#ebbeb9', '#ebbeb9', '#fbf7f5', '#ffffff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView >

      <View style={styles.container1}>
        {/* Imagem centralizada no topo */}
        <View style={styles.imageContainer}>
          <Image source={require('./assets/Logo-removebg-preview.png')} style={styles.image} />
        </View>

        {/* Botão para abrir/fechar o menu */}
        <TouchableOpacity onPress={handleMenuToggle} style={styles.burguer}>
          <Ionicons name="menu-outline" size={32} color="#ffffff" />
        </TouchableOpacity>

        
        <View style={styles.searchContainer}>
 
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar"
              placeholderTextColor="#666"      
             /> 
            
            <Ionicons name="search" size={15} color="#666" style={styles.icone} />
       
           
        </View> 
                    
     </View>
        
        <Text style={styles.pedido}>FAÇA SEU PEDIDO!</Text>

        <Text style={styles.dados}>Seus Dados</Text>

        <View style={styles.caixa1}>
        <TextInput
        multiline
        style={styles.input1}
        placeholder="Primeiro nome e Último nome"
        onChangeText={setNome}
     />
     <Text>{nome}</Text>
     </View>
      
       <View style={styles.caixa3}>
        <TextInput
        multiline
        style={styles.input3}
        placeholder="Busto em 'cm' "
     />
     </View>

       <View style={styles.caixa4}>
        <TextInput
        multiline
        style={styles.input4}
        placeholder="Tórax em 'cm' "
     />
     </View>

       <View style={styles.caixa5}>
        <TextInput
        multiline
        style={styles.input5}
        placeholder="Cintura em 'cm' "
     />
     </View>

       <View style={styles.caixa6}>
        <TextInput
        multiline
        style={styles.input6}
        placeholder=" Quadril em 'cm' "
     />
     </View>

       <View style={styles.caixa7}>
        <TextInput
        multiline
        style={styles.input7}
        placeholder="Abdomên em 'cm' "
     />
     </View>

       <View style={styles.caixa8}>
        <TextInput
        multiline
        style={styles.input8}
        placeholder="Bumbum em 'cm' "
     />
     </View>

       <View style={styles.caixa9}>
        <TextInput
        multiline
        style={styles.input9}
        placeholder="Pernas em 'cm'"
     />
     </View>

       <View style={styles.caixa10}>
        <TextInput
        multiline
        style={styles.input10}
        placeholder="Braços em 'cm' "
     />
     </View>

       <View style={styles.caixa11}>
        <TextInput
        multiline
        style={styles.input11}
        placeholder="Detalhes do seu pedido (Opcional)  "
     />
     </View>
       
       <View style={styles.botao}>
        <Button title='                    ENVIAR                    '
        color="#ebbeb9"
        />
        
        <Text style={styles.informações}>{'\n'}                                 Informações:                                 
        {'\n'}
        {'\n'}
        - Busto: Passe a fita métrica no centro dos seios.
        {'\n'}
        - Tórax: medir onde está a dobra abaixo das axilas.
        {'\n'}
        - Cintura: as mulheres devem medir um dedo acima do umbigo e os homens um dedo abaixo do umbigo.
        {'\n'}
        - Quadril: tanto as mulheres como os homens possuem um osso que limita a região do quadril, é só procurá-lo e medir por ele.
        {'\n'}
        - Abdômen: se localiza entre a região do umbigo e a dos ossos do quadril. É só organizar os pontos da fita entre o meio.
        {'\n'}
        - Bumbum: coloque a fita na parte mais volumosa do bumbum.
        {'\n'}
        - Pernas: deve ser medido do ossinho do quadril até o calcanhar.
        {'\n'}
        - Braços: medir o comprimento que vai do ombro até o dorso da mão.</Text>
      </View>

   {/* Conteúdo do menu */}
        {menuOpen && (
          <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.menuItem}>QUEM SOMOS</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.menuItem}></Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.menuItem}>Abadás</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Text style={styles.menuItem}>Biquínis</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Text style={styles.menuItem}>Fantasias</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Text style={styles.menuItem}>Infantis</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.menuItem}>Roupas Femininas</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.menuItem}>Roupas Masculinas</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.menuItem}></Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.menuItem}>FALE CONOSCO</Text>
            </TouchableOpacity>
          </View>
        )} 

        <Text style={styles.texto}>INSPIRAÇÕES</Text>

     <View style={styles.imageContainer1}>

      <Text style={styles.titulos}>ABADÁS</Text>

          <Image source={require('./assets/abada1.jpg')} style={styles.abada} />
          <Image source={require('./assets/abada2.jpg')} style={styles.abada} />
          <Image source={require('./assets/abada3.jpg')} style={styles.abada} />
          <Image source={require('./assets/abada4.jpg')} style={styles.abada} />
        </View>

     <View style={styles.imageContainer1}>

      <Text style={styles.titulos2}>BIQUÍNIS</Text>

          <Image source={require('./assets/biquini1.jpg')} style={styles.biquini} />
          <Image source={require('./assets/biquini2.jpg')} style={styles.biquini} />
          <Image source={require('./assets/biquini3.jpg')} style={styles.biquini} />
          <Image source={require('./assets/BIQUINI4.jpg')} style={styles.biquini} />
        </View>

     <View style={styles.imageContainer1}>

      <Text style={styles.titulos3}>FANTASIAS</Text>

          <Image source={require('./assets/fantasia1.jpg')} style={styles.fantasia} />
          <Image source={require('./assets/fantasia2.jpg')} style={styles.fantasia} />
          <Image source={require('./assets/fantasia3.jpg')} style={styles.fantasia} />
          <Image source={require('./assets/fantasia4.jpg')} style={styles.fantasia} />
        </View>

     <View style={styles.imageContainer1}>

      <Text style={styles.titulos4}>INFANTIS</Text>

          <Image source={require('./assets/intatil1.jpg')} style={styles.infantil} />
          <Image source={require('./assets/infantil2.jpg')} style={styles.infantil} />
          <Image source={require('./assets/infantil3.jpg')} style={styles.infantil} />
          <Image source={require('./assets/INFANTIL4.jpg')} style={styles.infantil} />
        </View>

     <View style={styles.imageContainer1}>

      <Text style={styles.titulos5}>ROUPAS FEMININAS</Text>

          <Image source={require('./assets/roupafeminina1.jpg')} style={styles.rf} />
          <Image source={require('./assets/feminina2.jpg')} style={styles.rf} />
          <Image source={require('./assets/feminina3.jpg')} style={styles.rf} />
          <Image source={require('./assets/feminina4.jpg')} style={styles.rf} />
        </View>

     <View style={styles.imageContainer1}>

      <Text style={styles.titulos6}>ROUPAS MASCULINAS</Text>

          <Image source={require('./assets/masculina1.jpg')} style={styles.rm} />
          <Image source={require('./assets/masculina2.png')} style={styles.rm} />
          <Image source={require('./assets/masculina3.png')} style={styles.rm} />
          <Image source={require('./assets/masculina3.png')} style={styles.rm} />
      
       </View>

      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.key}
        data={informacoes}
        style={{ height: Math.ceil(informacoes.length / 2) * 60 }}
        renderItem={({ item }) => (
          <Text style={styles.lista}> {item.dados}</Text>
        )}
        />
    
        <StatusBar style="auto" />
     </ScrollView>
    </LinearGradient>    

  );
};

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ebbeb9',
    position: 'relative',
  },

  burguer:{
    top: -8,
    marginRight: 170,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    width: '35%',
    height: 35,
    paddingHorizontal: 15,
    marginHorizontal: 35,
    marginTop: -15,
  },
  searchInput: {
    flex:1,
    fontSize: 16,
    color: '#333',
    marginLeft: 18,
  },
  icone:{
  position: 'absolute',
  width: 100,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 110,
    width: 110,
    resizeMode: 'contain',
    marginLeft: 345,
  },
  menu: {
    position: 'absolute',  
    top: 80,
    left: 0,
    width: '60%',
    height: '38.5%',
    backgroundColor: '#fffcff',
    paddingVertical: 10,
    paddingHorizontal: 20,

  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,

  },
  texto:{
   fontSize: 24,
   color: '#5e4c4a',
   textAlign: 'center',
   fontWeight: 500,
   marginTop: 20,
  },
  imageContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,
  },
  abada:{
   marginTop: 50,
   marginHorizontal: 3,
   height: 90,
   width: 90, 

  },
  titulos: {
   fontSize: 24,
   fontWeight: 'bold',
   marginBottom: 80,
   marginRight: -120,
   color: '#5e4c4a',

  },
  biquini: {
    marginTop: 50,
    marginHorizontal: 3,
    height: 90,
    width: 90, 
    marginLeft: 5,
    marginRight: 1,
  },
  titulos2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 80,
    marginRight: -130,
    color: '#5e4c4a',
  },
  fantasia: {
      marginTop: 50,
      marginHorizontal: 3,
      height: 90,
      width: 90, 
      marginLeft: 5,
      marginRight: 1,
      
  },
  titulos3: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 80,
      marginRight: -155,
      color: '#5e4c4a',
  },
  infantil:{
      marginTop: 50,
      marginHorizontal: 3,
      height: 90,
      width: 90, 
      marginLeft: 5,
      marginRight: 1,
  },
  titulos4: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 80,
      marginRight: -132,
      color: '#5e4c4a',
  },
  rf: {
      marginTop: 50,
      marginHorizontal: 3,
      height: 90,
      width: 90, 
      marginLeft: 5,
      marginRight: 1,
  },
  titulos5: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 80,
      marginRight: -255,
      color: '#5e4c4a',
  }, 
  rm: {
      marginTop: 50,
      marginHorizontal: 3,
      height: 90,
      width: 90, 
      marginLeft: 5,
      marginRight: 1,
  },
  titulos6: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 80,
      marginRight: -280,
      color: '#5e4c4a',
  },
  pedido:{
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        flex: 1,
        textAlign: 'center',
        marginTop: 20,
        fontSize: 30,
        fontWeight: '500',
        color: '#ffffff',

  },
  informações:{
       fontSize: 16,
       textAlign:'justify',
       top: 20,
       marginStart: 15,
       marginEnd: 15,
       marginVertical: 20,
       lineHeight: 20,
       color: '#B9042B',
  },
  dados:{
      fontSize: 20,
      textAlign: 'center',
      marginTop: 30,
      textDecorationLine: 'underline',
  },
  caixa1: {
      alignItems:'center',
      justifyContent: 'center',
      marginTop: 30,
      marginVertical: 40,
  },
  input1:{
       borderWidth: 1,
       borderColor: '#777',
       borderRadius: 15,
       padding: 8,
       margin: 10,
       marginTop:10,
       width: 350,

  },
  caixa3: {
      alignItems:'center',
      marginLeft: -190,
      marginTop: 30,
      
  },
  input3:{
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 15,
        padding: 8,
        margin: 10,
        top: -65,
        marginTop: 10,
        width: 160,
  },
  caixa4: {
        alignItems:'flex-end',
        textAlign: 'center',
        marginRight: 5,
        marginTop: 30,
  },
  input4:{
       borderWidth: 1,
       borderColor: '#777',
       borderRadius: 15,
       padding: 8,
       margin: 10,
       marginTop: -150,
       width: 160,
  },
  caixa5: {
        alignItems:'center',
        marginLeft: -190,
        marginTop: 30,
        
  },
  input5:{
          borderWidth: 1,
          borderColor: '#777',
          borderRadius: 15,
          padding: 8,
          margin: 10,
          top: -130,
          marginTop: 10,
          width: 160,
  },
  caixa6: {
          alignItems:'flex-end',
          textAlign: 'center',
          marginRight: 5,
          marginTop: 30,
  },
  input6:{
         borderWidth: 1,
         borderColor: '#777',
         borderRadius: 15,
         padding: 8,
         margin: 10,
         marginTop: -215,
         width: 160,
  },
  caixa7: {
          alignItems:'center',
          marginLeft: -190,
          marginTop: 30,
          
  },
  input7:{
            borderWidth: 1,
            borderColor: '#777',
            borderRadius: 15,
            padding: 8,
            margin: 10,
            top: -195,
            marginTop: 10,
            width: 160,
  },
  caixa8: {
        alignItems:'flex-end',
        textAlign: 'center',
        marginRight: 5,
        marginTop: 30,
  },
  input8:{
       borderWidth: 1,
       borderColor: '#777',
       borderRadius: 15,
       padding: 8,
       margin: 10,
       marginTop: -280,
       width: 160,
  },     
  caixa9: {
      alignItems:'center',
      marginLeft: -190,
      marginTop: 30,
      
  },
  input9:{
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 15,
        padding: 8,
        margin: 10,
        top: -260,
        marginTop: 10,
        width: 160,
  },
  caixa10: {
        alignItems:'flex-end',
        textAlign: 'center',
        marginRight: 5,
        marginTop: 30,
  },
  input10:{
       borderWidth: 1,
       borderColor: '#777',
       borderRadius: 15,
       padding: 8,
       margin: 10,
       marginTop: -345,
       width: 160,
  },
  caixa11: {
    alignItems: 'center',
    textAlign: 'justify',
    justifyContent: 'center',
    marginTop: 30,
    marginVertical: 40,
  },
  input11:{
     borderWidth: 1,
     borderColor: '#777',
     borderRadius: 15,
     padding: 8,
     margin: 10,
     marginTop:-410,
     width: 350,
     height: 150,
  },
  botao: {
   alignItems: 'center',
   marginTop: -130,
   marginVertical: 10,
  },
  lista:{
    textAlign: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '50%',
    top: 50,
  },
  
});

export default HamburgerMenu;