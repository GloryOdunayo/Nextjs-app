import Head from 'next/head'
import React from 'react'

const ModalBox = ({editIndex, saveChanges, editedtodo, editeddescription,setediteddescription, seteditedtodo}) => {
  return (
    <>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>
        </Head>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-dark" id="exampleModalLabel">Edit Task {editIndex}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input type="text" className='form-control' onChange={(e)=>seteditedtodo(e.target.value)} value={editedtodo} />
                        <input type="text" className='form-control mt-2'  onChange={(e)=>setediteddescription(e.target.value)}value={editeddescription} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={saveChanges}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ModalBox