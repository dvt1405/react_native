import React, { PureComponent } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { textDefault, commonStyles, primary } from "../theme";
import UnitColumn from "../components/UnitColumn";
import Big from 'big.js'
import { createChangeScreenAction, createChangeCurrentUnitIndexAction, createChangeBaseValueAction, CATEGORIES_SCREEN } from '../actions/'
import { connect } from 'react-redux';
import Categories from '../components/Categories';

class ConvertScreen extends PureComponent {
  state = {
  };

  _onChangeScreen = () => {
    this.props.createChangeScreenAction(CATEGORIES_SCREEN);
    this.props.createChangeCurrentUnitIndexAction();
    this.props.createChangeBaseValueAction(0);
  }

  render() {
    return (
      <View style={commonStyles.wrapper}>
        <Categories
           _onChangeScreen={this. _onChangeScreen}
        />
        <View
          style={[
            commonStyles.wrapper,
            {
              flexDirection: "row"
            }
          ]}
        >
          <UnitColumn/>
          <UnitColumn/>
        </View>
      </View>
    );
  }
}



export default connect(null, { createChangeScreenAction, createChangeCurrentUnitIndexAction, createChangeBaseValueAction })(ConvertScreen);