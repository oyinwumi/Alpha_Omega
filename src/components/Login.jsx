import  React,{ useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const[isError, setIsError] = useState('')
  const[errorMessage, setErrorMessage] = useState('')

  const emailInput = (e) =>{
    setEmail(e.target.value)
  }

  const passwordInput = (e) =>{
    setPassword(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  // const submitInput =(e) =>{
  //   alert('you have sign in successfully')
  // }

  const doLogin = () =>{
    if(!email || !password){
     setIsError(true)
     setErrorMessage('Email or Password is wrong')
    }
  }
  return (
    <div className='sign-in-details'>
      <div className='sign-in-text'>
      <h1>Sign In</h1>
      <p className='header-paragraph'>With your Admin credentials</p>
      </div>
      <form action='mailto:oyinwumi0229@gmail.com'method='post' className='form' onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label><br />
         <input type="email" name="" id="email" value={email}  placeholder='johndoe@gmail.com' onChange={emailInput } /> <i class="fa-solid fa-envelope"></i><br />
         <label htmlFor="password">Password</label><br />
         <input type="password" name="" id="password" value={password} placeholder='Password' onChange={passwordInput} /> 
         <i class="fa-solid fa-lock"></i>
         <p className='forgot-password'>Forgot Password?</p>
         <button type="submit" name="" id="sign-btn" onClick={() => doLogin()}>Sign In</button>
        {
          isError? <p className='error-messega'>{errorMessage}</p>: null
        }
         <p className='No-account'>Don’t have an account?  <span>Sign Up</span></p>
      </form>
    </div>
  );
}

export default Login;
