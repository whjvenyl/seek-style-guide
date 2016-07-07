import svgMarkup from './PlusIcon.svg';

import React, { Component, PropTypes } from 'react';

export default class PlusIcon extends Component {

  static displayName = 'PlusIcon';

  static propTypes = {
    svgClassName: PropTypes.string
  };

  static defaultProps = {
    svgClassName: ''
  };

  render() {
    const { svgClassName, ...restProps } = this.props;
    const svgMarkupWithClassName = svgMarkup
      .replace('<svg ', `<svg class="${svgClassName}" `);

    return <span dangerouslySetInnerHTML={{ __html: svgMarkupWithClassName }} { ...restProps } />; // eslint-disable-line react/no-danger
  }

}