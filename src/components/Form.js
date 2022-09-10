import React from 'react'

export default function Form() {
  return (
    <div>
        <div className='container'>
            <h2 style={{textAlign:"center"}}>1 Day Free Demo Sessions</h2>
        <form>
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name"/>
  </div>
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" className="form-control" id="email" placeholder="Email"/>
  </div>
  <div className="form-group">
  <label htmlFor="Phone">Phone Number</label>
    <input type="Phone" className="form-control" id="Phone" placeholder="Phone Number"/>
  </div>
  <div className="form-group">
    <label htmlFor="message">Message</label>
    <textarea className="form-control" id="message" rows="3"></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    </div>
  )
}
