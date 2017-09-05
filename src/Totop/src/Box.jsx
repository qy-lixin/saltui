import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Context from '@ali/tingle-context';

class Box extends React.Component {
  static defaultProps = {
    type: 'primary',
    size: 'medium',
  };

  static propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary']),
    size: PropTypes.oneOf(['large', 'medium', 'small']),
  };
  render() {
    const t = this;
    const { children, className, size, type, onClick } = t.props;
    const prefixCls = Context.prefixClass('totop-wrap');
    const finalClass = classnames(prefixCls, `${prefixCls}-${size}`, `${prefixCls}-${type}`, className);
    return (
      <div
        className={finalClass}
        onClick={onClick}
      >
        <div className={`${prefixCls}-inner`}>
          {children}
        </div>
      </div>
    );
  }
}

export default Box;