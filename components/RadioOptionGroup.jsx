var RadioOptionGroup = React.createClass({
	
	handleCheck : function(){
		if(this.refs.radioOther){
			this.refs.radioOther.reset();
		}
	},
	
	render: function () {
		var self = this;
		return (
			<div>
				{this.props.options.map(function (option) {
					return (
						<RadioOption value={option.value} key={option.value} onCheck={self.handleCheck}>
							{option.label}
						</RadioOption>
					);
				})}

				{this.props.other ? <RadioOtherOption ref="radioOther"/> : <div/>}
			    </div>
		);
	}
});