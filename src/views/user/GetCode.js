import React, { memo, useEffect, useMemo } from 'react'
import { Column, Form, P, Press } from '../../other/Components/Html'

const GetCode = memo((p) => {

  // p.useMemo(() => {
  //   p.setphone(f => f + 1)
  //   console.log(p.phone);
  // }, [p.email])
  
  p._user.loadPageTimer()
  const verifycode = () => p._user.verifycode()
  const getNewCode = () => p._user.getNewCode()

  return (
    <Column >
      <Form $code onClick={verifycode} {...p} >
        <Press onClick={() => { if (p.twoMinut?.split(':')[0] == 0 && p.twoMinut?.split(':')[1] <= 1) { p.settwoMinut(''); getNewCode() } }} style={{ cursor: (p.twoMinut?.split(':')[0] == 0 && p.twoMinut?.split(':')[1] <= 1) ? 'pointer' : '' }} >
          <P color={p.twoMinut?.split(':')[0] == 0 && p.twoMinut?.split(':')[1] <= 1 ? '#08f' : '#c1c1c1'}>ارسال دوباره کد {(p.twoMinut?.split(':')[0] == 0 && p.twoMinut?.split(':')[1] <= 1) ? 'فعال' : p.twoMinut}</P>
        </Press>
      </Form>
    </Column>
  )
})

export default GetCode