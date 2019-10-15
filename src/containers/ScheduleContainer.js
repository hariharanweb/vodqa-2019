import React from 'react';
import { connect } from 'react-redux';
import Schedule from '../components/Schedule';

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
});

const ScheduleContainer = () => {
    return <Schedule />;
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScheduleContainer);