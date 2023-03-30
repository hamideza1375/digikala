import React from 'react'
import {Column, Container2, Form, Span} from '../../other/Components/Html'

export const ResetPass = (p) => {
   const resetPassword =()=> p._user.resetPassword()
  return (
    // <WebView style={styles.container2} source={{ uri: props.route.params.uri }} />
    <Container2 gcolor='#fff'>
      <Span br={4} bgcolor={[1,'silver']} p={12} f={1}>
        <Form autoComplete={false} p cp {...p} onClick={resetPassword} >
        </Form>
      </Span>
    </Container2>
  )
}
export default ResetPass