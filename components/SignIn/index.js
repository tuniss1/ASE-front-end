import { Formik } from 'formik'
import Image from 'next/image'
import styles from './styles'
import * as Yup from 'yup'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { setUser } from 'store/reducers/userSlice'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { MdEmail, MdLock } from 'react-icons/md'
import NavBar from 'components/NavBar'

function SignInForm({ formStyle }) {
  const dispatch = useDispatch()
  const router = useRouter()

  const USER_SCHEMA = Yup.object({
    email: Yup.string().email().required('Username is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'At least 8 characters')
      .test('hasUpperCase', 'Password need at least 1 uppercase character', (value) => {
        return /[A-Z]/.test(value)
      })
      .test('hasLowerCase', 'Password need at least 1 lowercase character', (value) => {
        return /[a-z]/.test(value)
      })
      .test('hasNumber', 'Password need at least 1 number', (value) => {
        return /[0-9]/.test(value)
      })
      .test('hasSymbol', 'Password need at least 1 special character (!, @, #, %, &)', (value) => {
        return /[!@#%&]/.test(value)
      }),
  })

  return (
    <Formik
      validationSchema={USER_SCHEMA}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          // const loginInData = await axios
          //   .post('http://localhost:3333/auth/signin', {
          //     email: values.email,
          //     password: values.password,
          //   })
          //   .then((res) => res.data)

          if (loginInData) {
            const userInfo = {
              id: loginInData.user.id,
              username: loginInData.user.username,
              firstName: loginInData.user.firstName,
              lastName: loginInData.user.lastName,
              token: loginInData.accessToken,
            }
            Cookies.set('user', JSON.stringify(userInfo), { expires: loginInData.expiredIn })
            dispatch(setUser(userInfo))
            router.push('/')
          }
        } catch (e) {
          console.log(e)
        }
        setSubmitting(false)
        resetForm()
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form
          name="sign-in"
          className="form-wrapper"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          style={formStyle}
        >
          <div className="icon-lg">
            <Image src="/sign-in.png" width={516} height={99} alt="Icon" />
          </div>
          <div className="pagination">
            <Link href="/sign-up">
              <div>Register</div>
            </Link>
            <Link href="/sign-in">
              <div className="current">Login</div>
            </Link>
          </div>
          <div className="form-container">
            <div className="input">
              <div className="icon-sm">
                <MdEmail fontSize={24} />
              </div>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter email"
              />
            </div>
            {touched['email'] && errors['email'] && (
              <div className="error">
                <p>{errors['email']}</p>
              </div>
            )}
            <div className="input">
              <div className="icon-sm">
                <MdLock fontSize={24} />
              </div>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter password"
                autoComplete="current-password"
              />
            </div>
            {touched['password'] && errors['password'] && (
              <div className="error">
                <p>{errors['password']}</p>
              </div>
            )}
            <div className="reset-password">
              <Link href="/reset-password">
                <a>Forgot password?</a>
              </Link>
            </div>
          </div>
          <div className="form-event">
            <button
              type="submit"
              disabled={isSubmitting}
              className="button"
              style={{ cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
            >
              LOGIN
            </button>

            <p className="sign-up">
              {"You don't have account? "}
              <Link href="/sign-up">
                <a>Sign up here!</a>
              </Link>
            </p>
          </div>
          <style jsx>{styles}</style>
        </form>
      )}
    </Formik>
  )
}

const SignIn = () => {
  return (
    <div className="wrapper">
      <NavBar />
      {/* <div style={{ position: 'relative', width: '100%', height: '100%' }}> */}
      <div className="round-layer">
        <Image src="/bg.png" width={864} height={967} alt="background" />
      </div>
      <div className="form-bg">
        <div style={{ position: 'relative', height: '100%' }}>
          <SignInForm formStyle={{}} />
        </div>
      </div>
      {/* </div> */}
      <style jsx>{styles}</style>
    </div>
  )
}

export default SignIn
