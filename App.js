import React, { Component } from 'react';
import { View,TextInput, Linking } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Input,InputGroup} from 'native-base';
export default class AnatomyExample extends Component {
 state={
    isReady: false
  }

  async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
  this.setState({isReady:true})
}
  render() {
       if (!this.state.isReady) {
      return <Expo.AppLoading />;
           }

  return (
      <Container>
        <Header>
         <Body>
                  <Title>Online Store Support</Title>
        </Body>
             <Right />
        </Header>
              <Content>
                <Text>
                   Scrool down
                </Text>
                  <Text>
                            Scrool down
                  </Text>
           <Text>
                      Scrool down
          </Text>
                </Content>

      <View>
             <TextInput
              style={{
                height:50,
               margin:10,
   }
}
             />

      <Button full>
           <Text > Send</Text>
              <Icon name='arrow-forward'/>
      </Button>

     </View>
</Container>
    );
  }
}
