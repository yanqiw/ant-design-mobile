import React from 'react';
import { View, Text } from 'react-native';
import Item from './ListItem';
import { ListNativeProps } from './PropsType';
import listStyles from './style/index';

export default class List extends React.Component<ListNativeProps, any> {
  static Item = Item;

  render() {
    let {
      children, style, renderHeader, renderFooter, styles = listStyles, ...restProps,
    } = this.props;

    let headerDom: React.ReactElement<any> | null = null;
    let footerDom: React.ReactElement<any> | null = null;

    if (renderHeader) {
      let content = typeof renderHeader === 'function' ? renderHeader() : renderHeader;
      if (typeof content === 'string') {
        content = <Text style={styles.Header}>{content}</Text>;
      }
      headerDom = <View>{content}</View>;
    }
    if (renderFooter) {
      let content = typeof renderFooter === 'function' ? renderFooter() : renderFooter;
      if (typeof content === 'string') {
        content = <Text style={styles.Footer}>{content}</Text>;
      }
      footerDom = <View>{content}</View>;
    }

    return (<View {...restProps} style={style}>
      {headerDom}
      <View style={styles.Body}>
        {children}
        <View style={[styles.BodyBottomLine]}/>
      </View>
      {footerDom}
    </View>);
  }
}
