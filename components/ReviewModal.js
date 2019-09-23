var StarRating = require('react-native-star-rating');

if (Platform.OS === 'android'){
    var Portal = require('react-native/Libraries/Portal/Portal');
    var tag;
}


var ExampleComponent = React.createClass({
    getInitialState: function () {
        return {
            isReviewModalOpen: false,
        };
    },
    componentWillMount: function() {
        if( Platform.OS === 'android' ) {
            tag = Portal.allocateTag();
        }
    },
    onMakeReviewButtonPress: function () {
        if (Platform.OS === 'android') {
            Portal.showModal(tag, <MakeReviewModalView
                visible={this.state.isReviewModalOpen}
                isOpen={this.state.isReviewModalOpen}
                onSubmitReview={this.submitReview}
                onCloseReviewButtonPress={this.onCloseReviewButtonPress}
                titleText={'Test Modal'}
            />);
        }
        if (Platform.OS === 'ios') {
            this.setState({isReviewModalOpen: true});
        }
    },
    onCloseReviewButtonPress: function () {
        if (Platform.OS === 'android') {
            Portal.closeModal(tag);
        }
        if (Platform.OS === 'ios') {
            this.setState({isReviewModalOpen: false});
        }
    },
    submitReview: function (rating, review) {
        console.log('Submitting rating:' + rating + ', and review:' + review);
        this.onCloseReviewButtonPress();
    },
    render() {
        return (
            <MakeReviewModalView
                visible={this.state.isReviewModalOpen}
                isOpen={this.state.isReviewModalOpen}
                onSubmitReview={this.submitReview}
                onCloseReviewButtonPress={this.onCloseReviewButtonPress}
                titleText={'Test Modal'}
            />
        );
    }
});

module.exports = ExampleComponent;
