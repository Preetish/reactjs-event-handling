var RadioOtherOption = React.createClass({
	getInitialState: function () {
		return {
			checked: false
		};
	},
	reset : function(){
		this.setState({checked : false});
	},
	handleChange: function(event) {
    
	var input = event.target;

		this.setState({
			checked: input.checked
		});
    },
	render: function () {
		return (
			<p className="form-group radio">
				<label>
					<input onChange={this.handleChange} type="radio" name="expertise" value="other"/>
					Other
				</label>

				{this.state.checked ? (
					<label className="form-inline">
						Please specify:
						<input type="text" name="expertise_other"/>
					</label>
				) : null}
			</p>
		);
	}
});