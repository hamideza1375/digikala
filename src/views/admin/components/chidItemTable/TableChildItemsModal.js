import React from 'react'
import _Modal from '../../Modal';

const TableChildItemsModal = (p) => {
  const sendSetavailable = async (available, id, id2) => p._admin.available(available, id, id2)

  return (
    <>
      <_Modal availabe={(param) => { sendSetavailable(param, p.route.params.id, p.id2); p.setshow(false) }} showModal={p.show} setshowModal={p.setshow} message={'موجود نیست؟' + " (" + p.current[p.$food[1]]?.title + ')'} _admin={p._admin} />
      <_Modal showModal={p.showModal} setshowModal={p.setshowModal} id={p.id} id2={p.id2} message={'حذف شود؟ ' + " (" + p.current[p.$food[1]]?.title + ')'} _admin={p._admin} />
    </>
  )
}

export default TableChildItemsModal