var RadioOption = React.createClass({
	render: function () {
		return (
			<p className="radio">
				<label>
					<input type="radio" name="expertise" value={this.props.value} onClick={this.props.onCheck}/>
					{this.props.children}
				</label>
			</p>
		);
	}

});