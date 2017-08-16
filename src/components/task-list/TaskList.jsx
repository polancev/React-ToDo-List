import React, { Component } from 'react';

export default class TaskList extends Component {
	render() {
		const list = this.props.list.map((task) =>
			<li key={task.id}>{task.title}</li>
		);
		return (
			<ul>{list}</ul>
		);
	}
}