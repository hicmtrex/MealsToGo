import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

import styled from 'styled-components/native';
import { LocationContext } from '../services/location/location.context';

const SearchContainer = styled.View`
  padding: 16px;
`;

const SearchBox = ({ isToggled, onToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isToggled ? 'heart' : 'heart-outline'}
        iconColor={isToggled ? 'red' : 'black'}
        onIconPress={onToggle}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
        placeholder='Search for a location'
        value={searchKeyword}
      />
    </SearchContainer>
  );
};

export default SearchBox;

const styles = StyleSheet.create({});
