import React from 'react';
import AuthToggleButton from '../../components/AuthToggleButton';

const SignIn = () => {
	return (
		<div>
			<h1>Sign In</h1>
      <div style={{ display: 'flex', gap: '16px' }}>
        <AuthToggleButton onClick={() => console.log('Sign In clicked')}>
          Sign In
        </AuthToggleButton>
        <AuthToggleButton onClick={() => console.log('Sign Up clicked')}>
          Sign Up
        </AuthToggleButton>
      </div>
		</div>
	)
}

export default SignIn;