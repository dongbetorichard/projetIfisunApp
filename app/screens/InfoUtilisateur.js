import React from 'react';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
//import {Picker} from '@react-native-community/picker';

export default class FloatingLabelExample extends React.Component {
  render() {
    return (
          <Form>
            <Item floatingLabel>
              <Label>Nom</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Prénom(s)</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Age</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Profession</Label>
              <Input />
            </Item>
          </Form>
    );
  }
}