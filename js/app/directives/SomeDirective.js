function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ some.text }}</h3>',
				'<span>Click here to replace the text</span>',
			'</div>'
		].join(''),
		require: 'someDirective',
		controller: function() {
			this.text = 'Replace this text!';
		},
		controllerAs: 'some',
		link: function (scope, elem, attrs) {
			var actualElement = elem[0];
			var spanElement = actualElement.querySelector('span');
			var headlineElement = actualElement.querySelector('h3');

			spanElement.addEventListener('click', function() {
				headlineElement.innerHTML = "Thank you for clicking!";
				scope.$apply();
			});
		}
	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);