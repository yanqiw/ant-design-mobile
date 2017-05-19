/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import Item from './ListItem.web';
import classNames from 'classnames';
import { ListWebProps } from './PropsType';

export default class List extends React.Component<ListWebProps, any> {
  static Item = Item;

  static defaultProps: Partial<ListWebProps> = {
    prefixCls: 'am-list',
  };

  render() {
    let { prefixCls, children, className, style, renderHeader, renderFooter, ...restProps } = this.props;
    const wrapCls = classNames({
      [prefixCls as string]: true,
      [className as string]: className,
    });

    return (
      <div className={wrapCls} style={style} {...restProps}>
        {renderHeader ? (<div className={`${prefixCls}-header`}>
          {typeof renderHeader === 'function' ? renderHeader() : renderHeader}
        </div>) : null}
        {children ? (<div className={`${prefixCls}-body`}>{children}</div>) : null}
        {renderFooter ? (<div className={`${prefixCls}-footer`}>
          {typeof renderFooter === 'function' ? renderFooter() : renderFooter}
        </div>) : null}
      </div>
    );
  }
}
