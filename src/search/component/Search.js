import React, { Component } from "react";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text
} from "native-base";
import { SearchStyles as styles } from "../../assets/styles/SearchStyles";

export default class Search extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded style={styles.searchBarContainer}>
          <Item style={styles.itemSearch}>
            <Icon name="ios-search" />
            <Input placeholder="Artist, Playlist, or Albums" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}
