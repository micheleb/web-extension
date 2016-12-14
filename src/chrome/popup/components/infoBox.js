import React from 'react';

const InfoBox = React.createClass({

    render () {
        const userId = this.props.userId;
        const publicKey = this.props.publicKey;

        return (
            <div className='fbtrex--popup'>
                hello {userId}, this is your Public Key {publicKey}
            </div>
        );
    }
});

export default InfoBox;
