import React, {
  Component,
  View,
  Text
} from 'react-native';
import { MenuButton } from './common';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/components/_Header';

export default class Header extends Component {
  render() {
    let leftTopButton = null;
    let rightTopButton = null;
    const buttons = this.props.children;
    const count = React.Children.count(buttons);

    switch (count) {
      case 0:
        leftTopButton = <MenuButton style={styles.left} />
        rightTopButton = <Text style={styles.right}></Text>;
        break;
      case 1:
        leftTopButton = React.cloneElement(buttons, { style: [buttons.props.style, styles.left] });
        rightTopButton = <Text style={styles.right}></Text>;
        break;
      case 2:
        leftTopButton = React.cloneElement(buttons[0], { style: [buttons[0].props.style, styles.left] });
        rightTopButton = React.cloneElement(buttons[1], { style: [buttons[1].props.style, styles.right] });
        break;
    }

    return (
      <View style={styles.container}>
        {leftTopButton}
        <Text style={styles.title}>{this.props.title}</Text>
        {rightTopButton}
      </View>
    );
  }
}
