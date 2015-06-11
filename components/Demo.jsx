var Demo = React.createClass({
	render: function () {
		var radioOptions = [
			{ value: 'angular', label: 'Angular.js' },
			{ value: 'react', label: 'React.js' },
			{ value: 'ember', label: 'Ember.js' },
			{ value: 'aurelia', label: 'Aurelia.js' },
			{ value: 'meteor', label: 'Meteor.js' }
		];

		return (

			<div className="container">
				<h1>React.js Expertise Selection Demo</h1>
				
				<form>
					<p className="h3">Select your expertise:</p>

					<RadioOptionGroup other={true} options={radioOptions} />

					<p><input type="submit"/></p>
				</form>
			</div>

		);
	}
});