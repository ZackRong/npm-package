/**
 * Created by rongzhx on 2017/12/20 0020.
 */
import React, { PureComponent, Component } from 'react';

class ConsoleProps extends (PureComponent || Component){
	render = () => {
		const { text } = this.props;
		return (
			<div>
			{ `hello ${text}` }
			</div>
		)
	}
}

export default ConsoleProps;