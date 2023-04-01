import React from 'react'
import { Column, Container, Container2, Form, P, Span } from '../../other/Components/Html'

export const ResetSpecification = (p) => {
  p._user.getUserSpecification()
  const resetSpecification = () => p._user.resetSpecification()
  return (
    // <WebView style={styles.container2} source={{ uri: props.route.params.uri }} />
    <Container2 gcolor='#fff'>
      <Span br={4} bgcolor={[1, 'silver']} p={12} f={1}>
        <Form autoComplete={false} flexDirection='row' f phore op p {...p} onClick={resetSpecification} >
          <P mt={10} w={110} pr={13} color='#09e' onClick={() => p.navigation.navigate('ForgetPass', { newCode: 'true' })} >فراموشی رمز عبور</P>
        </Form>
      </Span>
    </Container2>
  )
}
export default ResetSpecification