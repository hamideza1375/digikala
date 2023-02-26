import React from 'react'
import {Form, Span} from '../../other/Components/Html'

export const ResetPass = (p) => {
   const resetPassword =()=> p._user.resetPassword()
  return (
    // <WebView style={styles.container2} source={{ uri: props.route.params.uri }} />
    <Span f={1} m={14} bgcolor='#fff'>
      <Span br={4} bgcolor={[1,'silver']} p={12} f={1}>
        <Form autoComplete={false} p cp {...p} onClick={resetPassword} >
        </Form>
      </Span>
    </Span>
  )
}
export default ResetPass